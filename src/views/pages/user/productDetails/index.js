import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Properties from './component/properties';
import PropertiesView from './component/productView';
import { getAllMarketplaceNftsByCategory } from 'redux/marketplace/actions';
import DeliveryDashboard from './component/productDetails';

const ProductDetails = () => {
    const theme = useTheme();
    const location = useLocation();
    const dispatch = useDispatch();
    const marketplaceNfts = useSelector((state) => state.marketplaceReducer.marketplaceNfts);
    // console.log('marketplaceNfts', marketplaceNfts);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    // useEffect(() => {
    //     dispatch(
    //         getAllMarketplaceNftsByCategory({
    //             search: search,
    //             page: page,
    //             limit: limit,
    //             categoryId: location?.state.nft?.Category?.id
    //         })
    //     );
    // }, [search, page, limit]);
    console.log("location.state",location.state)
    return (
        <>
            <Grid
                container-fluid
                md={12}
                lg={11}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'flex' , lg:'flex' },
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid item md={12} xs={12} lg={11}>
                    <Grid container-fluid>
                       {/*  <Grid item md={12} xs={12}>
                            <DeliveryDashboard  />
                        </Grid> */}
                       <Grid item md={12} xs={12}>
                            <PropertiesView nft={location.state.nft} />
                        </Grid> 
                        <Grid item md={12} xs={12}>
                            <Properties nft={location.state.nft} />
                        </Grid>        
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default ProductDetails;
