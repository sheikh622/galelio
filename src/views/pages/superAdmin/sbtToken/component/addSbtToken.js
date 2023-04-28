import { forwardRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    Grid,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    Divider,
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    IconButton,
    MenuItem,
    CircularProgress
} from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { Switch } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
// import { addNft } from 'redux/nftManagement/actions';
import { fData } from 'utils/formatNumber';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fileFill from '@iconify-icons/eva/file-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import UploadImage from 'assets/images/icons/image-upload.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import clsx from 'clsx';
import { DataArraySharp } from '@mui/icons-material';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const typeArray = [
    {
        value: 'USDT',
        label: 'USDT'
    }
];

export default function addSbtToken({ open, setOpen, data, search, page, limit, nftType }) {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const [mintType, setMintType] = useState('directMint');

    const [uploadedImages, setUploadedImages] = useState([]);

    const [fieldDataArray, setFieldDataArray] = useState([]);
    const [type, setType] = useState('USDT');
    const [loader, setLoader] = useState(false);
    const [fileDataArray, setFileDataArray] = useState([]);
    const [isDirectTransfer, setIsDirectTransfer] = useState(false);
    const [wallettoggle, setWallettoggle] = useState(false);
    const handleType = (event) => {
        setType(event.target.value);
    };
    const [checked, setChecked] = useState(false);

    const handleError = (fieldDataArray, fileDataArray, values) => {
        // console.log('im in handle error');
        let isValid = true;
        // console.log('fieldDataArray', fieldDataArray);
        // console.log('fileDataArray', fileDataArray);
        // console.log('values', values);

        if (fieldDataArray.length == 0) {
            isValid = false;
            toast.error('Metadata is required');
        }
        if (checked == true) {
            // isValid = false;
            // toast.error('Wallet address is required');
        }

        // else  (fieldDataArray.length > 0) {

        fieldDataArray.map((array) => {
            if (array.fieldName == '') {
                isValid = false;
                toast.error(`Metadata name cannot be empty`);
            } else if (array.fieldValue == '') {
                isValid = false;
                toast.error(`Metadata value cannot be empty`);
            }
        });
        // }
        if (fileDataArray.length == 0) {
            isValid = false;
            toast.error('Proof of Authenticity is required');
        }

        //    else (fileDataArray.length > 0) {
        console.log('im here 2');
        fileDataArray.map((array) => {
            if (array.fieldName == '') {
                isValid = false;
                toast.error(`File name field is mandatory`);
            } else if (array.fieldValue == null) {
                isValid = false;
                toast.error(`Attach proof of authenticity`);
            } else if (array.fieldValue?.size / 1000000 > 5) {
                isValid = false;
                toast.error(`Please attach a less than 5 mb proof of authenticity`);
            }
        });
        // }

        if (values.images.length == 0) {
            toast.error('Please upload a NFT Image');
            isValid = false;
        } else if (values.images[0].image.size / 1000000 > 5) {
            toast.error('Please upload a image less than 5 mb');
            isValid = false;
        } else if (values.images[0].image.name.split('.').pop() !== 'jpg' && values.images[0].image.name.split('.').pop() !== 'png') {
            toast.error('Upload the files with these extensions: jpg, png, gif');
            isValid = false;
        } else if (parseInt(values.images[0].quantity) <= 0) {
            toast.error('NFT Quantity should be atleast one');
            isValid = false;
        }
        console.log(values.images, 'values.images.length');

        return isValid;
    };

    const validationSchema = Yup.object({
        nftName: Yup.string().required('NFT Name is required!').max(60, 'NFT Name can not exceed 60 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT name'),
        nftDescription: Yup.string()
            .required('NFT Description is required!')
            .max(1000, 'Invalid NFT description can not exceed 1000 characters'),
        directBuyerAddress:
            checked == true &&
            Yup.string()
                .required('Wallet address  is required!')
                // .max(1000, 'Invalid NFT description can not exceed 1000 characters'),
                .min(26, 'Minimum length 26 character ')
                .max(42, 'Must be exactly 42 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT description'),
        status: Yup.string()
            .required('Status required')
            .typeError('Invalid Status'),
        // image: Yup.mixed(),
        Address: Yup.string()
            .required('Address is required!')
            .max(1000, 'Invalid address can not exceed 1000 characters')
    });

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nftName: '',
            nftDescription: '',
            directBuyerAddress: '',
            status: '',
            images: [],
            Address: ''
        },
        validationSchema,
        onSubmit: (values) => {
            // console.log('values', values);

            let fileArray = fileDataArray.map((data) => {
                return data.fieldValue;
            });
            let fileNameArray = fileDataArray.map((data) => {
                return data.fieldName;
            });

            let isValid = handleError(fieldDataArray, fileDataArray, values);
            // console.log('isValid', isValid);

            if (isValid == true) {
                var WAValidator = require('wallet-address-validator');

                var valid = WAValidator.validate(values.directBuyerAddress, 'ETH');
                if (valid || values.directBuyerAddress == '') {
                    //  toast.success(``);

                    console.log('This is a valid wallet address');

                    setLoader(true);
                    // dispatch(
                    //     addNft({
                    //         categoryId: data.CategoryId,
                    //         mintType: mintType,
                    //         metaDataArray: fieldDataArray,
                    //         fileNameArray: fileNameArray,
                    //         fileArray: fileArray,
                    //         name: values.nftName,
                    //         price: values.status,
                    //         description: values.nftDescription,
                    //         description: values.Address,
                    //         directBuyerAddress: values.directBuyerAddress ? values.directBuyerAddress : '',
                    //         currencyType: type,
                    //         quantity: values.images[0].quantity,
                    //         asset: values.images[0].image,
                    //         type: nftType,
                    //         page: page,
                    //         limit: limit,
                    //         search: search,
                    //         categoryId: data.CategoryId,
                    //         requesterAddress: user.walletAddress,
                    //         contractAddress: data.contractAddress,
                    //         handleClose: handleClose,
                    //         brandId: user.BrandId,
                    //         isDirectTransfer: values.directBuyerAddress == '' ? false : true
                    //     })
                    // );
                } else toast.error(`Wallet Address invalid !`);
                // console.log('Address INVALID');
            }
        }
    });

    const hasFile = formik.values.images.length > 0;

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setMintType('directMint');
        setType('USDT');
        setUploadedImages([]);
        setFieldDataArray([]);
        setLoader(false);
        setFileDataArray([]);
    };
    const handleDrop = useCallback(
        (acceptedFiles) => {
            let newUploadedImages = [...uploadedImages];
            acceptedFiles.map(async (acceptedFile) => {
                let data = { image: acceptedFile, quantity: 1 };
                newUploadedImages = [...newUploadedImages, data];
            });
            formik.setFieldValue('images', newUploadedImages);
            setUploadedImages(newUploadedImages);
        },

        [formik.setFieldValue, uploadedImages]
    );
    const handleRemoveFile = (file, index) => {
        const newFiles = [...formik.values.images];
        newFiles.splice(index, 1);
        setUploadedImages(newFiles);
        formik.setFieldValue('images', newFiles);
    };

    const { getRootProps, getInputProps, isDragActive, isDragReject, isDragAccept } = useDropzone({
        accept: '.jpeg,.png,.jpg,.gif',
        onDrop: handleDrop
    });

    const handleFieldNameChange = (value, index) => {
        let array = [...fieldDataArray];
        array[index].fieldName = value;
        setFieldDataArray(array);
    };
    const handleFieldValueChange = (value, index) => {
        let array = [...fieldDataArray];
        array[index].fieldValue = value;
        setFieldDataArray(array);
    };

    const handleChange = (event, index) => {
        // setChecked(event.target.checked);
        let array = [...fieldDataArray];
        array[index].isEditable = event.target?.checked;
        setFieldDataArray(array);
        // let array = [...fieldDataArray];
        // [...checked] = value;
        // setFieldDataArray(array);
        // console.log(event.target.checked,'value==============?')
    };
    const handleproof = (event, index) => {
        // setChecked(event.target.checked);
        let array = [...fieldDataArray];
        array[index].proofRequired = event.target?.checked;
        setFieldDataArray(array);
        // let array = [...fieldDataArray];
        // [...checked] = value;
        // setFieldDataArray(array);
        // console.log(event.target.checked,'value==============?')
    };

    const walletadded = (event, index) => {
        setWallettoggle(true);
        setChecked(event.target.checked);

        // let array = [...fieldDataArray];
        // [...checked] = value;
        // setFieldDataArray(array);
        // console.log(event.target.checked,'value==============?')
    };
    const handleRemoveField = (index) => {
        let array = [...fieldDataArray];
        array.splice(index, 1);
        setFieldDataArray(array);
    };

    const handleFileFieldNameChange = (value, index) => {
        let array = [...fileDataArray];
        array[index].fieldName = value;
        setFileDataArray(array);
    };
    const handleFileFieldValueChange = (value, index) => {
        let array = [...fileDataArray];
        array[index].fieldValue = value;
        setFileDataArray(array);
    };

    const handleFileRemoveField = (index) => {
        let array = [...fileDataArray];
        array.splice(index, 1);
        setFileDataArray(array);
    };

    return (
        <>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="form-dialog-title"
                // className="brandDialog "
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1" className="adminname">
                    Add Token
                </DialogTitle>
                <Divider />
                <DialogContent>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container mt={1}>
                            <Grid xs={4} md={4} lg={4}>
                                <TextField
                                    className="textfieldStyle"
                                    id="nftName"
                                    name="nftName"
                                    label="Name"
                                    fullWidth
                                    value={formik.values.nftName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nftName && Boolean(formik.errors.nftName)}
                                    helperText={formik.touched.nftName && formik.errors.nftName}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={4} md={4} lg={4} pl={2} pr={2}>
                                <TextField
                                    className="textfieldStyle"
                                    id="Status"
                                    name="Status"
                                    label="Status"
                                    fullWidth
                                    value={formik.values.status}
                                    onChange={formik.handleChange}
                                    error={formik.touched.status && Boolean(formik.errors.status)}
                                    helperText={formik.touched.status && formik.errors.status}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid xs={12} mt={1}>
                                <TextField
                                    className="textfieldStyle"
                                    id="nftDescription"
                                    name="nftDescription"
                                    label="Description"
                                    fullWidth
                                    value={formik.values.nftDescription}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nftDescription && Boolean(formik.errors.nftDescription)}
                                    helperText={formik.touched.nftDescription && formik.errors.nftDescription}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid xs={12} mt={1}>
                                <TextField
                                    className="textfieldStyle"
                                    id="Address"
                                    name="Address"
                                    label="Address"
                                    fullWidth
                                    value={formik.values.Address}
                                    onChange={formik.handleChange}
                                    error={formik.touched.Address && Boolean(formik.errors.Address)}
                                    helperText={formik.touched.Address && formik.errors.Address}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            {mintType == 'directMint' && (
                                <>
                                    {wallettoggle == true && checked == true && (
                                        <Grid xs={12} mt={1}>
                                            <TextField
                                                className="textfieldStyle"
                                                id="directBuyerAddress"
                                                name="directBuyerAddress"
                                                label="Wallet Address"
                                                placeholder="wallet Address"
                                                fullWidth
                                                value={formik.values.directBuyerAddress}
                                                onChange={formik.handleChange}
                                                error={formik.touched.directBuyerAddress && Boolean(formik.errors.directBuyerAddress)}
                                                helperText={formik.touched.directBuyerAddress && formik.errors.directBuyerAddress}
                                                autoComplete=""
                                                variant="standard"
                                            />
                                        </Grid>
                                    )}
                                </>
                            )}
                            <Grid xs={12} mt={2}>
                                <Button
                                    className="fieldbutton"
                                    variant="contained"
                                    sx={{ float: 'left', padding: { md: ' 6px 38px', lg: '6px 38px' } }}
                                    onClick={() => {
                                        setFieldDataArray([
                                            ...fieldDataArray,
                                            {
                                                fieldName: '',
                                                fieldValue: '',
                                                isEditable: false,
                                                proofRequired: false
                                            }
                                        ]);
                                    }}
                                >
                                    Add Metadata
                                </Button>
                            </Grid>
                        </Grid>

                        {fieldDataArray.length != 0 && (
                            <>
                                <Grid container spacing={4} sx={{ mt: 1 }}>
                                    {fieldDataArray.map((data, index) => (
                                        <>
                                            <Grid item xs={5} md={3}>
                                                <TextField
                                                    id="field_name"
                                                    className="textfieldStyle"
                                                    name="field_name"
                                                    label="Metadata Name"
                                                    value={data.fieldName}
                                                    onChange={(e) => {
                                                        handleFieldNameChange(e.target.value, index);
                                                    }}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>

                                            <Grid item xs={5} md={3}>
                                                <TextField
                                                    className="textfieldStyle"
                                                    id="field_value"
                                                    name="field_value"
                                                    label="Metadata Value"
                                                    value={data.fieldValue}
                                                    onChange={(e) => {
                                                        handleFieldValueChange(e.target.value, index);
                                                    }}
                                                    variant="standard"
                                                    fullWidth
                                                />
                                            </Grid>
                                            <Grid item xs={2} mt={2} md={3}>
                                                <IconButton
                                                    color="error"
                                                    edge="end"
                                                    size="small"
                                                    onClick={() => {
                                                        handleRemoveField(index);
                                                    }}
                                                >
                                                    <Icon icon={closeFill} width={28} height={28} />
                                                </IconButton>
                                            </Grid>
                                            <Grid item xs={2} mt={2} md={3}></Grid>
                                        </>
                                    ))}
                                </Grid>
                            </>
                        )}

                    </form>
                    <Grid container>
                        <DialogActions>
                            <>
                                <AnimateButton>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                        onClick={() => {
                                            formik.handleSubmit();
                                        }}
                                        className="buttons"
                                        size="large"
                                        disableElevation
                                    >
                                        Add
                                    </Button>
                                </AnimateButton>
                                <AnimateButton>
                                    <Button
                                        className="buttons"
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                        onClick={handleClose}
                                        color="error"
                                        disableElevation
                                    >
                                        Cancel
                                    </Button>
                                </AnimateButton>
                            </>
                        </DialogActions>
                    </Grid>
                </DialogContent>

            </Dialog>
        </>
    );
}
