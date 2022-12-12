import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NftCard from '../../commonComponent/nftCard';

const NewAndTrendingNfts = ({ nfts }) => {
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
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                    {nfts && nfts.length > 0 && nfts.map((item) => <NftCard data={item} />)}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewAndTrendingNfts;
