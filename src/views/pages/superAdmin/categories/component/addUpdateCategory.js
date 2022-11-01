import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';

import { useDispatch, useSelector } from 'react-redux';
import { Button, Stack, Dialog, CardContent, DialogContent, FormControl, MenuItem, TextField, Grid, DialogTitle } from '@mui/material';
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
    search,

}) {
    const theme = useTheme();
   
    const [brand, setBrand] = useState(0);
  

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const brandsList = useSelector((state) => state.brand.brandsList);
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
       
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
        profitPercentage: Yup.string()
            .required('profit Percentage required!')
            .max(42, 'profit Percentage can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid profit Percentage')
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
                        profitPercentage: values.profitPercentage,
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
                        profitPercentage: categories.profitPercentage,
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
        setCategories({ name: '', profitPercentage: '', brandId: 0, categoryId: 0 });
        formik.resetForm();
    };

    return (
        <>
            <Dialog open={open} onClose={handleClose} handleBrandChange={handleBrandChange} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">{categories.name !== '' ? 'Update Category ' : ' Add Category '}</DialogTitle>

                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label="Name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="profitPercentage"
                                        name="profitPercentage"
                                        label="Profit Percentage"
                                        value={formik.values.profitPercentage}
                                        onChange={formik.handleChange}
                                        error={formik.touched.profitPercentage && Boolean(formik.errors.profitPercentage)}
                                        helperText={formik.touched.profitPercentage && formik.errors.profitPercentage}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                {categories.name == '' && (
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <TextField
                                                id="outlined-select-currency"
                                                select
                                                fullWidth
                                                InputLabelProps={{ shrink: true }}
                                                label="Select Brand"
                                                // value={mainBrandId}
                                                defaultValue={formik.values.brand}
                                                onChange={handleBrandChange}
                                                error={formik.touched.brand && Boolean(formik.errors.brand)}
                                                helperText={formik.touched.brand && formik.errors.brand}
                                                autoComplete="given-name"
                                            >
                                                <MenuItem value={0}>Choose Brand</MenuItem>
                                                {brandsList != undefined &&
                                                    brandsList?.brands?.map((option, index) => (
                                                        <MenuItem key={index} value={option.id}>
                                                            {option.name}
                                                        </MenuItem>
                                                    ))}
                                            </TextField>
                                        </FormControl>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="flex-end">
                                        <AnimateButton>
                                            <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" size="large" disableElevation>
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
                                    </Stack>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}
