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
import { addCategory ,updateCategory } from 'redux/categories/actions';


export default function AddEditFormDialog({ limit, page, search, open, setOpen ,update,deleteId, setUpdate,mainBrandId, categoryList }) {
    const theme = useTheme();
    
     const [brand, setBrand] = useState(0);
     console.log(categoryList.categoryList, "categoryList===========");
     
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    const brandsList = useSelector((state) => state.brand.brandsList);
    const handleBrandChange = (event) => {
        setBrand(event.target.value);
        console.log(event.target.value, "setBrand===========");
    };
    

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
    };

  

    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Category Name is required!')
            .max(42, 'Category Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Category name'),
            
          
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name:'',
            
        },
        validationSchema,
        onSubmit: async (values) => {
            console.log(values);
            if (update == false) {
                await dispatch(
                    addCategory({
                        name: values.name,
                        profitPercentage:5,
                        brandId:brand,
                        
                        handleClose: handleClose,
                        page: page,
                        limit: limit,
                        search: search
                       
                    })
                );
            } else if (update == true) {
                dispatch(
                    updateCategory({
                        name: values.name,
                        profitPercentage:5,
                        brandId:brand,
                        categoryId:deleteId,
                        handleClose: handleClose,
                        limit: limit,
                        page: page,
                        search: search,
                        
                   
                       
                    })
                );
            }
        }
    });

    // useEffect(() => {
    //     if (isUpdate == true) {
    //         setTeacher(gradeDetail && gradeDetail.teacherId);
    //     } else if (isUpdate == false) {
    //         if (teacherAssigned && teacherAssigned.length > 0) {
    //             setTeacher(teacherAssigned[0].id);
    //         }
    //     }
    // }, [teacherAssigned, gradeDetail]);

    return (
           
                <>
                <Dialog open={open} onClose={handleClose} handleBrandChange={handleBrandChange} aria-labelledby="form-dialog-title">

            <DialogTitle id="form-dialog-title">{update== true ? 'Update Brand' : 'Add Brand'}</DialogTitle>

      

                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="name"
                                        name="name"
                                        label='Name'
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        error={formik.touched.name && Boolean(formik.errors.name)}
                                        helperText={formik.touched.name && formik.errors.name}
                                        fullWidth
                                        autoComplete="given-name" />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControl fullWidth>
                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            fullWidth
                                            InputLabelProps={{ shrink: true }}
                                            label='Select Brand'
                                            value={brand}
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

                                <Grid item xs={12}>
                                    <Stack direction="row" justifyContent="flex-end">
                                        <AnimateButton>
                                            <Button variant="contained" sx={{ my: 3, ml: 1 }} type="submit" size="large" disableElevation>
                                            Submit
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

            </Dialog></>
            
           
       
    );
}
