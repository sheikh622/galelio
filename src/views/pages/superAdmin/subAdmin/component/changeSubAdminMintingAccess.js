import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, DialogContentText, Typography } from '@mui/material';
import { changeSubAdminMintingAccess } from 'redux/subAdmin/actions';
// import NFTAbi from '../../../../../contractAbi'
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
export default function ChangeSubAdminMintingAccessDialog({ open, setOpen, page, limit, search, subAdminData , setSubAdminData}) {
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
            walletAddress:'',
            hasMintingAccess:''});
    };

    const handleMintRole =()=>{

        dispatch(
            changeSubAdminMintingAccess({
                id: subAdminData.id,
                page: page,
                limit: limit,
                search: search,
                handleClose: handleClose
            })
        );
    }
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
                <DialogTitle  className="statusHeading" id="alert-dialog-slide-title1" >Change Admin Status </DialogTitle>

                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description1">
                        <Typography variant="body2" component="span" className="statustypo">
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
                        color="secondary"  className='buttonSize' size='large' 
                    >
                        No
                    </Button>
                    <Button
                        variant="contained"
                        className='buttonSize' size='large' 
                        onClick={() => {
                            handleMintRole()
                            
                        }}
                    >
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
