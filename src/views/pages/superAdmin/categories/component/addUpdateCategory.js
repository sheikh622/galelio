import PropTypes from 'prop-types';
import { useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addCategory } from 'redux/categories/actions';
// material-ui
import { styled } from '@mui/material/styles';
import { Button, Dialog, IconButton, Typography, Select, TextField, Grid, CardContent, FormControl, InputLabel, MenuItem, FormHelperText } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

// assets
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuDialogContent-root': {
        padding: theme.spacing(2)
    },
    '& .MuDialogActions-root': {
        padding: theme.spacing(1)
    }
}));

const BootstrapDialogTitle = ({ children, onClose, ...other }) => (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
            <IconButton
                aria-label="close"
                onClick={onClose}
                sx={{
                    position: 'absolute',
                    right: 10,
                    top: 10,
                    color: (theme) => theme.palette.grey[500]
                }}
            >
                <CloseIcon />
            </IconButton>
        ) : null}
    </DialogTitle>
);

BootstrapDialogTitle.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node
};

export default function AddUpdateCategoryDialog({ page, limit, search, open, setOpen }) {



    const dispatch = useDispatch();
    const [brand, setBrand] = useState(0);
    const brandsList = useSelector((state) => state.brand.brandsList);
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
        console.log(event.target.value, "setBrand===========");
    };

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

    const handled = (event) => {
        // setTeacher(event.target.value);
        // console.log('ggggg');
    };

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: ''
        },
        validationSchema,
        onSubmit: (values) => {
          console.log(values,"values")
                dispatch(
                    addCategory({
                        name:values.name,
                        brandId:brand,
                        handleClose: handleClose,
                        page: page,
                        limit: limit,
                        search: search
                    }))
           
                // dispatch(
                //     updateCategory({
                //         categoryId: categoryId,
                //         name: values.name,
                //         brandId: categoryData.brandId,
                //         search: search,
                //         page: page,
                //         limit: limit,
                //         handleClose: handleClose,
                //         setCategoryData: setCategoryData
                //     })
                // );
            }
        }
    );
    // const handleClose = () => {
    //     setAddUpdateOpen(false);
    //     setCategoryData({
    //         name: '',
    //         brandId: 0
    //     });
    //     formik.resetForm();
    // };


    return (
        <div>
            <BootstrapDialog open={open} onClose={handleClose} handled={handled} aria-labelledby="customized-dialog-title">
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add Category
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        className="selectField"
                                        id="outlined-select-budget"
                                        select
                                        fullWidth
                                        label="Select Brand"
                                        defaultValue={formik.values.package}
                                        // value={brand}
                                        onChange={handleBrandChange}
                                    >
                                        <MenuItem value={0}>All</MenuItem>
                                        {brandsList != undefined &&

                                            brandsList?.brands?.map((option, index) => (
                                                <MenuItem key={index} value={option.id}>
                                                    {option.name}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                    <FormHelperText error id="standard-weight-helper-text-email-login">
                                    {formik.errors.package}
                                </FormHelperText>


                                </Grid>




                                <Grid item xs={12}>
                                    <TextField
                                        sx={{ width: '100%', margin: '5px', color: 'red' }}
                                        id="name"
                                        name="name"
                                        value={formik.values.name}

                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        autoComplete="given-name"
                                        autoFocus
                                        label="Name"
                                        
                                    />
                                </Grid>
                            </Grid>
                        </CardContent>
                        <DialogActions sx={{ pr: 2.5 }}>
                            <Button sx={{ color: '#C62828' }} onClick={handleClose} color="secondary">
                                Cancel
                            </Button>
                            <Button

                                type="submit"
                                size="large"
                                sx={{ background: '#604223' }}
                                disableElevation
                                variant="contained"
                                size="small"

                            >
                                Submit
                            </Button>
                        </DialogActions>
                    </form>
                </DialogContent>
            </BootstrapDialog>
        </div>
    );
}
