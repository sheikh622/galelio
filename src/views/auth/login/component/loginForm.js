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
    Typography
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import AnimateButton from 'ui-component/extended/AnimateButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { login } from '../../../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { setLoader } from '../../../../redux/auth/actions';

const LoginForm = ({ loginProp, ...others }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const loader = useSelector((state) => state.auth.loader);
    // console.log("loader",loader);
    const theme = useTheme();
    const [checked, setChecked] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    useEffect(() => {
        dispatch(setLoader(false));
    }, []);
    return (
        <>
            {/* <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle1">
                            
                    {<FormattedMessage id="signIn.Heading" />}</Typography>
                    </Box>
                </Grid>
            </Grid> */}
          <Formik
                enableReinitialize
                initialValues={{

                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Enter valid email').max(255).required('Email is required!'
                   ),
                    password: Yup.string().max(255).required('Password is required!')
                })}
                onSubmit={async (values) => {
                    await dispatch(setLoader(true));
                    dispatch(
                        login({
                            email: values.email,
                            password: values.password,
                            navigate: navigate
                        })
                    );
                    
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit} {...others}>
                        <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                            <InputLabel htmlFor="outlined-adornment-email-login">
                           Email </InputLabel>
                            <OutlinedInput
                                type="email"
                                value={values.email}
                                name="email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                label='Email'
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
                            <InputLabel htmlFor="outlined-adornment-password-login">
                          Password</InputLabel>
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
                                label='Password'
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
                                to={'/forgetpassword'}
                               
                                sx={{ textDecoration: 'none' , color:"#816a51 "}}
                            >
                             Forgot Password?
                            </Typography>
                        </Stack>
                        {errors.submit && (
                            <Box sx={{ mt: 3 }}>
                                <FormHelperText error>{errors.submit}</FormHelperText>
                            </Box>
                        )}

                        <Box sx={{ mt: 2 , background:"#604223"}}>
                            <AnimateButton>
                                {loader ? (
                                    <Button
                                    className='signbutton'
                                    sx={{background:"#604223"}}
                                        disabled
                                        disableElevation
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="secondary"
                                        
                                    >
                                      Sign in
                                    </Button>
                                ) : (
                                    <Button
                                    className='signbutton'
                                    sx={{ background:"#604223"}}
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
                                )}
                            </AnimateButton>
                        </Box>
                    </form>
                )}
            </Formik>

           
        </>
    );
};

export default LoginForm;
