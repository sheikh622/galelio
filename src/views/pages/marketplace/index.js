import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/styles';
import Tabs from './component/tabs';
import NFTS from './component/nfts';
import { getAllMarketplaceCategories } from 'redux/marketplace/actions';
const Marketplace = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const marketplaceCategories = useSelector((state) => state.marketplaceReducer.marketplaceCategories);
    console.log('marketplaceCategories', marketplaceCategories);
    useEffect(() => {
        dispatch(getAllMarketplaceCategories());
    }, []);
    return (
        <Grid
            style={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}
        >
            <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, marginBottom: '40px' }}>
                <Grid item md={12} xs={12} sx={{ mt: 2 ,paddingLeft:1 ,paddingRight:2}}>
                    <Grid container>
                        <h1 style={{ paddingLeft: '0.5%' }}>Marketplace</h1>

                        <Grid item md={12} xs={12}>
                            <Tabs marketplaceCategories={marketplaceCategories}/>
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <NFTS />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Marketplace;
