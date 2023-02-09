import { Container, Grid , Box} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import DiscountIcon from '@mui/icons-material/Discount';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { MENU_TYPE } from 'store/actions';
import Tooltip from '@mui/material/Tooltip';
const SideBar = () => {
    const navigate = useNavigate();
    const [color] = useState('#2196f3');
    const [pathName, setPathName] = useState('');

    const location = useLocation();
    useEffect(() => {
        setPathName(location.pathname);
    });

    const theme = useTheme();

    const dispatch = useDispatch();
    const customization = useSelector((state) => state.customization);

    const [navType, setNavType] = useState(customization.navType);

    useEffect(() => {
        dispatch({ type: MENU_TYPE, navType });
    }, [dispatch, navType]);
    return (
        <>
            <Container sx={{ mt: 5}}>
                <Grid item xs={12}  >
                    <Grid
                        xs={12}
                        md={10}
                        lg={12}
                        xl={6}
                        container
                        alignItems="center"
                        spacing={3}
                        sx={{
                            pt: 1,
                            pb: 3,
                            ml: 1,
                            mr: 1,
                            display:'block',
                            boxShadow: '1px 2px 2px 2px #d3d3d391',
                            background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff',
                            borderRadius: '4px'
                        }}
                    >
                        <Grid
                            item
                            sx={{ mt: 2, 
                                 paddingLeft:'0 ! important', textAlign:'center',
                                  cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/landingPage');
                            }}
                        >
                            {pathName == '/landingPage' ? (
                                <>
                                <Box sx={{borderLeft:'6px solid #2196f3'}}>
                                    <Tooltip title="Landing Page" placement="right" arrow 
                                    >
                                        <DashboardIcon sx={{ color: `${color}` ,  }} />
                                    </Tooltip></Box>
                                </>
                            ) : (
                                <>
                                    <Tooltip title="Landing Page" placement="right" arrow>
                                        <DashboardIcon />
                                    </Tooltip>
                                </>
                            )}
                        </Grid>
                     {/*   <Grid item sx={{ mt: 2 ,  marginLeft:'-5px', }}>
                            <PieChartIcon  />
                        </Grid>  */}
                        <Grid
                            item
                            sx={{ mt: 2, paddingLeft:'0 ! important', textAlign:'center', cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/marketplace');
                            }}
                        >
                            {pathName.includes('marketplace') ? (
                                <> 
                                <Box sx={{borderLeft:'6px solid #2196f3'}}>
                                    <Tooltip title="Marketplace" placement="right" arrow>
                                        <StorefrontIcon style={{ color: `${color}` }} />
                                    </Tooltip>
                                    </Box>
                                </>
                            ) : (
                                <>
                                    <Tooltip title="Marketplace" placement="right" arrow>
                                        <StorefrontIcon  />
                                    </Tooltip>
                                </>
                            )}
                        </Grid>
                         <Grid item sx={{ mt: 2 ,  marginLeft:'-5px',}}>
                            <BookmarkIcon sx={{ color: 'transparent' }} />
                        </Grid>
                        <Grid item sx={{ mt: 2 ,  marginLeft:'-5px',}}>
                            <DownloadIcon  sx={{ color: 'transparent' }}/>
                        </Grid>
                        <Grid item sx={{ mt: 2 , marginLeft:'-5px', }}>
                            <DiscountIcon sx={{ color: 'transparent' }} />
                        </Grid>
                        <Grid item sx={{ mt: 2 , marginLeft:'-5px', }}>
                            <SettingsIcon  sx={{ color: 'transparent' }}/>
                        </Grid>
                       <Grid item sx={{ mt: 2 ,  marginLeft:'-5px',}}>
                            <LogoutIcon sx={{ color: 'transparent' }} />
                        </Grid> 
                        <Grid item sx={{ mt: 5 ,  paddingLeft:'0 ! important', textAlign:'center',}}>
                            {customization.navType == 'dark' ? (
                                <>
                                <Box >
                                <WbSunnyIcon style={{ color: `${color}`, cursor: 'pointer' }} onClick={() => setNavType('light')} />
                               </Box>
                                </>
                            ) : (
                                <>
                                    <DarkModeIcon style={{ color: `${color}`, cursor: 'pointer' }} onClick={() => setNavType('dark')} />
                                </>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SideBar;
