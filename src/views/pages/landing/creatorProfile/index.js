// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import SimilarProducts from '../ProductDetails/SimilarProducts';

import Footer from 'views/pages/user/footer/footer';
import Appbar from 'views/pages/user/header/header'
import SocialProfile from './SocialProfile';
import { useTheme } from '@emotion/react';
// =============================|| LANDING MAIN ||============================= //

const Profile = () => {
    const theme = useTheme();
    return(
    <>
        <Appbar />
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' },   
        background: theme.palette.mode === 'dark' ? 
       'black' : "#f3f3f3", }}>
           
            <Grid item md={12} xs={12} >
                <Grid container-fluid>
                   
                    <Grid item md={12} xs={12}>
                    <SocialProfile/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                    
                    </Grid>
                    <Grid item md={12} xs={12}>
                   
                    </Grid>

                    <Grid item md={12} xs={12} sx={{margin:'15px'}}>
                      <SimilarProducts/>
                    </Grid>
                    <Grid item md={12} xs={12} sx={{marginLeft:'30px'}}>
                      <Footer/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    </>
);
}

export default Profile;
