import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const FeaturedCreators = ({ brands }) => {
    const theme = useTheme();
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                            Featured Creators
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            {brands && brands.length > 0 && (
                <>
                    <Grid item xs={12}>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={2800}
                            customTransition="all .5"
                            transitionDuration={500}
                            infinite={true} arrows={false} showDots
                         
                        >
                            {brands.map((item) => (
                                <Grid container mb={2} justifyContent="left" spacing={0} sx={{ textAlign: 'center',  height: '325px' }}>
                                    <Grid
                                        item
                                        md={2}
                                        sm={6}
                                        component={RouterLink}
                                        to="/ProductDetails"
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? 'white' : 'black',

                                            textDecoration: 'none'
                                        }}
                                    >
                                        <Grid container justifyContent="center" sx={{ width: '480%', }}>
                                            <Grid item md={12} xs={12}>
                                                <CardMedia
                                                    component="img"
                                                    sx={{ height: { xs: '100%', md: '220px', sm: '100%' }, width: '100%' }}
                                                    image={item.image}
                                                />
                                            </Grid>

                                            <Grid
                                                item
                                                md={12}
                                                xs={12}
                                                sx={{
                                                    color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                                    background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                                    boxShadow: '0px 4px 4px rgb(0 0 0 / 49%)',
                                                    padding: '20px 10px'
                                                }}
                                            >
                                                <Grid item md={12} xs={12} className="overflow">
                                                    <Typography
                                                        variant="h3"
                                                        sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, marginBottom: '10px' }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </Grid>

                                                <Grid item md={12} xs={12} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                                    <Typography variant="body"> 34</Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            ))}
                        </Carousel>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default FeaturedCreators;
