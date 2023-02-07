import { Grid , Typography} from '@mui/material';
import { gridSpacing } from 'store/constant';
import NftCard from '../../commonComponent/nftCard';
const NFTS = ({ marketplaceNfts }) => {
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ paddingRight: '0%' }}>
            <Grid item xs={12}>
                {marketplaceNfts?.nfts?.rows.length > 0 ? (
                    <Grid container justifyContent="left" spacing={gridSpacing} sx={{ mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                        {marketplaceNfts?.nfts?.rows.map((item) => (
                            <NftCard data={item} />
                        ))}
                    </Grid>
                ) : (
                    <>
                    <Grid item xs={12}>
                    <Typography
                        variant="h3"
                        mt={1}
                        component="div"
                        sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center', color: 'gray' },
                          }}
                    >
                    There are no Items available..!
                    </Typography>
                </Grid>
                    </>
                )}
            </Grid>
        </Grid>
    );
};

export default NFTS;
