import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { ethers, providers } from 'ethers';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide,Typography  } from '@mui/material';
// import { Oval } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { mintNft, lazyMintNft } from 'redux/nftManagement/actions';
import NFTAbi from '../../../../../contractAbi/NFT.json';
import { create } from 'ipfs-http-client';
import { Buffer } from 'buffer';

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

export default function MintNftDialog({ open, setOpen, page, limit, search, categoryId, loader, setLoader, nftData }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const walletAddress = useSelector((state) => state.auth.walletAddress);
    const handleClose = () => {
        setOpen(false);
        setLoader(false);
    };

    const directMintThenList = async (result) => {
        let nftTokens = nftData.NftTokens;
        console.log('nftTokens array', nftTokens);
        let contractAddress = nftData.contractAddress;
        let nftId = nftData.id;
        let tokenIdArray = [];
        let transactionHash;
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const address = await signer.getAddress();
            const nft = new ethers.Contract(contractAddress, NFTAbi.abi, signer);

            const tokenUri = `https://kwiktrust.infura-ipfs.io/ipfs/${result.path}`;
            const uriArray = await nftTokens.map(() => {
                return tokenUri;
            });
            console.log('uriArray', uriArray);
            if (uriArray.length == 1) {
                console.log('Going in first Condition', uriArray);
                let mintedNFT = await (
                    await nft.mint(tokenUri, MarketplaceAddress.address).catch((error) => {
                        toast.error(`${error.message}`);
                    })
                ).wait();
                transactionHash = `https://mumbai.polygonscan.com/tx/${mintedNFT.transactionHash}`;
                console.log(transactionHash);
                const id = parseInt(mintedNFT.events[2].args[1]);
                console.log('NFT tokenId', id);
                console.log('handle mint of single nft is working');
                tokenIdArray.push({
                    id: nftTokens[0].id,
                    tokenId: id
                });
                let nftDataArray = [];
                nftDataArray.push({
                    nftId: nftId,
                    tokenUri: tokenUri
                });
                console.log('nftDataArray for backend', nftDataArray);
                console.log('tokenArray to be sent to backend', tokenIdArray);
                dispatch(
                    mintNft({
                        nftDataArray: nftDataArray,
                        tokenIdArray: tokenIdArray,
                        transactionHash: transactionHash,
                        signerAddress: address,
                        brandId: brandId,
                        categoryId: categoryId,
                        subCategoryId: subCategoryId,
                        type: type,
                        page: page,
                        limit: limit,
                        handleClose: handleClose
                    })
                );
            } else if (uriArray.length > 1) {
                console.log('Going in Second Condition', uriArray);
                let mintedNFT = await (
                    await nft.bulkMint(uriArray, MarketplaceAddress.address).catch((error) => {
                        toast.error('NFT minting  unsuccessfull');
                    })
                ).wait();

                transactionHash = `https://mumbai.polygonscan.com/tx/${mintedNFT.transactionHash}`;
                console.log('mintedNft of clone', mintedNFT.events);

                let counter = 0;
                let myNftTokenIdArray = [];
                for (let i = 0; i < uriArray.length; i++) {
                    myNftTokenIdArray.push(mintedNFT.events[counter].args[2].toString());
                    console.log('mintedNft of clone', mintedNFT.events[counter].args[2].toString());
                    counter = counter + 2;
                }
                console.log('Transaction hash: ', transactionHash);
                console.log('handle mint of cloned nft is working');
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
                console.log('nftDataArray for backend', nftDataArray);
                console.log('tokenArray to be sent to backend', tokenIdArray);
                dispatch(
                    mintNft({
                        nftDataArray: nftDataArray,
                        tokenIdArray: tokenIdArray,
                        transactionHash: transactionHash,
                        signerAddress: address,
                        brandId: brandId,
                        categoryId: categoryId,
                        subCategoryId: subCategoryId,
                        type: type,
                        page: page,
                        limit: limit,
                        handleClose: handleClose
                    })
                );
            }
        } catch (error) {
            setLoader(false);
            console.log('error', error);
        }
    };

    const handleDirectMint = async () => {
        let image = nftData.asset;
        let price = nftData.price;
        let name = nftData.name;
        let description = nftData.description;
        let projectName = ' KwikTrust';
        let mintedDate = new Date().valueOf();
        let brandName = nftData.Brand.name;
        let categoryName = nftData.Category.name;
        let subCategoryName = nftData.SubCategory.name;
        setLoader(true);
        if (!image || !price || !name || !description) return;
        try {
            const result = await client.add(
                JSON.stringify({ projectName, image, name, description, brandName, categoryName, subCategoryName, mintedDate })
            );
            directMintThenList(result);
        } catch (error) {
            console.log('ipfs uri upload error: ', error);
            setLoader(false);
        }
    };

    const handleLazyMint = async () => {
        let id = nftData.id;
        let image = nftData.asset;
        let priceNft = nftData.price;
        let name = nftData.name;
        let description = nftData.description;
        let brandName = nftData.Brand.name;
        let categoryName = nftData.Category.name;
        let subCategoryName = nftData.SubCategory.name;
        let nftTokens = nftData.NftTokens;
        let contractAddress = nftData.contractAddress;
        console.log('NFT ADDRESS: ', contractAddress);
        setLoader(true);
        // const signingDomain = async () => {
        //     const domain = {
        //         name: 'KwikTrust-Voucher',
        //         version: '1',
        //         verifyingContract: contractAddress,
        //         chainId: 80001
        //     };
        //     return domain;
        // };

        // const domain = await signingDomain();

        // const types = {
        //     NFTVoucher: [
        //         { name: 'uri', type: 'string' },
        //         { name: 'price', type: 'uint256' },
        //         { name: 'token', type: 'address' }
        //     ]
        // };

        // const prices = ethers.utils.parseEther(priceNft.toString());

        let projectName = ' KwikTrust';
        let mintedDate = new Date().valueOf();
        let token = '0x25Be9b58b5990204e08950206df22d7445EFa3C9';
        const result = await client.add(
            JSON.stringify({ projectName, image, name, description, brandName, categoryName, subCategoryName, mintedDate })
        );
        const uri = `https://kwiktrust.infura-ipfs.io/ipfs/${result.path}`;

        ///
        const signingDomain = async () => {
            const domain = {
                name: 'KwikTrust-Voucher',
                version: '1',
                verifyingContract: contractAddress,
                chainId: 80001
            };
            return domain;
        };

        const domain = await signingDomain();

        const types = {
            NFTVoucher: [
                { name: 'uri', type: 'string' },
                { name: 'price', type: 'uint256' },
                { name: 'token', type: 'address' }
            ]
        };
        const prices = ethers.utils.parseEther(priceNft.toString());

        const voucher = {
            uri,
            price: prices,
            token
        };
        ///

        const privateKey = '11aa78f2b32af7dc6c5933157e1144eca14306f9d18a7371eb4c24fef14d57d6';
        const provider = new ethers.providers.JsonRpcProvider('https://rpc-mumbai.maticvigil.com/');
        const signer = new ethers.Wallet(privateKey, provider);
        const signature = await signer._signTypedData(domain, types, voucher);
        const signerAddr = '0xBF09EE4E0F90EE3081Abe249f39a24b46298EFcf';

        let nftDataArray = [
            {
                nftId: id,
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

        console.log('nftDataArray', nftDataArray);
        console.log('tokenIdArray', tokenIdArray);

        dispatch(
            lazyMintNft({
                nftDataArray: nftDataArray,
                tokenIdArray: tokenIdArray,
                brandId: brandId,
                categoryId: categoryId,
                subCategoryId: subCategoryId,
                type: type,
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
                    {loader ? (
                        <Button variant="contained" size="small">
                            <Oval
                                ariaLabel="loading-indicator"
                                height={20}
                                width={20}
                                strokeWidth={5}
                                strokeWidthSecondary={1}
                                color="blue"
                                secondaryColor="white"
                            />
                        </Button>
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
                                    console.log({ nftData });
                                    // if (!loader) {
                                    //     if (walletAddress == undefined) {
                                    //         setOpen(false);
                                    //         toast.error('Connect Metamask');
                                    //     } else {
                                    //         if (valueLabel == 'directMint') {
                                    //             handleDirectMint();
                                    //         } else if (valueLabel == 'lazyMint') {
                                    //             handleLazyMint();
                                    //         }
                                    //     }
                                    // }
                                }}
                            >
                                {' '}
                                Yes
                            </Button>
                        </>
                    )}
                </DialogActions>
            </Dialog>
        </>
    );
}
