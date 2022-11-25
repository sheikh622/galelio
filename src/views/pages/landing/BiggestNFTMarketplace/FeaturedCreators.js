// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';
import shoes1 from 'assets/images/shoes1.png';
import shoes2 from 'assets/images/shoes2.png';
import shoes3 from 'assets/images/shoes3.png';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';



// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturedPage = () => {
    const theme = useTheme();
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            creations: '20 Creations',
            title: 'Guli Silberstein'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            creations: '20 Creations',
            title: 'John Bumstead'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            creations: '20 Creations',
            title: 'Orban Isma'
        },

        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            creations: '20 Creations',
            title: 'HorrorCustom'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            creations: '20 Creations',
            title: 'SuperSemi'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            creations: '20 Creations',
            title: 'SuperSemi'
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
                            Featured Creators
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {itemData.map((item) => (
                        <Grid item md={2} sm={6} component={RouterLink}
                        to="/ProductDetails" sx={{color:theme.palette.mode === 'dark' ? "white" : "black"  , textDecoration:'none'}}>
                            <Grid container justifyContent="center"   >
                                <Grid item md={6} xs={6}>
                                    <CardMedia
                                        component="img"
                                        sx={{ height: { xs: '100%', md: '224px;', sm: '100%' }, width: '90%' }}
                                        image={shoes1}
                                    />
                                </Grid>
                                <Grid item md={6} xs={6}>
                                    <Grid item md={12} xs={12}>
                                        <CardMedia component="img" height="auto" image={shoes2} />
                                    </Grid>
                                    <Grid item md={12} xs={12}>
                                        <CardMedia sx={{ marginTop: '10px' }} component="img" height="auto" image={shoes3} />
                                    </Grid>
                                </Grid>

                                <Grid item md={12} xs={12} sx={{ background: theme.palette.mode === 'dark' ? 
                                theme.palette.dark.main : "#f3f3f3", boxShadow: '0px 4px 4px rgb(0 0 0 / 49%)',
                                 padding: '20px 10px' }}>
                                    <Grid item md={12} xs={12}>
                                        <Typography
                                            variant="h3"
                                            sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' }, marginBottom: '10px' }}
                                        >
                                            {item.title}
                                        </Typography>
                                    </Grid>

                                    <Grid item md={12} xs={12} 
                                    sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                        <Typography variant="body"> {item.creations}</Typography>
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

export default FeaturedPage;
