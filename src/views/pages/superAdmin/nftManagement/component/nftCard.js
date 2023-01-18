import { useState,useEffect } from 'react';
import { Button, CardContent, CardMedia, Grid, Stack, Typography, Tooltip } from '@mui/material';
import MainCard from './mainCard';
import MintNftDialog from './mintNftDialog';
import RejectNftDialog from './rejectNftDialog';
import EditNftDialog from './editNftDialog';

const NftCard = ({ nftData, search, page, limit, type }) => {
    console.log('nftData', nftData);
    const [loader, setLoader] = useState(false);
    const [openMint, setOpenMint] = useState(false);
    const [rejectMintOpen, setRejectMintOpen] = useState(false);
    const [editNftOpen, setEditNftOpen] = useState(false);
    const [image, setImage] = useState([]);
    const [nftInfo, setNftInfo] = useState({
        id: null,
        brandId: null,
        nftName: '',
        nftDescription: '',
        nftPrice: 0,
        mintType: 'directMint',
        currencyType: 'USDT',
        fieldDataArray: [],
        fileDataArray: [],
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
                categoryId={nftData.Category.id}
                type={type}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={editNftOpen}
                setOpen={setEditNftOpen}
            />
            <RejectNftDialog
                nftData={nftData}
                type={type}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={rejectMintOpen}
                setOpen={setRejectMintOpen}
            />
            <MintNftDialog
                nftData={nftData}
                type={type}
                search={search}
                page={page}
                limit={limit}
                loader={loader}
                setLoader={setLoader}
                open={openMint}
                setOpen={setOpenMint}
            />

            <MainCard
                className="tableShadow"
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
                        <Grid item xs={8}>
                            <Typography variant="subtitle1" sx={{ textDecoration: 'none' }}>
                                {nftData.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body1" sx={{ textDecoration: 'none',  textAlign:'center'
                           }}>
                                {nftData.mintType == 'lazyMint' ? 'Lazy Mint' : 'Mint'}
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
                                {nftData.status == 'MINTED' && (
                                    <>
                                        <Button
                                            className="fontstyling"
                                            variant="contained"
                                            color="primary"
                                            sx={{ marginRight: '5px' }}
                                            onClick={() => {
                                                setEditNftOpen(true);
                                                setNftInfo({
                                                    id: nftData.id,
                                                    brandId: nftData.Brand.id,
                                                    nftName: nftData.name,
                                                    nftDescription: nftData.description,
                                                    nftPrice: nftData.price,
                                                    mintType: nftData.mintType,
                                                    currencyType: nftData.currencyType,
                                                    fieldDataArray: nftData.NFTMetaData,
                                                    fileDataArray: nftData.NFTMetaFiles,
                                                    images: image
                                                });
                                            }}
                                        >
                                            Edit
                                        </Button>
                                    </>
                                )}
                                {nftData.status == 'REQUESTED' && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginRight: '5px' }}
                                        onClick={() => {
                                            setRejectMintOpen(true);
                                        }}
                                    >
                                        Reject
                                    </Button>
                                )}

                                {nftData.status == 'REQUESTED' && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ marginRight: '5px' }}
                                        onClick={() => {
                                            setOpenMint(true);
                                        }}
                                    >
                                        Mint
                                    </Button>
                                )}
                            </Stack>
                        </Grid>
                    </Grid>
                </CardContent>
            </MainCard>
        </>
    );
};

export default NftCard;
