// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Container, CardMedia, Grid, Typography } from '@mui/material';

// project imports

import SubCard from 'ui-component/cards/SubCard';
import car from 'assets/images/unsplash_bMSA5-tLFao.png';

import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const PropertiesView = () => {
    const theme = useTheme();

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} sm={12} sx={{ border: '2px solid red' }}>
                        <CardMedia component="img" height="auto" image={car} alt="green iguana" />
                    </Grid>

                    <Grid item md={6} sm={12} sx={{ border: '2px solid red' }}>
                        kjmhngfbvdsxz
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PropertiesView;
