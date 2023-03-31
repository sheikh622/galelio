import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Activity from './component/activity';
import Product from './component/productView';
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
                    <Grid container-fluid>
                        <Grid item md={12} xs={12}>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <Product />
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
