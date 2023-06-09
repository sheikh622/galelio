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

const Product = ({ tracking }) => {
    const dispatch = useDispatch();
    // console.log(tracking, 'marketplaceNfts in product view');
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
                            image={tracking.nft?.asset ? tracking.nft?.asset : 'loading..!'}
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
                                                        src={tracking?.nft?.Brand?.image}
                                                        sx={{ width: 56, height: 56, objectFit: 'fill' }}
                                                    />
                                                </Grid>
                                                <Grid item xs zeroMinWidth sx={{ textDecoration: 'none' }}>
                                                    <Typography align="left" fontWeight={600} variant="h2" className="brand">
                                                        {tracking?.nft?.Brand?.name ? tracking?.nft?.Brand?.name : 'Brand Name'}
                                                    </Typography>
                                                    <Typography align="left" variant="h3" className="creator">
                                                        Brand
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
                                                {tracking?.nft?.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="body2">
                                                {tracking?.nft?.description ? tracking?.nft?.description : "NFT"}
                                            </Typography>
                                        </Grid>

                                        <Grid item xs={12}>
                                            <Box sx={{ borderRadius: '4px', width: '95%', margin: '0 auto', textAlign: 'left' }}>
                                                <FormControl
                                                    sx={{
                                                      
                                                        color: theme.palette.mode === 'dark' ? '#ffff' : 'black',
                                                       
                                                        borderRadius: '4px'
                                                    }}
                                                    fullWidth
                                                >
                                                    <InputLabel id="demo-simple-select-label">
                                                        PROOF OF AUTHENTICITY
                                                    </InputLabel>
                                                    <Select
                                                        variant="standard"
                                                        // labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        onChange={handleChange}
                                                        fullWidth
                                                        inputProps={{ 'aria-label': 'Without label' }}
                                                    // displayEmpty
                                                    >
                                                        {tracking?.nft?.NFTMetaFiles.map((option) => (
                                                            <MenuItem
                                                                // component={redirect}
                                                                // to={option.fieldValue}
                                                                // key={option.fieldValue}
                                                                // value={option.fieldValue}
                                                                // onClick={useNavigate(option.fieldValue)}
                                                                onClick={() => {
                                                                    // useNavigate(option.fieldValue)
                                                                    window.open(option?.fieldValue, '_blank');
                                                                }}
                                                            >
                                                                {option?.fieldName}
                                                            </MenuItem>
                                                        ))}
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
