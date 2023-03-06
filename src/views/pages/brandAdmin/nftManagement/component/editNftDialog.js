import { forwardRef, useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
    MenuItem
} from '@mui/material';

import { useDropzone } from 'react-dropzone';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { editNft } from 'redux/nftManagement/actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import fileFill from '@iconify-icons/eva/file-fill';
import closeFill from '@iconify-icons/eva/close-fill';
import QuantitySelector from './quantitySelector';
import UploadImage from 'assets/images/icons/image-upload.svg';
import AnimateButton from 'ui-component/extended/AnimateButton';
import clsx from 'clsx';
const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const currencyTypeArray = [
    {
        value: 'USDT',
        label: 'USDT'
    }
];

export default function EditNftDialog({ nftInfo, categoryId, type, search, page, limit, loader, setLoader, open, setOpen }) {
    const dispatch = useDispatch();
    const [mintType, setMintType] = useState('directMint');
    const [currencyType, setCurrencyType] = useState('USDT');
    const [fieldDataArray, setFieldDataArray] = useState([]);
    const [fileDataArray, setFileDataArray] = useState([]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const user = useSelector((state) => state.auth.user);
    const handleCurrencyType = (event) => {
        setCurrencyType(event.target.value);
    };

    const handleError = (fieldDataArray, fileDataArray, values) => {
        console.log('im in handle error');
        let isValid = true;
        console.log('fieldDataArray', fieldDataArray);
        console.log('fileDataArray', fileDataArray);
        console.log('values', values);

        if (fieldDataArray.length == 0) {
            isValid = false;
            toast.error('Metadata is required');
        } 

        // else  (fieldDataArray.length > 0) {
            
            fieldDataArray.map((array) => {
                if (array.fieldName == '') {
                    isValid = false;
                    toast.error(`Metadata name cannot be empty`);
                }
                else if (array.fieldValue == '') {
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
                }
                else if (array.fieldValue == null) {
                    isValid = false;
                    toast.error(`Attach proof of authenticity`);
                }
                else if (array.fieldValue?.size/1000000>5) {
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
        }else if (parseInt(values.images[0].quantity) <=0) {
            toast.error('NFT Quantity should be atleast one');
            isValid = false;
        }


        return isValid;
    };


    const validationSchema = Yup.object({
        nftName: Yup.string()
            .required('NFT Name is required!')
            .max(60, 'NFT Name can not exceed 60 characters'),
            // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT name'),
        nftDescription: Yup.string()
            .required('NFT Description is required!')
            .max(1000, 'Invalid NFT description can not exceed 1000 characters'),
        // .matches(/^[-a-zA-Z0-9-()]+(\s+[-a-zA-Z0-9-()]+)*$/, 'Invalid NFT description'),
        nftPrice: Yup.number()
            .min(0.000001, 'Price should not less than zero')
            .required('NFT Price is required')
            .typeError('Invalid Price'),
        images: Yup.mixed()
        // .when(['isUpdate'], {
        //     is: true,
        //     then: Yup.mixed(),
        //     otherwise: Yup.mixed().required('Image is required')
        // })

        // .test('image size',
        //  'this image is too large', (value) => !value || (value && value.size <= 1_000_000))

    });
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: nftInfo,
        validationSchema,
        onSubmit: (values) => {
            let file = values.images[0].image;
            let isFile = file instanceof File;

            let perviousUploadedItems = fileDataArray.filter((data) => {
                if (typeof data.fieldValue === 'string') return data;
            });

            let newUploadedItems = fileDataArray.filter((data) => {
                if (typeof data.fieldValue !== 'string') return data;
            });

            let fileArray = newUploadedItems.map((data) => {
                return data.fieldValue;
            });
            let fileNameArray = newUploadedItems.map((data) => {
                return data.fieldName;
            });

            let isValid = handleError(fieldDataArray, fileDataArray, values, isFile);

            if (isValid) {
                dispatch(
                    editNft({
                        id: nftInfo.id,
                        name: values.nftName,
                        price: values.nftPrice,
                        description: values.nftDescription,
                        quantity: values.images[0].quantity,
                        asset: isFile ? values.images[0].image : null,
                        isFile: isFile,
                        currencyType: currencyType,
                        mintType: mintType,
                        metaDataArray: fieldDataArray,
                        fileNameArray: fileNameArray,
                        fileArray: fileArray,
                        perviousUploadedItems: perviousUploadedItems,
                        type: type,
                        page: page,
                        limit: limit,
                        search: search,
                        categoryId: categoryId,
                        brandId: nftInfo.brandId,
                        handleClose: handleClose
                        // brandId: user.BrandId
                    })
                );
            }
        }
    });

    const hasFile = formik.values.images.length > 0;

    const handleClose = () => {
        setOpen(false);
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
    const handleRemoveFile = (index) => {
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
        let array = structuredClone(fieldDataArray);
        array[index].fieldName = value;
        setFieldDataArray(array);
    };
    const handleFieldValueChange = (value, index) => {
        let array = structuredClone(fieldDataArray);
        array[index].fieldValue = value;
        setFieldDataArray(array);
    };

    const handleRemoveField = (index) => {
        let array = structuredClone(fileDataArray);
        array.splice(index, 1);
        setFieldDataArray(array);
    };

    const handleFileFieldNameChange = (value, index) => {
        let array = structuredClone(fileDataArray);
        array[index].fieldName = value;
        setFileDataArray(array);
    };
    const handleFileFieldValueChange = (value, index) => {
        let array = structuredClone(fileDataArray);
        array[index].fieldValue = value;
        setFileDataArray(array);
    };

    const handleFileRemoveField = (index) => {
        let array = structuredClone(fileDataArray);
        array.splice(index, 1);
        setFileDataArray(array);
    };

    useEffect(() => {
        setFieldDataArray(nftInfo.fieldDataArray);
        setFileDataArray(nftInfo.fileDataArray);
        setMintType(nftInfo.mintType);
        setCurrencyType(nftInfo.currencyType);
        setUploadedImages(nftInfo.images);
    }, [nftInfo]);

    useEffect(() => {}, [fileDataArray]);

    return (
        <>
            <Dialog
                open={open}
                // onClose={handleClose}
                aria-labelledby="form-dialog-title"
                className="brandDialog Nftdialog"
                maxWidth="md"
                TransitionComponent={Transition}
                keepMounted
                aria-describedby="alert-dialog-slide-description1"
            >
                <DialogTitle id="alert-dialog-slide-title1 " className="adminname">
                    Edit NFT
                </DialogTitle>
                <Divider />
                <Grid container>
                    {/* <DialogActions>
                        <AnimateButton>
                            <Button
                                type="submit"
                                sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                variant={mintType == 'directMint' ? 'contained' : 'outlined'}
                                className="buttons"
                                size="large"
                                onClick={() => {
                                    setMintType('directMint');
                                }}
                            >
                                Direct minting
                            </Button>
                        </AnimateButton>
                        <AnimateButton>
                            <Button
                                className="buttons"
                                size="large"
                                type="submit"
                                variant={mintType == 'lazyMint' ? 'contained' : 'outlined'}
                                sx={{ my: 1, ml: 1, padding: { md: '6px 50px', lg: '6px 50px' } }}
                                onClick={() => {
                                    setMintType('lazyMint');
                                }}
                            >
                                Lazy minting
                            </Button>
                        </AnimateButton>
                    </DialogActions> */}
                </Grid>

                <DialogContent>
                    <form autoComplete="off" onSubmit={formik.handleSubmit}>
                        <Grid container mt={1}>
                            <Grid xs={4} md={5} lg={5}>
                                <TextField
                                    className="textfieldStyle"
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
                            <Grid xs={12} md={2} lg={2}></Grid>
                            <Grid xs={4} md={5} lg={5}>
                                <TextField
                                    className="textfieldStyle"
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
                            <Grid xs={12} md={12} lg={12} mt={2}>
                                <TextField
                                    className="textfieldStyle"
                                    id="outlined-select-budget"
                                    select
                                    fullWidth
                                    variant="filled"
                                    value={currencyType}
                                    onChange={handleCurrencyType}
                                >
                                    {currencyTypeArray.map((option, index) => (
                                        <MenuItem key={index} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                            </Grid>
                            <Grid xs={12} md={12} lg={12} mt={2}>
                                <TextField
                                    className="textfieldStyle"
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
                                                fieldValue: ''
                                            }
                                        ]);
                                    }}
                                >
                                    Add more fields
                                </Button>
                            </Grid>
                        </Grid>

                        {fieldDataArray.length != 0 && (
                            <>
                                <Grid container spacing={4} mt={1}>
                                    {fieldDataArray.map((data, index) => (
                                        <>
                                            <Grid item xs={5}>
                                                <TextField
                                                    className="textfieldStyle"
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
                        <Grid container>
                            <Grid xs={12} mt={2} pr={3}>
                                <Button
                                    className="fieldbutton"
                                    variant="contained"
                                    sx={{ float: 'left' }}
                                    onClick={() => {
                                        setFileDataArray([
                                            ...fileDataArray,
                                            {
                                                fieldName: '',
                                                fieldValue: null
                                            }
                                        ]);
                                    }}
                                >
                                    Add Authenticity Files
                                </Button>
                            </Grid>
                            {fileDataArray?.length != 0 && (
                                <>
                                    <Grid container spacing={2} mt={1}>
                                        {fileDataArray?.map((data, index) => (
                                            <>
                                                <Grid item xs={5}>
                                                      <TextField
                                                        id="field_name"
                                                        name="field_name"
                                                        label="File Name"
                                                        value={data.fieldName}
                                                        onChange={(e) => {
                                                            handleFileFieldNameChange(e.target.value, index);
                                                        }}
                                                        variant="standard"
                                                        fullWidth
                                                    />
                                                </Grid>

                                         
                                                

                                                <Grid item xs={5} mt={3}>
                                                <span style={{marginBottom:"10%"}}>
                                                    <a target="_blank" href={data?.fieldValue} style={{color:"white"}}>
                                                        {data.fieldValue.length > 1
                                                        ?
                                                        <>
                                                        {data?.fieldValue?.slice(61)}
                                                        
                                                        </>
                                                        :
                                                        <>
                                                        
                                                        </>
                                                        
                                                        }
                                                    </a>
                                                    <input
                                                    style={{display:"inlineBlock"}}
                                                    type="file"
                                                    id="avatar"
                                                    name="avatar"
                                                    accept="image/*,.pdf"
                                                    onChange={(event) => {
                                                        handleFileFieldValueChange(event.currentTarget.files[0], index);
                                                    }}
                                                />
                                                </span>

                                                
                                                </Grid>
                                                {/* <div style={{marginTop:"3%", marginLeft:"2%"}}><b>Previous file: </b><a target="_blank" href={data.fieldValue}>{data.fieldValue}</a></div> */}
                                                <Grid item xs={2} mt={2}>
                                                    <IconButton
                                                        color="error"
                                                        edge="end"
                                                        size="small"
                                                        onClick={() => {
                                                            handleFileRemoveField(index);
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
                        </Grid>

                        {uploadedImages.length !== 1 && (
                            <Grid
                                sx={{ background: '#c5cbe9', borderRadius: '5px', paddingBottom: '2rem', paddingTop: '2rem' }}
                                item
                                lg={12}
                                mt={10}
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
                                                className="encap"
                                                primary={file.image.name ? file.image.name : ''}
                                                // secondary={fData(file.image.size) ? fData(file.image.size) : ''}
                                                // primaryTypographyProps={{
                                                //     variant: 'body2'
                                                // }}
                                            />
                                            {mintType == 'directMint' && (
                                                <QuantitySelector formik={formik} fileArray={formik.values.images} index={index} />
                                            )}

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
                    </form>
                </DialogContent>
                <Divider />
                <Grid container>
                    <DialogActions>
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
                                Edit
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
                    </DialogActions>
                </Grid>
            </Dialog>
        </>
    );
}
