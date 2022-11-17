import { forwardRef, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { useTheme } from '@mui/material/styles';
import {
    Grid,
    Button,
    Dialog,
    DialogActions,
    Item,
    DialogContent,
    DialogTitle,
    Slide,
    TextField,
    Divider,
    InputLabel,
    Box,
    Link,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    ListItemSecondaryAction,
    IconButton,
    Select,
    MenuItem,
    FormControl
} from '@mui/material';
import UploadImage from 'assets/images/icons/image-upload.svg';

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);
import AnimateButton from 'ui-component/extended/AnimateButton';

import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import fileFill from '@iconify-icons/eva/file-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import { fData } from 'utils/formatNumber';
import QuantitySelector from './quantitySelector';

export default function AddNft({ addNftOpen, setAddNftOpen }) {
    const [mintType, setMintType] = useState('directMint');
    const [fields, setFields] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);

    const [fieldDataArray, setFieldDataArray] = useState([]);
    const [currencyType, setCurrencyType] = useState([]);

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
            name: '',
            price: '',
            currency_type: '',
            description: '',
            images: []
        },
        // validationSchema,
        onSubmit: (values) => {
            const data = {
                mintType: mintType,
                name: values.name,
                price: values.price,
                currencyType: currencyType,
                description: values.description,
                image: values.images[0],
                fieldData: fieldDataArray
            };

            console.log('Formik onSubmit in addNft', data);
        }
    });

    const hasFile = formik.values.images.length > 0;

    const handleClose = () => {
        setAddNftOpen(false);
        formik.resetForm();
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

    console.log('main fieldDataArray', fieldDataArray);

    const handleCurrencyTypeChange = (e) => {
        let ct = e.target.value;

        setCurrencyType(ct);
    };
    return (
        <>
            <Dialog
                style={{}}
                open={addNftOpen}
                TransitionComponent={Transition}
                keepMounted
                // onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title1"
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1">{'Add NFT'}</DialogTitle>
                {/* <Divider /> */}

                <DialogContent style={{ width: '35rem' }}>
                    <Grid container spacing={2} sx={{ ml: 1, mb: 2 }}>
                        <Grid item xs={4}>
                            <Button
                                variant={mintType == 'directMint' ? 'contained' : 'outlined'}
                                onClick={() => {
                                    setMintType('directMint');
                                }}
                            >
                                Direct Mint
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
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
                        <Grid container>
                            <Grid xs={5}>
                                <TextField
                                    sx={{ marginTop: '25px' }}
                                    id="name"
                                    name="name"
                                    label="NFT Name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                    // error={formik.touched.name && Boolean(formik.errors.name)}
                                    // helperText={formik.touched.name && formik.errors.name}
                                    // fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={3}>
                                <TextField
                                    sx={{ marginTop: '25px' }}
                                    id="price"
                                    name="price"
                                    label="NFT Price"
                                    // value=" "
                                    onChange={formik.handleChange}
                                    // error={formik.touched.name && Boolean(formik.errors.name)}
                                    // helperText={formik.touched.name && formik.errors.name}
                                    // fullWidth
                                    variant="standard"
                                />
                            </Grid>

                            <Grid xs={4}>
                                <FormControl fullWidth sx={{ marginTop: '25px' }}>
                                    <InputLabel id="demo-simple-select-label">Currency Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="currencyType"
                                        name=""
                                        // label="currencyType"
                                        // value= "Currency Type"
                                        onChange={handleCurrencyTypeChange}
                                    >
                                        <MenuItem value={'ETH'}>ETH</MenuItem>
                                        <MenuItem value={'USDT'}>USDT</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        {/* <TextField
                            sx={{ marginTop: '25px' }}
                            id="currency_type"
                            name="currency_type"
                            label="Currency Type"
                            // value=" "
                            onChange={formik.handleChange}
                            // error={formik.touched.name && Boolean(formik.errors.name)}
                            // helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                            variant="standard"
                        /> */}
                        <TextField
                            multiline
                            rows={4}
                            sx={{ marginTop: '25px' }}
                            id="description"
                            name="description"
                            label="Description"
                            // value=" "
                            onChange={formik.handleChange}
                            //  ={formik.touched.name && Boolean(formik.errors.name)}
                            // helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                            variant="standard"
                        />
                        {/* <TextField
                            sx={{ marginTop: '25px' }}
                            id="quantity"
                            name="quantity"
                            label="Quantity"
                            // value=" "
                            onChange={formik.handleChange}
                            // error={formik.touched.name && Boolean(formik.errors.name)}
                            // helperText={formik.touched.name && formik.errors.name}
                            fullWidth
                            variant="standard"
                        /> */}

                        {fields.length != 0 && (
                            <>
                                {fields.map((d, index) => (
                                    <>
                                        <Grid container spacing={5}>
                                            <Grid item xs={6}>
                                                {/* <span style={{backsground:""}}>{index+1}</span> */}
                                                <TextField
                                                    sx={{ marginTop: '25px', background: '' }}
                                                    id="field_name"
                                                    name="field_name"
                                                    label="Field Name"
                                                    // value=" "
                                                    onChange={(e) => {
                                                        handleFieldNameChange(e.target.value, index);
                                                    }}
                                                    //  ={formik.touched.name && Boolean(formik.errors.name)}
                                                    // helperText={formik.touched.name && formik.errors.name}
                                                    variant="standard"
                                                />
                                            </Grid>

                                            <Grid item xs={6}>
                                                <TextField
                                                    sx={{ marginTop: '25px' }}
                                                    id="field_value"
                                                    name="field_value"
                                                    label="Field Value"
                                                    // value=" "
                                                    onChange={(e) => {
                                                        handleFieldValueChange(e.target.value, index);
                                                    }}
                                                    // error={formik.touched.name && Boolean(formik.errors.name)}
                                                    // helperText={formik.touched.name && formik.errors.name}
                                                    variant="standard"
                                                />
                                            </Grid>
                                        </Grid>
                                    </>
                                ))}
                            </>
                        )}

                        <div style={{ height: '3rem' }}>
                            <Button
                                variant="contained"
                                sx={{ float: 'right', mt: 3 }}
                                onClick={() => {
                                    setFields([...fields, 1]);
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
                        </div>
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
                                            <ListItemSecondaryAction style={{ display: 'flex' }}>
                                                <QuantitySelector formik={formik} fileArray={formik.values.images} index={index} />

                                                <IconButton
                                                    color="error"
                                                    edge="end"
                                                    size="small"
                                                    onClick={() => handleRemoveFile(file.image, index)}
                                                >
                                                    <Icon icon={closeFill} width={28} height={28} />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                            </AnimatePresence>
                        </List>
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
                            {'Add'}
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
