// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports

import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Properties = ({ nft }) => {
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
                            Properties
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {nft.NFTMetaData.map((item) => (
                        <Grid item md={2} sm={6}>
                            <SubCard className="property" sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}>
                                <Grid container justifyContent="center" spacing={2}>
                                    <Grid item xs={12}>
                                        <Typography className="pbackground" variant="body">
                                            {item.fieldName}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="h3">{item.fieldValue} </Typography>
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
