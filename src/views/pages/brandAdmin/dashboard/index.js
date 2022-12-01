import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import UserCountCard from 'shared/Card/UserCountCard';
import { Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const theme = useTheme();

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <UserCountCard primary="Total Brands" secondary="120" color={theme.palette.primary.main} />
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12}>
                        <UserCountCard primary="Profit" secondary="40%" color={theme.palette.secondary.main} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
