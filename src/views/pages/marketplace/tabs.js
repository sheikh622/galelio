import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Chip, Grid, Tab, Tabs, Typography } from '@mui/material';

// assets
import PersonOutlineTwoToneIcon from '@mui/icons-material/PersonOutlineTwoTone';
import PanoramaTwoToneIcon from '@mui/icons-material/PanoramaTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import RecentActorsTwoToneIcon from '@mui/icons-material/RecentActorsTwoTone';
import Trending from './trending/index';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import binance from "assets/images/coins/binance.png"
import eth from "assets/images/coins/eth.png"
import polygon from "assets/images/coins/polygon.png"
import xdc from "assets/images/coins/xdc.png"
import solana from "assets/images/coins/solana.png"

// tab content
function TabPanel({ children, value, index, ...other }) {
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box
                    sx={{
                        p: 1, pr:2  
                    }}
                >
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

// ================================|| UI TABS - SAMPLE ||================================ //

export default function HorizontalTabs() {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Tabs
                value={value}
                variant="scrollable"
                onChange={handleChange}
                sx={{
                    // background:"red",
                    // paddingBottom:"-100px",
                    // marginBottom:"10px",
                    mb: 1,
                    ml:1,
                    '& a': {
                        // color:"red", 
                        minHeight: '1rem',
                        minWidth: 10,
                        py: 1.5,
                        px: 0,
                        mr: 3.7,
                        color: theme.palette.grey[600],
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom:"0.3%"
                    },
                    '& a.Mui-selected': {
                        color: theme.palette.primary.main,
                        // marginBottom: '1%',
                        // paddingBottom:"2%"
                    }
                    // '& a > svg': {
                    //     mb: '0px !important',
                    //     mr: 1.1
                    // }
                }}
            >

                
                <Tab
                    component={Link}
                    to="#"                    
                    label="Trending"
                    {...a11yProps(0)}
                />
                <Tab
                    component={Link}
                    to="#"                    
                    label="Top"
                    {...a11yProps(1)}
                />
                <Tab
                    component={Link}
                    to="#"                    
                    label={
                        <>
                            Cars{' '}
                        </>
                    }
                    {...a11yProps(2)}
                />
                <Tab
                    component={Link}
                    to="#"
                    label="Luxury Watches"
                    {...a11yProps(3)}
                />
                <Tab
                    component={Link}
                    to="#"            
                    label="Shoes"
                    {...a11yProps(3)}
                />
                <Tab
                    component={Link}
                    to="#"
                     label="Luxury Goods"
                    {...a11yProps(3)}
                />
                <Tab
                    component={Link}
                    to="#"    
                    label="Real Estate"
                    {...a11yProps(3)}
                />

                <Grid item sx={{display:{xs:"none"}}} >
                <div style={{ background: 'white', width: '20%', paddingLeft: '1%', borderRadius: '6px', marginLeft:"34%", marginRight:"2%"}}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap', 
                            marginTop:"2%"
                            
                        }}
                    >
                        <span style={{ fontWeight: '500' }}>All Chains</span>
                        {'   '}
                        <span style={{ background: '#ededed', padding: '1%', borderRadius: '7px', marginLeft: '3%', marginRight:"3%", marginTop:"1%", width:"70%",paddingTop:"1.2%", paddingRight:"12%", paddingBottom:"0.3%" }}>
                            
                            <img src={eth} height="18em"alt="" style={{marginLeft:"10%"}} />
                            <img src={polygon} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={xdc} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={solana} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={binance} height="18em"alt="" style={{marginLeft:"10%"}} />
                           
                        </span>
                    </div>
                </div>

                </Grid>
                


                
            </Tabs>

            <Grid item sx={{display:{md:"none"}, marginRight:"5%", marginLeft:"3%"}} >
                <div style={{ background: 'white', width: '100%', paddingLeft: '5%', borderRadius: '6px', marginLeft:"", marginRight:"2%"}}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap', 
                            marginTop:"2%"
                            
                        }}
                    >
                        <span style={{ fontWeight: '500' }}>All Chains</span>
                        {'   '}
                        <span style={{ background: '#ededed', padding: '1%', borderRadius: '7px', marginLeft: '3%', marginRight:"3%", marginTop:"1%", width:"70%",paddingTop:"1.2%", paddingBottom:"1.2%", paddingRight:"", paddingBottom:"1.3%", marginBottom:"1.2%" }}>
                            
                            <img src={eth} height="18em"alt="" style={{marginLeft:"10%"}} />
                            <img src={polygon} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={xdc} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={solana} height="18em"alt=""style={{marginLeft:"10%"}}  />
                            <img src={binance} height="18em"alt="" style={{marginLeft:"10%"}} />
                           
                        </span>
                    </div>
                </div>

                </Grid>

            <TabPanel value={value} index={0}>
                <Trending />
            </TabPanel>
            <TabPanel value={value} index={1}>
                Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Seven
            </TabPanel>
        </>
    );
}
