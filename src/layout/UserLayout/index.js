import { Outlet } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { Grid, Divider } from '@mui/material';
import Footer from './footer';
import Header from './header';
import SideBar from './sidebar';
const UserLayout = () => {
    const theme = useTheme();
    return (
        <>
            
            <Grid container
                sx={{
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3'
                }}
            >
              
                <Grid mt={2} ml={2} mr={2} mb={1} item md={12} sm={12} xs={12} sx={{  
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040', borderRadius:'4px'

                }}>
                <Header />
                </Grid>

                    <Grid
                        item
                        md={1}
                        xs={12}
                        sx={{ position: 'sticky', height: '100%', top: '0', 
                        display: { xs: 'none', sm: 'none', md: 'flex' , lg:'flex' , xl:'flex'}    
                          }}
                    >
                        <SideBar />
                    </Grid>
                    <Grid  item
                        md={11}
                        xs={12}
                       sm={12}
                        >
                           
                    <Outlet />
                    </Grid>
                  
                </Grid>
         

            <Divider sx={{ borderBottomWidth: 1, border: '1px solid #ccc' }} />

            <Grid item md={10} sm={10} xs={12} sx={{ pl:{ md:3 , lg:3} ,  
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}>
                <Footer />
            </Grid>
        </>
    );
};

export default UserLayout;
