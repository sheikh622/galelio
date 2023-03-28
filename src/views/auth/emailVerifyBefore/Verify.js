// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, Typography, Grid } from '@mui/material';
import React, { useRef, useEffect, useState } from 'react';
import { Switch } from '@mui/material';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { emailVerification } from 'redux/auth/actions';
// import { setLoader } from '../../../../redux/auth/actions';
import TextField from '@material-ui/core/TextField';
import '@fontsource/public-sans';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const VerifyEmail = ({ token, ...others }) => {
    const theme = useTheme();
    console.log(token, 'token=>');
    const loader = useSelector((state) => state.auth.loader);
    // const user = useSelector((state) => state.auth.user);
    // console.log(user.email, 'user===========>>');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [changeEmail, setChangeEmail] = useState(false);
    const [checked, setChecked] = useState(false);
    const [seconds, setSeconds] = useState(60);

    useEffect(() => {
        let interval = null;
        if (seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [seconds]);
    const ReEnterEmail = ({ event }) => {
        setChangeEmail(true);
        setChecked(event.target.checked);
    };
    return (
        <>
            <Formik
                initialValues={
                    {
                        // email: ''
                    }
                }
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Invalid email').max(255).required('Email is required!')
                })}
                onSubmit={async (values) => {
                    console.log(values, 'values')
                    // await dispatch(setLoader(true));
                    dispatch();
                    // emailVerification({
                    //     token: token,
                    //     navigate: navigate
                    // });
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <Grid xs={12} sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#6d6e72' }}>
                            <Typography className="wallet-select" variant="h3">
                                Please check your email account , the verification mail sent to this email
                                {/*   <b>{user.email}</b>{' '} */}
                            </Typography>
                        </Grid>{' '}
                        <Grid mt={1} xs={12} md={12}>
                            <Button className="ReEnterEmail" variant="text" sx={{}}>
                                Re-Enter Email
                            </Button>
                            <Switch
                                checked={checked}
                                onChange={(e) => ReEnterEmail(e)}

                                // inputProps={{ 'aria-label': 'controlled' }}
                            />
                        </Grid>
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
                        {changeEmail == true && checked == true && (
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
                        )}
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}
                        <Grid mt={2} xs={12} sx={{ display: 'flex' }}>
                            <Grid xs={12} md={5} sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#6d6e72' }}>
                                <Box>
                                    {' '}
                                    <AnimateButton>
                                        <Button className="signbuttonMarket" fullWidth size="large" variant="outlined" color="secondary">
                                            Resend({seconds})
                                        </Button>
                                    </AnimateButton>
                                </Box>
                            </Grid>
                            <Grid xs={12} md={1}></Grid>
                            <Grid xs={12} md={6}>
                                {seconds == 0 && (
                                    <Box>
                                        {' '}
                                        <AnimateButton>
                                            <Button
                                                className="signbuttonMarket"
                                                fullWidth
                                                // onClick={ReEnterEmail}
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Change Email
                                            </Button>
                                        </AnimateButton>
                                    </Box>
                                )}
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default VerifyEmail;
