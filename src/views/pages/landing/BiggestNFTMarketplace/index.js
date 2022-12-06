// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import Header from './Header';
import Appbar from 'layout/UserLayout/header';

import NewPage from './New';
import FeaturedPage from './FeaturedCreators';
import Sider from '../BiggestNFTMarketplace/Sider';

import CategoriesPage from './Categories';


// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const theme = useTheme();

    return (
      <Grid item md={11} xs={12}>
                    <Grid container-fluid>
                        <Grid item md={12} xs={12} className="mainBackground" sx={{ border: '2px solid transparent' }}>
                            <Header />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <NewPage />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <CategoriesPage />
                        </Grid>

                        <Grid mb={4} item md={12} xs={12}>
                            <FeaturedPage />
                        </Grid>
                    </Grid>
                </Grid>
    );
};

export default Landing;
