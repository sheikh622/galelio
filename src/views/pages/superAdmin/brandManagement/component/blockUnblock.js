import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { blockBrand } from 'redux/brandManagement/actions';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function BlockUnblockDialog({
    open, setOpen,
      page, limit, brandManagement,search,setBrandManagement
     }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    console.log(brandManagement,'brandManagement=>')
    const handleClose = () => {
        setOpen(false);
        setBrandManagement({
            email: '',
            firstName:'',
            lastName:'',
            password:'',
            block:''
        
        });
        
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
                <DialogTitle id="alert-dialog-slide-title1">Change Status  </DialogTitle>
                
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description1">
                        <Typography variant="body2" component="span">
                     {brandManagement.block == false? 'Are you sure you want to unblock this Admin?' :
                      'Are you sure you want to block  this Admin?'}     
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
                                blockBrand({
                                   email:brandManagement.email,
                                    handleClose: handleClose,
                                    page: page,
                                    limit: limit,
                                    search:search,
                                  
                                    
                                    
                                   
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
