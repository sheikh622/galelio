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
                container
                sx={{
                    ml: 2,
                    mr: 2,
                    display: 'block',
                    backgroundColor: `${theme.palette.mode === 'dark' ? '#181C1F' : '#fff'}`,
                    // background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff',
                    borderRadius: '4px'
                }}
            >
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/home')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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

                        <Tooltip title="Home" placement="right" arrow>
                            <DashboardIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/home' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/chart')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <PieChartIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/chart' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>

                <Grid
                    item
                    sx={{ cursor: 'pointer', mt: 2 }}
                    onClick={() => {
                        navigate('/marketplace');
                    }}
                >
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Marketplace" placement="right" arrow>
                            <StorefrontIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/marketplace' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/bookmarks')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <BookmarkIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/bookmarks' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/downloads')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <DownloadIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/downloads' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/tags')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <DiscountIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/tags' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/settings')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <SettingsIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/settings' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ cursor: 'pointer', mt: 2 }} onClick={() => navigate('/ComingSoon')}>
                    <Box style={{ display: 'flex' }} className="Gap" sx={{ gap: { md: '0.7rem', lg: '1.5rem', xl: '3rem' } }}>
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
                        <Tooltip title="Comming Soon" placement="right" arrow>
                            <LogoutIcon className='FONT'
                                sx={{
                                    fontSize: { md: '1.25rem', xl: '2.5rem' },
                                    color: `${pathName == '/ComingSoon' ? color : ''}`,
                                    alignSelf: 'center'
                                }}
                            />
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item sx={{ mt: 8, mb: 2, paddingLeft: '0 ! important' }}>
                    <Box style={{ display: 'flex' }} className="xl-gap"  sx={{ gap: { md: '0.7rem', lg: '1.5rem',  } }}>
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
                        {customization.navType == 'dark' ? (
                            <>
                                <Tooltip sx={{ alignSelf: 'center' }} title="light" placement="right" arrow>
                                    <DarkModeIcon className='FONT'
                                        sx={{ fontSize: { md: '1.25rem', xl: '2.5rem' } }}
                                        style={{
                                            mt: 2,
                                            paddingLeft: '0 ! important',
                                            textAlign: 'center',
                                            color: `${color}`,
                                            cursor: 'pointer',
                                            
                                        }}
                                        onClick={() => setNavType('light')}
                                    />
                                </Tooltip>
                            </>
                        ) : (
                            <>
                                <Tooltip title="Dark" placement="right" arrow>
                                    <WbSunnyIcon className='FONT'
                                        sx={{ fontSize: { md: '1.25rem', xl: '2.5rem' } }}
                                        style={{ color: `${color}`, cursor: 'pointer' }}
                                        onClick={() => setNavType('dark')}
                                    />
                                </Tooltip>{' '}
                            </>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default SideBar;
