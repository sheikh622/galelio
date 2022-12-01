import { useTheme } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import shoes1 from 'assets/images/shoes1.png';
import shoes2 from 'assets/images/shoes2.png';
import shoes3 from 'assets/images/shoes3.png';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';

const FeaturedCreators = ({ brands }) => {
    const theme = useTheme();

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

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {brands?.length > 0 &&
                        brands.map((item) => (
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
                                <Grid container justifyContent="center">
                                    <Grid item md={6} xs={6}>
                                        <CardMedia
                                            component="img"
                                            sx={{ height: { xs: '100%', md: '100%', sm: '100%' }, width: '90%' }}
                                            image={item.image}
                                        />
                                    </Grid>
                                    <Grid item md={6} xs={6}>
                                        <Grid item md={12} xs={12}>
                                            <CardMedia component="img" height="auto" image={item.image} />
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <CardMedia sx={{ marginTop: '10px' }} component="img" height="auto" image={item.image} />
                                        </Grid>
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
                                            <Typography variant="body"> 50</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default FeaturedCreators;
