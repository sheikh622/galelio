// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import HorizontalTabs from './ItemsTage';
import Appbar from 'layout/UserLayout/header';
import Footer from 'layout/UserLayout/footer';

import SocialProfile from './SocialProfile';
import { useTheme } from '@emotion/react';
// =============================|| LANDING MAIN ||============================= //

const Profile = () => {
    const theme = useTheme();
    return (
        <>
            <Grid
                sx={{
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>
                    <Grid item md={12} xs={12}>
                        <Grid container-fluid>
                            <Grid item md={12} xs={12}>
                                <SocialProfile />
                            </Grid>
                            <Grid item md={12} xs={12} sx={{ margin: '15px' }}>
                                <HorizontalTabs />
                            </Grid>

                          
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Profile;
