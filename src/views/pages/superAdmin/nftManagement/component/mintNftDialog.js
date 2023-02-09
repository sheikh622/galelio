import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { ethers } from 'ethers';
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, Slide, Typography } from '@mui/material';
// import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mintNft, lazyMintNft } from 'redux/nftManagement/actions';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';
import MarketplaceAbi from '../../../../../contractAbi/Marketplace.json';
import MarketplaceAddress from '../../../../../contractAbi/Marketplace-address.json';
import BLOCKCHAIN from '../../../../../constants';
import { Oval } from 'react-loader-spinner';
const projectId = '2GGvNmnqRYjnz7iJU9Kn6Nnw97C';
const projectSecret = 'a09de1e8b20292cd87460290de554003';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
    host: 'ipfs.infura.io',
    port: 5001,
    protocol: 'https',
    headers: {
        authorization: auth
    }
});

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function MintNftDialog({ open, setOpen, page, limit, search, loader, setLoader, nftData, type }) {

    
    const theme = useTheme();
    const dispatch = useDispatch();
    const walletAddress = useSelector((state) => state.auth.walletAddress);
    const handleClose = () => {
        setOpen(false);
        setLoader(false);
    };

    const directMintThenList = async (result) => {
        let nftTokens = nftData.NFTTokens;
        let contractAddress = nftData.Category.BrandCategories[0].contractAddress;

        let nftId = nftData.id;
        let categoryId = nftData.CategoryId;
        let brandId = nftData.BrandId;
        let price = ethers.utils.parseEther(nftData.price.toString());
        let erc20Address = BLOCKCHAIN.ERC20;
        let tokenIdArray = [];
        let transactionHash;
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const nft = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
            const tokenUri = `https://galileoprotocol.infura-ipfs.io/ipfs/${result.path}`;
            const uriArray = await nftTokens.map(() => {
                return tokenUri;
            });

            if (uriArray.length == 1) {
                let mintedNFT = await (
                    await nft.mint(tokenUri, MarketplaceAddress.address).catch((error) => {
                        toast.error(error.message)
                        setLoader(false)
                        setOpen(false)                            
                    })
                ).wait();

                transactionHash = `https://goerli.etherscan.io/tx/${mintedNFT.transactionHash}`;
                const id = parseInt(mintedNFT.events[0].args[2]);

                const marketplaceAddr = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
                await (
                    await marketplaceAddr.makeItem(erc20Address, id, contractAddress, price, nftData.requesterAddress).catch((error) => {
                
                        toast.error(error.message);
                        setOpen(false)
                        setLoader(false)

                    })
                ).wait();

                tokenIdArray.push({
                    id: nftTokens[0].id,
                    tokenId: id
                });
                let nftDataArray = [];
                nftDataArray.push({
                    nftId: nftId,
                    tokenUri: tokenUri
                });

                dispatch(
                    mintNft({
                        nftDataArray: nftDataArray,
                        tokenIdArray: tokenIdArray,
                        transactionHash: transactionHash,
                        signerAddress: address,
                        brandId: brandId,
                        categoryId: categoryId,
                        type: type,
                        search: search,
                        page: page,
                        limit: limit,
                        handleClose: handleClose
                    })
                );
            } else if (uriArray.length > 1) {
                let mintedNFT = await (
                    await nft.bulkMint(uriArray, MarketplaceAddress.address).catch((error) => {
                        toast.error(error.message);
                        setOpen(false)
                        setLoader(false)
                    })
                ).wait();

                transactionHash = `https://goerli.etherscan.io/tx/${mintedNFT.transactionHash}`;

                let counter = 0;
                let myNftTokenIdArray = [];
                for (let i = 0; i < uriArray.length; i++) {
                    myNftTokenIdArray.push(mintedNFT.events[counter].args[2].toString());
                    counter = counter + 2;
                }
                const marketplaceAddr = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

                await (
                    await marketplaceAddr.makeItemBulk(erc20Address, myNftTokenIdArray, contractAddress, price).catch((error) => {
          
                        toast.error(error.message);
                        setOpen(false)
                        setLoader(false)
                    })
                ).wait();

                nftTokens.map((data, index) => {
                    tokenIdArray.push({
                        id: data.id,
                        tokenId: myNftTokenIdArray[index]
                    });
                });

                let nftDataArray = [];
                nftDataArray.push({
                    nftId: nftId,
                    tokenUri: tokenUri
                });

                dispatch(
                    mintNft({
                        nftDataArray: nftDataArray,
                        tokenIdArray: tokenIdArray,
                        transactionHash: transactionHash,
                        signerAddress: address,
                        brandId: brandId,
                        categoryId: categoryId,
                        type: type,
                        search: search,
                        page: page,
                        limit: limit,
                        handleClose: handleClose
                    })
                );
            }
        } catch (error) {
            
            setLoader(false);
            setOpen(false)
        }
    };

    const handleDirectMint = async () => {
        setLoader(true);
        let image = nftData.asset;
        let price = nftData.price;
        let name = nftData.name;
        let description = nftData.description;
        let projectName = 'Galelio';
        let mintedDate = new Date().valueOf();
        let categoryName = nftData.Category.name;
        let brandName = nftData.Brand.name;
        let metaData = nftData.NFTMetaData;
        // setLoader(true);
        if (!image || !price || !name || !description) return;
        try {
            const result = await client.add(
                JSON.stringify({ projectName, brandName, categoryName, image, name, description, price, mintedDate, metaData })
            );
            directMintThenList(result);
        } catch (error) {
            toast.error(error.message);

            setLoader(false);
            setOpen(false)
        }
    };

    const handleLazyMint = async () => {
        setLoader(true);
        let brandId = nftData.BrandId;
        let categoryId = nftData.CategoryId;
        let nftId = nftData.id;
        let image = nftData.asset;
        let prices = nftData.price;
        let price = ethers.utils.parseEther(prices.toString());
        let name = nftData.name;
        let description = nftData.description;
        let projectName = 'Galelio';
        let mintedDate = new Date().valueOf();
        let categoryName = nftData.Category.name;
        let brandName = nftData.Brand.name;
        let metaData = nftData.NFTMetaData;
        let contractAddress = nftData.Category.BrandCategories[0].contractAddress;
        // let contractAddress = "0x6e9550E5fee2bE7BdB208214e9cE2B47131a5Ca0"
        let nftTokens = nftData.NFTTokens;

        const result = await client.add(
            JSON.stringify({ projectName, brandName, categoryName, image, name, description, price, mintedDate, metaData })
        );
        const uri = `https://galileoprotocol.infura-ipfs.io/ipfs/${result.path}`;

        let token = BLOCKCHAIN.ERC20;
        // const SIGNING_DOMAIN = 'Voucher';
        // const SIGNATURE_VERSION = '4';
        // const chainId = 5;

        const SIGNING_DOMAIN = 'Galileo-Protocol';
        const SIGNATURE_VERSION = '1';

        const domain = {
            name: SIGNING_DOMAIN,
            version: SIGNATURE_VERSION,
            verifyingContract: contractAddress,
            chainId: 5
        };

        const types = {
            GalileoVoucher: [
                { name: 'uri', type: 'string' },
                { name: 'price', type: 'uint256' },
                { name: 'token', type: 'address' }
            ]
        };
        //const prices = ethers.utils.parseEther(price.toString());
        const voucher = { uri, price, token };

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const signature = await signer._signTypedData(domain, types, voucher);
        const verifyAddr = ethers.utils.verifyTypedData(domain, types, voucher, signature);

        const signerAddr = '0x6f3B51bd5B67F3e5bca2fb32796215A796B79651';

        const nfts = new ethers.Contract(contractAddress, NFTAbi.abi, signer);
        let validatorAddress = '0x6f3b51bd5b67f3e5bca2fb32796215a796b79651';

        // await await nfts.lazyMint(
        //     validatorAddress,
        //     voucher,
        //     signature,
        //     MarketplaceAddress.address
        // );

        let nftDataArray = [
            {
                nftId: nftId,
                tokenUri: uri,
                tokenPrice: prices.toString(),
                signerAddress: signerAddr // save wallet address
            }
        ];

        let tokenIdArray = nftTokens.map((data) => {
            return {
                id: data.id,
                signature: signature,
                erc20Address: token
            };
        });

        dispatch(
            lazyMintNft({
                nftDataArray: nftDataArray,
                tokenIdArray: tokenIdArray,
                brandId: brandId,
                categoryId: categoryId,
                type: type,
                search: search,
                page: page,
                limit: limit,
                handleClose: handleClose
            })
        );
    };

    return (
        <>
            <Dialog
                className="responsiveDialog"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1"> Mint NFT</DialogTitle>
                <DialogContent>
                    <Typography variant="body2" component="span">
                        Are you sure you want to mint this NFT?
                    </Typography>
                </DialogContent>

                <DialogActions sx={{ pr: 2.5 }}>
                    <>
                        {loader ? (
                            <CircularProgress />
                        ) : (
                            <>
                                <Button
                                    sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                                    onClick={handleClose}
                                    color="secondary"
                                >
                                    No
                                </Button>
                                <Button
                                    variant="contained"
                                    size="small"
                                    onClick={() => {
                                        if (!loader) {
                                            if (walletAddress == undefined) {
                                                setOpen(false);
                                                toast.error('Connect Metamask');
                                            } else {
                                                if (nftData.mintType == 'directMint') {
                                                    handleDirectMint();
                                                } else if (nftData.mintType == 'lazyMint') {
                                                    handleLazyMint();
                                                }
                                            }
                                        }
                                    }}
                                >
                                    {' '}
                                    Yes
                                </Button>
                            </>
                        )}
                    </>
                </DialogActions>
            </Dialog>
        </>
    );
}
