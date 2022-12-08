import { forwardRef, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Dialog, DialogContent, InputLabel, TextField, Grid, DialogTitle, Divider, DialogActions, Slide } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addCategory, updateCategory } from 'redux/categories/actions';
import FileInput from '../../../../../shared/component/FileInput';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateCategory({ open, setOpen, categoryData, page, limit, search }) {
    const dispatch = useDispatch();
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (categoryData.id == null) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
    }, [categoryData]);

    const validationSchema = Yup.object({
        isUpdate: Yup.boolean().default(isUpdate),
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
        description: Yup.string()
            .required('Description is required!')
            .max(42, 'Description can not exceed 200 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Description'),
        image: Yup.mixed().when(['isUpdate'], {
            is: true,
            then: Yup.mixed(),
            otherwise: Yup.mixed().required('Image is required')
        })
    });

    const errorHandler = (values) => {
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
        initialValues: categoryData,
        validationSchema,
        onSubmit: async (values) => {
            const isValid = errorHandler(values);
            if (isValid) {
                if (categoryData.id == null) {
                    await dispatch(
                        addCategory({
                            name: values.name,
                            description: values.description,
                            image: values.image,
                            page: page,
                            limit: limit,
                            search: search,
                            handleClose: handleClose
                        })
                    );
                } else {
                    dispatch(
                        updateCategory({
                            categoryId: categoryData.id,
                            name: values.name,
                            description: values.description,
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
                <DialogTitle id="form-dialog-title">{categoryData.id == null ? 'Add Category ' :
                 ' Update Category '}</DialogTitle>
                <Divider />
                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container>
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

                            <InputLabel sx={{ marginTop: '15px' }} htmlFor="outlined-adornment-password-login">
                                Description
                            </InputLabel>
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
                            <FileInput formik={formik} accept="image/*" fieldName="image" placeHolder="Add Category Image" />
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
                            onClick={formik.handleSubmit}
                            disableElevation
                        >
                            {categoryData.name !== '' ? 'Update ' : 'Add '}
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
