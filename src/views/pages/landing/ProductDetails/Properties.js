// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports

import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Properties = () => {
    const theme = useTheme();
    const property = [
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
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
                            Properties
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {property.map((item) => (
                        <Grid item md={2} sm={6}>
                            <SubCard className="property">
                                <Grid container justifyContent="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography className="pbackground" variant="body">
                                            {item.heading}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h3">{item.title} </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography className="plight" variant="body2">
                                            {item.title2}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </SubCard>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Properties;
