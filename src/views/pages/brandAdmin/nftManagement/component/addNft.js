import { forwardRef, useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
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
    ListItemSecondaryAction,
    IconButton,
    MenuItem
} from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { addNft } from 'redux/nftManagement/actions';
import { fData } from 'utils/formatNumber';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import QuantitySelector from './quantitySelector';
import fileFill from '@iconify-icons/eva/file-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import UploadImage from 'assets/images/icons/image-upload.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import clsx from 'clsx';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const typeArray = [
    {
        value: 'ETH',
        label: 'ETH'
    },
    {
        value: 'USDT',
        label: 'USDT'
    }
];

export default function AddNft({ open, setOpen, data, search, page, limit, nftType }) {
    const dispatch = useDispatch();
    const [mintType, setMintType] = useState('directMint');
    const [uploadedImages, setUploadedImages] = useState([]);
    const [fieldDataArray, setFieldDataArray] = useState([]);
    const [type, setType] = useState('ETH');
    const handleType = (event) => {
        setType(event.target.value);
    };

    const handleError = (fieldDataArray, values) => {
        let isValid = true;
        if (parseInt(values.images[0].quantity) < 1) {
            toast.error('NFT Quantity must be greater than zero');
            isValid = false;
        }
        if (values.images[0].image.name.split('.').pop() == 'jpg' || values.images[0].image.name.split('.').pop() == 'png') {
        } else {
            toast.error('Upload the files with these extensions: jpg, png, gif');
            isValid = false;
        }

        fieldDataArray.forEach((array) => {
            if (array.fieldName == '') {
                isValid = false;
                toast.error(`Metadata name fields are mandatory`);
            }
            if (array.fieldValue == '') {
                isValid = false;
                toast.error(`Metadata value fields are mandatory`);
            }
        });
        return isValid;
    };

    const validationSchema = Yup.object({
        nftName: Yup.string()
            .required('NFT Name is required!')
            .max(42, 'NFT Name can not exceed 42 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT name'),
        nftDescription: Yup.string()
            .required('NFT Description is required!')
            .max(500, 'Invalid NFT description can not exceed 500 characters')
            .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT description'),
        nftPrice: Yup.number()
            .min(0.000001, 'Price should not less than zero')
            .required('NFT Price is required')
            .typeError('Invalid Price'),
        images: Yup.mixed()
    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            nftName: '',
            nftDescription: '',
            nftPrice: 0,
            images: []
        },
        validationSchema,
        onSubmit: (values) => {
            let isValid = handleError(fieldDataArray, values);
            if (isValid) {
                dispatch(
                    addNft({
                        categoryId: data.CategoryId,
                        mintType: mintType,
                        metaDataArray: fieldDataArray,
                        name: values.nftName,
                        price: values.nftPrice,
                        description: values.nftDescription,
                        currencyType: type,
                        quantity: values.images[0].quantity,
                        asset: values.images[0].image,
                        type: nftType,
                        page: page,
                        limit: limit,
                        search: search,
                        categoryId: data.CategoryId,
                        handleClose: handleClose
                    })
                );
            }
        }
    });

    const hasFile = formik.values.images.length > 0;

    const handleClose = () => {
        setOpen(false);
        formik.resetForm();
        setMintType('directMint');
        setType('ETH');
        setUploadedImages([]);
        setFieldDataArray([]);
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

    const handleRemoveField = (index) => {
        let array = [...fieldDataArray];
        array.splice(index, 1);
        setFieldDataArray(array);
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
                <DialogTitle id="alert-dialog-slide-title1">Add NFT</DialogTitle>

                <DialogContent>
                    <Grid container spacing={2} textAlign="end">
                        <Grid item xs={12}>
                            <Button
                                sx={{ marginRight: '10px' }}
                                variant={mintType == 'directMint' ? 'contained' : 'outlined'}
                                onClick={() => {
                                    setMintType('directMint');
                                }}
                            >
                                Direct Mint
                            </Button>
                            <Button
                                variant={mintType == 'lazyMint' ? 'contained' : 'outlined'}
                                onClick={() => {
                                    setMintType('lazyMint');
                                }}
                            >
                                Lazy Minting
                            </Button>
                        </Grid>
                    </Grid>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container mt={2}>
                            <Grid xs={4} mt={2} pr={3}>
                                <TextField
                                    id="nftName"
                                    name="nftName"
                                    label="NFT Name"
                                    fullWidth
                                    value={formik.values.nftName}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nftName && Boolean(formik.errors.nftName)}
                                    helperText={formik.touched.nftName && formik.errors.nftName}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={4} mt={2} pr={3}>
                                <TextField
                                    id="nftPrice"
                                    name="nftPrice"
                                    label="NFT Price"
                                    fullWidth
                                    value={formik.values.nftPrice}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nftPrice && Boolean(formik.errors.nftPrice)}
                                    helperText={formik.touched.nftPrice && formik.errors.nftPrice}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={4} mt={2} pr={3}>
                                <TextField
                                    id="outlined-select-budget"
                                    select
                                    fullWidth
                                    label="Select Token"
                                    value={type}
                                    onChange={handleType}
                                >
                                    {typeArray.map((option, index) => (
                                        <MenuItem key={index} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} mt={2} pr={3}>
                                <TextField
                                    multiline
                                    rows={2}
                                    id="nftDescription"
                                    name="nftDescription"
                                    label="NFT Description"
                                    fullWidth
                                    value={formik.values.nftDescription}
                                    onChange={formik.handleChange}
                                    error={formik.touched.nftDescription && Boolean(formik.errors.nftDescription)}
                                    helperText={formik.touched.nftDescription && formik.errors.nftDescription}
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>
                            <Grid xs={12} mt={2} pr={3}>
                                <Button
                                    variant="contained"
                                    sx={{ float: 'right' }}
                                    onClick={() => {
                                        setFieldDataArray([
                                            ...fieldDataArray,
                                            {
                                                fieldName: '',
                                                fieldValue: ''
                                            }
                                        ]);
                                    }}
                                >
                                    Add Fields
                                </Button>
                            </Grid>
                        </Grid>

                        {fieldDataArray.length != 0 && (
                            <>
                                <Grid container spacing={4}>
                                    {fieldDataArray.map((data, index) => (
                                        <>
                                            <Grid item xs={5}>
                                                <TextField
                                                    id="field_name"
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

                                            <Grid item xs={5}>
                                                <TextField
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
                                            <Grid item xs={2} mt={2}>
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
                                        </>
                                    ))}
                                </Grid>
                            </>
                        )}

                        {uploadedImages.length !== 1 && (
                            <Grid
                                sx={{ background: '#c5cbe9', borderRadius: '5px', paddingBottom: '2rem', paddingTop: '2rem' }}
                                item
                                lg={12}
                                mt={3}
                            >
                                <div className={clsx('dropZoneContainer', 'xyz')}>
                                    <div
                                        className={clsx('dropZone', {
                                            isDragActive: isDragActive,
                                            isDragAccept: isDragAccept,
                                            isDragReject: isDragReject
                                        })}
                                        {...getRootProps()}
                                    >
                                        <input {...getInputProps()} />

                                        <Grid container direction="column">
                                            <Box
                                                textAlign="center"
                                                component="img"
                                                alt="Select File"
                                                src={UploadImage}
                                                sx={{ height: 60 }}
                                            />

                                            <Box mt={4} textAlign="center" sx={{ ml: { md: 0 } }}>
                                                <Typography variant="subtitle" sx={{ color: 'grey', textAlign: 'center' }}>
                                                    Drop your image or&nbsp;
                                                    <Link underline="always">browse</Link>.&nbsp;
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </div>
                                </div>
                            </Grid>
                        )}
                        <Grid item lg={12} mt={3}>
                            <List disablePadding className={clsx({ list: hasFile })} sx={{ mt: 3 }}>
                                <AnimatePresence>
                                    {formik.values.images &&
                                        formik.values.images.map((file, index) => (
                                            <ListItem key={file.image.name} component={motion.div} className="listItem">
                                                <ListItemIcon>
                                                    <Icon icon={fileFill} width={32} height={32} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={file.image.name ? file.image.name : ''}
                                                    secondary={fData(file.image.size) ? fData(file.image.size) : ''}
                                                    primaryTypographyProps={{
                                                        variant: 'subtitle2'
                                                    }}
                                                />
                                                  <QuantitySelector formik={formik} fileArray={formik.values.images} index={index} />
                                                    <IconButton
                                                        color="error"
                                                        edge="end"
                                                        size="small"
                                                        onClick={() => handleRemoveFile(file.image, index)}
                                                    >
                                                        <Icon icon={closeFill} width={28} height={28} />
                                                    </IconButton>
                                              
                                            </ListItem>
                                        ))}
                                </AnimatePresence>
                            </List>
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
                            Add
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
