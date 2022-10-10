// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, FormControl, FormHelperText, InputLabel, OutlinedInput } from '@mui/material';
import React, { useRef ,useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotPassword } from '../../../../redux/auth/actions';
import { setLoader } from '../../../../redux/auth/actions';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project imports
import AnimateButton from 'ui-component/extended/AnimateButton';

// ========================|| FIREBASE - FORGOT PASSWORD ||======================== //

const ForgetForm = ({ ...others }) => {
    const theme = useTheme();
    const loader = useSelector((state) => state.auth.loader);

//    console.log(loader,"emailllll");
   
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <>
        <Formik
            initialValues={{
                email: ''
            }}
            validationSchema={Yup.object().shape({
                email: Yup.string().email("Invalid email").max(255).required("Email is required!")
            })}
            onSubmit={async (values) => {
                // await console.log("forgot")
                await dispatch(setLoader(true));
                 dispatch(
                    forgotPassword({
                        email: values.email,
                        navigate: navigate
                    })
                );
            }}
        >
            {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                <form noValidate onSubmit={handleSubmit} {...others}>
                    <FormControl fullWidth error={Boolean(touched.email && errors.email)} sx={{ ...theme.typography.customInput }}>
                        <InputLabel htmlFor="outlined-adornment-email-forgot">Email Address</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-email-forgot"
                            type="email"
                            value={values.email}
                            name="email"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            label="email address"
                            inputProps={{}}
                        />
                        {touched.email && errors.email && (
                            <FormHelperText error id="standard-weight-helper-text-email-forgot">
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
                                     Send Email
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
                                       Send Email
                                    </Button>
                                )}
                          
                        </AnimateButton>
                    </Box>
                </form>
            )}
        </Formik></>
        
      
    );
};

export default ForgetForm;
