import { forwardRef } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Slide, TextField, Divider } from '@mui/material';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
import { addBrand, updateBrand } from '../../../../../redux/brand/actions';

export default function AddUpdateBrandDialog({ addUpdateOpen, setAddUpdateOpen, page, limit, search, brandName, setBrandName, brandId }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Brand Name is required!')
            .max(42, 'Brand Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid Brand name')
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: brandName
        },
        validationSchema,
        onSubmit: (values) => {
            if (brandName == '') {
                dispatch(
                    addBrand({
                        name: values.name,
                        search: search,
                        page: page,
                        limit: limit,
                        handleClose: handleClose,
                        setBrandName: setBrandName
                    })
                );
            } else {
                dispatch(
                    updateBrand({
                        brandId: brandId,
                        name: values.name,
                        page: page,
                        limit: limit,
                        search: search,

                        handleClose: handleClose,
                        setBrandName: setBrandName
                    })
                );
            }
        }
    });
    const handleClose = () => {
        setAddUpdateOpen(false);
        setBrandName('');
        formik.resetForm();
    };

    return (
        <>
            <Dialog
                className="responsiveDialog"
                open={addUpdateOpen}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1">{brandName == '' ? 'Add Brand' : 'Update Brand'}</DialogTitle>
                <Divider />
                <DialogContent>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <TextField
                            sx={{ marginTop: '25px' }}
                            id="name"
                            name="name"
                            label="Enter Brand Name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                            autoComplete="given-name"
                        />
                    </form>
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
                        onClick={() => {
                            formik.handleSubmit();
                        }}
                    >
                        {brandName == '' ?
                            'Add'
                            : 'Update'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
