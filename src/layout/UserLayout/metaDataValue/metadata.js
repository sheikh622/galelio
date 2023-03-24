import * as React from 'react';
import { useState } from 'react';
import MainCard from 'ui-component/cards/MainCard';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Button, Divider, Grid, Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MetaMaskSection from '../header/MetaMaskSection';

import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function MetaData() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const customization = useSelector((state) => state.customization);

    const [navType, setNavType] = useState(customization.navType);
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const theme = useTheme();

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            <Box sx={{ pt: 4, pl: 4, pr: 2 }}>
                <Grid container spacing={2}>
                    <Grid mt={3} xs={8} sx={{ display: 'flex' }}>
                        <Avatar sx={{ width: 38, height: 38, marginTop: { md: '-7px' } , mr:1}}>w</Avatar>
                        <Typography className="My-wallet" variant="h2" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                            My wallet 
                        </Typography>
                        <ExpandMoreIcon sx={{color:'gray'}}/>
                    </Grid>
                    <Grid mt={2.3} xs={4}>
                        <MetaMaskSection />
                    </Grid>

                    <Grid mt={2} mb={1} xs={12}>
                        <Divider />
                    </Grid>
                    <Grid mt={1} xs={12}>
                        <MainCard
                            className="walletShadow" 
                            // sx={{borderColor: theme.palette.mode === 'dark' ? '#2d2e2f' : '#90caf975'}}
                            title={
                                <Grid container spacing={1}>
                                    <Grid item xs={11}>
                                        <Typography
                                            className="balance"
                                            variant="body2"
                                            sx={{ textAlign: 'center', color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#9e9e9e' }}
                                        >
                                            Total Balance
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Typography
                                            className="usd"
                                            variant="h1"
                                            component="h2"
                                            sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
                                        >
                                            $ 0.000 USD
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} textAlign="center" sx={{ marginBottom: { md: '-24px' } }}>
                                        <Button className="wallet-button" variant="contained" size="large">
                                            Add Funds
                                        </Button>
                                    </Grid>
                                </Grid>
                            }
                            content={false}
                        ></MainCard>
                    </Grid>
                    <Grid mt={1.7} xs={4}>
                        {/*    <Item >POPULAR</Item> */}
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <AccountBalanceWalletIcon onClick={toggleDrawer(anchor, true)} sx={{ color: '#4dabf5' }} />

                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}
