import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NewCard from '../../commonComponent/newCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import Slider from 'react-slick';
const NewAndTrendingNfts = ({ nfts }) => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    // fade: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ background: '', 
        margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, marginLeft: {md:'18px'}, 
                             textTransform: 'capitalize' }}
                        >
                            New & Trending
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={4} sx={{ textAlign: 'center' }}>
                    {nfts && nfts?.length > 5 ? (
                        <>
                            <Slider  className="slider" {...settings}>
                                {nfts.map((item) => (
                                    <NewCard data={item} nfts={nfts} />
                                ))}
                            </Slider>
                        </>
                    ) : nfts && nfts?.length > 0 ? (
                        <Grid ml={1}  container justifyContent="left" spacing={4} sx={{ textAlign: 'center' ,  
                        marginLeft: {md:'18px'}, }}>
                            {nfts?.map((item) => (
                                <NewCard data={item} nfts={nfts} />
                            ))}
                        </Grid>
                    ) : (
                        <Grid mt={4} container justifyContent="left" spacing={4} >
                        <h3 className='noDataNew'>No data found...!</h3>
                    </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewAndTrendingNfts;
