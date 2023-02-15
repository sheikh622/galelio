import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { deleteSubAdmin } from 'redux/subAdmin/actions';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function DeleteSubAdminDialog({ open, setOpen, page, limit, search, subAdminData , setSubAdminData}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
        setSubAdminData({ id: null,
            firstName: '',
            lastName: '',
            adminEmail: '',
            adminPassword: '',
            walletAddress:"",
            role:'',
            isActive:'',
            walletAddress:''});

    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1"  className="statusHeading">Delete Subadmin</DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description1">
                        <Typography variant="body2" component="span" className="statustypo">
                            Are you sure you want to delete this Subadmin?
                        </Typography>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                        onClick={handleClose}
                        color="secondary"  className='buttonSize' size='large' 
                    >
                        No
                    </Button>
                    <Button
                        variant="contained"
                        className='buttonSize' size='large' 
                        onClick={() => {
                            dispatch(
                                deleteSubAdmin({
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
