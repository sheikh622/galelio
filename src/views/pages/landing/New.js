// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';
import WATCHES from 'assets/images/WATCHES.png';
import CardMedia from '@mui/material/CardMedia';

// assets
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const NewPage = () => {
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
            title: 'Luxury Shoes'
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
        <Grid container-fluid spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                    <Typography variant="h2" mt={4} component="div" sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' } }} >
                            New & Trending
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {itemData.map((item) => (
                        <Grid item md={2} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={1}>
                                        <Grid item>
                                            <CardMedia component="img" height="auto" image={WATCHES} alt="WATCHES" />
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Typography variant="h3" sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                                {item.heading}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={6} xs={12}>
                                            <Typography variant="body2" sx={{ textAlign: { xs: 'center', sm: 'center', md: 'right' } }}>
                                                {item.creator}
                                            </Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12} sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left' } }}>
                                            <Typography variant="body"> {item.title}</Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewPage;
