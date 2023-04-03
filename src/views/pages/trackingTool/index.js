import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid , Typography  } from '@mui/material';
import Activity from './component/activity';
import Product from './component/productView';
import TrackAtribute from './component/trackAtribute';
import { useParams } from 'react-router-dom';
import { getnftData } from 'redux/landingPage/actions';
const TrackingTool = () => {
    const theme = useTheme();
    const location = useLocation();
    const dispatch = useDispatch();

    // console.log(nftList, 'nftList=>');
    return (
        <>
            <Grid
                container-fluid
                md={12}
                lg={12}
                sx={{
                    ml: { lg: -1 },
                    display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' },
                    background: 'tranparent',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid item md={12} xs={12} lg={12}>
                <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            color={theme.palette.mode === 'dark' ? '#FFFFFF' : 'black'}
                            className="productfigmastyl"
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'center', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                        The product is authentic
                           
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
                    <Grid container-fluid>
                        <Grid item md={12} xs={12}>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Product />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <TrackAtribute />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Activity />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default TrackingTool;
