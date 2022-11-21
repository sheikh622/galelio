// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import Header from './Header';

import NewPage from './New';
import FeaturedPage from './FeaturedCreators';
import Sider from './Sider';

import Demo from './Demos';
import Footer from '../user/footer/footer';
import Appbar from '../user/header/header';

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <Appbar />
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>
            <Grid item md={1} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                <Sider />
            </Grid>
            <Grid item md={11} xs={12}>
                <Grid container-fluid>
                    <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
                        <Header />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <NewPage />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Demo />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <FeaturedPage />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
);

export default Landing;
