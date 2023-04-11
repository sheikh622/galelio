import { Grid, Button, Tooltip } from '@mui/material';
import { useTheme } from '@mui/styles';
import rolex from 'assets/images/rolex.jpg';
import "@fontsource/public-sans";
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
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import BmwCard from "views/pages/user/commonComponent/BmwCard";
import NFTS from 'views/pages/user/marketplace/component/nfts';
import { bmwPage } from 'redux/landingPage/actions';
const CompanyPage = () => {
  const BrandId = useParams().id;
  const theme = useTheme();
  const dispatch = useDispatch();
  const bmwData = useSelector((state) => state.landingPageReducer.bmwData.brandData);
  console.log(bmwData, 'bmwData');
  useEffect(() => {
    console.log('run =======>')

    dispatch(
      bmwPage(
       { BrandId : BrandId}

      )
    );

}, [BrandId]);
    return (
        <Grid
       
        mt={1.5}
            md={12}
            sx={{
                ml:{lg:-2},
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                p: 1 , borderRadius:'4px'
            }}
        >
            <Grid
                container-fluid
                sx={{ margin: '0', padding: '0',
                 display: { xs: 'block', sm: 'block', md: 'flex' }, marginBottom: '40px' }}
            >
            {bmwData?.map((row)=>(
                <Grid item md={12} xs={12} sx={{ mt: 2 }}>
                    <Grid container>
                        <Grid item xs={12} md={3} sx={{ paddingRight: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <div style={{ paddingTop: '-25px' }}>
                                    <img src={row?.image} style={{ borderRadius: '100px',marginTop:'-5px', height:'92px' , width:'92px',  border: '3px solid #2196f3' }} />
                                </div>

                                <div >
                                    <h1 className='font-company-page'>{row?.name}</h1>
                                    <h3 sx={{color:' #CDCDCD'}} className='location-style' >{row?.location}</h3>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={10} md={4} sx={{ background: ' ', ml: 1, pl: 4, mt: 2 }}>
                            <Grid container sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>120</div>
                                    <div>Items</div>
                                </Grid>
                              {/*   <Grid item xs={3} className={styles.statsCover}>
                                    <div>
                                        <div className={styles.stats}>876k</div>
                                        <div>Followers</div>
                                    </div>
                                </Grid> */}
                                <Grid item xs={2} className={styles.statsCover}>
                                    <div className={styles.stats}>32k</div>
                                    <div>Likes</div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={styles.stats}>420</div>
                                    <div>Bidding</div>
                                </Grid>
                                <Grid item xs={2}>
                                    <div className={styles.stats}>870k</div>
                                    <div>Followers</div>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={3} sx={{ marginLeft: '15%', mt: 2 }}>
                            <Grid container style={{ display: 'flex', justifyContent: 'space-evenly',
                             marginRight: '7%', float: 'right' }}>
                             <Tooltip placement="top" title='Coming Soon'>
                             <Grid item>
                                    <img src={etherscan} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={insta} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={globe} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={discord} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={twitter} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={phone} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={star} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <div style={{ borderLeft: '1px solid #7E7D7D' }}></div>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={warn} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                                <Tooltip placement="top" title='Coming Soon'>
                                <Grid item>
                                    <img src={share} height="18rem" alt="" />
                                </Grid>
                                </Tooltip>
                            </Grid>
                            <Grid item xs={8} md={12} style={{ justifyContent: '' }}>
                            <Tooltip placement="top" title='Coming Soon'> 
                            <Button variant="contained" sx={{ mt: 2, width: '50%', float: 'right', mr: 2 }}>
                                    Follow
                                </Button>
                                </Tooltip>
                            </Grid>
                        </Grid>

                        <Grid container-fluid sx={{ paddingRight: '7%', paddingLeft: '2%' }}>
                        <Tooltip placement="top" title='Coming Soon'>    
                        <p className='des-font'>
                        {row?.description}
                            </p>
                            </Tooltip>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ paddingLeft: "2%", width: "100%" }}>
                    <h1>Items</h1>
        
                    <Grid
                      container
                      sx={{
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                          xl: "left",
                        },
                      }}
                      spacing={2}
                    >
                      {row.Nfts?.map((item) => (
                        <BmwCard item={item} />
                      ))}
                    </Grid>
        
                    <Grid item md={12} xs={12}></Grid>
                  </Grid>
                </Grid>
                ))}
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
