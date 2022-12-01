import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
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
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { useNavigate } from 'react-router-dom';
import googleweb from 'assets/images/googleweb.png';
import facebook from 'assets/images/facebook.png';
import Google from 'assets/images/icons/social-google.svg';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import axios from 'axios';
// import useAuth from 'hooks/useAuth';

const LoginForm = ({ loginProp, ...others }) => {
    const theme = useTheme();

    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                enableReinitialize
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Enter valid email').max(255).required('Email is required!'),
                    password: Yup.string().max(255).required('Password is required!')
                })}
                onSubmit={async (values) => {
                    await console.log('login');
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">Email </InputLabel>
                            <OutlinedInput
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label="Email"
                                inputProps={{}}
                            />
                            {touched.email && errors.email && (
                                <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {errors.email}
                                </FormHelperText>
                            )}
                        </FormControl>

                        <FormControl
                            fullWidth
                            error={Boolean(touched.password && errors.password)}
                            sx={{ ...theme.typography.customInput }}
                        >
                            <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                            <OutlinedInput
                                type={showPassword ? 'text' : 'password'}
                                value={values.password}
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            size="large"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                                inputProps={{}}
                            />
                            {touched.password && errors.password && (
                                <FormHelperText error id="standard-weight-helper-text-password-login">
                                    {errors.password}
                                </FormHelperText>
                            )}
                        </FormControl>
                        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                            <Typography
                                variant="subtitle1"
                                component={Link}
                                to={'/forgot'}
                                sx={{ textDecoration: 'none', color: '#816a51 ' }}
                            >
                                Forgot Password?
                            </Typography>
                        </Stack>
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
                                    Sign in
                                </Button>
                            </AnimateButton>
                        </Box>
                        <Grid item xs={12}>
                        <Grid mt={2} item container direction="column" alignItems="center" xs={12}>
                            <Typography
                            
                                variant="subtitle1"
                                sx={{ textDecoration: 'none' }}
                            >
                            or continue with
                            </Typography>
                        </Grid>
                    </Grid>
                       <Grid item sx={{display:'flex', justifyContent:'center', marginTop:'15px'}}>
                       <Box sx={{color:'red'}}>
                       <img src={facebook} alt="facebook" width='44px' height='42px' />

                       
                       </Box>
                       <Box  sx={{marginLeft:'20px', marginTop:'-2px'}}>
                   
                       <img src={googleweb} alt="google"  width='47px' height='47px' />
                       </Box>
                       </Grid>
                   
                  
                    </form>
                )}
            </Formik>

            {/* <Box sx={{ mt: 2, background: '#604223' }}>
                <AnimateButton>
                    {loader ? (
                        <Button
                            className="signbutton"
                            sx={{ background: '#01579b' }}
                            disabled
                            disableElevation
                            fullWidth
                            size="large"
                            // type="submit"
                            variant="contained"
                            color="secondary"
                        >
                            Sign in with Facebook
                        </Button>
                    ) : (
                        <Button
                            className="signbutton"
                            sx={{ background: '#01579b' }}
                            disableElevation
                            // disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={handleFBClick}
                        >
                            Sign in with Facebook
                        </Button>
                    )}
                </AnimateButton>
            </Box>
            <Box sx={{ mt: 2, background: '#604223' }}>
                <AnimateButton>
                    {loader ? (
                        <Button
                            className="signbutton"
                            sx={{ background: '#ef5350' }}
                            disabled
                            disableElevation
                            fullWidth
                            size="large"
                            type=""
                            variant="contained"
                            color="secondary"
                        >
                            Sign in with Google
                        </Button>
                    ) : (
                        <Button
                            className="signbutton"
                            sx={{ background: '#ef5350' }}
                            disableElevation
                            // disabled={isSubmitting}
                            fullWidth
                            size="large"
                            type="submit"
                            variant="contained"
                            color="secondary"
                            onClick={handleGoogleClick}
                        >
                            Sign in with Google
                        </Button>
                    )}
                </AnimateButton>
            </Box> */}
        </>
    );
};

export default LoginForm;
