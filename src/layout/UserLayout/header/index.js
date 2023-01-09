import * as React from 'react';
import { styled, alpha, useTheme } from '@mui/material/styles';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import userHeader from 'assets/images/userHeader.png';
import galileo from 'assets/images/galileo.png';
import galileoWhite from 'assets/images/galileo-white.png';
import styles from './header.module.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Drawer from '../drawer/drawer';
import { logout } from 'redux/auth/actions';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import MetaMaskSection from "./MetaMaskSection"
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto'
    }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    background: theme.palette.mode === 'dark' ? theme.palette.dark.main : 'white',

    color: 'white',
    '& .MuiInputBase-input': {
        background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '100ch'
        }
    }
}));

export default function Header() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = async () => {
        try {
            await dispatch(logout());
            navigate('/login');
        } catch (err) {
            console.error(err);
        }
    };

    const user = useSelector((state) => state.auth.user);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem component={RouterLink}
           className='userName'
             >
            {user?.firstName} {user?.lastName}
            </MenuItem>
            <MenuItem component={RouterLink} to="/creatorProfile" onClick={handleMenuClose}>
                My Profile
            </MenuItem>
            <MenuItem component={RouterLink} to="/deliveryDashboard" onClick={handleMenuClose}>
                Delivery Dashboard
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>

            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                ></IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    const theme = useTheme();

    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" 
            sx={{ backgroundColor: `${theme.palette.mode === 'dark' ? '#181C1F;' : 'white'}` }}>
                <Toolbar >
                <Box
                sx={{                    
                    height: '4em',
                    paddingTop: '1em',
                    width: '100%',
                    marginLeft: '2%',
                    display: 'flex',
                    [theme.breakpoints.down('md')]: {
                        width: 'auto'
                    }
                }}
            >
                <Box sx={{ display: { xs: 'block', md: 'block' },  }}>
                    <Typography variant="h6" noWrap component="div" 
                    sx={{ marginTop:'5px', display: { xs: '', sm: 'block' } }}>
                        {theme.palette.mode === 'dark' ? (
                            <img src={galileoWhite} alt="Galileo White Logo" width="100" />
                        ) : (
                            <img src={galileo} alt="Galileo Dark Logo" width="100" />
                        )}
                    </Typography>
                    
                    </Box>

                 
                    <Grid container-fluid>
                        <Grid item sx={{ display: { lg: 'none', md: 'block' } }}>
                            <Drawer />
                        </Grid>

                        <Search
                            sx={{ width: '50rem !important', 
                            display: { xs: 'none', md: 'none', lg: 'flex', xl: 'flex' } }}
                            className={styles.search}
                        >
                            <SearchIconWrapper>
                                <SearchIcon sx={{ color: '#d3d3d3', zIndex: '1' }} />
                            </SearchIconWrapper>
                            <StyledInputBase placeholder="Search" style={{ width: '100%' }} 
                            inputProps={{ 'aria-label': 'search' }} />
                        </Search>
                        
                    </Grid>
                    
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 3 }}>
                        <div style={{marginRight:"3%"}}>
{user  &&

                    <MetaMaskSection/>
}

                        </div>
                        <IconButton size="large" aria-label="" color="inherit">
                            <Badge badgeContent={17} color="error">
                                <NotificationsIcon sx={{ color: '#4dabf5' }} />
                            </Badge>
                        </IconButton>
                        <IconButton size="large" aria-label="" color="inherit">
                            <AccountBalanceWalletIcon sx={{ color: '#4dabf5' }} />
                        </IconButton>
                        <IconButton size="large" aria-label="" color="inherit">
                            <ShoppingCartIcon sx={{ color: '#4dabf5' }} />
                        </IconButton>
                    </Box>
                    {user == null && (
                        <Button
                            variant="outlined"
                            onClick={() => {
                                navigate('/login');
                            }}
                        >
                            Login
                        </Button>
                    )}
                    {user !== null && (
                        <>
                            <img src={userHeader} alt="" height="40" style={{ display: 'inlineBlock' }} />

                           

                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <KeyboardArrowDownIcon sx={{ color: '#4dabf5' }} />
                            </IconButton>
                        </>
                    )}
                    </Box>
                </Toolbar>
            </AppBar>
            {user !== null && (
                <>
                    {renderMobileMenu}
                    {renderMenu}
                </>
            )}
        </Box>
    );
}
