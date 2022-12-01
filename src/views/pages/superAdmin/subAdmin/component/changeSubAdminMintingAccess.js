import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { changeSubAdminMintingAccess } from 'redux/subAdmin/actions';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function ChangeSubAdminMintingAccessDialog({ open, setOpen, page, limit, search, subAdminData }) {
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
                <DialogTitle id="alert-dialog-slide-title1">Change Subadmin Status </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description1">
                        <Typography variant="body2" component="span">
                            {subAdminData.hasMintingAccess == false
                                ? 'Are you sure you want to give minting access to this Admin?'
                                : 'Are you sure you want to remove minting access of this Admin?'}
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
                                changeSubAdminMintingAccess({
                                    id: subAdminData.id,
                                    page: page,
                                    limit: limit,
                                    search: search,
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
