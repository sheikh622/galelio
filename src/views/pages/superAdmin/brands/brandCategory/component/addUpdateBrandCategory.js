import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ethers } from 'ethers';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { updateBrandCategory, addBrandCategory, getAllCategoriesDropdown } from 'redux/brandCategory/actions';
import { MenuItem, Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Divider, Grid } from '@mui/material';
import FactoryAbi from '../../../../../../contractAbi/Factory.json';
import FactoryAddress from '../../../../../../contractAbi/Factory-address.json';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

export default function AddUpdateBrandCategoryDialog({ open, setOpen, brandCategoryData, page, limit, search }) {
    const dispatch = useDispatch();
    const categoryArray = useSelector((state) => state.brandCategoryReducer.categoriesDropdownList);
    const [category, setCategory] = useState(0);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        if (brandCategoryData.categoryId == 0) {
            setIsUpdate(false);
        } else {
            setIsUpdate(true);
        }
        setCategory(brandCategoryData.categoryId);
    }, [brandCategoryData]);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleContractDeployment = async () => {
        let brandName = brandCategoryData.brand.name;
        let categoryName;
        categoryArray.categories.map((data) => {
            if (data.value == category) {
                categoryName = data.label;
            }
        });
        const contractName = 'Galileo' + ' ' + brandName + ' ' + categoryName;
        const symbol = 'G' + brandName.substring(0, 1) + categoryName.substring(0, 1);
        const admin = '0x6f3B51bd5B67F3e5bca2fb32796215A796B79651';
        const validator = '0x6f3B51bd5B67F3e5bca2fb32796215A796B79651';
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const minterAddress = await signer.getAddress();
        const factoryAddr = new ethers.Contract(FactoryAddress.address, FactoryAbi.abi, signer);
        let res = await (
            await factoryAddr.deployMintingContract(contractName, symbol, admin, minterAddress, validator).catch((error) => {
                toast.error(error.message);
            })
        ).wait();
        let addr = res.events[3].args[0];
        dispatch(
            addBrandCategory({
                brandId: brandCategoryData.brandId,
                categoryId: category,
                profitPercentage: formik.values.profitPercentage,
                contractAddress: addr,
                page: page,
                limit: limit,
                search: search,
                handleClose: handleClose
            })
        );
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
            if (!isUpdate) {
                handleContractDeployment();
            } else {
                dispatch(
                    updateBrandCategory({
                        brandId: brandCategoryData.brandId,
                        categoryId: brandCategoryData.categoryId,
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
        dispatch(getAllCategoriesDropdown({ brandId: brandCategoryData.brandId }));
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
                <DialogTitle id="form-dialog-title">
                    {!isUpdate ? 'Assign Category to brand ' : ' Update Profit percentage of category'}
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form noValidate onSubmit={formik.handleSubmit} id="validation-forms">
                        <Grid container>
                            <>
                                {!isUpdate && (
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
                                )}

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
                            {!isUpdate ? 'Add ' : 'Update '}
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