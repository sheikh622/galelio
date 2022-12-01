// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography, Box } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

// project imports

import { gridSpacing } from 'store/constant';
import car from 'assets/images/unsplash_bMSA5-tLFao.png';
import CardMedia from '@mui/material/CardMedia';

// assets

// =============================|| LANDING - FEATURE PAGE ||============================= //

const CategoriesPage = () => {
    const theme = useTheme();
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Luxury Car'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            title: 'Luxury Shoes'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            title: 'Luxury Watches'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Real Estate'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Luxury Goods'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            title: 'Luxury Goods'
        }
    ];
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

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} 
                sx={{ textAlign: 'center' }}>
                    {itemData.map((item) => (
                        <Grid sx={{ my: { xs: '10px', md: '0', sm: '10px' } }} item md={2} sm={6}>
                            <Grid container justifyContent="center" spacing={1}>
                                <Grid item   component={RouterLink}
                                to="/ProductDetails">
                                    <Box
                                  
                                  
                                        sx={{
                                            position: 'relative',
                                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : 
                                            '#f3f3f3',
                                            boxShadow: '1px 2px 9px #d3d3d3'
                                        }}
                                        
                                    >
                                        <CardMedia component="img" width="100%" height="auto" image={car} />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '7px',
                                                left: 0,
                                                width: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                color: 'white',
                                                padding: {
                                                    xs: '10px',
                                                    sm: '10px',
                                                    md: '10px',
                                                    lg: '10px'
                                                }
                                            }}
                                        >
                                            <Typography variant="h5" color="#fff">
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CategoriesPage;
