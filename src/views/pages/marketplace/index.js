import { Grid, Divider } from '@mui/material';
import { useTheme } from '@mui/styles';
import Sider from '../landing/BiggestNFTMarketplace/Sider';
import Footer from '../user/footer/footer';
import Appbar from '../user/header/header';
import Tabs from './tabs';

const Marketplace = () => {
    const theme = useTheme();
    return (
        <Grid style={{ background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
        color: theme.palette.mode === 'dark' ? 'white' : '#404040' }}>
            <Grid style={{}}>
                <Appbar />
            </Grid>
            <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } ,   marginBottom:'40px'}}>
                <Grid
                    item
                    md={1}
                    xs={12}
                    sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                >
                    <Sider style={{}} />
                </Grid>
                <Grid item md={11} xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                        <h1 style={{ paddingLeft: '0.5%' }}>Marketplace</h1>

                        <Grid item md={12} xs={12}>
                            <Tabs />
                        </Grid>
                        <Grid item md={12} xs={12}></Grid>
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
                  },
                  background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3'
              }}
          >
              <Grid item md={1} xs={12}></Grid>
              <Grid  item md={11} xs={12}>
                  <Footer />
              </Grid>
          </Grid>
        </Grid>
    );
};

export default Marketplace;
