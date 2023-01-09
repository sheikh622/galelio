import { useLocation } from 'react-router-dom';
import { useTheme } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Properties from './component/properties';
import PropertiesView from './component/productView';
import { getAllMarketplaceNftsByCategory } from 'redux/marketplace/actions';
import SimilarProducts from '../../landing/ProductDetails/SimilarProducts';
import Activity from '../../landing/ProductDetails/Activity';
const ProductDetails = () => {
    const theme = useTheme();
    const location = useLocation();
    const dispatch = useDispatch();
    const marketplaceNfts = useSelector((state) => state.marketplaceReducer.marketplaceNfts);
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
    return (
        <>
            <Grid
                container-fluid
                md={12}
                lg={11}
                sx={{
                    display: { xs: 'block', sm: 'block', md: 'flex', lg: 'flex' },
                    background: 'tranparent',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid item md={12} xs={12} lg={11}>
                    <Grid container-fluid>
                       
                        <Grid item md={12} xs={12}>
                            <PropertiesView nft={location.state.nft} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Properties nft={location.state.nft} />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <Activity  />
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

export default ProductDetails;
