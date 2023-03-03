import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import PropertiesView from './component/productView';
import SimilarProducts from './component/similarProducts';
import Activity from './component/activity';
import Properties from './component/properties';
const ProductDetails = () => {
    const theme = useTheme();
    const location = useLocation();
    const dispatch = useDispatch();
    const marketplaceNfts = useSelector((state) => state.marketplaceReducer.marketplaceNfts);

    return (
        <>
            <Grid
                container-fluid
                md={12}
                lg={12}
                sx={{ ml:{lg:-1},
                    display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' },
                    background: 'tranparent',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid item md={12} xs={12} lg={11}>
                    <Grid container-fluid>
                        <Grid item md={12} xs={12}>
                            <Grid container>
                                <Grid item md={12} xs={12}>
                                    <PropertiesView nft={location.state.nft} />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Properties nft={location.state.nft} />
                                </Grid>
                                <Grid item md={12} xs={12}>
                                    <Activity nft={location.state.nft} />
                                </Grid>

                                <Grid item md={12} xs={12}>
                                    <SimilarProducts nft={location.state.nft} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductDetails;
