import { Grid } from '@mui/material';
import Header from './component/Header';
import NewPage from './component/New';
import FeaturedPage from './component/FeaturedCreators';
import CategoriesPage from './component/Categories';

const Landing = () => {
    return (
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
    );
};

export default Landing;
