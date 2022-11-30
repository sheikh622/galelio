import { Link } from 'react-router-dom';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Divider, Grid, Stack, Typography, useMediaQuery, Box } from '@mui/material';

// project imports
import AuthWrapper1 from 'shared/component/AuthWrapper';
import AuthCardWrapper from 'shared/component/AuthCardWrapper';
import ResetForm from './component/Reset';
import Logo from 'ui-component/Logo';
import BackgroundPattern1 from 'ui-component/cards/BackgroundPattern1';
import AuthSlider from 'ui-component/cards/AuthSlider';

// assets


// styles


// ================================|| AUTH1 - LOGIN ||================================ //

const Reset = () => {
    const theme = useTheme();

    return (
        <AuthWrapper1 >
            <Grid container justifyContent="space-between" alignItems="center" sx={{ minHeight: '100vh', 
             background: theme.palette.mode === 'dark' ? theme.palette.dark.dark : '#fff', }}>
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
                                <ResetForm />
                            </Grid>
                          
                        </Grid>
                    </AuthCardWrapper>
                </Grid>
            </Grid>
        </AuthWrapper1>
    );
};

export default Reset;
