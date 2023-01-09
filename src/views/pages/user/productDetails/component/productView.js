// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, Grid, Typography, Button, Alert, AlertTitle, Stack, Box } from '@mui/material';
import React, { useEffect } from 'react';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';
import { ethers } from 'ethers';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import MarketplaceAbi from '../../../../../contractAbi/Marketplace.json';
import MarketplaceAddress from '../../../../../contractAbi/Marketplace-address.json';
import Erc20 from '../../../../../contractAbi/Erc20.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import SubCard from 'ui-component/cards/SubCard';

import { buyNft, resellNft, redeemNft, getNftBuyer, addDeliveryNft } from 'redux/nftManagement/actions';
// import ResellDialog from "./resellDialog"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const PropertiesView = ({ nft }) => {
    const dispatch = useDispatch();
    const [bought, setBought] = useState(false);
    const [resell, setResell] = useState(false);
    const [redeem, setRedeem] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const theme = useTheme();

    useEffect(() => {
        if (user) {
            dispatch(
                getNftBuyer({
                    walletAddress: user?.walletAddress,
                    NFTTokenId: nft.NFTTokens[0].id,
                    NftId: nft.id
                })
            );
        }
    }, [bought, resell, redeem]);

    const buyerNft = useSelector((state) => state.nftReducer.nftBuyer);

    console.log('buyerNft from product view', buyerNft);

    console.log('nft from product view', nft);

    const [open, setOpen] = React.useState(false);
    let rprice = 0;
    const ResellDialog = () => {
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        return (
            <Grid style={{ width: '100%' }}>
                <Button
                    sx={{ float: { md: 'right' } }}
                    className="buy"
                    variant="contained"
                    size="large"
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Resell
                </Button>
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>NFT Resell Price</DialogTitle>
                    <DialogContent>
                        <DialogContentText>Please enter the price for the NFT</DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Price "
                            fullWidth
                            variant="standard"
                            // value={rprice}
                            onChange={(e) => {
                                rprice = e.target.value;
                            }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button
                            onClick={() => {
                                handleResellNft();
                            }}
                        >
                            Resell
                        </Button>
                    </DialogActions>
                </Dialog>
                <Grid></Grid>
            </Grid>
        );
    };

    const handleBuyNft = async () => {
        if (user == null) {
            navigate('/login');
        } else if (nft.mintType == 'directMint') {
            let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Category.BrandCategories[0].contractAddress;
            let price = ethers.utils.parseEther(nft.price.toString());
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
            const token = new ethers.Contract(erc20Address, Erc20, signer);
            await (await token.approve(MarketplaceAddress.address, price)).wait();
            await await marketplace
                .purchaseItem(tokenId, contractAddress, price)
                .then((data) => {
                    setBought(true);
                    dispatch(
                        buyNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress
                        })
                    );

                    console.log('NFT mint success', data);
                })
                .catch((error) => {
                    // console.log('error', error.message);
                    toast.error(error.message);
                });
        } else if (nft.mintType == 'lazyMint') {
            console.log('im in lazy mint else if');
            let signers = nft.signerAddress;
            let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
            let signature = nft.NFTTokens[0].signature;
            let contractAddress = nft.Category.BrandCategories[0].contractAddress;
            // let contractAddress = "0x6e9550E5fee2bE7BdB208214e9cE2B47131a5Ca0";
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
            console.log(nfts);
            console.log(signers);
            console.log(contractAddress);
            console.log(signature);
            let prices = ethers.utils.parseEther(nft.tokenPrice);

            let voucher = {
                uri: nft.tokenUri,
                price: prices,
                token: erc20Address
            };

            console.log('Marketplace: ', MarketplaceAddress.address);
            let validatorAddress = '0x6f3b51bd5b67f3e5bca2fb32796215a796b79651';
            const token = new ethers.Contract(erc20Address, Erc20, signer);
            await (await token.approve(contractAddress, prices)).wait();
            await await nfts.lazyMint(validatorAddress, voucher, signature, MarketplaceAddress.address).then((data) => {
                    setBought(true);
                    dispatch(
                        buyNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress
                        })
                    );

                    console.log('NFT mint success lazy mint', data);
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };

    const handleResellNft = async () => {
        if (user == null) {
            navigate('/login');
        } else {
            let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Category.BrandCategories[0].contractAddress;

            rprice = ethers.utils.parseEther(rprice.toString());
            console.log('erc20Address', erc20Address);
            console.log('tokenId', tokenId);
            console.log('contractAddress', contractAddress);

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            console.log('signer', signer);
            console.log('MarketplaceAbi.abi', MarketplaceAbi.abi);
            const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
            console.log(marketplace);
            console.log(tokenId);
            console.log(contractAddress);
            await await nfts.approve(MarketplaceAddress.address, tokenId);
            await await marketplace
                .resellItem(tokenId, contractAddress, rprice)
                .then((data) => {
                    dispatch(
                        resellNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress
                        })
                    );
                    setResell(true);
                    setOpen(false);
                    toast.success('NFT is Resold');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };

    const handleRedeemNft = async () => {
        if (user == null) {
            navigate('/login');
        } else {
            let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Category.BrandCategories[0].contractAddress;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

            await await marketplace
                .redeemNft(tokenId, contractAddress)
                .then((data) => {
                    dispatch(
                        redeemNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress
                        })
                    );
                    dispatch(
                        addDeliveryNft({
                            status: 'Pending',
                            TokenId: nft.NFTTokens[0].id,
                            WalletAddress: data.from,
                            NftId: nft.id
                        })
                    );
                    setRedeem(true);
                    toast.success('NFT Redeem successfully');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={4} lg={4} className="Productdetails" sx={{ height: 'auto' }}>
                        <SubCard  className="tableShadow">
                            <img src={nft?.asset} alt="Statement Image" className="ProductimageSize" />
                        </SubCard>{' '}
                    </Grid>
                    <Grid item md={1} lg={1} sm={12} sx={{ display: { xs: 'none', sm: 'none', md: 'block', lg: 'block' } }}>
                        {' '}
                        <Box className="line">h</Box>{' '}
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid mt={2} ml={1} item md={12} xs={12}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item md={2}>
                                                    <Avatar
                                                        alt="User 1"
                                                        src={nft?.Brand?.image}
                                                        sx={{ width: 80, height: 80, objectFit: 'fill' }}
                                                    />
                                                </Grid>

                                                <Grid
                                                    item
                                                    md={9}
                                                    xs
                                                    zeroMinWidth
                                                    component={RouterLink}
                                                    sx={{ textDecoration: 'none' }}
                                                    to="/companyPage"
                                                >
                                                    <Typography align="left" fontWeight={900} variant="h2" className="brand">
                                                        {nft?.Brand?.name}
                                                    </Typography>
                                                    <Typography align="left" variant="h3" className="creator">
                                                        Creator
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item mt={1} xs={12}>
                                            <Typography
                                                className="Lux"
                                                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                variant="h3"
                                            >
                                                <span>{nft?.name}</span>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="h3">
                                                {nft?.description}
                                            </Typography>
                                        </Grid>

                                        <Grid item mt={1} mb={2} xs={12}>
                                            <Grid container>
                                                <Grid item md={4} xs={12} sm={12}>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#404040'}
                                                            sx={{ paddingLeft: { md: '16px' }, textAlign: 'left' }}
                                                            className="price"
                                                            variant="h3"
                                                        >
                                                            Price
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#262626'}
                                                            sx={{ paddingLeft: { md: '15px' }, textAlign: 'left' }}
                                                            className="ETH"
                                                            variant="h3"
                                                        >
                                                            {nft.price} {nft.currencyType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>

                                                <>
                                                    {(bought == true || nft.isSold == true) && JSON.stringify(buyerNft) === '{}' ? (
                                                        <>
                                                            {}
                                                            <Grid item md={8} xs={12} sm={12} textAlign="center">
                                                                <Alert severity="error">
                                                                    <b>This item is sold already!</b>
                                                                </Alert>
                                                            </Grid>
                                                        </>
                                                    ) : (
                                                        <>
                                                            {buyerNft?.founded ? (
                                                                <>
                                                                    <>
                                                                        <Grid sx={{ mt: 4 }} item md={12} xs={12} sm={12} textAlign="right">
                                                                            {buyerNft?.status == 'Redeem' ? (
                                                                                <>
                                                                                    <Alert severity="success">
                                                                                        <b>This item is Redeemed</b>
                                                                                    </Alert>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    {buyerNft?.status !== 'Resell' && (
                                                                                        <Button
                                                                                            sx={{ float: { md: 'right' } }}
                                                                                            className="buy"
                                                                                            variant="contained"
                                                                                            size="large"
                                                                                            onClick={() => {
                                                                                                handleRedeemNft();
                                                                                            }}
                                                                                        >
                                                                                            Redeem
                                                                                        </Button>
                                                                                    )}
                                                                                </>
                                                                            )}
                                                                        </Grid>
                                                                        <Grid sx={{ mt: 3 }} item md={12} xs={12} sm={12} textAlign="right">
                                                                            {buyerNft?.status == 'Resell' ? (
                                                                                <>
                                                                                    <Alert severity="info">
                                                                                        <b>This item is resold.</b>
                                                                                    </Alert>
                                                                                </>
                                                                            ) : (
                                                                                <>{buyerNft?.status !== 'Redeem' && <ResellDialog />}</>
                                                                            )}
                                                                        </Grid>
                                                                    </>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {(bought || redeem || resell) !== true && (
                                                                        <Grid item md={8} xs={12} sm={12} textAlign="center">
                                                                            <Button
                                                                                sx={{ float: { md: 'right' } }}
                                                                                className="buy"
                                                                                variant="contained"
                                                                                size="large"
                                                                                onClick={() => {
                                                                                    handleBuyNft();
                                                                                }}
                                                                            >
                                                                                Buy Now
                                                                            </Button>
                                                                        </Grid>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1} sm={12}></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PropertiesView;
