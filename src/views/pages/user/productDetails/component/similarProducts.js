import { Grid, Typography } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NftCard from '../../commonComponent/nftCard';
const SimilarProducts = ({ marketplaceNfts }) => {
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
                <Grid container justifyContent="left" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {marketplaceNfts?.nfts?.rows.length >0
                    ?
                    <>
                    {marketplaceNfts?.nfts?.rows.map((item) => (
                        <NftCard data={item} />
                    ))}
                    
                    </>
                    :
                    <>
                     <div style={{width:"100%", margin:"3%"}}>
                   <h3 style={{textAlign:"center"}}>
                No Similar products found.

                   </h3>

                   </div>
                    </>
                    }
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SimilarProducts;
