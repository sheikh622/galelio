import { Box, Grid, Stack } from '@mui/material';

import '@fontsource/public-sans';
import React from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

import TextField from '@material-ui/core/TextField';
import galileoLogo from '../../../assets/images/galileo-white.png';
import { padding } from '@mui/system';
import music from '../../../assets/vedio.mp4';
import { useNavigate } from 'react-router-dom';

const TrackNFT = () => {
    const navigate = useNavigate();

    return (
        <Stack position={'relative'} sx={{ height: '100vh', overflow: 'hidden' }}>
            {/* <Stack className="mainTracking main"></Stack> */}

            <video src={music} loop autoPlay="true" />
            <Grid item md={12} xs={12} position={'absolute'} sx={{ width: '100%' }}>
                <Grid container-fluid>
                    <Grid sx={{ textAlign: 'center', marginTop: '30px' }}>
                        <img className="mainLogo" src={galileoLogo} alt="logo" />
                    </Grid>
                    <Grid
                        sx={{
                            marginTop: { xs: '100px', md: '200px' },
                            marginLeft: { xs: '20px', md: '0px' },
                            marginRight: { xs: '20px', md: 'none' }
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'Public Sans !important',
                                fontStyle: 'normal !important',
                                fontWeight: '700',
                                textAlign: 'center',
                                fontSize: { xs: '12px', sm: '30px', md: '30px', lg: '30px' },
                                lineHeight: { xs: '1', sm: '1', md: '33px', lg: '33px' },

                                color: 'white'
                            }}
                        >
                            Track your NFT history{' '}
                        </Typography>
                        <Box className="trackBox">
                            <input className="trackInput" placeholder="GAL-BMW-1234" />
                            <Button
                                sx={{ alignSelf: 'center !important' }}
                                className="create"
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    navigate('/tracking');
                                }}
                            >
                                Track
                            </Button>
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'Public Sans !important',
                                    fontStyle: 'normal !important',
                                    fontWeight: '400',
                                    textAlign: 'center',
                                    fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                    // lineHeight: { xs: '1', sm: '1', md: '33px', lg: '33px' },

                                    color: 'white'
                                }}
                            >
                                By initiating authentication, you declare that you accept our{' '}
                                <a href="" style={{ color: '#ffff' }}>
                                    Legal Notice
                                </a>{' '}
                                and{' '}
                                <a href="" style={{ color: '#ffff' }}>
                                    Privacy Policy.
                                </a>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default TrackNFT;
