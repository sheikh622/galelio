import { useState, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Container,
    Card,
    Grid,
    Typography,
    CardActionArea,
    CardContent,
    Divider,
    OutlinedInput,
    InputAdornment,
    TextField,
    MenuItem
} from '@mui/material';
import React from 'react';
// project imports
import { IconSearch } from '@tabler/icons';

import { gridSpacing } from 'store/constant';

import CardMedia from '@mui/material/CardMedia';

import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNftUser } from 'redux/nftManagement/actions';
import { useNavigate } from 'react-router-dom';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Items = () => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            getAllNftUser({
                walletAddress: user.walletAddress
            })
        );
    }, []);

    const theme = useTheme();
    const [value, setValue] = React.useState('Order By');

    const status = [
        {
            value: 'Order By',
            label: 'Order By'
        },
        {
            value: 'order 1',
            label: 'order 1'
        },
        {
            value: 'order 2',
            label: 'order 2'
        }
    ];

    const { nfts } = useSelector((state) => state.nftReducer.nftListUser);

    const itemData = [];
    {
        nfts?.length > 0 &&
            nfts.map((data) => {
                itemData.push({
                    img: data.asset,
                    heading: data.name,
                    price: data.price,
                    currencyType: data.currencyType
                });
            });
    }

    return (
        <Grid mt={2} container-fluid spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container sx={{ mb: 2 }}>
                    <Grid item md={1} xs={12}>
                        <MenuOpenIcon />
                    </Grid>
                    <Grid item md={7} xs={12} sx={{ marginLeft: { md: '-88px', xl: '-88px' }, marginTop: { md: '-8px' } }}>
                        <OutlinedInput
                            fullWidth
                            id="input-search-list-style1"
                            placeholder="Search by name or attribute"
                            startAdornment={
                                <InputAdornment position="start">
                                    <IconSearch stroke={1.5} size="1rem" />
                                </InputAdornment>
                            }
                            size="small"
                            // onChange={(e) => {
                            //     setSearch(e.target.value);
                            // }}
                        />
                    </Grid>
                    <Grid
                        item
                        md={4}
                        xs={12}
                        sx={{ marginLeft: { md: '6px', xl: '6px' }, marginTop: { md: '-8px', xs: '10px', sm: '10px' } }}
                    >
                        <TextField
                            sx={{ borderRadius: '4px' }}
                            className="select"
                            fullWidth
                            size="small"
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
                </Grid>
            </Grid>

            <Grid mt={4} item xs={12}>
                <Grid container justifyContent="left" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {nfts?.length > 0 ? (
                        <>
                            {nfts?.map((data) => (
                                <Grid
                                    item
                                    md={2}
                                    sm={6}
                                    onClick={() => {
                                        navigate('/productDetails', {
                                            state: {
                                                nft: data
                                            }
                                        });
                                    }}
                                >
                                    <Card
                                        sx={{
                                            color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                            background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                            maxWidth: 365,
                                            width: '105%',
                                            boxShadow: '1px 2px 6px #d3d3d3',
                                            borderRadius: '7px'
                                        }}
                                    >
                                        <CardActionArea>
                                            <CardMedia component="img" height="200" image={data.asset} />
                                            <CardContent sx={{ padding: '6%' }}>
                                                <Grid container>
                                                    <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                                        <span sx={{ fontWeight: '750', fontSize: '180%' }}>
                                                            <b style={{}}>{data.name}</b>
                                                        </span>
                                                        <Grid className="overflow" sx={{ marginTop: '5%' }}>
                                                            {data.price} {data.currencyType}
                                                        </Grid>
                                                    </Grid>
                                                    <Grid item xs={4} sx={{ background: '' }}>
                                                        <span sx={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>
                                                            {/* {item.creator} */}
                                                        </span>
                                                    </Grid>
                                                </Grid>

                                                {/* <Divider sx={{ mt: 2, mb: 2 }} /> */}
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </>
                    ) : (
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                mt={1}
                                component="div"
                                sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center', color: 'gray' }, textTransform: 'capitalize' }}
                            >
                                No bought nfts found..!
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Items;
