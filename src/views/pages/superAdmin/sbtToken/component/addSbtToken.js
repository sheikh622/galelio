import { forwardRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Grid,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    Divider,
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    MenuItem,
    CircularProgress
} from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { Switch } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
// import { addNft } from 'redux/nftManagement/actions';
import { fData } from 'utils/formatNumber';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fileFill from '@iconify-icons/eva/file-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import UploadImage from 'assets/images/icons/image-upload.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import clsx from 'clsx';
import { DataArraySharp } from '@mui/icons-material';

import { ethers, utils } from 'ethers';
import SBTAddress from "contractAbi/SBT-address.json";
import SBTAbi from "contractAbi/SBT.json";

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);


export default function addSbtToken({ open, setOpen }) {
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.auth.user);


    const [fieldDataArray, setFieldDataArray] = useState([



    ]);
    const [loader, setLoader] = useState(false);



    const handleError = (fieldDataArray, values) => {

        let isValid = true;


        if (fieldDataArray.length == 0) {
            isValid = false;
            toast.error('Metadata is required');
        }

        fieldDataArray.map((array) => {
            if (array.fieldName == '') {
                isValid = false;
                toast.error(`Metadata name cannot be empty`);
            } else if (array.fieldValue == '') {
                isValid = false;
                toast.error(`Metadata value cannot be empty`);
            }
        });

        console.log('im here');


        return isValid;
    };

    const validationSchema = Yup.object({
        tokenName: Yup.string().required('NFT Name is required!').max(60, 'NFT Name can not exceed 60 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT name'),
        Symbol: Yup.string()
            .required('NFT Description is required!')
            .max(1000, 'Invalid NFT description can not exceed 1000 characters'),
        directBuyerAddress:
            checked == true &&
            Yup.string()
                .required('Wallet address  is required!')
                // .max(1000, 'Invalid NFT description can not exceed 1000 characters'),
                .min(26, 'Minimum length 26 character ')
                .max(42, 'Must be exactly 42 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT description'),
        status: Yup.string()
            .required('Status required')
            .typeError('Invalid Status'),
        // image: Yup.mixed(),
        Address: Yup.string()
            .required('Address is required!')
            .max(1000, 'Invalid address can not exceed 1000 characters')
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            tokenName: '',
            Symbol: '',
            directBuyerAddress: '',
            status: '',
            images: [],
            Address: ''
        },
        validationSchema,
        onSubmit: async (values) => {


            console.log("values", values)

            fieldDataArray.unshift({
                "fieldName": "Validtype",
                "fieldValue": "true"
            },
                {
                    "fieldName": "Date",
                    "fieldValue": Date.now().toString()
                }
            )

            console.log("fieldDataArray", fieldDataArray)


                    setLoader(true);
                    // dispatch(
                    //     addNft({
                    //         categoryId: data.CategoryId,
                    //         mintType: mintType,
                    //         metaDataArray: fieldDataArray,
                    //         fileNameArray: fileNameArray,
                    //         fileArray: fileArray,
                    //         name: values.tokenName,
                    //         price: values.status,
                    //         brandSymbol: values.Symbol,
                    //         address: values.Address,
                    //         directBuyerAddress: values.directBuyerAddress ? values.directBuyerAddress : '',
                    //         currencyType: type,
                    //         quantity: values.images[0].quantity,
                    //         asset: values.images[0].image,
                    //         type: nftType,
                    //         page: page,
                    //         limit: limit,
                    //         search: search,
                    //         categoryId: data.CategoryId,
                    //         requesterAddress: user.walletAddress,
                    //         contractAddress: data.contractAddress,
                    //         handleClose: handleClose,
                    //         brandId: user.BrandId,
                    //         isDirectTransfer: values.directBuyerAddress == '' ? false : true
                    //     })
                    // );
                }
                // console.log('Address INVALID');
            
        
    });


    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setFieldDataArray([]);
        setLoader(false);
    };

    const handleFieldNameChange = (value, index) => {
        let array = [...fieldDataArray];
        array[index].fieldName = value;
        setFieldDataArray(array);
    };
    const handleFieldValueChange = (value, index) => {
        let array = [...fieldDataArray];
        array[index].fieldValue = value;
        setFieldDataArray(array);
    };



    const handleRemoveField = (index) => {
        let array = [...fieldDataArray];
        array.splice(index, 1);
        setFieldDataArray(array);
    };





    return (
        <>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="form-dialog-title"
                // className="brandDialog "
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1" className="adminname">
                    Add Token
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container mt={1}>
                            <Grid xs={4} md={4} lg={4}>
                                <TextField
                                    className="textfieldStyle"
                                    id="tokenName"
                                    name="tokenName"
                                    label="Name"
                                    fullWidth
                                    value={formik.values.tokenName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.tokenName && Boolean(formik.errors.tokenName)}
                                    helperText={formik.touched.tokenName && formik.errors.tokenName}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={4} md={4} lg={4} pl={2} pr={2}>
                                <TextField
                                    className="textfieldStyle"
                                    id="symbol"
                                    name="symbol"
                                    label="Symbol"
                                    fullWidth
                                    value={formik.values.symbol}
                                    onChange={formik.handleChange}
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                    helperText={formik.touched.status && formik.errors.status}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid xs={4} md={4} lg={4} pl={2} pr={2}>
                                <TextField
                                    className="textfieldStyle"
                                    id="Symbol"
                                    name="Symbol"
                                    label="Symbol"
                                    fullWidth
                                    value={formik.values.Symbol}
                                    onChange={formik.handleChange}
                                    error={formik.touched.Symbol && Boolean(formik.errors.Symbol)}
                                    helperText={formik.touched.Symbol && formik.errors.Symbol}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid xs={12} mt={1}>
                                <TextField
                                    className="textfieldStyle"
                                    id="Address"
                                    name="Address"
                                    label="Address"
                                    fullWidth
                                    value={formik.values.Address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.Address && Boolean(formik.errors.Address)}
                                    helperText={formik.touched.Address && formik.errors.Address}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={12} mt={2}>
                                <Button
                                    className="fieldbutton"
                                    variant="contained"
                                    sx={{ float: 'left', padding: { md: ' 6px 38px', lg: '6px 38px' } }}
                                    onClick={() => {
                                        setFieldDataArray([
                                            ...fieldDataArray,
                                            {
                                                fieldName: '',
                                                fieldValue:'',
                                            }
                                        ]);
                                    }}
                                >
                                    Add Metadata
                                </Button>
                            </Grid>
                        </Grid>

                        {fieldDataArray.length != 0 && (
                            <>
                                <Grid container spacing={4} sx={{ mt: 1 }}>
                                    {fieldDataArray.length == 1

                                        &&
                                        <>


                                            {fieldDataArray.slice(2).map((data, index) => (
                                                <>
                                                    <Grid item xs={5} md={3}>
                                                        <TextField
                                                            id="field_name"
                                                            className="textfieldStyle"
                                                            name="field_name"
                                                            label="Metadata Name"
                                                            value={data.fieldName}
                                                            onChange={(e) => {
                                                                handleFieldNameChange(e.target.value, index);
                                                            }}
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>

                                                    <Grid item xs={5} md={3}>
                                                        <TextField
                                                            className="textfieldStyle"
                                                            id="field_value"
                                                            name="field_value"
                                                            label="Metadata Value"
                                                            value={data.fieldValue}
                                                            onChange={(e) => {
                                                                handleFieldValueChange(e.target.value, index);
                                                            }}
                                                            variant="standard"
                                                            fullWidth
                                                        />
                                                    </Grid>
                                                    <Grid item xs={2} mt={2} md={3}>
                                                        <IconButton
                                                            color="error"
                                                            edge="end"
                                                            size="small"
                                                            onClick={() => {
                                                                handleRemoveField(index);
                                                            }}
                                                        >
                                                            <Icon icon={closeFill} width={28} height={28} />
                                                        </IconButton>
                                                    </Grid>
                                                    <Grid item xs={2} mt={2} md={3}></Grid>
                                                </>
                                            ))}
                                        </>
                                    }
                                    {fieldDataArray?.map((data, index) => (
                                        <>
                                            <Grid item xs={5} md={3}>
                                                <TextField
                                                    id="field_name"
                                                    className="textfieldStyle"
                                                    name="field_name"
                                                    label="Metadata Name"
                                                    value={data.fieldName}
                                                    onChange={(e) => {
                                                        handleFieldNameChange(e.target.value, index);
                                                    }}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>

                                            <Grid item xs={5} md={3}>
                                                <TextField
                                                    className="textfieldStyle"
                                                    id="field_value"
                                                    name="field_value"
                                                    label="Metadata Value"
                                                    value={data.fieldValue}
                                                    onChange={(e) => {
                                                        handleFieldValueChange(e.target.value, index);
                                                    }}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={2} mt={2} md={3}>
                                                <IconButton
                                                    color="error"
                                                    edge="end"
                                                    size="small"
                                                    onClick={() => {
                                                        handleRemoveField(index);
                                                    }}
                                                >
                                                    <Icon icon={closeFill} width={28} height={28} />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={2} mt={2} md={3}></Grid>
                                        </>
                                    ))}

                                </Grid>
                            </>
                        )}

                    </form>
                    <Grid container>
                        <DialogActions>
                            <>
                                <AnimateButton>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                        onClick={() => {
                                            formik.handleSubmit();
                                        }}
                                        className="buttons"
                                        size="large"
                                        disableElevation
                                    >
                                        Add
                                    </Button>
                                </AnimateButton>
                                <AnimateButton>
                                    <Button
                                        className="buttons"
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                        onClick={handleClose}
                                        color="error"
                                        disableElevation
                                    >
                                        Cancel
                                    </Button>
                                </AnimateButton>
                            </>
                        </DialogActions>
                    </Grid>
                </DialogContent>

            </Dialog>
        </>
    );
}
