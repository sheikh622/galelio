// material-ui
import { useTheme } from '@mui/material/styles';

import { CardMedia, Grid, Typography, Button, Alert, InputLabel, Select, FormControl, Box, MenuItem } from '@mui/material';

import React, { useEffect } from 'react';
import Avatar from 'ui-component/extended/Avatar';
import bmw from 'assets/images/bmw.png';
import bmwProductlogo from 'assets/images/bmwProductlogo.png';
import { gridSpacing } from 'store/constant';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector, useDispatch } from 'react-redux';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// =============================|| LANDING - FEATURE PAGE ||============================= //

const Product = ({ nftList }) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const theme = useTheme();

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} sm={12}>
                        <CardMedia
                            component="img"
                            image={bmw}
                            sx={{ minheight: 'auto', maxHeight: '570px', background: 'transparent', overflow: 'hidden', cursor: 'Pointer' }}
                        />
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid ml={2} item xs={12}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Avatar
                                                        alt="User 1"
                                                        src={bmwProductlogo}
                                                        sx={{ width: 56, height: 56, objectFit: 'fill' }}
                                                    />
                                                </Grid>
                                                <Grid item xs zeroMinWidth  sx={{ textDecoration: 'none' }}>
                                                    <Typography align="left" fontWeight={600} variant="h2" className="brand">
                                                        BMW
                                                    </Typography>
                                                    <Typography align="left" variant="h3" className="creator">
                                                        Maker
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item mt={2} xs={12}>
                                            <Typography
                                                className="Lux"
                                                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                variant="h3"
                                            >
                                                BMW XM
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="body2">
                                                Newly developed M HYBRID drive, an extravagant design and the progressive luxury ambience in
                                                the interior of the BMW XM combine to form a reinterpretation of the Sports Activity Vehicle
                                                (SAV) vehicle concept in the high-performance segment. The BMW XM is the highlight of the
                                                model offensive in the brand's anniversary year and at the same time the first original BMW
                                                M automobile since the BMW M1. Precisely set accents in the exterior design of the
                                                high-performance SAV are reminiscent of the legendary mid-engine sports car.
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Box sx={{ borderRadius: '4px', width: '95%', margin: '0 auto', textAlign: 'left' }}>
                                                <FormControl
                                                    sx={{
                                                        background: theme.palette.mode === 'dark' ? '#181C1F' : '#d9d9d9',
                                                        color: theme.palette.mode === 'dark' ? '#ffff' : 'black',
                                                        padding: '10px 10px 10px 10px',
                                                        borderRadius: '4px'
                                                    }}
                                                    fullWidth
                                                >
                                                    <Select
                                                        variant="standard"
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                        fullWidth
                                                        displayEmpty
                                                        renderValue={(selected) => {
                                                            if (selected.length === 0) {
                                                                return <em className="fontfamily">PROOF OF AUTHENTICITY</em>;
                                                            }

                                                            return selected.join(', ');
                                                        }}
                                                    >
                                                        {/* <MenuItem disabled value="">
                                      <em>aiman</em>
                                    </MenuItem> */}

                                                        <MenuItem
                                                            // component={redirect}
                                                            // to={option.fieldValue}
                                                            // key={option.fieldValue}
                                                            // value={option.fieldValue}
                                                            // onClick={useNavigate(option.fieldValue)}
                                                            onClick={() => {
                                                                // useNavigate(option.fieldValue)
                                                                window.open(
                                                                    'https://galileoprotocol.infura-ipfs.io/ipfs/QmSEuPTp42X6uLCSBg5V2RMrd8Fwrke3xzuKJqfFkJ9sy2',
                                                                    '_blank'
                                                                );
                                                            }}
                                                        >
                                                            PROOF
                                                        </MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={1} sm={12}></Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Product;
