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

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Items = () => {
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

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Cars',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Shoes',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Real Estate',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Goods',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Cars',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Shoes',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Real Estate',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Goods',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        }
    ];
    return (
        <Grid mt={2} container-fluid spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container sx={{ mb: 2 }}>
                    <Grid item md={1} xs={12}>
                        <MenuOpenIcon />
                    </Grid>
                    <Grid  item md={7} xs={12} sx={{ marginLeft: { md: '-88px', xl: '-88px' }, marginTop:{md:'-8px'} }}>
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
                    <Grid item md={4} xs={12} sx={{ marginLeft: { md: '6px', xl: '6px' },  marginTop:{md:'-8px', xs:'10px' , sm:'10px'} }}>
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
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {itemData.map((item) => (
                        <Grid item md={2} sm={6}>
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
                                    <CardMedia component="img" height="200" image={item.img} />
                                    <CardContent sx={{ padding: '6%' }}>
                                        <Grid container>
                                            <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                                <span sx={{ fontWeight: '550', fontSize: '130%' }}>{item.heading}</span>
                                                <Grid className="overflow" sx={{ marginTop: '5%' }}>
                                                    {item.title}
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={4} sx={{ background: '' }}>
                                                <span sx={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>
                                                    {item.creator}
                                                </span>
                                            </Grid>
                                        </Grid>

                                        <Divider sx={{ mt: 2, mb: 2 }} />
                                        <Grid container sx={{ background: '' }}>
                                            <Grid item md={6} xs={12} className="overflow" sx={{ pt: 1 }}>
                                                <span
                                                    sx={{
                                                        background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                        padding: '3% 4%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    02h
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    sx={{
                                                        background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                        padding: '3% 4%',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    25m
                                                </span>{' '}
                                                :{' '}
                                                <span
                                                    sx={{
                                                        background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                        padding: '3% 4%  ',
                                                        borderRadius: '10%',
                                                        color: 'white',
                                                        fontSize: '80%'
                                                    }}
                                                >
                                                    04s
                                                </span>
                                            </Grid>
                                            <Grid
                                                item
                                                md={6}
                                                xs={12}
                                                className="overflow"
                                                sx={{ pl: 1, marginTop: { xs: '10px', md: '0' } }}
                                            >
                                                Current Bid
                                                <div sx={{ marginTop: '5%', fontSize: '110%' }}>
                                                    <b>$2913.32</b>
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Items;
