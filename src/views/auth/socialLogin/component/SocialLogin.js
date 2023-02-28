import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { ethers, utils } from 'ethers';
import {
    Box,
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    useMediaQuery,
    Divider
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { signupsocial, setLoader } from '../../../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { setWallet } from 'redux/auth/actions';
import { SNACKBAR_OPEN } from 'store/actions';

const SocialLoginForm = ({ loginProp, ...others }) => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [walletAddress, setWalletAddress] = useState('');
    const [address, setAddress] = useState('');
    const location = useLocation();

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
            //     console.log('window?.ethereum?.networkVersion !== 5', window?.ethereum?.networkVersion);
            //     dispatch({
            //         type: SNACKBAR_OPEN,
            //         open: true,
            //         message: 'Please change your Chain ID to Goerli',
            //         variant: 'alert',
            //         alertSeverity: 'info'
            //     });
            //     console.log('Please change your Chain ID to Goerli');
            //     setWalletAddress();
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

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        dispatch(setWallet(walletAddress));
    }, [walletAddress]);

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    first_name: location.state?.socal?.user?.firstName,
                    last_name: location.state?.socal?.user?.lastName,
                    email: location.state?.socal?.user?.email,
                    walletAddress: '',
                    address: ''
                }}
                validationSchema={Yup.object().shape({
                    first_name: Yup.string().required('First Name is required!').max(42, 'First Name can not exceed 42 characters'),
                    // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Name'),

                    last_name: Yup.string().required('Last Name is required!').max(42, 'Last Name can not exceed 42 characters'),
                    // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Name'),
                    email: Yup.string().email('Enter valid email').max(255).required('Email is required!'),

                    address: Yup.string().max(255).required('Address is required!')
                })}
                onSubmit={async (values) => {
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
                        signupsocial({
                            firstName: values.first_name,
                            lastName: values.last_name,
                            email: values.email,
                            walletAddress: walletAddress,
                            address: values.address,
                            navigate: navigate
                        })
                    );
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <InputLabel  sx={{  color: theme.palette.mode === 'dark' ? 'white' : '#404040'}} className="authFont" htmlFor="outlined-adornment-email-login">
                            First Name{' '}
                        </InputLabel>
                        <FormControl
                            sx={{ ...theme.typography.customInput }}
                            className="auth-formcontrol"
                            fullWidth
                            error={Boolean(touched.first_name && errors.first_name)}
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
                                value={values.first_name}
                                name="firstName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.first_name && errors.first_name && (
                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                    {errors.first_name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <InputLabel sx={{  color: theme.palette.mode === 'dark' ? 'white' : '#404040'}} className="authFont" htmlFor="outlined-adornment-email-login">
                            Last Name{' '}
                        </InputLabel>
                        <FormControl
                            sx={{ ...theme.typography.customInput }}
                            className="auth-formcontrol"
                            fullWidth
                            error={Boolean(touched.last_name && errors.last_name)}
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
                                value={values.last_name}
                                name="lastName"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                inputProps={{}}
                            />
                            {touched.last_name && errors.last_name && (
                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                    {errors.last_name}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <InputLabel  sx={{  color: theme.palette.mode === 'dark' ? 'white' : '#404040'}} className="authFont" htmlFor="outlined-adornment-email-login">
                            Email
                        </InputLabel>
                        <FormControl
                            sx={{ ...theme.typography.customInput }}
                            className="auth-formcontrol"
                            fullWidth
                            error={Boolean(touched.email && errors.email)}
                        >
                            <TextField
                                placeholder="Email"
                                className="textForm"
                                // onChange={(event)=>handelAccount("password",event)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="email"
                                value={values.email}
                                name="email"
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
                        <InputLabel sx={{  color: theme.palette.mode === 'dark' ? 'white' : '#404040'}} className="authFont" htmlFor="outlined-adornment-email-login">
                            Delivery Address
                        </InputLabel>
                        <FormControl
                            sx={{ ...theme.typography.customInput }}
                            className="auth-formcontrol"
                            fullWidth
                            error={Boolean(touched.address && errors.address)}
                        >
                            <TextField
                                placeholder="Delivery Address"
                                className="textForm"
                                // onChange={(event)=>handelAccount("password",event)}
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                type="address"
                                value={values.address}
                                name="address"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                // helperText="Some important text"
                                inputProps={{}}
                            />
                            {touched.address && errors.address && (
                                <FormHelperText error id="standard-weight-helper-text-name-login">
                                    {errors.address}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={checked}
                                        onChange={(event) => setChecked(event.target.checked)}
                                        name="checked"
                                        color="primary"
                                    />
                                }
                                label="By checking you agree to our Terms and Conditions"
                            />
                        </Stack>
                        <Button
                            variant="contained"
                            onClick={() => {
                                handleConnect();
                            }}
                        >
                            {walletAddress ? walletAddress.slice(0, 5) + '...' + walletAddress.slice(38, 42) : 'Connect with wallet'}
                        </Button>
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
                                    Sign up
                                </Button>
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default SocialLoginForm;
