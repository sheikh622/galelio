import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import NftCard from '../../commonComponent/nftCard';
const NFTS = ({ marketplaceNfts }) => {

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ paddingRight: '0%' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="left" spacing={gridSpacing} sx={{ mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                    {marketplaceNfts?.nfts?.rows.map((item) => (
                        <NftCard data={item} />
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NFTS;
