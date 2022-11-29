import { Outlet } from 'react-router-dom';
import { Grid, Divider } from '@mui/material';
import Footer from './footer';
import Header from './header';

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Divider sx={{ borderBottomWidth: 1, border: '1px solid #ccc' }} />
            <Grid
                container-fluid
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'flex'
                    }
                }}
            >
                <Grid item md={1} xs={12}></Grid>
                <Grid item md={11} xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </>
    );
};

export default UserLayout;
