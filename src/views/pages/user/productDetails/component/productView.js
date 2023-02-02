// material-ui
import { useTheme } from '@mui/material/styles';

import { CardMedia, Grid, Typography, Button, Alert, InputLabel, Select, FormControl, Box, MenuItem } from '@mui/material';

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
import { Link as RouterLink, useNavigate,redirect } from 'react-router-dom';
import { useState } from 'react';
import { buyNft, resellNft, redeemNft, getNftBuyer, addDeliveryNft, changeTokenId } from 'redux/nftManagement/actions';
// import ResellDialog from "./resellDialog"
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import BLOCKCHAIN from '../../../../../constants';
import CircularProgress from '@mui/material/CircularProgress';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const PropertiesView = ({ nft }) => {


    console.log('nft from product view',nft);
    const dispatch = useDispatch();
    const [resell, setResell] = useState(false);
    const [bought, setBought] = useState(false);
    const [redeem, setRedeem] = useState(false);
    const [loader, setLoader] = useState(false);
    const [redeemLoader, setRedeemLoader] = useState(false);
    const [resellLoader, setResellLoader] = useState(false);
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const theme = useTheme();
  

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
            <Grid sx={{ width: '100%' }}>
                <Button
                    sx={{ float: { md: 'right' } }}
                    className="buy"
                    variant="contained"
                    size="large"
                    onClick={() => {
                        if (nft.mintType == 'directMint') {
                            setOpen(true);
                        } else if (nft.mintType == 'lazyMint') {
                            handleResellNft();
                        }
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

    const buyNftResolve = () => {
        setBought(true);
        setLoader(false);
    };

    const redeemNftResolve = () => {
        setRedeem(true);
        setRedeemLoader(false);
    };

    const resellNftResolve = () => {
        setResell(true);
        setResellLoader(false);
        setOpen(false);
    };

    const handleBuyNft = async () => {
        if (user == null) {
            navigate('/login');
        } else if (nft.mintType == 'directMint') {
            setLoader(true);

            let erc20Address = BLOCKCHAIN.ERC20;
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;
            let price = ethers.utils.parseEther(nft.price.toString());
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = signer.getAddress();

            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
            const token = new ethers.Contract(erc20Address, Erc20, signer);
            // await (await token.approve(MarketplaceAddress.address, price)).wait();

            // -------------
            let approvalAmount = await token.allowance(address, MarketplaceAddress.address);

            let approvePrice = ethers.utils.parseEther('10000');
            if (approvalAmount.toString() < nft.price.toString()) {
                await (await token.approve(MarketplaceAddress.address, approvePrice)).wait();
            }
            // ---------------
console.log('tokenId, contractAddress, price from product view',tokenId, contractAddress, price);
            await (await marketplace.purchaseItem(tokenId, contractAddress, price))
                .wait()
                .then((data) => {
                    dispatch(
                        buyNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress,
                            buyNftResolve: buyNftResolve
                        })
                    );
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        } else if (nft.mintType == 'lazyMint') {
            setLoader(true);

            let signers = nft.signerAddress;
            let erc20Address = BLOCKCHAIN.ERC20;
            let signature = nft.NFTTokens[0].signature;
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;
            // let contractAddress = "0x6e9550E5fee2bE7BdB208214e9cE2B47131a5Ca0";
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = signer.getAddress();
            const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);

            let prices = ethers.utils.parseEther(nft.price.toString());

            let voucher = {
                uri: nft.tokenUri,
                price: prices,
                token: erc20Address
            };

            let validatorAddress = '0x6f3b51bd5b67f3e5bca2fb32796215a796b79651';
            const token = new ethers.Contract(erc20Address, Erc20, signer);
            //const signature = await signer._signTypedData(domain, types, voucher);
            // const verifyAddr = ethers.utils.verifyTypedData(domain, types, voucher, signature);

            let approvalAmount = await token.allowance(address, contractAddress);

            let approvePrice = ethers.utils.parseEther('10000');
            if (approvalAmount.toString() < nft.price.toString()) {
                await (await token.approve(contractAddress, approvePrice)).wait();
            }
            // await (await token.approve(contractAddress, prices)).wait();

            //
            try {
                let mintedNFT = await (await nfts.buyNft(voucher, signature, MarketplaceAddress.address)).wait();
                const id = parseInt(mintedNFT.events[0].args[2]);

                dispatch(
                    changeTokenId({
                        id: nft.NFTTokens[0].id,
                        tokenId: id.toString()
                    })
                );

                dispatch(
                    buyNft({
                        nftId: nft.id,
                        nftToken: nft.NFTTokens[0].id,
                        buyerAddress: mintedNFT.from,
                        contractAddress: contractAddress,
                        buyNftResolve: buyNftResolve
                    })
                );
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const handleResellNft = async () => {
        if (user == null) {
            navigate('/login');
        } else if (nft.mintType == 'directMint') {
            setResellLoader(true);
            let erc20Address = BLOCKCHAIN.ERC20;
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;

            let rrprice = ethers.utils.parseEther(rprice.toString());

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

            await (await nfts.approve(MarketplaceAddress.address, tokenId)).wait();
            await (await marketplace.resellItem(tokenId, contractAddress, rrprice))
                .wait()
                .then((data) => {
                    dispatch(
                        resellNft({
                            rprice: rprice,
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress,
                            resellNftResolve: resellNftResolve
                        })
                    );
                    toast.success('NFT is Resold');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        } else if (nft.mintType == 'lazyMint') {
            let erc20Address = BLOCKCHAIN.ERC20;
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;

            let rrprice = ethers.utils.parseEther(nft.price.toString());

            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

            // await (await nfts.approve(MarketplaceAddress.address, tokenId)).wait();
            await (await marketplace.makeItem(erc20Address, tokenId, contractAddress, rrprice))
                .wait()
                .then((data) => {
                    dispatch(
                        resellNft({
                            nftId: nft.id,
                            nftToken: nft.NFTTokens[0].id,
                            buyerAddress: data.from,
                            contractAddress: contractAddress,
                            resellNftResolve: resellNftResolve
                        })
                    );

                    toast.success('NFT is Resold');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
            setOpen(false);
        }
    };

    const handleRedeemNft = async () => {
        if (user == null) {
            navigate('/login');
        } else if (nft.mintType == 'directMint') {
            setRedeemLoader(true);
            let erc20Address = BLOCKCHAIN.ERC20;
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

            await (await marketplace.redeemNft(tokenId, contractAddress))
                .wait()
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
                            NftId: nft.id,
                            UserId: user.id,
                            redeemNftResolve: redeemNftResolve
                        })
                    );

                    toast.success('NFT Redeem successfully');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        } else if (nft.mintType == 'lazyMint') {
            setRedeemLoader(true);
            let erc20Address = BLOCKCHAIN.ERC20;
            let tokenId = parseInt(nft.NFTTokens[0].tokenId);
            let contractAddress = nft.Brand.BrandCategories[0].contractAddress;
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();

            const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
            let rrprice = ethers.utils.parseEther(nft.price.toString());

            await (await marketplace.redeem(erc20Address, tokenId, contractAddress, rrprice))
                .wait()
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
                            NftId: nft.id,
                            UserId: user.id,
                            redeemNftResolve: redeemNftResolve
                        })
                    );

                    toast.success('NFT Redeem successfully');
                })
                .catch((error) => {
                    toast.error(error.message);
                });
        }
    };

    const buyerNft = useSelector((state) => state.nftReducer.nftBuyer);
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
    }, [useSelector, dispatch, resell, bought, redeem]);

    useEffect(() => {}, []);
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} sm={12} component={RouterLink} to="/companyPage">
                        <CardMedia component="img" 
                        sx={{ height: '592px' }} image={nft?.asset ? nft?.asset : watch1} alt="green iguana" />
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid mt={4} ml={2} item xs={12}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Avatar
                                                        alt="User 1"
                                                        src={nft?.Brand?.image}
                                                        sx={{ width: 56, height: 56, objectFit: 'fill' }}
                                                    />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs
                                                    zeroMinWidth
                                                    component={RouterLink}
                                                    sx={{ textDecoration: 'none' }}
                                                    to="/companyPage"
                                                >
                                                    <Typography align="left" fontWeight={600} variant="h2" className="brand">
                                                        {nft?.Brand?.name}
                                                    </Typography>
                                                    <Typography align="left" variant="h3" className="creator">
                                                        Creator
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item mt={2} xs={12}>
                                            <Typography
                                                className="Lux"
                                                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                variant="h3"
                                            >
                                                {nft?.name ? nft?.name : 'Luxury Stainless Watch'}{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="body2">
                                                {nft?.description}{' '}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Box sx={{ borderRadius: '4px', width: '95%', margin: '0 auto' }}>
                                                <FormControl fullWidth>
                                                    <InputLabel id="demo-simple-select-label">PROOF OF AUTHENTICITY</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                    >
                                                        {nft?.NFTMetaFiles.map((option) => (
                                                            <MenuItem
                                                                // component={redirect}
                                                                // to={option.fieldValue}
                                                                // key={option.fieldValue}
                                                                // value={option.fieldValue}
                                                                // onClick={useNavigate(option.fieldValue)}
                                                                onClick={()=>{
                                                                    // useNavigate(option.fieldValue)
                                                                    window.open(option.fieldValue,'_blank')
                                                                }}
                                                            >
                                                                
                                                                {option.fieldName}


                                                                
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                            {/*     // <TextField
                                        //     sx={{ borderRadius: '4px' }}
                                        //     className="select"
                                        //     fullWidth
                                        //     id="standard-select-currency"
                                        //     select
                                        //     lable='PROOF OF AUTHENTICITY'
                                        //     value={fieldValue}
                                        //     onChange={(e) => setFieldValue(e.target.value)}
                                        // >
                                        
                                        //     {nft?.NFTMetaFiles.map((option) => (
                                        //         <MenuItem key={option.fieldValue} value={option.fieldValue}>
                                        //             {option.fieldName}
                                        //         </MenuItem>
                                        //     ))}
                                        // </TextField> */}
                                        </Grid>
                                        <Grid item mt={2} mb={2} className="timer" xs={12}>
                                            <Grid className="auction" container>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="black" variant="body">
                                                        Auction Time{' '}
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="black" variant="body">
                                                        {' '}
                                                        2h : 40m : 03s
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Grid container>
                                                <Grid mt={-2} item md={3} xs={12} sm={12}>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#404040'}
                                                            sx={{ paddingLeft: { md: '22px' }, textAlign: { md: 'left' } }}
                                                            className="price"
                                                            variant="body2"
                                                        >
                                                            Price
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#262626'}
                                                            sx={{ paddingLeft: { md: '22px' }, textAlign: { md: 'left' } }}
                                                            className="ETH "
                                                            variant="h3"
                                                        >
                                                            {nft.price} {nft.currencyType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                {/*      {buyerNft?.founded && (
                                            <>
                                                <Grid item xs={12} md={12} mt={1}>
                                                    {(nft?.transactionHash !== '' || nft?.transactionHash) && (
                                                        <>
                                                            <Accordion sx={{ margin: '10px', border: '2px solid', borderRadius: '4px' }}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}
                                                                    aria-controls="panel1a-content"
                                                                    id="panel1a-header"
                                                                >
                                                                    <Typography>Transaction hash</Typography>
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <a target="_blank" href={nft?.transactionHash}>
                                                                        {nft?.transactionHash}
                                                                    </a>
                                                                </AccordionDetails>
                                                            </Accordion>
                                                        </>
                                                    )}
                                                </Grid>
                                                <Grid item xs={12} md={12}>
                                                    <Accordion sx={{ margin: '10px', border: '2px solid', borderRadius: '4px' }}>
                                                        <AccordionSummary
                                                            expandIcon={<ExpandMoreIcon />}
                                                            aria-controls="panel2a-content"
                                                            id="panel2a-header"
                                                        >
                                                            <Typography>Contract address</Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>{nft?.Category?.BrandCategories[0].contractAddress}</Typography>
                                                        </AccordionDetails>
                                                    </Accordion>
                                                </Grid>
                                            </>
                                        )} */}

                                                <>
                                                    {(bought == true || nft?.isSold == true) && JSON.stringify(buyerNft) === '{}' ? (
                                                        <>
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
                                                                        <Grid item md={12} sx={{ mt: 1, display: 'flex' }}>
                                                                            <Grid item md={6} xs={12} sm={12}>
                                                                                {buyerNft?.status == 'Redeem' || redeem ? (
                                                                                    <>
                                                                                        <Alert severity="success">
                                                                                            <b>This item is Redeemed</b>
                                                                                        </Alert>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        {buyerNft?.status !== 'Resell' && redeem !== true && (
                                                                                            <>
                                                                                                <Button
                                                                                                    sx={{ float: { md: 'right' } }}
                                                                                                    className="buy"
                                                                                                    variant="contained"
                                                                                                    size="large"
                                                                                                    onClick={() => {
                                                                                                        handleRedeemNft();
                                                                                                    }}
                                                                                                >
                                                                                                    {redeemLoader ? (
                                                                                                        <CircularProgress
                                                                                                            sx={{ color: 'white' }}
                                                                                                        />
                                                                                                    ) : (
                                                                                                        <span> Redeem</span>
                                                                                                    )}
                                                                                                </Button>
                                                                                            </>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                            </Grid>
                                                                            {buyerNft?.status == 'Resell' || resell == true ? (
                                                                                <>
                                                                                    <Grid
                                                                                        item
                                                                                        md={12}
                                                                                        xs={12}
                                                                                        sm={12}
                                                                                        textAlign="center"
                                                                                        sx={{}}
                                                                                    >
                                                                                        <Alert severity="info" sx={{ float: 'left' }}>
                                                                                            <b>This item is resold by you!</b>
                                                                                        </Alert>
                                                                                    </Grid>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    {buyerNft?.status !== 'Redeem' && redeem == false && (
                                                                                        <>
                                                                                            {resellLoader ? (
                                                                                                <CircularProgress sx={{ color: 'white' }} />
                                                                                            ) : (
                                                                                                <ResellDialog />
                                                                                            )}
                                                                                        </>
                                                                                    )}
                                                                                </>
                                                                            )}
                                                                        </Grid>
                                                                    </>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {bought !== true && (
                                                                        <Grid
                                                                            item
                                                                            md={9}
                                                                            xs={12}
                                                                            sm={12}
                                                                            sx={{ marginTop: { md: '-10px', lg: '-10px' } }}
                                                                            textAlign="center"
                                                                        >
                                                                            <Button
                                                                                sx={{ float: { md: 'right' } }}
                                                                                className="buy"
                                                                                variant="contained"
                                                                                size="large"
                                                                                onClick={() => {
                                                                                    handleBuyNft();
                                                                                }}
                                                                            >
                                                                                {loader ? (
                                                                                    <CircularProgress className="circul" />
                                                                                ) : (
                                                                                    <span>Buy Now</span>
                                                                                )}
                                                                            </Button>
                                                                        </Grid>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </>
                                            </Grid>
                                            {/* 
                                            <Button onClick={()=>{
                                                setBought(true)
                                            }}>Set Bought True</Button>
                                            <Button onClick={()=>{
                                                setBought(false)
                                            }}>Set Bought False</Button> */}
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
