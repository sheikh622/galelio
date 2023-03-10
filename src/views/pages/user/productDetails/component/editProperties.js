import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import { ethers, utils } from 'ethers';
// material-ui
import {
    AppBar,
    DialogActions,
    Dialog,
    Button,
    InputLabel,
    InputAdornment,
    IconButton,
    Input,
    DialogContent,
    DialogTitle,
    TextField,
    Divider,
    Grid,
    List,
    Slide,
    Toolbar,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { updateProperty } from 'redux/brand/actions';
// assets
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { create } from 'ipfs-http-client';
import { API_URL } from 'utils/axios';
import axios from 'axios';

// slide animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ===============================|| UI DIALOG - FULL SCREEN ||=============================== //

export default function Edit({ open, setOpen, metadata, value, nft, id, editable }) {
    const theme = useTheme();
    console.log('nft editable==========??', id);
    const user = useSelector((state) => state.auth.user);
    const navigate = useNavigate();

    const dispatch = useDispatch();
    console.log(metadata, 'metadata', value, 'value');
    const validationSchema = Yup.object({
        // isUpdate: Yup.boolean().default(isUpdate),
        firstName: Yup.string().required('First Name is required!').max(42, 'First Name can not exceed 42 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lastName: Yup.string().required('Last Name is required!').max(42, 'Last Name can not exceed 42 characters')
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { firstName: metadata, lastName: value },
        // brandAdminData,
        validationSchema,
        onSubmit: async (values) => {
            console.log(values, 'allll data');

           await dispatch(
                updateProperty({
                    id: id,
                    walletAddress: user?.walletAddress,
                    NFTTokenId: nft.NFTTokens[0].id,
                    NftId: nft.id,
                    fieldName: values.firstName,
                    fieldValue: values.lastName,
                    // navigate: navigate,
                    handleClose: handleClose
                })
            )
setTimeout(()=>{
    const singleNft =async()=>{

        await axios
             .get(API_URL + 'nft/' + nft.id, {})
             .then(async(data) => {
                 console.log('data from editproperties', data.data.data);
                 let nftData = data.data.data.nft

                 console.log('nftData from axios',nftData);

                 const provider = new ethers.providers.Web3Provider(window.ethereum);
                 const signer = provider.getSigner();
                 const address = await signer.getAddress();
                 const nft = new ethers.Contract(nftData.contractAddress, NFTAbi.abi, signer);
                 let mintedNFT = await (
                     await nft.updateUri(nftData.NFTTokens[0].tokenId,  nftData.tokenUri).catch((error) => {
                        //  toast.error(error.reason);
                        //  setLoader(false);
                        //  setOpen(false);
                        console.log(error)
                     })
                 ).wait();
                 navigate("/creatorProfile")

             })
             .catch((error) => {
                 console.log('error', error);
             });
    }

    singleNft()

},2000)

            

        }
    });
    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const status = [
    //     {
    //         name: 'Name:',
    //         value: nftData?.name
    //     },
    //     {
    //         name: 'Status:',
    //         value: nftData?.status
    //     },
    //     {
    //         name: 'Description:',
    //         value: nftData?.description
    //     },
    //     {
    //         name: 'Price:',
    //         value: nftData?.price
    //     },
    //     {
    //         name: 'Mint Type:',
    //         value: nftData?.mintType
    //     },
    //     {
    //         name: 'Brand:',
    //         value: nftData?.Brand.name
    //     },
    //     {
    //         name: 'Token URL:',
    //         value: 'Null'
    //     }
    // ];
    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
                sx={{ width: '80%', margin: '0 auto', maxHeight: '440px' }}
            >
                {/*    <IconButton float="left" color="inherit" onClick={handleClose} aria-label="close" size="large">
                    <CloseIcon />
                </IconButton> */}

                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        className="buttonSize"
                        size="large"
                        sx={{ color: theme.palette.error.dark }}
                        onClick={handleClose}
                        color="secondary"
                    >
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <Grid container sx={{ pr: 2.5, pl: 2.5 }}>
                    <Grid item xs={12} md={12} lg={12} sx={{ p: 2.5 }}>
                        <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                            <Grid container>
                                <Grid item xs={6} md={12} lg={12}>
                                    <InputLabel htmlFor="outlined-adornment-password-login" className="textfieldStyle">
                                        Metadata Name
                                    </InputLabel>
                                    <TextField
                                        className="field"
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6} pt={2} pb={2} md={12} lg={12}>
                                    <InputLabel htmlFor="outlined-adornment-password-login" className="textfieldStyle">
                                        Metadata Value
                                    </InputLabel>
                                    <TextField
                                        pt={2}
                                        className="field"
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        variant="outlined"
                        className="buttonSize"
                        size="large"
                        type="submit"
                        sx={{ color: theme.palette.success.dark }}
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                        color="secondary"
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
