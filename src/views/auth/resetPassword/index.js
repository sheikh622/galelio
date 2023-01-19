import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery,Box  } from '@mui/material';
// project imports
import AuthWrapper1 from 'shared/component/AuthWrapper';
import AuthCardWrapper from 'shared/component/AuthCardWrapper';

import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';
import AuthSlider from 'ui-component/cards/AuthSlider';
import ResetForm from './ResetPassword';
import React from 'react';
// import { FormattedMessage } from 'react-intl';
const ResetPassword = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    console.log("params",params)
    return (
        <AuthWrapper1 >
        <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh', 
        background: theme.palette.mode === 'dark' ? '#000' : '#fff' , }}>
            <Grid item md={6} lg={5} sx={{ position: 'relative', alignSelf: 'stretch', 
            display: { xs: 'none', md: 'block' } }}>
                <BackgroundPattern1>
                    <Grid item container alignItems="flex-end" justifyContent="center" spacing={3}>
                        <Grid item xs={12}>
                            <span />
                            
                        </Grid>
                    </Grid>
                </BackgroundPattern1>
            </Grid>
            <Grid item container justifyContent="center" md={6} lg={7} >
          

                <AuthCardWrapper>
                <Grid container direction="column" justifyContent="center" spacing={2}>
                <Grid item xs={12} container alignItems="center" justifyContent="center">
                    <Box sx={{ mb: 2 }}>
                        <Typography className='signInMarket' variant="subtitle1">
                            
                      Reset Password</Typography>
                    </Box>
                </Grid>
            </Grid> 
                    <Grid container spacing={2} justifyContent="center" >
                        <Grid item xs={12}>
                            <ResetForm  token={params.token} />
                        </Grid>
                      
                    </Grid>
                </AuthCardWrapper>
            </Grid>
        </Grid>
    </AuthWrapper1>
    );
};

export default ResetPassword;
