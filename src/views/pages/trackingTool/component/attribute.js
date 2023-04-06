import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '@fontsource/public-sans';
// material-ui
import { useTheme } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Grid, Typography } from '@mui/material';
import { MenuItem, Menu, Card, CardContent } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import Doc from './doc';
import DocLight from './docLight';
// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import tick from 'assets/images/tick.png';
import doc from 'assets/images/doc.png';
// ==============================|| ACCORDION ||============================== //

const attribute = ({ data, defaultExpandedId = null, expandIcon, square, toggle }) => {
    const theme = useTheme();
    const user = useSelector((state) => state.auth.user);
    console.log(user,'user');
    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        if (toggle) setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        setExpanded(defaultExpandedId);
    }, [defaultExpandedId]);

    return (
        <Box sx={{ width: '100%' }}>
            {data &&
                data.map((item) => (
                    <MuiAccordion
                        m={3}
                        key={item.id}
                        defaultExpanded={!item.disabled && item.defaultExpand}
                        expanded={(!toggle && !item.disabled && item.expanded) || (toggle && expanded === item.id)}
                        disabled={item.disabled}
                        square={square}
                        onChange={handleChange(item.id)}
                    >
                        <MuiAccordionSummary
                            expandIcon={expandIcon || expandIcon === false ? expandIcon : <ExpandMoreIcon sx={{ color: '#2F53FF' }} />}
                            className="atributes"
                            sx={{ color: theme.palette.mode === 'dark' ? '#FFFFFF' : 'grey.800' }}
                        >
                            {item.title}
                        </MuiAccordionSummary>
                        <MuiAccordionDetails>
                            <Grid
                                item
                                container
                                className=""
                                sx={{
                                    pl: 1.5,
                                    pb: { xs: 3, md: 1 },
                                    background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff'
                                }}
                            >
                                <Grid item xs={4}>
                                    <Typography
                                        variant="body"
                                        className="property-date"
                                        sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#000' }}
                                    >
                                        Date: 25/03/2023
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography
                                        variant="body"
                                        className="property-update"
                                        sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#000' }}
                                    >
                                        Updated by:
                                    </Typography>
                                    <Typography variant="body" className="property-update" sx={{ color: '#2F92FF !important' }}>
                                        {' '}
                                        {user?.walletAddress? 
                                             user?.walletAddress.slice(0, 5)+ '...' + user?.walletAddress.slice(38, 42)
                                            : 'Connect Wallet'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="doc-property" sx={{}}>
                                    {theme.palette.mode === 'dark' ? (
                                        <Box className="doc-heading">
                                            <Doc />
                                        </Box>
                                    ) : (
                                        <Box className="doc-heading">
                                            <DocLight />
                                        </Box>
                                    )}
                                </Grid>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                md={12}
                                sx={{
                                    pl: 1.5,
                                    pb: { xs: 3, md: 0 },
                                    background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff',
                                    display: { md: 'flex' },
                                    height: { md: '160px' }
                                }}
                            >
                                <Grid item xs={12} md={4}>
                                    <Card className="card-style" sx={{ border: '2px solid #2F53FF' }}>
                                        <CardContent sx={{ padding: '18px 12px' }}>
                                            <Grid item xs={12} className="tick" sx={{ m: 1 }}>
                                                <img src={tick} />
                                            </Grid>
                                            <p className="Engine"> Engine</p>
                                            <Typography
                                                variant="h6"
                                                className="V8"
                                                sx={{ color: theme.palette.mode === 'dark' ? '#ffff' : 'black' }}
                                            >
                                                V8 petrol engine
                                            </Typography>
                                            <p className="y2023" sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'black' }}>
                                                2023
                                            </p>
                                            <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                                       {theme.palette.mode === 'dark' ? (
                                                    <Box>
                                                        <Doc />
                                                    </Box>
                                                ) : (
                                                    <Box>
                                                        <DocLight />
                                                    </Box>
                                                )}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4} sx={{ mt: { xs: 1, md: 0 } }}>
                                    <Card className="card-style" sx={{ border: '2px solid #2F53FF' }}>
                                        <CardContent sx={{ padding: '18px 12px' }}>
                                            <Grid item xs={12} className="tick" sx={{ m: 1 }}>
                                                <img src={tick} />
                                            </Grid>
                                            <p className="Engine"> Model</p>
                                            <Typography
                                                variant="h6"
                                                className="V8"
                                                sx={{ color: theme.palette.mode === 'dark' ? '#ffff' : 'black' }}
                                            >
                                                BMW XM
                                            </Typography>
                                            <p className="y2023" sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'black' }}>
                                                Auto - Manual
                                            </p>
                                            <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                                       {theme.palette.mode === 'dark' ? (
                                                    <Box>
                                                        <Doc />
                                                    </Box>
                                                ) : (
                                                    <Box>
                                                        <DocLight />
                                                    </Box>
                                                )}
                                            </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={4} sx={{ mt: { xs: 1, md: 0 } }}>
                                    <Card className="card-style" sx={{ border: '2px solid #2F53FF' }}>
                                        <CardContent sx={{ padding: '18px 12px' }}>
                                            <Grid item xs={12} className="tick" sx={{ m: 1 }}>
                                                <img src={tick} />
                                            </Grid>
                                            <p className="Engine"> Chassis</p>
                                            <Typography
                                                variant="h6"
                                                className="V8"
                                                sx={{ color: theme.palette.mode === 'dark' ? '#ffff' : 'black' }}
                                            >
                                                BMWXM321
                                            </Typography>
                                            <p className="y2023" sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'black' }}>
                                                31-03-23
                                            </p>
                                            <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                                {theme.palette.mode === 'dark' ? (
                                                    <Box>
                                                        <Doc />
                                                    </Box>
                                                ) : (
                                                    <Box>
                                                        <DocLight />
                                                    </Box>
                                                )}
                                            </Grid>
                                        </CardContent>
                                        <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                            {theme.palette.mode === 'dark' ? (
                                                <Box>
                                                    <Doc />
                                                </Box>
                                            ) : (
                                                <Box>
                                                    <DocLight />
                                                </Box>
                                            )}
                                        </Grid>
                                    </Card>
                                </Grid>
                            </Grid>
                        </MuiAccordionDetails>
                    </MuiAccordion>
                ))}
        </Box>
    );
};

attribute.propTypes = {
    data: PropTypes.array,
    defaultExpandedId: PropTypes.string,
    expandIcon: PropTypes.object,
    square: PropTypes.bool,
    toggle: PropTypes.bool
};

export default attribute;
