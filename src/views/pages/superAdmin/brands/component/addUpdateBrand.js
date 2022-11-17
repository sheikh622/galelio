import { forwardRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Divider, InputLabel } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { addBrand, updateBrand } from '../../../../../redux/brand/actions';
import AnimateButton from 'ui-component/extended/AnimateButton';
import FileInput from '../../../../../shared/component/FileInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateBrandDialog({ brandData, page, limit, search, open, setOpen }) {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (brandData.id == null) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
    }, [brandData]);

    const validationSchema = Yup.object({
        isUpdate: Yup.boolean().default(isUpdate),
        name: Yup.string()
            .required('Brand Name is required!')
            .max(42, 'Brand Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Brand name'),
        location: Yup.string()
            .required('Location is required!')
            .max(42, 'Location can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Location'),
        description: Yup.string()
            .required('Brand is required!')
            .max(42, 'Brand can not exceed 200 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Description'),
        image: Yup.mixed().when(['isUpdate'], {
            is: true,
            then: Yup.mixed(),
            otherwise: Yup.mixed().required('Image is required')
        })
    });
    const errorHandler = (values) => {
        console.log('values', values);

        if (values.image) {
            if (
                values.image.name.split('.').pop() == 'jpg' ||
                values.image.name.split('.').pop() == 'png' ||
                values.image.name.split('.').pop() == 'jpeg '
            ) {
                return true;
            } else {
                toast.error('Upload the files with these extensions: jpg, png, jpeg');
                return false;
            }
        }
        return true;
    };
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: brandData,
        validationSchema,
        onSubmit: (values) => {
            const isValid = errorHandler(values);
            if (isValid) {
                if (brandData.id == null) {
                    dispatch(
                        addBrand({
                            name: values.name,
                            description: values.description,
                            location: values.location,
                            image: values.image,
                            page: page,
                            limit: limit,
                            search: search,
                            handleClose: handleClose
                        })
                    );
                } else {
                    dispatch(
                        updateBrand({
                            brandId: brandData.id,
                            name: values.name,
                            description: values.description,
                            location: values.location,
                            image: values.image,
                            page: page,
                            limit: limit,
                            search: search,
                            handleClose: handleClose
                        })
                    );
                }
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
                <DialogTitle id="alert-dialog-slide-title1">{brandData.id == null ? 'Add Brand' : 'Update Brand'}</DialogTitle>
                <Divider />
                <DialogContent>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container>
                            <Grid item xs={6} pt={4} pr={4}>
                                <InputLabel htmlFor="outlined-adornment-password-login">Name</InputLabel>
                                <TextField
                                    id="name"
                                    name="name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                    helperText={formik.touched.name && formik.errors.name}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={6} pt={4}>
                                <InputLabel htmlFor="outlined-adornment-password-login">Location</InputLabel>
                                <TextField
                                    id="location"
                                    name="location"
                                    value={formik.values.location}
                                    onChange={formik.handleChange}
                                    error={formik.touched.location && Boolean(formik.errors.location)}
                                    helperText={formik.touched.location && formik.errors.location}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} pt={2}>
                                <InputLabel htmlFor="outlined-adornment-password-login">Description</InputLabel>
                                <TextField
                                    id="description"
                                    name="description"
                                    value={formik.values.description}
                                    onChange={formik.handleChange}
                                    error={formik.touched.description && Boolean(formik.errors.description)}
                                    helperText={formik.touched.description && formik.errors.description}
                                    fullWidth
                                    autoComplete="given-name"
                                />
                            </Grid>
                            <Grid item xs={12} pt={2}>
                                <FileInput formik={formik} accept="image/*" fieldName="image" placeHolder="Add Brand Image" />
                            </Grid>
                        </Grid>
                    </form>
                </DialogContent>
                <Divider />
                <DialogActions sx={{ pr: 2.5 }}>
                    <AnimateButton>
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{ my: 3, ml: 1 }}
                            onClick={() => {
                                formik.handleSubmit();
                            }}
                            size="large"
                            disableElevation
                        >
                            {brandData.id == null ? 'Add' : 'Update'}
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
