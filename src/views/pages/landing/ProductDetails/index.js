// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import SimilarProducts from './SimilarProducts';
import Activity from './Activity';
import Properties from './Properties';
import PropertiesView from './ProductView';
import { useTheme } from '@emotion/react';
// =============================|| LANDING MAIN ||============================= //

const Products = () => {
    const theme = useTheme();
    return (
        <>
            <Grid
                md={11}
                sx={{
                    display: { xs: 'block', sm: 'block', md: '' },
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid item md={12} xs={12}>
                    <Grid container>
                        <Grid item md={12} xs={12}>
                            <PropertiesView />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Properties />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Activity />
                        </Grid>

                        <Grid item md={12} xs={12}>
                            <SimilarProducts />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Products;
