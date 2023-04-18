// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, IconButton, Typography, Grid } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailVerification } from 'redux/auth/actions';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import { setLoader } from '../../../../redux/auth/actions';
import TextField from '@material-ui/core/TextField';

import '@fontsource/source-sans-pro';
import '@fontsource/public-sans';
import { ethers, utils } from 'ethers';
import { signup, setLoader } from 'redux/auth/actions';
import { setWallet } from 'redux/auth/actions';
import { SNACKBAR_OPEN } from 'store/actions';
// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const VerifyEmail = ({ token, ...others }) => {
    const theme = useTheme();
    // console.log(token, 'token=>');
    const loader = useSelector((state) => state.auth.loader);
    const user = useSelector((state) => state.auth.user);
    // console.log(user, 'user===========>>');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [changeEmail, setChangeEmail] = useState(false);
    const [checked, setChecked] = useState(false);
    // const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showconfirmPassword, setShowconfirmPassword] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [refresh, setRefresh] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const handleConnect = async () => {
        const response = await window?.ethereum?.request({ method: 'eth_requestAccounts' });
        if (response) {
            if (!window.ethereum) {
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'No crypto wallet found. Please install it.',
                    variant: 'alert',
                    alertSeverity: 'info'
                });
                console.log('No crypto wallet found. Please install it.');
                // toast.error('No crypto wallet found. Please install it.');
            }

            // else if (window?.ethereum?.networkVersion !== '5') {
            //   console.log('window?.ethereum?.networkVersion !== 5', window?.ethereum?.networkVersion);
            //     dispatch({
            //         type: SNACKBAR_OPEN,
            //         open: true,
            //         message: 'Please change your Chain ID to Goerli',
            //         variant: 'alert',
            //         alertSeverity: 'info'
            //     });
            //     console.log('Please change your Chain ID to Goerli');
            //     setWalletAddress()
            // }
            else {
                const address = utils?.getAddress(response[0]);
                setWalletAddress(address);
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Success',
                    variant: 'alert',
                    alertSeverity: 'success'
                });
            }
        } else {
            console.log('No crypto wallet found. Please install it.');
            // toast.error('No crypto wallet found. Please install it.');
        }
    };
    useEffect(() => {
        let interval = null;
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds]);
    const ReEnterEmail = (event) => {
        setChangeEmail(true);
        setChecked(event?.target?.checked);
    };
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseDownconfirmPassword = (event) => {
        event.preventDefault();
    };
    const handleClickShowconfirmPassword = () => {
        setShowconfirmPassword(!showconfirmPassword);
    };

    useEffect(() => {
        dispatch(setWallet(walletAddress));
        handleConnect();
    }, [walletAddress]);

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            // setReload(true)
            handleConnect();
        });
    }

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    firstName: user?.firstName ? user?.firstName : '',
                    lastName: user?.lastName ? user?.lastName : '',
                    email: user?.email ? user?.email : '',
                    password: '',
                    confirmPassword: '',
                    walletAddress: user?.email ? user?.walletAddress : '',
                    address: user?.address ? user?.address : ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string().required('First Name is required!').max(42, 'First Name can not exceed 42 characters'),
                    // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Name'),
                    lastName: Yup.string().required('Last Name is required!').max(42, 'Last Name can not exceed 42 characters'),
                    // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Name'),
                    email: Yup.string().email('Enter valid email').max(255).required('Email is required!'),
                    password: Yup.string()
                        .max(255)
                        .required('Password is required!')
                        .matches(
                            /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                            'Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character'
                        ),
                    confirmPassword: Yup.string().max(255).required('Confirm Password is required!'),
                    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same'),
                    address: Yup.string().max(255).required('Delivery address is required!')
                })}
                onSubmit={async (values) => {
                    console.log(values, 'values');
                    setRefresh(true);
                    if (walletAddress == '') {
                        dispatch({
                            type: SNACKBAR_OPEN,
                            open: true,
                            message: 'Please connect to your wallet',
                            variant: 'alert',
                            alertSeverity: 'info'
                        });
                    }
                    await dispatch(setLoader(true));
                    dispatch(
                        signup({
                            firstName: values.firstName,
                            lastName: values.lastName,
                            email: values.email,
                            password: values.password,
                            walletAddress: walletAddress,
                            address: values.address,
                            navigate: navigate
                        })
                    );
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid xs={12} sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#6d6e72' }}>
                            <Typography className="wallet-select" variant="h3">
                            Please check your email account , the verification email has been sent to you.
                                 <b>{user?.email}</b>{' '} 
                            </Typography>
                        </Grid>{' '}
                        {/*  <AnimateButton>
                            <Button
                                className="ReEnterEmail"
                                fullWidth
                                onClick={ReEnterEmail}
                                size="large"
                                variant="outlined"
                                color="secondary"
                            >
                                Re-Enter Email
                            </Button>
                        </AnimateButton> */}
                        {refresh == false ? (
                            <Grid mt={2} xs={12}>
                       
                                <Grid xs={12} md={1}></Grid>
                                <Grid xs={12} md={12}>
                                   
                                        <Box>
                                          {/*   <Grid mt={1} xs={12} md={12}>
                                                <Button className="ReEnterEmail" variant="text" sx={{}}>
                                                     Edit  Signup information?
                                                </Button>
                                                <Switch
                                                    checked={checked}
                                                    onChange={(e) => ReEnterEmail(e)}

                                                    // inputProps={{ 'aria-label': 'controlled' }}
                                                />
                                            </Grid> */}
                                        {/*     {changeEmail == true && checked == true && ( */}
                                                <Box>
                                                 {/*    <InputLabel
                                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#404040' }}
                                                        className="authFont"
                                                        htmlFor="outlined-adornment-email-login"
                                                    >
                                                        First Name{' '}
                                                    </InputLabel>
                                                    <FormControl
                                                        sx={{ ...theme.typography.customInput }}
                                                        className="auth-formcontrol"
                                                        fullWidth
                                                        error={Boolean(touched.firstName && errors.firstName)}
                                                    >
                                                        <TextField
                                                            placeholder="First Name"
                                                            className="textForm"
                                                            // onChange={(event)=>handelAccount("password",event)}
                                                            variant="outlined"
                                                            margin="normal"
                                                            required
                                                            fullWidth
                                                            type="name"
                                                            value={values.firstName}
                                                            name="firstName"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            inputProps={{}}
                                                        />
                                                        {touched.firstName && errors.firstName && (
                                                            <FormHelperText error id="standard-weight-helper-text-name-login">
                                                                {errors.firstName}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                    <InputLabel
                                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#404040' }}
                                                        className="authFont"
                                                        htmlFor="outlined-adornment-email-login"
                                                    >
                                                        Last Name{' '}
                                                    </InputLabel>
                                                    <FormControl
                                                        sx={{ ...theme.typography.customInput }}
                                                        className="auth-formcontrol"
                                                        fullWidth
                                                        error={Boolean(touched.lastName && errors.lastName)}
                                                    >
                                                        <TextField
                                                            placeholder="Last Name"
                                                            className="textForm"
                                                            // onChange={(event)=>handelAccount("password",event)}
                                                            variant="outlined"
                                                            margin="normal"
                                                            required
                                                            fullWidth
                                                            type="lastName"
                                                            value={values.lastName}
                                                            name="lastName"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            inputProps={{}}
                                                        />
                                                        {touched.lastName && errors.lastName && (
                                                            <FormHelperText error id="standard-weight-helper-text-name-login">
                                                                {errors.lastName}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl> */}
                                                    <InputLabel
                                                        sx={{ color: theme.palette.mode === 'dark' ? 'white' : '#404040' }}
                                                        className="authFont"
                                                        htmlFor="outlined-adornment-email-login"
                                                    >
                                                   Change  Email Address
                                                    </InputLabel>{' '}
                                                    <FormControl
                                                        sx={{ ...theme.typography.customInput }}
                                                        className="auth-formcontrol"
                                                        fullWidth
                                                        error={Boolean(touched.email && errors.email)}
                                                    >
                                                        <TextField
                                                            placeholder="email"
                                                            className="textForm"
                                                            // onChange={(event)=>handelAccount("password",event)}
                                                            variant="outlined"
                                                            margin="normal"
                                                            required
                                                            fullWidth
                                                            type="email"
                                                            value={values.email}
                                                            name="email"
                                                            autoComplete="current-email"
                                                            onBlur={handleBlur}
                                                            onChange={handleChange}
                                                            inputProps={{}}
                                                        />
                                                        {touched.email && errors.email && (
                                                            <FormHelperText error id="standard-weight-helper-text-email-login">
                                                                {errors.email}
                                                            </FormHelperText>
                                                        )}
                                                    </FormControl>
                                                 
                                                    {errors.submit && (
                                                        <Box sx={{ mt: 3 }}>
                                                            <FormHelperText error>{errors.submit}</FormHelperText>
                                                        </Box>
                                                    )}
                                                    <Box sx={{ mt: 2 }}>
                                                        <AnimateButton>
                                                            <Button
                                                                className="signbuttonMarket"
                                                                disableElevation
                                                                disabled={isSubmitting}
                                                                fullWidth
                                                                size="large"
                                                                type="submit"
                                                                variant="contained"
                                                                color="secondary"
                                                            >
                                                                Re-Enter
                                                            </Button>
                                                        </AnimateButton>
                                                    </Box>
                                                </Box>
                                          {/*   )} */}
                                        </Box>
                                   
                                </Grid>
                            </Grid>
                        ) : (
                            ''
                        )}
                    </form>
                )}
            </Formik>
        </>
    );
};

export default VerifyEmail;
