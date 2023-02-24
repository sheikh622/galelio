import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Box } from '@mui/material';
import {Helmet} from "react-helmet";
import galileo from 'assets/images/galileo.png';
import galileoWhite from 'assets/images/galileo-white.png';
// project imports
import AuthWrapper1 from 'shared/component/AuthWrapper';
import AuthCardWrapper from 'shared/component/AuthCardWrapper';
import SocialLogin from './component/SocialLogin';

import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';

// assets

// styles

// ================================|| AUTH1 - LOGIN ||================================ //

const SocialLoginForm = () => {
    const theme = useTheme();

    return (
        <AuthWrapper1>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ minHeight: '100vh', background: theme.palette.mode === 'dark' ? '#000' : '#fff' }}
            >
            <Helmet>
            <meta charSet="utf-8" />
            <title>  Social Login</title>
          
        </Helmet>
                <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', display: { xs: 'none', md: 'block' } }}>
                    <BackgroundPattern1>
                        <Grid item container alignItems="flex-end" justifyContent="center" spacing={3}>
                            <Grid item xs={12}>
                                <span />
                            </Grid>
                        </Grid>
                    </BackgroundPattern1>
                </Grid>
                <Grid item container justifyContent="center" md={6} lg={7}>
                    <AuthCardWrapper>
                        <Grid container direction="column" justifyContent="center" spacing={2}>
                            <Grid item xs={12} container alignItems="center" justifyContent="center">
                                <Box sx={{ display: { xs: 'block', sm: 'block', md: 'none', lg: 'none' } }}>
                                    <Typography variant="h6" noWrap component="div" sx={{ marginTop: '5px' }}>
                                        {theme.palette.mode === 'dark' ? (
                                            <img src={galileoWhite} alt="Galileo White Logo" width="100" />
                                        ) : (
                                            <img src={galileo} alt="Galileo Dark Logo" width="100" />
                                        )}
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item xs={12} container alignItems="center" justifyContent="center">
                                <Box sx={{ mb: 2 }}>
                                    <Typography className="signInMarket" variant="subtitle1">
                                        Social Signup
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <SocialLogin />
                            </Grid>
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container direction="column" alignItems="center" xs={12}>
                                    <Typography component={Link} to="/login" variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                        Already have an account?
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default SocialLoginForm;
