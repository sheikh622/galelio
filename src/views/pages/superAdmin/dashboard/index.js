import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import UserCountCard from 'shared/Card/UserCountCard';
// material-ui
import { Grid } from '@mui/material';
import {dash, setLoader } from 'redux/auth/actions';

// project imports
import { useDispatch, useSelector } from 'react-redux';


import { gridSpacing } from 'store/constant';
import AccountCircleTwoTone from '@mui/icons-material/AccountCircleTwoTone';

// ==============================|| DEFAULT DASHBOARD ||============================== //

const Dashboard = () => {
    const theme = useTheme();
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    // console.log(Dashboard.total_users,"Dashboard")

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                <Grid item lg={6} md={6} sm={6} xs={12}>
                <UserCountCard
                    primary="Total Brands"
                    secondary="120"
                   
                    // iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.primary.main}
                />
                       
                    </Grid>
                    {/* <Grid item lg={4} md={4} sm={6} xs={12}>
                        <NumberLightCards primary="Number of Homes" secondary="1,002" isLoading={isLoading} />
                    </Grid> */}
                    <Grid item lg={6} md={6} sm={6} xs={12}>
                    <UserCountCard
                    primary="Profit"
                    secondary="40%"
                    // iconPrimary={AccountCircleTwoTone}
                    color={theme.palette.secondary.main}
                />
                    
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                <Grid item xs={12} md={6}>
                        <SchoolsTeachersStudentsChart isLoading={isLoading} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <HomeLearnerChart isLoading={isLoading} />
                    </Grid>
                </Grid>
            </Grid> */}
           
           
        </Grid>
    );
};

export default Dashboard;
