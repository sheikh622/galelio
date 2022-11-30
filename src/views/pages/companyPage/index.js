import { Grid, Divider, Button, ButtonBase } from '@mui/material';
import { useTheme } from '@mui/styles';
import Sider from '../landing/BiggestNFTMarketplace/Sider';
import Footer from '../user/footer/footer';
import Appbar from '../user/header/header';
import Trending from '../marketplace/trending/index';
import rolex from 'assets/images/rolex.png';
import discord from 'assets/images/companypageIcons/discord.png'
import etherscan from 'assets/images/companypageIcons/etherscan.png'
import globe from 'assets/images/companypageIcons/globe.png'
import insta from 'assets/images/companypageIcons/insta.png'
import phone from 'assets/images/companypageIcons/phone.png'
import share from 'assets/images/companypageIcons/share.png'
import star from 'assets/images/companypageIcons/star.png'
import twitter from 'assets/images/companypageIcons/twitter.png'
import warn from 'assets/images/companypageIcons/warn.png'
import styles from './companypage.module.css'
const CompanyPage = () => {
    const theme = useTheme();
    return (
        <Grid
            style={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}
        >
            <Grid>
                <Appbar />
            </Grid>

            <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, marginBottom: '40px' }}>
                <Grid
                    item
                    md={1}
                    xs={12}
                    sx={{ position: 'sticky', height: '100%', top: '0', display: { xs: 'none', sm: 'none', md: 'flex' } }}
                >
                    <Sider />
                </Grid>

                <Grid item md={11} xs={12} sx={{ mt: 2 }}>
                    <Grid container sx={{ background: '' }}>
                        <Grid item xs={3}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div>
                                    <img src={rolex} style={{ borderRadius: '100px' , border:"3px solid #2196f3", }} />
                                </div>

                                <div style={{ }}>
                                    <h1>Rolex</h1>
                                    <h3>Geneva, Switzerland</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <Grid container sx={{display:"flex" , justifyContent:"space-evenly"}}> 
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>120</div>
                                    <div>Items</div>
                                </Grid>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div  className={styles.stats}>876k</div>
                                    <div>Followers</div>
                                </Grid>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>32k</div>
                                    <div>Likes</div>
                                </Grid>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>420</div>
                                    <div>Bidding</div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} sx={{float:"right ", background:""}}>

                            <Grid container style={{display:"flex", justifyContent:"space-evenly", marginRight:"7%"}}>
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
                               <div style={{borderLeft:"1px solid #7E7D7D", height:""}}> 

                               </div>
                               <Grid item>
                               <img src={warn} height="18rem" alt="" />
                               </Grid>
                               <Grid item>
                               <img src={share} height="18rem" alt="" />
                               </Grid>
                            </Grid>

                            {/* <div>

                            <Button variant="contained" sx={{width:"35%", float:"", mr:2}}>Follow</Button>
                            </div> */}
                        </Grid>

                        <Grid>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae sollicitudin justo, cursus maecenas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae sollicitudin justo,
                            </p>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <h1 style={{ paddingLeft: '0.5%' }}>Items</h1>

                        <Grid item md={12} xs={12}>
                            <Trending />
                        </Grid>
                        <Grid item md={12} xs={12}></Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider sx={{ borderBottomWidth: 1, border: '1px solid #ccc' }} />

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
                <Grid item md={11} xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CompanyPage;
