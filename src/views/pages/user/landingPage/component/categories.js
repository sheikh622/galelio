import { useTheme } from '@mui/material/styles';
import { Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Categories = ({ categories }) => {
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

    const theme = useTheme();
    const navigate = useNavigate();
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
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {categories && categories.length > 0 && (
                <>
                    <Grid item xs={12}>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={2800}
                            customTransition="all .5"
                            transitionDuration={500}
                            infinite={true}
                        >
                            {categories.map((item) => (
                                 <>
                                    <Grid
                                        container
                                        justifyContent="left"
                                        spacing={0}
                                        sx={{ textAlign: 'center', width: '160%' }}
                                    >
                                        <Grid
                                            sx={{ my: { xs: '10px', md: '0', sm: '10px' } }}
                                            item
                                            md={6}
                                            sm={6}
                                        >
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
                                                    boxShadow: '1px 2px 9px #d3d3d3',
                                                    padding: '0',
                                                    margin: '0',
                                                    background: 'red'
                                                }}
                                            >
                                                <CardMedia                                                    
                                                    component="img"
                                                    width="100%"
                                                    height="210rem"
                                                    image={item.image}
                                                />

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
                                        </Grid>
                                    </Grid>
                                </>
                            ))}
                        </Carousel>
                    </Grid>
                </>
            )}
        </Grid>
    );
};

export default Categories;
