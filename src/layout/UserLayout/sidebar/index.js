import { Container, Grid, Box } from '@mui/material';
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
            <Grid
                className="sidebar"
                xs={12}
                sm={10}
                md={9}
                lg={9}
                xl={7.5}
                container
                alignItems="center"
                spacing={2}
                sx={{
                    // pt: 1,
                    // pb: 3,
                    ml: 2,
                    mr: 2,

                    // maxWidth: { lg: '90% !important' },
                    display: 'block',
                    backgroundColor: `${theme.palette.mode === 'dark' ? '#181C1F' : '#fff'}`,
                    // background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff',
                    borderRadius: '4px'
                }}
            >
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/home')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px',lg: '29px', xl: '31px'} }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/home' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Home" placement="right" arrow>
                            <DashboardIcon sx={{  color: `${pathName == '/home' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/chart')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px', lg: '29px', xl: '31px' } }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/chart' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <PieChartIcon sx={{  color: `${pathName == '/chart' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>

                <Grid
                    item
                    sx={{ mt: 1, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => {
                        navigate('/marketplace');
                    }}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { md: '21px', lg: '29px', xl: '31px' } }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background: pathName.includes('marketplace')
                                    ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)'
                                    : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Marketplace" placement="right" arrow>
                            <StorefrontIcon className="fontsize" sx={{  color: `${pathName == '/marketplace' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/bookmarks')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px', lg: '29px', xl: '31px' } }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/bookmarks' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <BookmarkIcon  sx={{  color: `${pathName == '/bookmarks' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/downloads')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px',lg: '29px', xl: '31px'} }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/downloads' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <DownloadIcon  sx={{  color: `${pathName == '/downloads' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/tags')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px', lg: '29px', xl: '31px' } }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/tags' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <DiscountIcon  sx={{  color: `${pathName == '/tags' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/settings')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px',lg: '29px', xl: '31px' } }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background:
                                    pathName == '/settings' ? 'linear-gradient(138.3deg, #2F53FF -0.85%, #2FC1FF 131.63%)' : 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <SettingsIcon  sx={{  color: `${pathName == '/settings' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid
                    item
                    sx={{ mt: 2, paddingLeft: '0 ! important', textAlign: 'center', cursor: 'pointer' }}
                    onClick={() => navigate('/ComingSoon')}
                >
                    <Box className="sideLine Gap" sx={{ display: 'flex', gap: { xl: '31px', md: '21px', lg: '29px', xl: '31px'} }}>
                        <Box
                            className="barHeight"
                            sx={{
                                height: { xl: '62px', md: '40px' },
                                width: { xl: '12px', md: '9px' },
                                padding: '3px',
                                background: 'transparent',
                                borderRadius: '0px 5px 5px 0px'
                            }}
                        ></Box>
                        <Tooltip className="fontsize" title="Comming Soon" placement="right" arrow>
                            <LogoutIcon  sx={{  color: `${pathName == '/ComingSoon' ? color : ''}`, alignSelf: 'center' }} />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ mt: 8, mb: 2, paddingLeft: '0 ! important', textAlign: 'center' }}>
                    {customization.navType == 'dark' ? (
                        <>
                            <Tooltip className="fontsize" title="light" placement="right" arrow>
                                <DarkModeIcon
                                    style={{ color: `${color}`, cursor: 'pointer', fontSize: { xl: '40px' } }}
                                    onClick={() => setNavType('light')}
                                />
                            </Tooltip>
                        </>
                    ) : (
                        <>
                            {' '}
                            <Tooltip className="fontsize" title="Dark" placement="right" arrow>
                                <WbSunnyIcon style={{ color: `${color}`, cursor: 'pointer' }} onClick={() => setNavType('dark')} />
                            </Tooltip>{' '}
                        </>
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default SideBar;
