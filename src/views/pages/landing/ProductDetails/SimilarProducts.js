// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Card, Grid, Typography, CardActionArea, CardContent, Divider } from '@mui/material';

// project imports

import { gridSpacing } from 'store/constant';

import CardMedia from '@mui/material/CardMedia';



// =============================|| LANDING - FEATURE PAGE ||============================= //

const SimilarProducts = () => {
    const theme = useTheme();
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Cars',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Shoes',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Real Estate',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Goods',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Cars',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Shoes',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Real Estate',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Goods',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
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
                            Similar Products
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {itemData.map((item) => (
                        <Grid item md={2} sm={6}>
                            <Card sx={{ maxWidth: 365, width: '105%', boxShadow: '1px 2px 9px #d3d3d3', borderRadius: '7px' }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="200" image={item.img} />
                                    <CardContent sx={{ padding: '6%' }}>
                                        <Grid container>
                                            <Grid item xs={8} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                                <span sx={{ fontWeight: '550', fontSize: '130%' }}>{item.heading}</span>
                                                <div sx={{ marginTop: '5%' }}>{item.title}</div>
                                            </Grid>
                                            <Grid item xs={4} sx={{ background: '' }}>
                                                <span sx={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>
                                                    {item.creator}
                                                </span>
                                            </Grid>
                                        </Grid>

                                        {/* <hr sx={{ marginTop:"10%",width: '75%', background: '#e9e9e9', marginBottom: '10% ' }} /> */}

                                        <Divider sx={{ mt: 2, mb: 2 }} />
                                        <Grid container sx={{ background: '' }}>
                                            <Grid item xs={7} sx={{ pt: 1 }}>
                                                <span
                                                    sx={{
                                                        background: '#d3d3d3',
                                                        padding: '3% 4%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    02h
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    sx={{
                                                        background: '#d3d3d3',
                                                        padding: '3% 4%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    25m
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    sx={{
                                                        background: '#d3d3d3',
                                                        padding: '3% 4%  ',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    04s
                                                </span>
                                            </Grid>
                                            <Grid item xs={5} sx={{ pl: 1 }}>
                                                Current Bid
                                                <div sx={{ marginTop: '5%', fontSize: '110%' }}>
                                                    <b>$2913.32</b>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SimilarProducts;
