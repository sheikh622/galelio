import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useTheme } from '@mui/styles';
import DeliveryDashboard from './component/DeliveryDashboard';
const DeliverD = () => {
    const theme = useTheme();

    return (
        <Grid
            item
            md={11}
            xs={12}
            style={{ marginTop:'15px',
            maxWidth:'90%',
           
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}
        >
            <DeliveryDashboard />
        </Grid>
    );
};

export default DeliverD;
