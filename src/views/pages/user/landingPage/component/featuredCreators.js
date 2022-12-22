import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import React from 'react';
import Slider from 'react-slick';
import BrandCard from '../../commonComponent/brandCard';
const FeaturedCreators = ({ brands }) => {
    const theme = useTheme();
    var settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 4 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, marginLeft: {md:'18px'}, 
                             textTransform: 'capitalize' }}
                        >
                            Featured Creators
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {brands && brands?.length > 5 ? (
                <>
                    <Grid item xs={12}>
                        <Grid mt={2} container justifyContent="center" spacing={4} sx={{ textAlign: 'center' }}>
                            <Slider className="sliderBrand" {...settings}>
                                {brands.map((item) => (
                                    <BrandCard data={item} brands={brands} />
                                ))}
                            </Slider>
                        </Grid>
                    </Grid>
                </>
            ) : brands && brands?.length > 0 ? (
                <Grid container justifyContent="left" spacing={4} sx={{ textAlign: 'center' }}>
                    {brands?.map((item) => (
                        <BrandCard data={item} brands={brands} />
                    ))}
                </Grid>
            ) : (
                <Grid mt={4} container justifyContent="left" spacing={4} >
                <h3 className='noData'>No data found...!</h3>
            </Grid>
            )}
        </Grid>
    );
};

export default FeaturedCreators;
