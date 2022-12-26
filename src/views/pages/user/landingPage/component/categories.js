import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import { Card, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
import Slider from 'react-slick';

const Categories = ({ categories }) => {
    console.log('categories', categories);
    var settings = {
        Arrows: false,
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1
    };
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 5
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1
    //     }
    // };

    const theme = useTheme();
    const navigate = useNavigate();
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{
                                textAlign: { xs: 'center', md: 'left', sm: 'center' },
                                marginLeft: { md: '18px' },
                                textTransform: 'capitalize'
                            }}
                        >
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} mt={7}>
                <Grid container justifyContent="left" spacing={4} sx={{ textAlign: 'center' }}>
                    {categories && categories?.length > 5 ? (
                        <>
                            <Slider className="catigaryslider" {...settings}>
                                {categories?.map((item) => (
                                    <>
                                        <Grid
                                            sx={{ my: { xs: '10px', md: '0', sm: '10px' } }}
                                            item
                                            sm={6}
                                            md={categories && categories?.length > 5 ? 12 : 2}
                                            ml={categories && categories?.length > 5 ? 2 : 0}
                                            mr={categories && categories?.length > 5 ? 4 : 0}
                                        >
                                            <Card
                                                sx={{
                                                    color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                                    background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                                    // maxWidth: nfts && nfts?.length > 3? 0 : 365,
                                                    // width: nfts && nfts?.length > 3? '0' : '250%',
                                                    boxShadow: '1px 2px 6px #d3d3d3',
                                                    borderRadius: '7px'
                                                }}
                                                onClick={() => {
                                                    navigate('/marketplace', {
                                                        state: {
                                                            category: item
                                                        }
                                                    });
                                                }}
                                            >
                                                <CardActionArea>
                                                    <Box
                                                        onClick={() => {
                                                            navigate('/marketplace', {
                                                                state: {
                                                                    category: item
                                                                }
                                                            });
                                                        }}
                                                        sx={{
                                                            position: 'relative',
                                                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#f3f3f3',
                                                            boxShadow: '1px 2px 9px #d3d3d3'
                                                        }}
                                                    >
                                                        <CardMedia component="img" height="200" image={item.image} />
                                                        <Box
                                                            sx={{
                                                                height: '100%',
                                                                position: 'absolute',
                                                                top: 0,
                                                                left: 0,
                                                                width: '100%',
                                                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                                color: 'white'
                                                            }}
                                                        >
                                                            <Typography variant="h4" color="#fff" sx={{ mt: 11 }}>
                                                                {item.name}
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>
                                    </>
                                ))}
                            </Slider>
                        </>
                    ) : categories && categories?.length > 0 ? (
                        <Grid
                            mt={-3}
                            container
                            justifyContent="left"
                            spacing={4}
                            sx={{ textAlign: 'center', marginLeft: { md: '18px' }, width: { md: '100%' } }}
                        >
                            {categories?.map((item) => (
                                <Grid sx={{ my: { xs: '10px', md: '0', sm: '10px' } }} item md={2} sm={6}>
                                    <Card
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                            background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                            // maxWidth: nfts && nfts?.length > 3? 0 : 365,
                                            // width: nfts && nfts?.length > 3? '0' : '250%',
                                            boxShadow: '1px 2px 6px #d3d3d3',
                                            borderRadius: '7px'
                                        }}
                                        onClick={() => {
                                            navigate('/marketplace', {
                                                state: {
                                                    category: item
                                                }
                                            });
                                        }}
                                    >
                                        <CardActionArea>
                                            <Box
                                                onClick={() => {
                                                    navigate('/marketplace', {
                                                        state: {
                                                            category: item
                                                        }
                                                    });
                                                }}
                                                sx={{
                                                    position: 'relative',
                                                    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : '#f3f3f3',
                                                    boxShadow: '1px 2px 9px #d3d3d3'
                                                }}
                                            >
                                                <CardMedia component="img" height="200" image={item.image} />
                                                <Box
                                                    sx={{
                                                        height: '100%',
                                                        position: 'absolute',
                                                        top: 0,
                                                        left: 0,
                                                        width: '100%',
                                                        bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                        color: 'white'
                                                    }}
                                                >
                                                    <Typography variant="h4" color="#fff" sx={{ mt: 11 }}>
                                                        {item.name}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    ) : (
                        <Grid mt={0} container justifyContent="left" spacing={2}>
                            <h3 className="noDatacat">No data found...!</h3>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Categories;
