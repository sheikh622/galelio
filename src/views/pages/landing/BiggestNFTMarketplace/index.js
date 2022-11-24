// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import Header from './Header';

import NewPage from './New';
import FeaturedPage from './FeaturedCreators';
import Sider from './Sider';

import CategoriesPage from './Categories';
import Footer from 'views/pages/user/footer/footer';
import Appbar from 'views/pages/user/header/header';

// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <div style={{  }}>
        <Appbar />
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, background: '#F5F5F5' }}>
            <Grid
                item
                md={1}
                xs={12}
                sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
            >
                <Sider style={{}} />
            </Grid>
            <Grid item md={11} xs={12}>
                <Grid container-fluid sx={{background:""}}>
                    <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
                        <Header />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <NewPage />
                    </Grid>
                    <Grid item md={12} xs={12}>
                        <CategoriesPage />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <FeaturedPage />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Footer />
    </div>
);

export default Landing;
