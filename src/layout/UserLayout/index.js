import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Divider } from '@mui/material';
import Footer from './footer';
import Header from './header';
import SideBar from './sidebar';
const UserLayout = () => {
    const theme = useTheme();
    return (
        <>
            <Header />
            <Grid
                sx={{
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3'
                }}
            >
                <Grid
                    container
                    sx={{
                        display: {
                            xs: 'block',
                            sm: 'block',
                            md: 'flex'
                        },
                        paddingBottom: '40px'
                    }}
                >
                    <Grid
                        item
                        md={1}
                        xs={12}
                        sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                    >
                        <SideBar />
                    </Grid>
                    <Outlet />
                </Grid>
            </Grid>

            <Divider sx={{ borderBottomWidth: 1, border: '1px solid #ccc' }} />

            <Grid item md={10} xs={12} sx={{ pl: 3 ,  
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}>
                <Footer />
            </Grid>
        </>
    );
};

export default UserLayout;
