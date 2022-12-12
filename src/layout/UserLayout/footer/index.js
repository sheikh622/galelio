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

    // background: '#f5f5f5',
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const Footer = () => {
    const useStyles = makeStyles((theme) => ({}));
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Grid>
            <FooterWrapper
                style={{
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid container alignItems="center" sx={{ display: { xs: 'block', sm: 'block', md: 'flex' } }} spacing={gridSpacing}>
                    <Grid item xs={12} md={4}>
                        {theme.palette.mode === 'dark' ? (
                            <img src={galileoWhite} alt="Galileo White Logo" width="100" />
                        ) : (
                            <img src={galileo} alt="Galileo Dark Logo" width="100" />
                        )}
                        <Grid style={{ marginTop: '5%' }}>
                            <span style={{ fontWeight: 'bolder' }}>Download the app by clicking the link below:</span>
                        </Grid>

                        <Grid container sx={{ mt: 3 }}>
                            <Grid item md={4} xs={12}>
                                <img src={googlePlay} alt="Google Play" width="120" />
                            </Grid>
                            <Grid item md={8} xs={12}>
                                <img src={appleStore} alt="Apple Store" width="120" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        <Grid sx={{ marginTop: { md: '-10px' } }}>
                            <h2>Company</h2>
                        </Grid>
                        <Grid>
                            <span className={styles.link}>About</span>
                        </Grid>
                        <Grid className={styles.aboutLink}>
                            <span className={styles.link}>Mission</span>
                        </Grid>
                        <Grid className={styles.aboutLink}>
                            <span className={styles.link}>Team</span>
                        </Grid>
                        <Grid className={styles.aboutLink}>
                            <span className={styles.link}>Blog</span>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ marginTop: { md: '-37px' } }}>
                        <h2>Service</h2>
                        <Grid>
                            <Grid>
                                <span className={styles.link}>FAQ</span>
                            </Grid>
                            <Grid className={styles.serviceLink}>
                                <span className={styles.link}>Support</span>
                            </Grid>
                            <Grid className={styles.serviceLink}>
                                <span className={styles.link}>Privacy Policy</span>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={2} sx={{ marginTop: { md: '-37px' } }}>
                        <h2>Contact</h2>

                        <Grid>
                            <Grid>
                                <Grid
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <LocalPhoneIcon sx={{ height: '1.3rem' }} />
                                    <span className={styles.contactLink}>(123) 456-7890</span>
                                </Grid>

                                <Grid
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <EmailIcon sx={{ height: '' }} />
                                    <span className={styles.contactLink}>galileo@gmail.com</span>
                                </Grid>
                                <Grid
                                    className={styles.contact}
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <LocationOnIcon sx={{ height: '1.3rem' }} />
                                    <span className={styles.contactLink}>2972 Westeast Rd. LA, 85400 </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ paddingBottom: { md: '6.5%' } }}>
                        <h2>Social Media</h2>

                        <Grid style={{}}>
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
                        </Grid>
                    </Grid>
                </Grid>
            </FooterWrapper>
        </Grid>
    );
};

export default Footer;
