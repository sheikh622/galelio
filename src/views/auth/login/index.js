import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Box, Stack, Typography, useMediaQuery } from '@mui/material';
import { FormattedMessage } from 'react-intl';

// project imports
import AuthWrapper from '../../../shared/component/AuthWrapper';
import LoginCardWrapper from '../../../shared/component/LoginCardWrapper';
import LoginForm from './component/loginForm';
import Logo from 'ui-component/Logo';
import AuthFooter from 'ui-component/cards/AuthFooter';
import React from 'react';

const Login = () => {
    const theme = useTheme();

    // const { isLoggedIn } = useAuth();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AuthWrapper>
            <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
                        <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
                            <LoginCardWrapper>
                                <Grid container spacing={2} alignItems="center" justifyContent="center">
                                <Grid item sx={{ mb: 3 }}>
                                        {/* <Link to="/"> */}
                                            {/* <Logo /> */}
                                        {/* </Link> */}
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" justifyContent="center" textAlign="center" spacing={1}>
                                            <Grid item xs={12}>
                                                <Typography
                                                className='Signin'
                                                   sx={{color:"#816a51"}}
                                                    gutterBottom
                                                    variant={matchDownSM ? 'h3' : 'h2'}
                                                >
                                                  Sign in
                                                </Typography>
                                            </Grid>
                                           
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <LoginForm />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>
                                
                                  
                                </Grid>
                            </LoginCardWrapper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </AuthWrapper>
    );
};

export default Login;
