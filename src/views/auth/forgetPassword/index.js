import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Typography, useMediaQuery, Box } from '@mui/material';
import AuthWrapper1 from 'shared/component/AuthWrapper';
import AuthCardWrapper from 'shared/component/AuthCardWrapper';

import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';

import ForgotForm from './component/ForgetForm';
import React from 'react';

const ForgotPassword = () => {
    const theme = useTheme();

    return (
        <AuthWrapper1>
            <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                sx={{ minHeight: '100vh',background: theme.palette.mode === 'dark' ? '#000' : '#fff' }}
            >
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
                                <Box sx={{ mb: 2 }}>
                                    <Typography className="signInMarket" variant="subtitle1">
                                        Forgot Password
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} justifyContent="center">
                            <Grid item xs={12}>
                                <Divider />
                            </Grid>
                            <Grid item xs={12}>
                                <Grid item container direction="column" alignItems="center" xs={12}>
                                    <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                        Please enter registered email ID.
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={12}>
                                <ForgotForm />
                            </Grid>
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default ForgotPassword;
