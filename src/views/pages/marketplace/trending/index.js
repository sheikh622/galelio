// material-ui
import { Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import WATCHES from 'assets/images/WATCHES.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const Trending = () => {
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
        <Grid container-fluid spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ ml:1, mr:2,  mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                    {itemData.map((item) => (
                        <Grid item xs={11} md={6} lg={3} xl={3} >
                            <Card sx={{ maxWidth: 365, width: '90%', boxShadow: '1px 2px 9px #d3d3d3', borderRadius: '7px' }}>
                                <CardActionArea>
                                    <CardMedia component="img" height="250" image={item.img} />
                                    <CardContent style={{ padding: '6%' }}>
                                        <Grid container>
                                            <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                                <span style={{ fontWeight: '700', fontSize: '120%' }}>{item.heading}</span>
                                                <div style={{ marginTop: '5%' }}>{item.title}</div>
                                            </Grid>
                                            <Grid item xs={4}>
                                                <span style={{ fontWeight: '50 !important ', fontSize: '' }}>{item.creator}</span>
                                            </Grid>
                                        </Grid>

                                        <hr style={{ marginTop:"10%",width: '75%', background: '#e9e9e9', marginBottom: '10% ' }} />

                                        <Grid container sx={{}}>
                                            <Grid item xs={7} sx={{ pt: 1 }}>
                                                <span
                                                    style={{
                                                        background: '#d3d3d3',
                                                        padding: '4% 6%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '70%'
                                                    }}
                                                >
                                                    02h
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    style={{
                                                        background: '#d3d3d3',
                                                        padding: '4% 6%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '70%'
                                                    }}
                                                >
                                                    25m
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    style={{
                                                        background: '#d3d3d3',
                                                        padding: '4% 6%  ',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '70%'
                                                    }}
                                                >
                                                    04s
                                                </span>
                                            </Grid>
                                            <Grid item xs={5} sx={{ pl: 1 }}>
                                                Current Bid
                                                <div>
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

export default Trending;
