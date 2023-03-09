import { forwardRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
// material-ui
import {
    AppBar,
    DialogActions,
    Dialog,
    Button,
    InputLabel,
    InputAdornment,
    IconButton,
    Input,
    DialogContent,
    DialogTitle,
    TextField,
    Divider,
    Grid,
    List,
    Slide,
    Toolbar,
    Typography
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// assets
import CloseIcon from '@mui/icons-material/Close';

// slide animation
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

// ===============================|| UI DIALOG - FULL SCREEN ||=============================== //

export default function Edit({ open, setOpen , metadata, value}) {
    const theme = useTheme();
    const dispatch = useDispatch();
console.log(metadata , 'metadata' , value, 'value')
    const validationSchema = Yup.object({
        // isUpdate: Yup.boolean().default(isUpdate),
        firstName: Yup.string().required('First Name is required!').max(42, 'First Name can not exceed 42 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lastName: Yup.string().required('Last Name is required!').max(42, 'Last Name can not exceed 42 characters')
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: { firstName: metadata, lastName: value },
        // brandAdminData,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);

            // dispatch(
            //     updateBrandAdmin({
            //         id: brandAdminData.id,
            //         brandId: brandAdminData.brandId,
            //         firstName: values.firstName,
            //         lastName: values.lastName,
            //         email: values.adminEmail,
            //         password: values.adminPassword,
            //         walletAddress: values.walletAddress,
            //         page: page,
            //         limit: limit,
            //         search: search,
            //         handleClose: handleClose
            //     }
            //     )
            // );
        }
    });
    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    // const handleClose = () => {
    //     setOpen(false);
    // };
    // const status = [
    //     {
    //         name: 'Name:',
    //         value: nftData?.name
    //     },
    //     {
    //         name: 'Status:',
    //         value: nftData?.status
    //     },
    //     {
    //         name: 'Description:',
    //         value: nftData?.description
    //     },
    //     {
    //         name: 'Price:',
    //         value: nftData?.price
    //     },
    //     {
    //         name: 'Mint Type:',
    //         value: nftData?.mintType
    //     },
    //     {
    //         name: 'Brand:',
    //         value: nftData?.Brand.name
    //     },
    //     {
    //         name: 'Token URL:',
    //         value: 'Null'
    //     }
    // ];
    return (
        <div>
            <Dialog  open={open} onClose={handleClose} TransitionComponent={Transition} 
            sx={{width:'80%', margin:'0 auto' , maxHeight:'440px'}}>
                {/*    <IconButton float="left" color="inherit" onClick={handleClose} aria-label="close" size="large">
                    <CloseIcon />
                </IconButton> */}
                
                <DialogActions sx={{ pr: 2.5,  }}>
                    <Button
                        className="buttonSize"
                        size="large"
                        sx={{ color: theme.palette.error.dark }}
                        onClick={handleClose}
                        color="secondary"
                    >
                        <CloseIcon />
                    </Button>
                </DialogActions>
                <Grid container sx={{ pr: 2.5, pl: 2.5,}}>
                    <Grid item xs={12} md={12} lg={12} sx={{ p: 2.5 }}>
                        <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                            <Grid container>
                       
                                <Grid item xs={6} md={12} lg={12}>
                                    <InputLabel htmlFor="outlined-adornment-password-login" className="textfieldStyle">
                                      Color
                                    </InputLabel>
                                    <TextField
                                        className="field"
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                                <Grid item xs={6} pt={2} pb={2} md={12} lg={12}>
                                    <InputLabel htmlFor="outlined-adornment-password-login" className="textfieldStyle">
                                       Background
                                    </InputLabel>
                                    <TextField pt={2}
                                        className="field"
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        fullWidth
                                        variant="standard"
                                    />
                                </Grid>
                            </Grid>
                           
                        </form>
                      
                    </Grid>
                  
                </Grid>
                <DialogActions sx={{ pr: 2.5,  }}>
                <Button 
                variant='outlined'
                    className="buttonSize"
                    size="large"
                    sx={{ color: theme.palette.success.dark }}
                    onClick={handleClose}
                    color="secondary"
                >
                  Update
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
}
