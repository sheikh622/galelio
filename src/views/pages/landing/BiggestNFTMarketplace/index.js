// material-ui
import { styled } from '@mui/material/styles';
import { Box, Grid, Typography , Divider} from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project imports
import Header from './Header';

import NewPage from './New';
import FeaturedPage from './FeaturedCreators';
import Sider from './Sider';

import CategoriesPage from './Categories';
import Footer from 'views/pages/user/footer/footer';
import Appbar from 'views/pages/user/header/header';

// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const theme = useTheme();

    return (
        <Grid
            sx={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3'
            }}
        >
            <Appbar />
            <Grid
                container-fluid
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'flex'
                    },
                    marginBottom:'40px'
                }}
            >
                <Grid
                    item
                    md={1}
                    xs={12}
                    sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                >
                    <Sider />
                </Grid>
                <Grid item md={11} xs={12}>
                    <Grid container-fluid sx={{ background: '' }}>
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
            </Grid>
            <Divider sx={{borderBottomWidth: 1, border: '1px solid #ccc'}}/>
            {/*  footer side */}
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
        </Grid>
    );
};

export default Landing;
