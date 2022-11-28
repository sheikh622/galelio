// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import galileo from 'assets/images/galileo.png';
import galileoWhite from 'assets/images/galileo-white.png';
import googlePlay from 'assets/images/google-play.png';
import appleStore from 'assets/images/apple-store.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import styles from './footer.module.css';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '35px 0',
    color: 'black',
  background:  theme.palette.mode === 'dark' ? theme.palette.dark.main : "#f5f5f5",
    // background: '#f5f5f5',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));



// ==============================|| LANDING - FOOTER PAGE ||============================== //

const Footer = () => {
    const useStyles = makeStyles((theme) => ({
        divider: {
            // Theme Color, or use css color in quote
            // background: theme.palette.success.light
            background: "#d3d3d3"
        }
    }));
    const classes = useStyles();
const theme = useTheme()
    return (
        <div style={{}}>
            <Divider variant={"light"} fullWidth sx={{ mt: 3, mb: 3, borderBottomWidth: 1, border:"1px solid #d3d3d3" }} classes={{ root: classes.divider }} />
    <FooterWrapper 
    style={{ background:theme.palette.mode === 'dark' ? "#181C1F" : "white",color: `${theme.palette.mode === 'dark' ? "white" : "black"}`}}>
                <Grid container-fluid alignItems="center" sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }} spacing={gridSpacing}>
                    <Grid item xs={12} md={4} sx={{ pl: 5, ml:4 }}>
                        {theme.palette.mode === 'dark' ?
                        <img src={galileoWhite} alt="Galileo White Logo" width="100" />
                        
                        :
                        <img src={galileo} alt="Galileo Dark Logo" width="100" />
                        
                        
                        }
                        <div style={{ marginTop: '5%' }}>
                            <span style={{ fontWeight: 'bolder' }}>Download the app by clicking the link below:</span>
                        </div>

                        <Grid container sx={{ mt: 3 }}>
                            <Grid item xs={5}>
                                <img src={googlePlay} alt="Google Play" width="120" />
                            </Grid>
                            <Grid item xs={6}>
                                <img src={appleStore} alt="Apple Store" width="120" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={1} sx={{mt:-1, ml: 3 }}>
                        <div style={{ marginBottom: '' }}>
                            <h2>Company</h2>
                        </div>
                        <div>
                            <span className={styles.link}>About</span>
                        </div>
                        <div className={styles.aboutLink}>
                            <span className={styles.link}>Mission</span>
                        </div>
                        <div className={styles.aboutLink}>
                            <span className={styles.link}>Team</span>
                        </div>
                        <div className={styles.aboutLink}>
                            <span className={styles.link}>Blog</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ paddingBottom: '2.5%', ml: 3 }}>
                        <h2>Service</h2>
                        <div>
                            <div>
                                <span className={styles.link}>FAQ</span>
                            </div>
                            <div className={styles.serviceLink}>
                                <span className={styles.link}>Support</span>
                            </div>
                            <div className={styles.serviceLink}>
                                <span className={styles.link}>Privacy Policy</span>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={12} lg={3} xl={3} sx={{ paddingBottom: '1.7%' }}>
                        <h2>Contact</h2>

                        <Grid>
                            <div>
                                <div
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <LocalPhoneIcon sx={{ height: '1.3rem' }} />
                                    <span className={styles.contactLink}>(123) 456-7890</span>
                                </div>

                                <div
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <EmailIcon sx={{ height: '' }} />
                                    <span className={styles.contactLink}>galileo@gmail.com</span>
                                </div>
                                <div
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <LocationOnIcon sx={{ height: '1.3rem' }} />
                                    <span className={styles.contactLink}>2972 Westeast Rd. LA, 85400 </span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ paddingBottom: '6.5%' }}>
                        <h2>Social Media</h2>

                        <div style={{}}>
                            <span>
                                <FacebookIcon />
                            </span>
                            <span className={styles.socialLink}>
                                <TwitterIcon />
                            </span>
                            <span className={styles.socialLink}>
                                <LinkedInIcon />
                            </span>
                            <span className={styles.socialLink}>
                                <InstagramIcon />
                            </span>
                        </div>
                    </Grid>
                </Grid>
            </FooterWrapper>
        </div>
    );
};

export default Footer;
