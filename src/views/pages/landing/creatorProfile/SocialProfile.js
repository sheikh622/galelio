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
// assets
import StarBorderIcon from '@mui/icons-material/StarBorder';
import FeedbackIcon from '@mui/icons-material/Feedback';
import TwitterIcon from '@mui/icons-material/Twitter';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import RedditIcon from '@mui/icons-material/Reddit';
// ==============================|| SOCIAL PROFILE ||============================== //

const SocialProfile = () => {
    const theme = useTheme();
    const itemData = [
        {
            icon: <InstagramIcon />
        },
        {
            icon: <InstagramIcon />
        },
        {
            icon: <LanguageIcon />
        },
        {
            icon: <RedditIcon />
        },
        {
            icon: <TwitterIcon />
        },
        {
            icon: <PhoneIcon />
        },
        {
            icon: '|'
        },
        {
            icon: <StarBorderIcon />
        },
        {
            icon: <FeedbackIcon />
        },
        {
            icon: <ShareIcon />
        }
    ];

    return (
        <Grid
            container
            spacing={gridSpacing}
            sx={{
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}
        >
            <Grid item xs={12}>
                <CardMedia component="img" image={Cover} sx={{ borderRadius: '1px', overflow: 'hidden', mb: 3 }} />

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

                                float: { md: 'left', xl: 'left' },
                                marginLeft: { md: '30px', xl: '30px' }
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container mt={2}>
                    <Grid item xs={12} md={6}>
                        <Typography
                            sx={{
                                marginLeft: { md: '30px', xl: '30px' },
                                textAlign: { xs: 'center', sm: 'center', md: 'left', xl: 'left' }
                            }}
                            className="text"
                            variant="h5"
                        >
                            Sergey Vlad
                        </Typography>
                        <Typography
                            sx={{
                                marginLeft: { md: '30px', xl: '30px' },
                                textAlign: { xs: 'center', sm: 'center', md: 'left', xl: 'left' }
                            }}
                            className="creator"
                            variant="subtitle2"
                        >
                            Creator
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container sx={{ justifyContent: 'flex-end', [theme.breakpoints.down('md')]: { justifyContent: 'center' } }}>
                            {itemData.map((item) => (
                                <Grid item sx={{ margin: { xs: '3px', sm: '3px', md: '7px', xl: '7px' } }}>
                                    <Link
                                        to="https://blog.berrydashboard.io/"
                                        target="_blank"
                                        underline="hover"
                                        color="#2FC1FF !important "
                                    >
                                        {item.icon}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
                <Grid mt={2} item xs={12} md={12} sx={{ display: 'flex',
                 marginLeft: { md: '-9px' } }}>
                    <ul className="list">
                        <li className="item">
                            Items <b> 120</b>
                        </li>
                        <li className="itemstyle">
                            Created On <b> Nov 2022</b>
                        </li>
                        <li className="itemstyle">
                            Chain <b>Ethereum</b>
                        </li>
                    </ul>
                </Grid>
                <Grid mt={2} item xs={12} md={12}>
                    <Typography
                        sx={{ marginLeft: { md: '30px', xl: '30px' }, textAlign: { xs: 'center', sm: 'center', md: 'left', xl: 'left' } }}
                        className="text"
                        variant="h5"
                    >
                        Description
                    </Typography>
                </Grid>
                <Grid mt={1} item xs={12} md={10} sx={{ padding: '17px 20px 17px 27px' }}>
                    <Typography
                        className="para"
                        variant="body"
                        sx={{
                            color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ipsum dolor sit
                        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                        laborum laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt mollit anim id est laborum
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SocialProfile;
