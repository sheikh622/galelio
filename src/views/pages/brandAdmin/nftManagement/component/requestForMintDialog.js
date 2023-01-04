import { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { requestNftForMinting } from 'redux/nftManagement/actions';
import Erc20 from '../../../../../contractAbi/Erc20.json';
import { ethers } from 'ethers';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function RequestForMintDialog({ open, setOpen, page, limit, search, type, nftData, categoryId }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
    };
    const user = useSelector((state) => state.auth.user);

    const handleMintRequest = async () => {
        console.log('nftData', nftData);
        let profitPercentage = parseInt(nftData.Category.BrandCategories[0].profitPercentage);
        let price = nftData.price;
        console.log('profitPercentage', profitPercentage);
        console.log('price', price);
        let amount = (price / 100) * profitPercentage;
        console.log('amount', amount);
        let prices = ethers.utils.parseEther(amount.toString());

        let erc20Address = '0x9C7F2b187d24147F1f993E932A16e59111675867';
        let ownerAddress = '0x6f3B51bd5B67F3e5bca2fb32796215A796B79651';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const token = new ethers.Contract(erc20Address, Erc20, signer);
        console.log('signer', signer);
        let data = await await token.transfer(ownerAddress, prices);
        console.log('data', data);

        dispatch(
            requestNftForMinting({
                id: nftData.id,
                categoryId: categoryId,
                page: page,
                limit: limit,
                search: search,
                type: type,
                handleClose: handleClose,
                brandId: user.BrandId
            })
        );
    };
    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1">Request Admin for mint</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description1">
                        <Typography variant="body2" component="span">
                            Are you sure you want to request Admin to mint this NFT?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                        onClick={handleClose}
                        color="secondary"
                    >
                        No
                    </Button>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => {
                            handleMintRequest();
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
