import { Link as RouterLink } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import widget1 from 'assets/images/watch.png';
import { useSelector } from 'react-redux';
//>>>>>
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const HeaderAnimationImage = styled('img')({
    maxWidth: '100%',
    filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const theme = useTheme();
    const headerData = [
        {
            title: 'The Future of',
            miniTitle: 'Ownership!',
            heading: ' Unlock the Value of Physical Assets with Tokenisation',
            btntext: "   Create Your's"
        },
        {
            title: 'The Future of',
            miniTitle: 'Ownership!',
            heading: ' Unlock the Value of Physical Assets with Tokenisation',
            btntext: "   Create Your's"
        },
        {
            title: 'The Future of',
            miniTitle: 'Ownership!',
            heading: ' Unlock the Value of Physical Assets with Tokenisation',
            btntext: "   Create Your's"
        }
    ];
    const carouselItems = [
        { image: { widget1 }, title: 'Title 1', description: 'Description 1' },
        { image: { widget1 }, title: 'Title 2', description: 'Description 2' },
        { image: { widget1 }, title: 'Title 3', description: 'Description 3' }
    ];
    const settings = {
        dots: true,
        arrows: false,

        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade: true,

        autoplay: true,
        speed: 1000,
        autoplaySpeed: 6000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    // fade:true,
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 6000
                    // fade: true,
                    // fadeSpeed: 1000
                }
            },
            {
                breakpoint: 320,
                settings: {
                    //  fade:true,
                    slidesToShow: 1,
                    fade: true,
                    fadeSpeed: 1000
                }
            },
            {
                breakpoint: 600,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {headerData.map((item) => {
                return (
                    <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
                        <Grid container-fluid>
                            <Container>
                                <Grid
                                    container
                                    alignItems="center"
                                    justifyContent="space-between"
                                    spacing={gridSpacing}
                                    sx={{ mt: { xs: 10, sm: 6, md: 4 }, mb: { xs: 2.5, md: 10 } }}
                                >
                                    <Grid item xs={12} md={8}>
                                        <Grid
                                            container
                                            spacing={gridSpacing}
                                            sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}
                                        >
                                            <Grid item xs={12}>
                                                <motion.div
                                                    initial={{ opacity: 0, translateY: 550 }}
                                                    animate={{ opacity: 1, translateY: 0 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 150,
                                                        damping: 30
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h1"
                                                        sx={{
                                                            fontFamily: 'Public Sans !important',
                                                            fontStyle: 'normal !important',
                                                            fontWeight: '600',

                                                            fontSize: { xs: '2.25rem', sm: '3rem', md: '78px', lg: '78px' },
                                                            lineHeight: { xs: '1', sm: '1', md: '84px', lg: '84px' },

                                                            color: '#000'
                                                        }}
                                                    >
                                                       {item.title}
                                                        <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                                           {item.miniTitle}
                                                        </Box>
                                                    </Typography>
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <motion.div
                                                    initial={{ opacity: 0, translateY: 550 }}
                                                    animate={{ opacity: 1, translateY: 0 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 150,
                                                        damping: 30,
                                                        delay: 0.2
                                                    }}
                                                >
                                                    <Typography
                                                        variant="h4"
                                                        component="div"
                                                        color="inherit"
                                                        sx={{
                                                            color: '#000',
                                                            fontFamily: 'Public Sans  !important',
                                                            fontStyle: 'normal',

                                                            textTransform: 'capitalize  !important',
                                                            fontSize: { xs: '1rem', md: '27px', lg: '27px' },
                                                            fontWeight: 400,
                                                            lineHeight: 1.4
                                                        }}
                                                    >
                                                       {item.heading}
                                                    </Typography>
                                                </motion.div>
                                            </Grid>
                                            <Grid item xs={12} sx={{ my: 3.25 }}>
                                                <motion.div
                                                    initial={{ opacity: 0, translateY: 550 }}
                                                    animate={{ opacity: 1, translateY: 0 }}
                                                    transition={{
                                                        type: 'spring',
                                                        stiffness: 150,
                                                        damping: 30,
                                                        delay: 0.4
                                                    }}
                                                >
                                                    {(token == null || undefined) && (
                                                        <>
                                                            <Grid
                                                                container
                                                                spacing={2}
                                                                sx={{ justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' } }}
                                                            >
                                                                <Grid item>
                                                                    <AnimateButton>
                                                                        <Button
                                                                            className="create"
                                                                            component={RouterLink}
                                                                            to="/login"
                                                                            size="large"
                                                                            variant="contained"
                                                                            color="secondary"
                                                                        >
                                                                       {item.btntext}
                                                                        </Button>
                                                                    </AnimateButton>
                                                                </Grid>
                                                            </Grid>
                                                        </>
                                                    )}
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                        <Box
                                            sx={{
                                                width: '290px',
                                                animation: '10s slideY linear infinite'
                                            }}
                                        >
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{
                                                    type: 'spring',
                                                    stiffness: 150,
                                                    damping: 30,
                                                    delay: 0.2
                                                }}
                                            >
                                                <HeaderAnimationImage src={widget1} alt="watch" />
                                            </motion.div>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                    </Grid>
                );
            })}
        </Slider>
    );
};

export default Header;
