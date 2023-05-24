// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import galileo from 'assets/images/galileo.png';
import galileoWhite from 'assets/images/galileo-white.png';
import googlePlay from 'assets/images/google.png';
import appleStore from 'assets/images/App.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MediumIconLight from 'assets/images/icons/medium_icon-light.svg';
import MediumIconDark from 'assets/images/icons/medium_icon-dark.svg';
import EmailIcon from '@mui/icons-material/Email';
import styles from './footer.module.css';
import Divider from '@mui/material/Divider';
import { makeStyles } from '@mui/styles';
// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '28px 0 0 0',
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
    const darkModeColor = '#f3f3f3';
    const lightModeColor = '#404040';

    return (
        <Grid>
            <FooterWrapper
                style={{
                    background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040'
                }}
            >
                <Grid container sx={{ display: { xs: 'block', sm: 'flex', md: 'flex' } }} spacing={gridSpacing}>
                    <Grid item xs={12} md={1} lg={1} xl={1} sm={12}></Grid>
                    {/* <Grid item xs={12} md={1} lg={1} xl={1} sm={12}></Grid> */}
                    <Grid item xs={12} md={3} lg={3} xl={3} sm={12} sx={{ marginTop: { md: '15px' } }}>
                        {theme.palette.mode === 'dark' ? (
                            <img src={galileoWhite} alt="Galileo White Logo" width="100" />
                        ) : (
                            <img src={galileo} alt="Galileo Dark Logo" width="100" />
                        )}
                        <Grid style={{ marginTop: '5%' }}>
                            <span className="footerDownloadTag" style={{ fontWeight: 'bolder' }}>
                                Download the app by clicking the link below:
                            </span>
                        </Grid>

                        <Grid container sx={{ mt: 3 }}>
                            <Grid item md={12} xs={12} sm={12} lg={4} xl={3} className="footersocalIcons">
                                <img src={googlePlay} alt="Google Play" width="110" />
                            </Grid>
                            <Grid item md={1} xs={12} lg={1} xl={1} sx={{ display: { xl: 'flex', lg: 'none', md: 'none' } }}></Grid>
                            <Grid item md={12} xs={12} sm={12} lg={7} xl={6}>
                                <img src={appleStore} alt="Apple Store" width="110" />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={2} sm={12}>
                        <Grid>
                            <h2 className="footerElement">Company</h2>
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
                    <Grid item xs={12} md={2} sm={12}>
                        <Grid>
                            <h2 className="footerElement">Service</h2>
                        </Grid>
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
                            <Grid className={styles.serviceLink}>
                                <span className={styles.link}>Fees & Taxes</span>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={2} sm={12}>
                        <Grid>
                            <h2 className="">Contact</h2>
                        </Grid>
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
                                        // flexWrap: 'wrap',
                                        marginTop: '3%'
                                    }}
                                >
                                    <LocationOnIcon sx={{ height: '1.3rem' }} />
                                    <span className={styles.contactLink}>2972 Westeast Rd. LA, 85400 </span>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} sm={12}>
                        <Grid>
                            <h2 className="footerElement">Social Media</h2>
                        </Grid>
                        <Grid style={{ marginTop: '2px' }}>
                            <span>
                                <a
                                    href="https://www.facebook.com/galileoprotocol?mibextid=ZbWKwL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: theme.palette.mode === 'dark' ? darkModeColor : lightModeColor }}
                                >
                                    <FacebookIcon />
                                </a>
                            </span>
                            <span className={styles.socialLink}>
                                <a
                                    href="https://twitter.com/galileoprotocol?s=21&t=iiPGK-CGsRoR8FDmDVz7Eg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: theme.palette.mode === 'dark' ? darkModeColor : lightModeColor }}
                                >
                                    <TwitterIcon />
                                </a>
                            </span>
                            <span className={styles.socialLink}>
                                <a
                                    href="https://www.linkedin.com/company/galileo-protocol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: theme.palette.mode === 'dark' ? darkModeColor : lightModeColor }}
                                >
                                    <LinkedInIcon />
                                </a>
                            </span>
                        </Grid>
                        <Grid style={{ marginTop: '2px' }}>
                            <span>
                                <a
                                    href="https://www.instagram.com/galileoprotocol"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: theme.palette.mode === 'dark' ? darkModeColor : lightModeColor }}
                                >
                                    <InstagramIcon />
                                </a>
                            </span>
                            <span className={styles.socialLink}>
                                <a
                                    href="https://t.me/galileoprotocolcommunity"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: theme.palette.mode === 'dark' ? darkModeColor : lightModeColor }}
                                >
                                    <TelegramIcon />
                                </a>
                            </span>
                            <span className={styles.socialLink}>
                                <a href="https://medium.com/@galileoprotocol" target="_blank" rel="noopener noreferrer">
                                    <img src={theme.palette.mode === 'dark' ? MediumIconLight : MediumIconDark} alt="Medium icon" />
                                </a>
                            </span>
                        </Grid>
                    </Grid>
                </Grid>
            </FooterWrapper>
        </Grid>
    );
};

export default Footer;
