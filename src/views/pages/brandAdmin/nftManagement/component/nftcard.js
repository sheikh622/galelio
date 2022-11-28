import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, CardContent, CardMedia, Grid, Stack, Typography, Tooltip } from '@mui/material';
import MainCard from './mainCard';
import EditNftDialog from './editNftDialog';
import RequestForMintDialog from './requestForMintDialog';
import { useEffect } from 'react';
const NftCard = ({ nftData, categoryId, search, page, limit, type }) => {
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const [openRequestMint, setOpenRequestMint] = useState(false);
    const [editNftOpen, setEditNftOpen] = useState(false);
    const [image, setImage] = useState([]);
    const [nftInfo, setNftInfo] = useState({
        id:null,
        nftName: '',
        nftDescription: '',
        nftPrice: 0,
        mintType: 'directMint',
        currencyType: 'ETH',
        fieldDataArray: [],
        images: []
    });

    useEffect(() => {
        const length = nftData.asset.split('/').length;
        setImage([
            {
                image: { name: nftData.asset.split('/')[length - 1] },
                quantity: nftData.NFTTokens.length
            }
        ]);
    }, [nftData]);
    return (
        <>
            <EditNftDialog
                nftInfo={nftInfo}
                categoryId={categoryId}
                type={type}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={editNftOpen}
                setOpen={setEditNftOpen}
            />
            <RequestForMintDialog
                nftData={nftData}
                categoryId={categoryId}
                type={type}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={openRequestMint}
                setOpen={setOpenRequestMint}
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
                                        setEditNftOpen(true);
                                        setNftInfo({
                                            id:nftData.id,
                                            nftName: nftData.name,
                                            nftDescription: nftData.description,
                                            nftPrice: nftData.price,
                                            mintType: nftData.mintType,
                                            currencyType: nftData.currencyType,
                                            fieldDataArray: nftData.NFTMetaData,
                                            images: image
                                        });
                                    }}
                                >
                                    <Typography style={{ textDecoration: 'underline' }}> Edit NFT</Typography>
                                </Button>
                            </Stack>
                            <Stack direction="row" justifyContent="end" alignItems="center">
                                <Button
                                    variant="text"
                                    color="primary"
                                    sx={{ marginRight: '5px' }}
                                    onClick={() => {
                                        console.log({ nftData });
                                        setOpenRequestMint(true);
                                    }}
                                >
                                    <Typography style={{ textDecoration: 'underline' }}> Request</Typography>
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
