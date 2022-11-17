// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const CategoriesPage = () => {
    const theme = useTheme();

    return (
        <Grid container-fluid spacing={gridSpacing}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography variant="h2" mt={4} component="div">
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <Grid
                    container-fluid
                    justifyContent="center"
                    sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}
                    spacing={gridSpacing}
                >
                    <Grid item lg={3} md={2} xs={12} sm={12}>
                        <Grid className="CategoriesCars">
                            <Grid container>
                                <Typography className="CategoriesTextCars" variant="h5">
                                    Luxury Cars
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={2} xs={12} sm={12}>
                        <Grid className="CategoriesShoes">
                            <Grid container>
                                <Typography className="CategoriesTextShoes" variant="h5">
                                    Luxury Shoes
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={2} xs={12} sm={12}>
                        <Grid className="CategoriesWatches">
                            <Grid container>
                                <Typography className="CategoriesTextWatches" variant="h5">
                                    Luxury Watches
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={2} xs={12} sm={12}>
                        <Grid className="CategoriesGoods">
                            <Grid container>
                                <Typography className="CategoriesTextGoods" variant="h5">
                                    Luxury Goods
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={3} md={2} xs={12} sm={12}>
                        <Grid className="CategoriesEstate">
                            <Grid container>
                                <Typography className="CategoriesTextEstate" variant="h5">
                                    Real Estate
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CategoriesPage;
