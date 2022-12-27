// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports

import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Properties = ({ nft }) => {
    const theme = useTheme();
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
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' },
                             textTransform: 'capitalize' }}
                        >
                            Properties
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                {nft.NFTMetaData?.length > 0 ? (
                    <>
                        <Carousel
                            responsive={responsive}
                            autoPlay={true}
                            autoPlaySpeed={2800}
                            customTransition="all .5"
                            transitionDuration={500}
                            infinite={true}
                        >
                            {nft.NFTMetaData.map((item) => (
                                <>
                                    <Grid container justifyContent="left" spacing={gridSpacing}
                                     sx={{ textAlign: 'center', width: '500%' }}>
                                        <Grid item md={2} sm={6}>
                                            <SubCard
                                                className="property"
                                                sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                                            >
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
                                    </Grid>
                                </>
                            ))}
                        </Carousel>
                    </>
                ) : (
                    <>
                        <Grid sx={{ width: '100%', margin: '3%' }}>
                            <h3 sx={{ textAlign: 'center' }}>No properties found.</h3>
                        </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default Properties;
