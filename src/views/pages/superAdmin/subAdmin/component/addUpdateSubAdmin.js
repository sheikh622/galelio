import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik, validateYupSchema } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addSubAdmin, updateSubAdmin } from 'redux/subAdmin/actions';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import { ethers } from 'ethers';
import {
    Button,
    InputLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    Divider,
    Grid,
    MenuItem
} from '@mui/material';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateSubAdminDialog({ open, setOpen, subAdminData, page, limit, search }) {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false);
    const [contractAddress, setContractAddress] = useState('');
    const [brandCategoryId, setBrandCategoryId] = useState(0);

    const blockChainRole = '0xd2e4c2619ea6e0faebc405d89445161c041e30fe03373ea0473da142d57d4514';

    useEffect(() => {
        if (subAdminData.id == null) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
    }, [subAdminData]);

    const handleBrandCategoryChange = (e) => {
        setContractAddress(e.target.value.contractAddress);
        setBrandCategoryId(e.target.value.id);
        console.log('handleBrandCategoryChange', e.target.value);
    };

    const validationSchema = Yup.object({
        isUpdate: Yup.boolean().default(isUpdate),
        firstName: Yup.string()
            .required('First Name is required!')
            .max(42, 'First Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lastName: Yup.string()
            .required('Last Name is required!')
            .max(42, 'Last Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
        adminEmail: Yup.string().email('Enter valid email').max(255).required('Email is required!'),
        walletAddress: Yup.string().required('Wallet Address is required!'),
        adminPassword: Yup.mixed().when(['isUpdate'], {
            is: false,
            then: Yup.string()
                .required('Password is required!')
                .matches(
                    /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    'Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character'
                ),
            otherwise: Yup.string().matches(
                /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character'
            )
        })
    });

    const grantRole = async () => {};
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: subAdminData,
        validationSchema,
        onSubmit: async(values) => {
            console.log('values', values);
            if (subAdminData.id == null) {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                console.log('signer', signer);
                console.log('NFTAbi.abi', NFTAbi.abi);
                const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
                // const admin="0x6f3B51bd5B67F3e5bca2fb32796215A796B79651";
                // console.log("NFTS:  ",nfts)
                let mintedNFT = await (
                    await nfts.grantRole(blockChainRole, values.walletAddress).catch((error) => {
                        // toast.error(`${error.message}`);
                        console.log('error.message', error.message);
                    })
                ).wait();
                console.log('mintedNFT', mintedNFT);

                dispatch(
                    addSubAdmin({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.adminEmail,
                        password: values.adminPassword,
                        walletAddress: values.walletAddress,
                        brandCategory: brandCategoryId,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            } else {
                dispatch(
                    updateSubAdmin({
                        id: subAdminData.id,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.adminEmail,
                        password: values.adminPassword,
                        walletAddress: values.walletAddress,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            }
        }
    });
    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };
    const { brandCategories } = useSelector((state) => state.brandCategoryReducer.brandCategoriesAdminList);
    console.log('brandCategories', brandCategories);

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className="brandDialog dialog"
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="form-dialog-title" className="adminname">
                    {subAdminData.id == null ? 'Create Admin' : ' Update Admin'}
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container>
                            <>
                                <Grid item xs={12} md={12} lg={12} pt={2}>
                                    <InputLabel  className='textfieldStyle' htmlFor="outlined-adornment-password-login">First Name</InputLabel>
                                    
                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        fullWidth
                                        variant="standard"
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} pt={2}>
                                    <InputLabel 
                                    className='textfieldStyle' htmlFor="outlined-adornment-password-login">Last Name</InputLabel>
                                    <TextField
                                         id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} pt={2}>
                                    <InputLabel
                                    className='textfieldStyle' htmlFor="outlined-adornment-password-login">Email</InputLabel>
                                    <TextField
                                    variant="standard"
                                        id="adminEmail"
                                        name="adminEmail"
                                        value={formik.values.adminEmail}
                                        onChange={formik.handleChange}
                                        error={formik.touched.adminEmail && Boolean(formik.errors.adminEmail)}
                                        helperText={formik.touched.adminEmail && formik.errors.adminEmail}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                <Grid item xs={12} md={12} lg={12} pt={2}>
                                    <InputLabel 
                                    className='textfieldStyle' htmlFor="outlined-adornment-password-login">Password</InputLabel>
                                    <TextField
                                    variant="standard"
                                        id="adminPassword"
                                        name="adminPassword"
                                        value={formik.values.adminPassword}
                                        onChange={formik.handleChange}
                                        error={formik.touched.adminPassword && Boolean(formik.errors.adminPassword)}
                                        helperText={formik.touched.adminPassword && formik.errors.adminPassword}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} pt={2}>
                                    <InputLabel 
                                    className='textfieldStyle' htmlFor="">Wallet Address</InputLabel>
                                    <TextField
                                    variant="standard"
                                        id="walletAddress"
                                        name="walletAddress"
                                        value={formik.values.walletAddress}
                                        onChange={formik.handleChange}
                                        error={formik.touched.walletAddress && Boolean(formik.errors.walletAddress)}
                                        helperText={formik.touched.walletAddress && formik.errors.walletAddress}
                                        fullWidth
                                        autoComplete=""
                                    />
                                </Grid>

                                <Grid item xs={6} sx={{ pt: '4%' }}>
                                    {/* <InputLabel htmlFor="">Select Brand Category</InputLabel> */}
                                    <TextField
                                        className="responsiveSelectfield"
                                        id="outlined-select-budget"
                                        select
                                        fullWidth
                                        label="Select Category"
                                        // value={category}
                                        onChange={handleBrandCategoryChange}
                                    >
                                        <MenuItem value={0}>Choose Category (Brand)</MenuItem>
                                        {brandCategories?.map((data, index) => (
                                            <MenuItem key={index} value={data}>
                                                {data.Category.name} ({data.Brand.name})
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </Grid>
                            </>
                        </Grid>
                    </form>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ display: 'block' }}>
                    <AnimateButton>
                        <Button
                            className="buttons"
                            variant="contained"
                            sx={{ my: 1, ml: 1,  padding: {md:'6px 140px', lg:'6px 140px'} }}
                            type="submit"
                            size="large"
                            disableElevation
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                        >
                            {subAdminData.id == null ? 'Create ' : 'Update '}
                        </Button>
                    </AnimateButton>
                    <AnimateButton>
                        <Button
                            className="buttons"
                            variant="contained"
                            sx={{ my: 1, ml: 0, padding: {md:'6px 140px', lg:'6px 140px'} , color: '#fff' }}
                            onClick={handleClose}
                            color="secondary"
                            size="large"
                        >
                            Cancel
                        </Button>
                    </AnimateButton>
                </DialogActions>
            </Dialog>
        </>
    );
}
