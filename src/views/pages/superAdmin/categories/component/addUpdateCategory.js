import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import {
    Button,
    Stack,
    Dialog,
    CardContent,
    DialogContent,
    InputLabel,
    FormControl,
    MenuItem,
    TextField,
    Grid,
    DialogTitle,
    Divider,
    DialogActions
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { addCategory, updateCategory } from 'redux/categories/actions';

export default function AddUpdateCategory({
    setOpen,
    open,
    categories,
    setCategories,

    limit,
    page,
    search
}) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
        description: Yup.string()
            .required('Description is required!')
            .max(42, 'Description can not exceed 200 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Description')
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: categories,
        validationSchema,
        onSubmit: async (values) => {
            if (categories.name == '') {
                await dispatch(
                    addCategory({
                        name: values.name,
                        description: values.description,
                        brandId: brand,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            } else {
                dispatch(
                    updateCategory({
                        name: values.name,
                        description: categories.description,
                        brandId: categories.brandId,
                        categoryId: categories.categoryId,
                        limit: limit,
                        page: page,
                        search: search,
                        handleClose: handleClose
                    })
                );
            }
        }
    });
    const handleClose = () => {
        setOpen(false);
        setCategories({ name: '', description: '', brandId: 0, categoryId: 0 });
        formik.resetForm();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{categories.name !== '' ? 'Update Category ' : ' Add Category '}</DialogTitle>
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
                                Profit Percentage
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
                            {categories.name !== '' ? 'Update ' : 'Add '}
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
