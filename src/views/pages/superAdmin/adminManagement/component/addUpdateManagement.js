import { useState, forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FormattedMessage } from 'react-intl';
import { addAdmin, updateAdmin } from 'redux/adminManagement/actions';
import { useTheme } from '@mui/material/styles';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
    Button, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton,
    InputAdornment, TextField, Divider, OutlinedInput, FormHelperText
} from '@mui/material';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);


export default function AddUpdateDialog({ fname, lname, email, open, setOpen, setUpdate, update, page, limit, search, brandName, setBrandName, brandId }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    console.log(fname, "page");
    console.log(lname, "limit");
    console.log(email, "limit");
    const validationSchema = Yup.object({
        fname: Yup.string()
            .required('First Name is required!')
            .max(42, 'First Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lname: Yup.string()
            .required('Last Name is required!')
            .max(42, 'Last Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
        email: Yup.string().email('Enter valid email').max(255).required('Email is required!'
        ),
        password: Yup.string().max(255).required('Password is required!')
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fname: update == false ? '' : fname,
            lname: update == false ? '' : lname,
            email: update == false ? '' : email,
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            if (update == false) {
                dispatch(
                    addAdmin({
                        firstName: values.fname,
                        lastName: values.lname,
                        email: values.email,
                        password: values.password,
                        page: page,
                        limit: limit,
                        search:search,
                        handleClose: handleClose,

                    })
                );
            } else {
                console.log(values, 'values')
                dispatch(
                    updateAdmin({
                        email:email,
                        password: values.password,
                        page: page,
                        limit: limit,
                        search:search,
                        handleClose: handleClose,

                    })
                );
            }
        }
    });
    const handleClose = () => {
        setOpen(false);
        setUpdate(false);
        formik.resetForm();
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
                <DialogTitle id="alert-dialog-slide-title1">{update == false ? 'Add Admin' : 'Update Admin'}</DialogTitle>
                <Divider />
                <DialogContent>
                    {update == false ? (
                        <form autoComplete="off" onSubmit={formik.handleSubmit}>

                            <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                First Name</InputLabel>
                            <TextField

                                id="fname"
                                name="fname"
                                // label="First fname"
                                value={formik.values.fname}
                                onChange={formik.handleChange}
                                error={formik.touched.fname && Boolean(formik.errors.fname)}
                                helperText={formik.touched.fname && formik.errors.fname}
                                fullWidth
                                autoComplete="given-name"
                            />
                            <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                Last Name</InputLabel>
                            <TextField

                                id="lname"
                                name="lname"
                                // label="Last lname"
                                value={formik.values.lname}
                                onChange={formik.handleChange}
                                error={formik.touched.lname && Boolean(formik.errors.lname)}
                                helperText={formik.touched.lname && formik.errors.lname}
                                fullWidth
                                autoComplete="given-name"
                            />
                            <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                                Email</InputLabel>
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
                                Password</InputLabel>
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
                                <FormHelperText sx={{ marginLeft: "18px" }} error id="standard-weight-helper-text-password-login">
                                    {formik.errors.password}
                                </FormHelperText>
                            )}

                        </form>
                    ) : (<form autoComplete="off" onSubmit={formik.handleSubmit}>




                        <InputLabel sx={{ marginTop: '25px' }} htmlFor="outlined-adornment-password-login">
                            Email</InputLabel>
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
                           New Password</InputLabel>
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
                            <FormHelperText sx={{ marginLeft: "18px" }} error id="standard-weight-helper-text-password-login">
                                {formik.errors.password}
                            </FormHelperText>
                        )}

                    </form>)}


                </DialogContent>
                <Divider />
                <DialogActions sx={{ pr: 2.5 }}>
                    <Button
                        sx={{ color: theme.palette.error.dark, borderColor: theme.palette.error.dark }}
                        onClick={() => {
                            handleClose();
                        }}
                        color="secondary"
                    >
                        Cancel
                    </Button>

                    <Button
                        variant="contained"
                        size="small"
                        // onClick={() => {
                        //     handleClose();
                        // }}
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                    >
                        {update == false ?
                            'Add'
                            : 'Update'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
