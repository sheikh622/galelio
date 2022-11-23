// material-ui
import { Grid } from '@mui/material';



import Sider from '../landing/Sider';


import Footer from '../user/footer/footer';
import Appbar from '../user/header/header';
import Tabs from './tabs'
// =============================|| LANDING MAIN ||============================= //

const Marketplace = () => (
    <div style={{background:""}}>
        <div style={{}}>
        <Appbar />

        </div>
        <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>
        <Grid item md={1} xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'none', lg:"flex" } }}>
                <Sider />
            </Grid>
            <Grid item md={11} xs={12} sx={{mt:2}}>
                <Grid container-fluid>
                <h1 style={{paddingLeft:""}}>Marketplace</h1>

                    <Grid item md={12} xs={12}>
                        
                <Tabs/>
                    </Grid>
              
                    <Grid item md={12} xs={12}>
                        <Footer />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
);

export default Marketplace;
