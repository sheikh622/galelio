import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import map from 'assets/images/map.png';
import History2 from './history2';
import History1 from './history1';
import History3 from './History3';
import Attribute from './attribute';

const trackAtribute = () => {
    const theme = useTheme();
    const basicData = [
        {
            id: 'basic1',
            title: 'Attribute',
              },
   
    ];
    const history1 = [
        {
            id: 'basic1',
            title: 'History 1',
       },
   
    ];
    const history2 = [
        {
            id: 'basic1',
            title: 'History 2',
        },
   
    ];
    const history3 = [
        {
            id: 'basic1',
            title: 'History 3',
     },
   
    ];
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '0 15px' }}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} sx={{ padding: '0 15px 0 02px' }}>
                    <Grid item xs={12} md={12}>
                        <Attribute  data={basicData}/>
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <History1  data={history1}/>
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <History2  data={history2}/>
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <History3  data={history3}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <img className="map" src={map} />
                </Grid>
            </Grid>
        </Grid>
    );
};
export default trackAtribute;
