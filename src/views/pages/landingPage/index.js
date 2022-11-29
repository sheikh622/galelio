
import { Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Header from './component/Header';
import NewPage from './component/New';
import FeaturedPage from './component/FeaturedCreators';
import Sider from './component/Sider';
import CategoriesPage from './component/Categories';



// =============================|| LANDING MAIN ||============================= //

const Landing = () => {
    const theme = useTheme();

    return (
        <Grid
            sx={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3'
            }}
        >
           
            <Grid
                container-fluid
                sx={{
                    display: {
                        xs: 'block',
                        sm: 'block',
                        md: 'flex'
                    },
                    marginBottom: '40px'
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
          
        </Grid>
    );
};

export default Landing;
