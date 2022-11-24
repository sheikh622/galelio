import { Container, Grid } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import DiscountIcon from '@mui/icons-material/Discount';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useNavigate, Link, useParams, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const SiderPage = () => {
    const navigate = useNavigate();
    const [color, setColor] = useState('#2196f3');
    const [pathName, setPathName] = useState('');
    // const pathname = window.location.href;

    // console.log("pathname from sidebar", pathname)

    const location = useLocation();

    // let pathname;
    // console.log('pathname from sidebar', location.pathname);

    useEffect(() => {
        setPathName(location.pathname);
    }, []);

    console.log('pathname state', pathName);

    return (
        <>
            <Container sx={{ mt: 5 }}>
                <Grid item xs={12} sm={8}>
                    <Grid
                        container
                        alignItems="center"
                        spacing={3}
                        sx={{
                            pt: 1,
                            pb: 3,
                            ml: 1,
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05)',
                            background: '#fafafa',
                            borderRadius: '4px'
                        }}
                    >
                        <Grid
                            item
                            sx={{ mt: 2, cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            {pathName == '/' ? (
                                <>
                                    <DashboardIcon sx={{ color: `${color}` }} />
                                </>
                            ) : (
                                <>
                                    <DashboardIcon />
                                </>
                            )}
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <PieChartIcon />
                        </Grid>
                        <Grid
                            item
                            sx={{ mt: 2, cursor: 'pointer' }}
                            onClick={() => {
                                navigate('/marketplace');
                            }}
                        >
                            {pathName.includes('/marketplace') ? (
                                <>
                                    <StorefrontIcon style={{ color: `${color}` }} />
                                </>
                            ) : (
                                <>
                                    <StorefrontIcon />
                                </>
                            )}
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <BookmarkIcon />
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <DownloadIcon />
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <DiscountIcon />
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <SettingsIcon />
                        </Grid>
                        <Grid item sx={{ mt: 2 }}>
                            <LogoutIcon />
                        </Grid>
                        <Grid item sx={{ mt:5  }}>
                            <WbSunnyIcon  style={{color:`${color}`}}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SiderPage;
