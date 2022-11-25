// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import SimilarProducts from './SimilarProducts';
import SiderPage from '../BiggestNFTMarketplace/Sider';
import Activity from './Activity';
import Footer from 'views/pages/user/footer/footer';
import Appbar from 'views/pages/user/header/header'
import Properties from './Properties';
import PropertiesView from './ProductView';
import { useTheme } from '@emotion/react';
// =============================|| LANDING MAIN ||============================= //

const Products = () => {
    const theme = useTheme();
    return(
    <>
        <Appbar />
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' },   
        background: theme.palette.mode === 'dark' ? 
        theme.palette.dark.main : "#f3f3f3", }}>
            <Grid item md={1} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } , }}>
                <SiderPage />
            </Grid>
            <Grid item md={11} xs={12} >
                <Grid container-fluid>
                   
                    <Grid item md={12} xs={12}>
                     <PropertiesView/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                     <Properties/>
                    </Grid>
                    <Grid item md={12} xs={12}>
                     <Activity/>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <SimilarProducts/>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    </>
);
}

export default Products;
