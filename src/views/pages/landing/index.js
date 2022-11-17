// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';

// project imports
import Header from './Header';
import CategoriesPage from './Categories';

import Footer from './Footer';

import AppBar from 'ui-component/extended/AppBar';



// =============================|| LANDING MAIN ||============================= //

const Landing = () => (
    <>
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' },  }} >
            <Grid item md={1} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'flex' },  }} >
                <Footer />
            </Grid>
            <Grid item md={11} xs={12} sx={{ border: '2px solid red' }}>
                <Grid container-fluid>
                    <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid red' }}>
                        <Header />
                    </Grid>
                    <Grid item md={12} xs={12} sx={{ border: '2px solid red' }}>
                        <CategoriesPage />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </>
);

export default Landing;
