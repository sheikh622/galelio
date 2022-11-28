import { useDispatch } from 'react-redux';
import { Typography, TextField } from '@mui/material';
import { useEffect } from 'react';

const QuantitySelector = ({ formik, fileArray, index }) => {
    const dispatch = useDispatch();

    const handleChange = (value) => {
        fileArray[index].quantity = value;
        formik.setFieldValue('images', fileArray);
    };
    useEffect(() => {
        console.log('fileArray', fileArray);
    }, [fileArray]);

    return (
        <>
            <div style={{ display: 'flex', marginRight: '10px' }}>
                <Typography style={{ marginTop: '12px', marginRight: '5px' }}>Quantity : </Typography>

                <TextField
                    type="number"
                    className="quantityField"
                    id="outlined-select-currency-native"
                    value={fileArray[index].quantity}
                    onChange={(e) => {
                        handleChange(e.target.value);
                    }}
                />
            </div>
        </>
    );
};

export default QuantitySelector;
