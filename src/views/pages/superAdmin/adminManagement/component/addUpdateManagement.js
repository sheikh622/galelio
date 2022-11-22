import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { addAdmin, updateAdmin } from 'redux/subAdmin/actions';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import AnimateButton from 'ui-component/extended/AnimateButton';

import {
    Button,
    InputLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    IconButton,
    InputAdornment,
    TextField,
    Divider,
    OutlinedInput,
    FormHelperText,
    Grid
} from '@mui/material';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateDialog({
    adminManagement,
    setAdminManagement,
    open,
    setOpen,
    setUpdate,
    page,
    limit,
    search,
    brandName,
    setBrandName,
    brandId
}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required('First Name is required!')
            .max(42, 'First Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lastName: Yup.string()
            .required('Last Name is required!')
            .max(42, 'Last Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
        email: Yup.string().email('Enter valid email').max(255).required('Email is required!'),
        password: Yup.string().max(255).required('Password is required!')
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: adminManagement,
        validationSchema,
        onSubmit: (values) => {
           
            if (adminManagement.firstName == '') {
                dispatch(
                    addAdmin({
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.email,
                        password: values.password,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            } else {
                
                dispatch(
                    updateAdmin({
                        email: adminManagement.email,
                        password: values.password,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            }
        }
    });
    const handleClose = () => {
        setAdminManagement({
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            block:'',
            mint:''
        });
        setOpen(false);

        formik.resetForm();
    };

    return (
        <>
            <Dialog
                // className="responsiveDialog"
                open={open}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
              
            >
                <DialogTitle id="alert-dialog-slide-title1">{adminManagement.firstName == '' ? 'Add Admin' : 'Update Admin'}</DialogTitle>
                <Divider />
                <DialogContent >
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                    <Grid container>
                        {adminManagement.firstName == '' ? (
                            <>
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    First Name
                                </InputLabel>
                                <TextField
                                    id="firstName"
                                    name="firstName"
                                    // label="First firstName"
                                    value={formik.values.firstName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                    helperText={formik.touched.firstName && formik.errors.firstName}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    Last Name
                                </InputLabel>
                                <TextField
                                    id="lastName"
                                    name="lastName"
                                    // label="Last lastName"
                                    value={formik.values.lastName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                    helperText={formik.touched.lastName && formik.errors.lastName}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    Email
                                </InputLabel>
                                <TextField
                                    id="email"
                                    name="email"
                                    // label="Email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    Password (should contain 1 Uppercase, 1 Numeric and 1 Special character)
                                </InputLabel>
                                
                               
                                
                                <OutlinedInput
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    autoComplete="given-name"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <FormHelperText sx={{ marginLeft: '18px' }} error id="standard-weight-helper-text-password-login">
                                        {formik.errors.password}
                                    </FormHelperText>
                                )}
                            </>
                        ) : (
                            <>
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    Email
                                </InputLabel>
                                <TextField
                                    id="email"
                                    name="email"
                                    // label="Email"
                                    value={adminManagement.email}
                                    // onChange={formik.handleChange}
                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                    helperText={formik.touched.email && formik.errors.email}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                                <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    value={formik.values.password}
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    autoComplete="given-name"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                                size="large"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {formik.touched.password && formik.errors.password && (
                                    <FormHelperText sx={{ marginLeft: '18px' }} error id="standard-weight-helper-text-password-login">
                                        {formik.errors.password}
                                    </FormHelperText>
                                )}
                            </>
                        )}
                  </Grid>
                    </form>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ pr: 2.5 }}>
                    <AnimateButton>
                        <Button
                            variant="contained"
                            sx={{ my: 3, ml: 1 }}
                            size="large"
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                        >
                            {adminManagement.firstName == '' ? 'Add' : 'Update'}
                        </Button>
                    </AnimateButton>
                    <AnimateButton>
                        <Button
                            variant="contained"
                            sx={{ my: 3, ml: 1, color: '#fff' }}
                            onClick={handleClose}
                            color="secondary"
                            size="large"
                        >
                            Cancel
                        </Button>
                    </AnimateButton>
                </DialogActions>
            </Dialog>
        </>
    );
}
