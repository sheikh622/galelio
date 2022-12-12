import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import Header from './component/header';
import NewAndTrendingNfts from './component/newAndTrending';
import Categories from './component/categories';
import FeaturedCreators from './component/featuredCreators';
import { getAllLandingPageData } from 'redux/landingPage/actions';
const LandingPage = () => {
    const dispatch = useDispatch();
    const landingPageData = useSelector((state) => state.landingPageReducer.landingPageData);
    console.log('landingPageData', landingPageData);
    useEffect(() => {
        dispatch(getAllLandingPageData());
    }, []);

    return (
        <Grid item md={11} xs={12}>
            <Grid container-fluid>
                <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
                    <Header />
                </Grid>
                <Grid item md={12} xs={12}>
                    <Categories categories={landingPageData.categories} />
                </Grid>

                <Grid item md={12} xs={12}>
                    <NewAndTrendingNfts nfts={landingPageData.newNfts} />
                </Grid>

                <Grid mb={4} item md={12} xs={12}>
                    <FeaturedCreators brands={landingPageData.brands} />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default LandingPage;
