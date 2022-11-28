import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { requestNftForMinting } from 'redux/nftManagement/actions';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function RequestForMintDialog({ open, setOpen, page, limit, search, type, nftData,categoryId }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
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
                            dispatch(
                                requestNftForMinting({
                                    id: nftData.id,
                                    categoryId: categoryId,
                                    page: page,
                                    limit: limit,
                                    search: search,
                                    type: type,
                                    handleClose: handleClose
                                })
                            );
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
