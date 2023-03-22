import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ListItemButton from '@mui/material/ListItemButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import DiscountIcon from '@mui/icons-material/Discount';
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

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 ,}}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Overview'}
                            onClick={() => {
                                navigate('/home');
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                {(user?.role == 'Admin' || 'Brand Admin' || 'Super Admin') && user?.role != 'User' && user != null && (
                          
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <PieChartIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dashboard'}  onClick={() => {
                                navigate('/dashboard');
                            }}/>
                    </ListItemButton>
                </ListItem>
                )}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <StorefrontIcon />
                        </ListItemIcon>
                        <ListItemText
                            primary={'Marketplace'}
                            onClick={() => {
                                navigate('/marketplace');
                            }}
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <BookmarkIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Watchlist'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Inbox'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DiscountIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Offers'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DownloadIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Resources'} />
                    </ListItemButton>
                </ListItem>
                {customization.navType == 'dark' ? (
                      <ListItem disablePadding>
                      <ListItemButton>
                          <ListItemIcon>
                              <WbSunnyIcon />
                          </ListItemIcon>
                          <ListItemText primary={'Light'} />
                      </ListItemButton>
                  </ListItem>
                ) :(
                    <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <DarkModeIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Dark'} 
                          onClick={() => setNavType('dark')}/>
                    </ListItemButton>
                </ListItem>
                )
}
              
            </List>
        </Box>
    );

    return (
        <div>
            {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                        <AccountBalanceWalletIcon 
                        // onClick={toggleDrawer(anchor, true)}
                         sx={{ color: '#4dabf5' }} />
                 
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
