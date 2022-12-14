// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Container, CardMedia, Grid, Typography, TextField, MenuItem, Chip, Button, Divider } from '@mui/material';
import React from 'react';
// project imports
import Avatar from 'ui-component/extended/Avatar';

import SubCard from 'ui-component/cards/SubCard';
import watch1 from 'assets/images/watch3.png';

import Avatar3 from 'assets/images/users/avatar-3.png';
import { Link as RouterLink } from 'react-router-dom';

import { gridSpacing } from 'store/constant';
import { textAlign } from '@mui/system';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const PropertiesView = ({ nft }) => {
    const theme = useTheme();
    const [value, setValue] = React.useState('PROOF OF AUTHENTICITY');

    const status = [
        {
            value: 'PROOF OF AUTHENTICITY',
            label: 'PROOF OF AUTHENTICITY'
        },
        {
            value: 'gia certificate',
            label: 'gia certificate'
        },
        {
            value: 'LCX Certificate',
            label: 'LCX Certificate'
        }
    ];

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    <Grid item md={6} sm={12} component={RouterLink} to="/companyPage">
                        <CardMedia component="img" sx={{ height: '100%' }} image={nft.asset} alt="green iguana" />
                    </Grid>

                    <Grid item md={6} sm={12}>
                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item md={12} sm={12}>
                                    <Grid container spacing={2}>
                                        <Grid mt={4} ml={2} item xs={12}>
                                            <Grid container spacing={2} alignItems="center">
                                                <Grid item>
                                                    <Avatar alt="User 1" src={nft.Brand.image} />
                                                </Grid>
                                                <Grid
                                                    item
                                                    xs
                                                    zeroMinWidth
                                                    component={RouterLink}
                                                    sx={{ textDecoration: 'none' }}
                                                    to="/companyPage"
                                                >
                                                    <Typography align="left" fontWeight={600} variant="subtitle1">
                                                        {nft.Brand.name}
                                                    </Typography>
                                                    <Typography align="left" variant="subtitle2">
                                                        Creator
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>

                                        <Grid item mt={4} xs={12}>
                                            <Typography
                                                className="Lux"
                                                color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                variant="h3"
                                            >
                                                <span>{nft.name}</span>
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography className="productdescription" variant="body2">
                                                {nft.description}
                                            </Typography>
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <TextField
                                                sx={{ borderRadius: '4px' }}
                                                className="select"
                                                fullWidth
                                                id="standard-select-currency"
                                                select
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)}
                                            >
                                                {status.map((option) => (
                                                    <MenuItem key={option.value} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </TextField>
                                        </Grid>
                                        <Grid item mt={2} mb={2} className="timer" xs={12}>
                                            <Grid className="auction" container>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="black" variant="body">
                                                        Auction Time{' '}
                                                    </Typography>
                                                </Grid>
                                                <Grid item md={6} xs={12} sm={12}>
                                                    <Typography color="black" variant="body">
                                                        {' '}
                                                        2h : 40m : 03s
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid> */}
                                        <Grid item mt={2} mb={2} xs={12}>
                                            <Grid container>
                                                <Grid item md={2} xs={12} sm={12}>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#404040'}
                                                            sx={{ paddingLeft: { md: '22px' }, textAlign: { md: 'left' } }}
                                                            className="price"
                                                            variant="body2"
                                                        >
                                                            Price
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Typography
                                                            color={theme.palette.mode === 'dark' ? 'white' : '#262626'}
                                                            sx={{ paddingLeft: { md: '22px' }, textAlign: { md: 'left' } }}
                                                            className="ETH"
                                                            variant="h3"
                                                        >
                                                            {nft.price} {nft.currencyType}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                                <Grid item md={10} xs={12} sm={12} textAlign="center">
                                                    <Button
                                                        sx={{ float: { md: 'right' } }}
                                                        className="buy"
                                                        variant="contained"
                                                        size="large"
                                                        onClick={() => {}}
                                                    >
                                                        Buy Now
                                                    </Button>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default PropertiesView;
