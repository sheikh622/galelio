import PropTypes from 'prop-types';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Drawer, List, useMediaQuery, Typography, Divider } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';

// third-party
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BrowserView, MobileView } from 'react-device-detect';

// project imports
import MenuList from './MenuList';
import LogoSection from '../LogoSection';
import { drawerWidth } from 'store/constant';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import QuizIcon from '@mui/icons-material/Quiz';
import ChatIcon from '@mui/icons-material/Chat';
import ArticleIcon from '@mui/icons-material/Article';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import { MENU_TYPE } from 'store/actions';

// ==============================|| SIDEBAR DRAWER ||============================== //

const Sidebar = ({ drawerOpen, drawerToggle, window }) => {
    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);
    const [navType, setNavType] = useState(customization.navType);
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));

    useEffect(() => {
        dispatch({ type: MENU_TYPE, navType });
    }, [dispatch, navType]);

   
    const drawer = (
        <>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
                    <LogoSection />
                </Box>
            </Box>
            <BrowserView>
                <PerfectScrollbar
                    component="div"
                    style={{
                        height: !matchUpMd ? 'calc(100vh - 56px)' : 'calc(100vh - 88px)',
                        paddingLeft: '16px',
                        paddingRight: '16px'
                    }}
                >
                    <MenuList />
                    <List sx={{ marginTop: '42%' }}>
                        <ListItem disablePadding>
                            <ListItemButton >
                                <ListItemIcon  sx={{color:"#98A2B2"}}> 
                                    <QuizIcon />
                                </ListItemIcon>
                                {/* <ListItemText > */}
                                    <span style={{color:"#98A2B2 !important"}}>FAQ</span>
                                {/* </ListItemText > */}
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon  sx={{color:"#98A2B2"}}>
                                    <ChatIcon />
                                </ListItemIcon >
                                {/* <ListItemText sx={{color:"#98A2B2"}} primary="Contact" /> */}
                                <span style={{color:"#98A2B2 !important"}}>Contact</span>
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding sx={{ background: '#f3f3f3', borderRadius: '120px', mb: 3, padding: '3%' }}>
                              
                            <ListItemButton
                            onClick={() => setNavType('light')}
                            sx={{  background: customization.navType == 'light' ? 'white':'', borderRadius: '150px'}}>
                                <ListItemIcon>
                                    <LightModeIcon />
                                </ListItemIcon>
                                Light
                            </ListItemButton>
                            <ListItemButton 
                             sx={{  ml:2, background: customization.navType == 'dark' ? 'white':'', borderRadius: '150px'}}
                            onClick={() => setNavType('dark')}
                            >
                                <ListItemIcon>
                                    <DarkModeIcon />
                                </ListItemIcon>
                                Dark
                            </ListItemButton>
                        </ListItem>
                        <Divider></Divider>
                        <ListItem disablePadding sx={{ mt: 3 }}>
                            <ListItemButton>
                                <ListItemIcon>
                                    <ArticleIcon />
                                </ListItemIcon>
                                {/* <ListItemText primary="Terms of Services" /> */}

                                <span style={{color:"#98A2B2 !important"}}>Terms of services</span>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </PerfectScrollbar>
            </BrowserView>
            <MobileView>
                <Box sx={{ px: 2 }}>
                    <MenuList />
                </Box>
            </MobileView>
        </>
    );

    const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box component="nav" sx={{ flexShrink: { md: 0 }, width: matchUpMd ? drawerWidth : 'auto' }} aria-label="mailbox folders">
            <Drawer
                container={container}
                variant={matchUpMd ? 'persistent' : 'temporary'}
                anchor="left"
                open={drawerOpen}
                onClose={drawerToggle}
                sx={{
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: '9c6a36',
                        color: theme.palette.text.primary,
                        borderRight: 'none',
                        [theme.breakpoints.up('md')]: {
                            top: '88px'
                        }
                    }
                }}
                ModalProps={{ keepMounted: true }}
                color="inherit"
            >
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    drawerOpen: PropTypes.bool,
    drawerToggle: PropTypes.func,
    window: PropTypes.object
};

export default Sidebar;
