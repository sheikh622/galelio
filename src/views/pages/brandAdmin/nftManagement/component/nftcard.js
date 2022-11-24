import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, CardContent, CardMedia, Grid, Stack, Typography, Tooltip } from '@mui/material';
import MainCard from './mainCard';
import MintNftDialog from './mintNftDialog';

const NftCard = ({ nftData, categoryId, search, page, limit }) => {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [openMint, setOpenMint] = useState(false);

    return (
        <>
            <MintNftDialog
                nftData={nftData}
                categoryId={nftData.CategoryId}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={openMint}
                setOpen={setOpenMint}
            />
            <MainCard
                content={false}
                boxShadow
                sx={{
                    position: 'relative',
                    '&:hover': {
                        transform: 'scale3d(1.02, 1.02, 1)',
                        transition: 'all .4s ease-in-out'
                    }
                }}
            >
                <CardMedia sx={{ height: 220 }} image={nftData.asset} />
                <CardContent sx={{ p: 2 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                {nftData.name}
                            </Typography>
                        </Grid>

                        <Grid item xs={12} mt={-1.5}>
                            <Typography
                                variant="body1"
                                sx={{
                                    overflow: 'hidden',
                                    height: 30
                                }}
                            >
                                {nftData.description}
                            </Typography>
                        </Grid>

                        <Grid item xs={6}>
                            <Grid item xs={12}>
                                <Typography variant="h6">
                                    {nftData.price} {nftData.currencyType}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6">{nftData.NFTTokens.length} Items</Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction="row" justifyContent="end" alignItems="center">
                                <Button
                                    variant="text"
                                    color="primary"
                                    sx={{ marginRight: '5px' }}
                                    onClick={() => {
                                        console.log({ nftData });
                                    }}
                                >
                                    <Typography style={{ textDecoration: 'underline' }}> Mint</Typography>
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default NftCard;
