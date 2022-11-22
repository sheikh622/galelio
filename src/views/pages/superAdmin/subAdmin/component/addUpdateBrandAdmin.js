import { forwardRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { updateBrandAdmin, addBrandAdmin } from 'redux/brandAdmin/actions';
import { Button, InputLabel, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Divider, Grid } from '@mui/material';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateBrandAdminDialog({ open, setOpen, brandAdminData, page, limit, search }) {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (brandAdminData.id == null) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
    }, [brandAdminData]);

    const validationSchema = Yup.object({
        isUpdate: Yup.boolean().default(isUpdate),
        firstName: Yup.string()
            .required('First Name is required!')
            .max(42, 'First Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid First name'),
        lastName: Yup.string()
            .required('Last Name is required!')
            .max(42, 'Last Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Last name'),
        adminEmail: Yup.string().email('Enter valid email').max(255).required('Email is required!'),

        adminPassword: Yup.mixed().when(['isUpdate'], {
            is: false,
            then: Yup.string()
                .required('Password is required!')
                .matches(
                    /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                    'Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character'
                ),
            otherwise: Yup.string().matches(
                /^(?=(?:.*[A-Z].*){1})(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                'Must Contain 8 Characters,  One Uppercase, One Lowercase, One Number and one special case Character'
            )
        })
    });
    console.log({ brandAdminData });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: brandAdminData,
        validationSchema,
        onSubmit: (values) => {
            if (brandAdminData.id == null) {
                dispatch(
                    addBrandAdmin({
                        brandId: brandAdminData.brandId,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.adminEmail,
                        password: values.adminPassword,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            } else {
                dispatch(
                    updateBrandAdmin({
                        id: brandAdminData.id,
                        brandId: brandAdminData.brandId,
                        firstName: values.firstName,
                        lastName: values.lastName,
                        email: values.adminEmail,
                        password: values.adminPassword,
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
        setOpen(false);
        formik.resetForm();
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className="brandDialog"
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="form-dialog-title">{brandAdminData.id == null ? 'Add Brand Admin ' : ' Update Brand Admin '}</DialogTitle>
                <Divider />
                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container>
                            <>
                                <Grid item xs={6} pt={2} pr={4}>
                                    <InputLabel htmlFor="outlined-adornment-password-login">First Name</InputLabel>
                                    <TextField
                                        id="firstName"
                                        name="firstName"
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={6} pt={2}>
                                    <InputLabel htmlFor="outlined-adornment-password-login">Last Name</InputLabel>
                                    <TextField
                                        id="lastName"
                                        name="lastName"
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={6} pt={2} pr={4}>
                                    <InputLabel htmlFor="outlined-adornment-password-login">Email</InputLabel>
                                    <TextField
                                        id="adminEmail"
                                        name="adminEmail"
                                        value={formik.values.adminEmail}
                                        onChange={formik.handleChange}
                                        error={formik.touched.adminEmail && Boolean(formik.errors.adminEmail)}
                                        helperText={formik.touched.adminEmail && formik.errors.adminEmail}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* {isUpdate == false && ( */}
                                <Grid item xs={6} pt={2}>
                                    <InputLabel htmlFor="outlined-adornment-password-login">Password</InputLabel>
                                    <TextField
                                        id="adminPassword"
                                        name="adminPassword"
                                        value={formik.values.adminPassword}
                                        onChange={formik.handleChange}
                                        error={formik.touched.adminPassword && Boolean(formik.errors.adminPassword)}
                                        helperText={formik.touched.adminPassword && formik.errors.adminPassword}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {/* )} */}
                            </>
                        </Grid>
                    </form>
                </DialogContent>

                <DialogActions sx={{ pr: 3 }}>
                    <AnimateButton>
                        <Button
                            variant="contained"
                            sx={{ my: 3, ml: 1 }}
                            type="submit"
                            size="large"
                            disableElevation
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                        >
                            {brandAdminData.id == null ? 'Add ' : 'Update '}
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
