import { useState, useRef, useEffect } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Typography } from '@mui/material';
import { Card, Container, CardMedia, TextField, MenuItem, Chip, Divider } from '@mui/material';
import React from 'react';
// project imports

import { Link as RouterLink } from 'react-router-dom';

import { gridSpacing } from 'store/constant';
// ===============================|| UI DIALOG - SCROLLABLE ||=============================== //

export default function DetailsDialog({ open, setOpen, nftData }) {
    const theme = useTheme();
    console.log(nftData.name, 'nftData');
    const status = [
        {
            name: 'Name:',
            value: nftData?.name
        },
        {
            name: 'Status:',
            value: nftData?.status
        },
        {
            name: 'Description:',
            value: nftData?.description
        },
        {
            name: 'Price:',
            value: nftData?.price
        },
        {
            name: 'Mint Type:',
            value: nftData?.mintType
        },
        {
            name: 'Brand:',
            value: nftData?.Brand.name
        },
        {
            name: 'Token URL:',
            value: 'Null'
        }
    ];
    const [scroll, setScroll] = useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement?.focus();
            }
        }
    }, [open]);

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">NFT Details</DialogTitle>
                <DialogContent dividers={scroll === 'paper'}>
                    <Grid container spacing={3}>
                        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
                            <Grid item xs={12}>
                                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                    <Grid item lg={6} className="NFTdetails">
                                        <img src={nftData?.asset} alt="Statement Image" className="imageSize" />
                                    </Grid>

                                    <Grid item md={6} sm={12}>
                                        <Grid item xs={12}>
                                            <Grid container justifyContent="left">
                                                <Grid item md={12} sm={12}>
                                                    {status.map((option) => (
                                                        <Grid container spacing={2}>
                                                            <Grid item md={6} xs={12}>
                                                                <Typography
                                                                    mt={1}
                                                                    className="nftHead"
                                                                    color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                                    variant="h3"
                                                                >
                                                                    {option.name}
                                                                </Typography>
                                                            </Grid>

                                                            <Grid item md={6} xs={12} sx={{ marginTop: '12px', textAlign: 'left' }}>
                                                                <Typography
                                                                    mt={1}
                                                                    className="nftText"
                                                                    color={theme.palette.mode === 'dark' ? 'white' : '#767676'}
                                                                    variant="body"
                                                                >
                                                                    {option.value}
                                                                </Typography>
                                                            </Grid>
                                                        </Grid>
                                                    ))}
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ pr: 2.5, pt: 2.5 }}>
                    <Button sx={{ color: theme.palette.error.dark }} onClick={handleClose} color="secondary">
                        Close
                    </Button>
                   
                </DialogActions>
            </Dialog>
        </div>
    );
}
