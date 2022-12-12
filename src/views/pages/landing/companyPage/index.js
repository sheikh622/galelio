import { Grid, Button } from '@mui/material';
import { useTheme } from '@mui/styles';
import rolex from 'assets/images/rolex.png';
import discord from 'assets/images/companypageIcons/discord.png';
import etherscan from 'assets/images/companypageIcons/etherscan.png';
import globe from 'assets/images/companypageIcons/globe.png';
import insta from 'assets/images/companypageIcons/insta.png';
import phone from 'assets/images/companypageIcons/phone.png';
import share from 'assets/images/companypageIcons/share.png';
import star from 'assets/images/companypageIcons/star.png';
import twitter from 'assets/images/companypageIcons/twitter.png';
import warn from 'assets/images/companypageIcons/warn.png';
import styles from './companypage.module.css';
import NFTS from '../marketplace/component/nfts';
const CompanyPage = () => {
    const theme = useTheme();
    return (
        <Grid
        md={11}
            sx={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                p: 1
            }}
        >
            <Grid
                container-fluid
                sx={{ margin: '0', padding: '0', display: { xs: 'block', sm: 'block', md: 'flex' }, marginBottom: '40px' }}
            >
                <Grid item md={12} xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                        <Grid item xs={12} md={3} sx={{ paddingRight: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div style={{ paddingTop: '0' }}>
                                    <img src={rolex} style={{ borderRadius: '100px', border: '3px solid #2196f3' }} />
                                </div>

                                <div>
                                    <h1>Rolex</h1>
                                    <h3>Geneva, Switzerland</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={4} sx={{ background: ' ', ml: 1, pl: 4, mt: 2 }}>
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>120</div>
                                    <div>Items</div>
                                </Grid>
                                <Grid item xs={3} className={styles.statsCover}>
                                    <div>
                                        <div className={styles.stats}>876k</div>
                                        <div>Followers</div>
                                    </div>
                                </Grid>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>32k</div>
                                    <div>Likes</div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={styles.stats}>420</div>
                                    <div>Bidding</div>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={3} sx={{ marginLeft: '15%', mt: 2 }}>
                            <Grid container style={{ display: 'flex', justifyContent: 'space-evenly', marginRight: '7%', float: 'right' }}>
                                <Grid item>
                                    <img src={etherscan} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={insta} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={globe} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={discord} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={twitter} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={phone} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={star} height="18rem" alt="" />
                                </Grid>
                                <div style={{ borderLeft: '1px solid #7E7D7D' }}></div>
                                <Grid item>
                                    <img src={warn} height="18rem" alt="" />
                                </Grid>
                                <Grid item>
                                    <img src={share} height="18rem" alt="" />
                                </Grid>
                            </Grid>
                            <Grid item xs={8} md={12} style={{ justifyContent: '' }}>
                                <Button variant="contained" sx={{ mt: 2, width: '50%', float: 'right', mr: 2 }}>
                                    Follow
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container-fluid sx={{ paddingRight: '7%', paddingLeft: '2%' }}>
                            <p style={{ lineHeight: '210%' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis facilisis tortor, ut molestie. In rhoncus
                                aliquam dui, vitae sollicitudin justo, cursus maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Lobortis facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae sollicitudin justo,
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ paddingLeft: '2%', width: '100%' }}>
                        <h1>Items</h1>

                        <Grid item md={12} xs={11}>
                            <NFTS />
                        </Grid>
                        <Grid item md={12} xs={12}></Grid>
                    </Grid>
                </Grid>
            </Grid>

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
            </Grid>
        </Grid>
    );
};

export default CompanyPage;
