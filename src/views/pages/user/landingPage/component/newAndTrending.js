import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NftCard from '../../commonComponent/nftCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const NewAndTrendingNfts = ({ nfts }) => {
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
        <Grid container-fluid spacing={gridSpacing} sx={{ background: '', margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                            New & Trending
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
                {nfts && nfts.length > 0 && (
                        <>
                            <Grid item xs={12}>
                                <Carousel
                                    responsive={responsive}
                                    autoPlay={true}
                                    autoPlaySpeed={2800}
                                    customTransition="all .5"
                                    transitionDuration={500}
                                    infinite={true}
        
                                >

                       { nfts.map((item) => 
                        <Grid
                        container
                        justifyContent="left"
                        spacing={0}
                        sx={{ textAlign: 'center',  width: '500%'  }}
                    > <NftCard data={item} />
                    </Grid>
                        )}
                       </Carousel>
                       </Grid>
                       </>
                        )}
                
           
        </Grid>
    );
};

export default NewAndTrendingNfts;
