// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import galileo from 'assets/images/galileo.png';
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
// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '35px 0',
    color: 'black',
    background: 'white',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const FooterLink = styled(Link)({
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    opacity: '0.8',
    '& svg': {
        fontsize: '1.125rem',
        marginRight: 8
    },
    '&:hover': {
        opacity: '1'
    }
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
    padding: '20px 0',
    color: '#fff',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const Footer = () => {
    const theme = useTheme();

    return (
        <>
            <FooterWrapper>
                <Container>
                    <Grid container alignItems="center" spacing={gridSpacing}>
                        <Grid item xs={12} md={4}>
                            <img src={galileo} alt="Galileo" width="100" />
                            <div style={{ marginTop: '5%' }}>
                                <span style={{ color: '#0E0F1D', fontWeight: 'bolder' }}>Download the app by clicking the link below:</span>
                            </div>

                            <Grid container sx={{ mt: 3 }}>
                                <Grid item xs={6}>
                                    <img src={googlePlay} alt="Google Play" width="120" />
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={appleStore} alt="Apple Store" width="120" />
                                </Grid>
                            </Grid>
                        </Grid>



                        <Grid item xs={4} md={1}>
                            <div style={{ marginBottom: '20%' }}>
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
                        <Grid item xs={6} md={2} sx={{ paddingBottom:"2.5%", ml: 7 }}>
                            <h2 >Service</h2>
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



                        <Grid className={"phone"} item xs={12} sm={12} md={12} lg={3} xl={3} sx={{ paddingBottom:"1.7%", mr:5 }}>
                            <h2>Contact</h2>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                marginTop:"3%", 
                             
                            }}>
                                    <LocalPhoneIcon sx={{height:"1.3rem"}} />
                                <span className={styles.contactLink} >
                                    (123) 456-7890
                                </span>
                            </div>
                      
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                marginTop:"3%"
                            }}>
                                       <EmailIcon   sx={{height:""}} />
                                <span className={styles.contactLink}  >
                                  galileo@gmail.com
                                </span>
                            </div>  
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                marginTop:"3%"
                            }}>
                                    <LocationOnIcon  sx={{height:"1.3rem"}}/>
                                <span className={styles.contactLink} >
                                    2972 Westeast Rd. LA, 85400{' '}
                                </span>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{ paddingBottom:"6.5%"}}>
                            
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
                </Container> 
            </FooterWrapper>
        </>
    );
};

export default Footer;
