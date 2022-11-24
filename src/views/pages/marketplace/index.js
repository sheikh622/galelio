// material-ui
import { Divider, Grid } from '@mui/material';
import { useTheme } from '@mui/styles';



import Sider from '../landing/BiggestNFTMarketplace/Sider';


import Footer from '../user/footer/footer';
import Appbar from '../user/header/header';
import Tabs from './tabs'
// =============================|| LANDING MAIN ||============================= //

const Marketplace = () => 


{
    const theme = useTheme()
    return (
        
        <div style={{background: theme.palette.mode === 'dark' ? theme.palette.dark.main : "#f3f3f3"}}>
            <div style={{}}>
            <Appbar />
    
            </div>
            <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }}>
            <Grid
                    item
                    md={1}
                    xs={12}
                    sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                >
                    <Sider style={{}} />
                </Grid>
                <Grid item md={11} xs={12} sx={{mt:2}}>
                    <Grid container>
                    <h1 style={{paddingLeft:"0.5%"}}>Marketplace</h1>
    
                        <Grid item md={12} xs={12}>
                            
                    <Tabs/>
                        </Grid>
                        {/* <Grid item xs={12}>
    
                        <Divider fullWidth sx={{mt:3, mb:3, borderBottomWidth: 5 }} style={{background:"red !important"}}/>
                        </Grid> */}
                        <Grid item md={12} xs={12}>
                            
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* <Grid containerfluid> */}
    
            <Footer />
            {/* </Grid> */}
        </div>
    );
}


export default Marketplace;
