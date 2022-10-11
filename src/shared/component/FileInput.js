import PropTypes from 'prop-types';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import { Button, TextField, Grid, Stack, Typography, IconButton, Tooltip, RadioGroup, FormControlLabel, Radio } from '@mui/material';

import { gridSpacing } from 'store/constant';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

// Props needed for component formik ,correctOption, setCorrectOption , optionValue , formikFieldName , PlaceHOLDER
const FileInput = ({ formik, correctOption, setCorrectOption, optionValue, fieldName, placeHolder, accept }) => {
    const dispatch = useDispatch();
    const fileRef1 = useRef();

    return (
        <>
            <Grid item className="displayFlex">
                {correctOption && (
                    <RadioGroup
                        row
                        aria-label="gender"
                        value={correctOption}
                        onChange={(e) => setCorrectOption(e.target.value)}
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel
                            value={optionValue}
                            control={<Radio />}
                            label=""
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 32 } }}
                        />
                    </RadioGroup>
                )}

                <Fragment>
                    <Tooltip placement="top" title={accept == 'image/*' ? 'Add Image' : 'Add Audio'}>
                        <IconButton aria-label="delete" size="large" onClick={() => fileRef1.current.click()}>
                            <AddCircleOutlinedIcon sx={{ fontSize: '3.0rem' ,  color:"#604223" }} />
                        </IconButton>
                    </Tooltip>

                    <input
                        hidden
                        ref={fileRef1}
                        fullWidth
                        type="file"
                        className="chooseFileInput"
                        accept={accept}
                        onChange={(event) => {
                            formik.setFieldValue(fieldName, event.currentTarget.files[0]);
                        }}
                        error={formik.touched[`${fieldName}`] && Boolean(formik.errors[`${fieldName}`])}
                        helperText={formik.touched[`${fieldName}`] && formik.errors[`${fieldName}`]}
                    />

                    <Grid className="displayFlex">
                        {formik?.values[`${fieldName}`]?.name?.length < 40 ? (
                            <Typography className="displayText" mt={3.5} variant="h5">
                                {formik.values[`${fieldName}`]?.name}
                            </Typography>
                        ) : (
                            <Typography className="displayText" mt={3.5} variant="h5">
                                {formik.values[`${fieldName}`]?.name?.substring(0, 40)}
                            </Typography>
                        )}

                        {formik.values[`${fieldName}`] ? (
                            <Tooltip placement="top" title={accept == 'image/*' ? 'Clear Image' : 'Clear Audio'}>
                                <IconButton
                                    style={{ marginTop: '2px' }}
                                    color="primary"
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => {
                                        formik.setFieldValue(fieldName, null);
                                        fileRef1.current.value = null;
                                    }}
                                >
                                    <CloseOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                </IconButton>
                            </Tooltip>
                        ) : (
                            <Typography mt={3.5} variant="h5">
                                {placeHolder}
                            </Typography>
                        )}
                    </Grid>
                </Fragment>
            </Grid>

            <Grid item>
                <p className={correctOption !== undefined ? "chooseFileError" : "fileError"}>
                    {formik.touched[`${fieldName}`] && Boolean(formik.errors[`${fieldName}`]) ? formik.errors[`${fieldName}`] : ''}
                </p>
            </Grid>
        </>
    );
};

export default FileInput;
