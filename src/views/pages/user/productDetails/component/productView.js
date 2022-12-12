// material-ui
import { useTheme } from '@mui/material/styles';
import { CardMedia, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import Avatar from 'ui-component/extended/Avatar';
import { Link as RouterLink } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import { ethers } from 'ethers';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import MarketplaceAbi from '../../../../../contractAbi/Marketplace.json';
import MarketplaceAddress from '../../../../../contractAbi/Marketplace-address.json';
import Erc20 from '../../../../../contractAbi/Erc20.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PropertiesView = ({ nft }) => {
    const theme = useTheme();

    const buyNft = async () => {
        console.log('nft to be buyed', nft);

        let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
        let tokenId = parseInt(nft.NFTTokens[0].tokenId);
        let contractAddress = nft.Category.BrandCategories[0].contractAddress;
        let price = ethers.utils.parseEther(nft.price.toString());

        console.log('price', price);
        console.log('erc20Address', erc20Address);
        console.log('tokenId', tokenId);
        console.log('contractAddress', contractAddress);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        console.log('signer', signer);
        console.log('MarketplaceAbi.abi', MarketplaceAbi.abi);

        const marketplace = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
        console.log('Erc20.abi', Erc20);
        const token = new ethers.Contract(erc20Address, Erc20, signer);
        console.log('token', token);
        await (await token.approve(MarketplaceAddress.address, price)).wait();
        await (
            await marketplace.purchaseItem(tokenId, contractAddress, price).catch((error) => {
                console.log('error', error.message);
                toast.error(error.message);
            })
        ).wait();
        
    };
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} sm={12} component={RouterLink} to="/companyPage">
                        <CardMedia component="img" sx={{ height: '592px' }} image={nft.asset} alt="green iguana" />
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid mt={4} ml={2} item xs={12}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Avatar alt="User 1" src={nft.Brand.image} />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs
                                                    zeroMinWidth
                                                    component={RouterLink}
                                                    sx={{ textDecoration: 'none' }}
                                                    to="/companyPage"
                                                >
                                                    <Typography align="left" fontWeight={600} variant="subtitle1">
                                                        {nft.Brand.name}
                                                    </Typography>
                                                    <Typography align="left" variant="subtitle2">
                                                        Creator
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item mt={4} xs={12}>
                                            <Typography
                                                className="Lux"
                                                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                variant="h3"
                                            >
                                                {nft.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="body2">
                                                {nft.description}
                                            </Typography>
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <TextField
                                                sx={{ borderRadius: '4px' }}
                                                className="select"
                                                fullWidth
                                                id="standard-select-currency"
                                                select
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                            >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
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
                                        </Grid> */}
                                        <Grid item mt={2} mb={2} xs={12}>
                                            <Grid container>
                                                <Grid item md={2} xs={12} sm={12}>
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
                                                            className="ETH"
                                                            variant="h3"
                                                        >
                                                            {nft.price} {nft.currencyType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={10} xs={12} sm={12} textAlign="center">
                                                    <Button
                                                        sx={{ float: { md: 'right' } }}
                                                        className="buy"
                                                        variant="contained"
                                                        size="large"
                                                        onClick={() => {
                                                            buyNft();
                                                        }}
                                                    >
                                                        Buy Now
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PropertiesView;
