import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NewCard from '../../commonComponent/newCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import Slider from 'react-slick';
const NewAndTrendingNfts = ({ nfts }) => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        autoplay: true,

        slidesToShow: 4,
        slidesToScroll: 1
    };
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ background: '', margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                            New & Trending
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={4} sx={{ textAlign: 'center' }}>
                    {nfts && nfts.length > 0 && (
                        <>
                        <Slider className="slider" {...settings}>
                        {nfts.map((item) => (
                            <NewCard data={item} />
                        ))}
                        </Slider>
                         
                        </>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewAndTrendingNfts;
