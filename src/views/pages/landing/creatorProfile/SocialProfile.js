import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';

import Avatar from 'ui-component/extended/Avatar';

import MainCard from 'ui-component/cards/MainCard';

import { gridSpacing } from 'store/constant';

import User1 from 'assets/images/profile/img-user.png';
import Cover from 'assets/images/profile/img-profile-bg.png';

// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
    const theme = useTheme();
    const customization = useSelector((state) => state.customization);

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
              
                    <CardMedia
                        component="img"
                        image={Cover}
                        sx={{ borderRadius:'1px', overflow: 'hidden', mb: 3 }}
                    />

                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={12} md={3}>
                            <Avatar
                                alt="User 1"
                                src={User1}
                                sx={{
                                    margin: '-70px 0 0 auto',
                                    borderRadius: '16px',
                                    [theme.breakpoints.down('lg')]: {
                                        margin: '-70px auto 0'
                                    },
                                    [theme.breakpoints.down('md')]: {
                                        margin: '-60px auto 0'
                                    },
                                    width: { xs: 72, sm: 100, md: 140 },
                                    height: { xs: 72, sm: 100, md: 140 },

                                    float: { md:'left', xl:'left'},
                                    marginLeft:{ md:'30px', xl:'30px'}
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={9}>
                            <Grid container spacing={gridSpacing}>
                                <Grid item xs={12} md={4}>
                                    <Typography variant="h5">Sergey Vlad</Typography>
                                    <Typography variant="subtitle2">Android Developer</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
             
            </Grid>
        </Grid>
    );
};

export default SocialProfile;
