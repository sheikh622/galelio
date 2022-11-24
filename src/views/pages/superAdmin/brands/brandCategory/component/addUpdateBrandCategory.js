import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { updateBrandCategory, addBrandCategory, getAllCategoriesDropdown } from 'redux/brandCategory/actions';
import {
    MenuItem,
    Button,
    InputLabel,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    Divider,
    Grid
} from '@mui/material';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateBrandCategoryDialog({ open, setOpen, brandCategoryData, page, limit, search }) {
    const dispatch = useDispatch();
    const categoryArray = useSelector((state) => state.brandCategoryReducer.categoriesDropdownList);
    const [category, setCategory] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (brandCategoryData.id == null) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
    }, [brandCategoryData]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const validationSchema = Yup.object({
        isUpdate: Yup.boolean().default(isUpdate),
        profitPercentage: Yup.number()
            .min(1, 'Profit Percentage should not be less than one')
            .max(99, 'Profit Percentage should not exceed 99')
            .required('Profit Percentage is required')
            .typeError('Invalid Profit Percentage')
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: brandCategoryData,
        validationSchema,
        onSubmit: (values) => {
            if (brandCategoryData.id == null) {
                dispatch(
                    addBrandCategory({
                        brandId: brandCategoryData.brandId,
                        categoryId: category,
                        profitPercentage: values.profitPercentage,
                        page: page,
                        limit: limit,
                        search: search,
                        handleClose: handleClose
                    })
                );
            } else {
                dispatch(
                    updateBrandCategory({
                        id: brandCategoryData.id,
                        brandId: brandCategoryData.brandId,
                        categoryId: values.categoryId,
                        profitPercentage: values.profitPercentage,
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

    useEffect(() => {
        dispatch(getAllCategoriesDropdown());
    }, []);
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className="brandDialog"
                maxWidth="sm"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle
                    id="form-dialog-title"
                    onClick={() => {
                        console.log({ brandCategoryData });
                    }}
                >
                    {brandCategoryData.id == null ? 'Assign Category to brand ' : ' Update Profit percentage of category'}
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container>
                            <>
                                <Grid item xs={12} pt={2} pr={4}>
                                    <TextField
                                        className="responsiveSelectfield"
                                        id="outlined-select-budget"
                                        select
                                        fullWidth
                                        label="Select Category"
                                        value={category}
                                        onChange={handleCategoryChange}
                                    >
                                        <MenuItem value={0}>Choose Category</MenuItem>
                                        {categoryArray &&
                                            categoryArray.categories &&
                                            categoryArray.categories.map((option, index) => (
                                                <MenuItem key={index} value={option.value}>
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </Grid>
                                <Grid item xs={12} pt={4} pr={4}>
                                    <TextField
                                        id="profitPercentage"
                                        name="profitPercentage"
                                        label="Enter Profit Percentage"
                                        value={formik.values.profitPercentage}
                                        onChange={formik.handleChange}
                                        error={formik.touched.profitPercentage && Boolean(formik.errors.profitPercentage)}
                                        helperText={formik.touched.profitPercentage && formik.errors.profitPercentage}
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
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
                            {brandCategoryData.id == null ? 'Add ' : 'Update '}
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
