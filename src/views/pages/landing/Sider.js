
import { Container, Grid} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PieChartIcon from '@mui/icons-material/PieChart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import DownloadIcon from '@mui/icons-material/Download';
import DiscountIcon from '@mui/icons-material/Discount';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate, Link } from 'react-router-dom';

const SiderPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Container sx={{mt:5}}>
                <Grid item xs={12} sm={8}>
                    <Grid container alignItems="center" spacing={3} sx={{  pt:3, pb:3, ml:1, boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)", background: '#fafafa', borderRadius:"4px"}}>
                    <Grid item sx={{mt:2, cursor: "pointer"}} onClick={()=>{
                          navigate('/');
                        }}>
                        <DashboardIcon sx={{color:"#2196f3"}}/>
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <PieChartIcon/>
                        </Grid>
                        <Grid item sx={{mt:2, cursor: "pointer"}} onClick={()=>{
                          navigate('/marketplace');
                        }}>
                        

                        <StorefrontIcon />

                        
                        
                        
                        
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <BookmarkIcon   />
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <DownloadIcon/>
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <DiscountIcon/>
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <SettingsIcon/>
                        </Grid>
                        <Grid item sx={{mt:2}}>
                        <LogoutIcon/>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default SiderPage;
