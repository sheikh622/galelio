import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import '@fontsource/public-sans';
// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Grid, Typography } from '@mui/material';
import { MenuItem, Menu, Card, CardContent } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '@mui/material';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Doc from './doc';
import DocLight from './docLight';
import SelectDocument from './selectDocument';
import tick from 'assets/images/tick.png';
import doc from 'assets/images/doc.png';
// ==============================|| ACCORDION ||============================== //

const history1 = ({ data, defaultExpandedId = null, expandIcon, square, toggle, tracking, history , Proof}) => {
    const theme = useTheme();
    const [propertiesOpen, setPropertiesOpen] = useState(false);

    var index = 0;

    //     for (let Value = 0; Value < history; ){
    //         Value = Value;
    //         Value = Value - 1;

    //     }
    //  console.log(Value, 'Value')
    var indexValue = history - 1;
    const user = useSelector((state) => state.auth.user);
    // console.log(tracking, 'indexValue');
    const [expanded, setExpanded] = useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        if (toggle) setExpanded(newExpanded ? panel : false);
    };

    useEffect(() => {
        setExpanded(defaultExpandedId);
    }, [defaultExpandedId]);
    // const cardData = tracking && tracking?.historyArray && tracking?.historyArray[0]?.historyArray;
    const cardsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = tracking.slice(indexOfFirstCard, indexOfLastCard);

    return (
        <>
        <SelectDocument
        setOpen={setPropertiesOpen}
        open={propertiesOpen}
        Proof={Proof}
        />
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
                            History {history}
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
                                        {user?.walletAddress
                                            ? user?.walletAddress.slice(0, 5) + '...' + user?.walletAddress.slice(38, 42)
                                            : 'Connect Wallet'}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2} className="doc-property" sx={{}}>
                                    {theme.palette.mode === 'dark' ? (
                                        <Box
                                            className="doc-heading"
                                            onClick={() => {
                                                setPropertiesOpen(true);
                                            }}
                                        >
                                            <Doc />
                                        </Box>
                                    ) : (
                                        <Box
                                            className="doc-heading"
                                            onClick={() => {
                                                setPropertiesOpen(true);
                                            }}
                                        >
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
                                {currentCards?.map((card) => (
                                    <Grid item xs={12} md={4}>
                                        <Card className="card-style" sx={{ border: '2px solid #2F53FF' }}>
                                            <CardContent sx={{ padding: '18px 12px' }}>
                                                {/* <Grid item xs={12} className="tick" sx={{ m: 1 }}>
                                                <img src={tick} />
                                            </Grid> */}
                                                <p className="Engine"> {card.trait_type}</p>
                                                <Typography
                                                    variant="h6"
                                                    className="V8"
                                                    sx={{ color: theme.palette.mode === 'dark' ? '#ffff' : 'black' }}
                                                >
                                                    {card.value}
                                                </Typography>
                                                <p className="y2023" sx={{ color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'black' }}>
                                                    2023
                                                </p>
                                                <Grid item xs={12} className="document" sx={{ m: 1 }}>
                                                    {theme.palette.mode === 'dark' ? (
                                                        <Box
                                                            onClick={() => {
                                                                window.open(
                                                                 card?.proof?  card?.proof :  'https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf',
                                                                    '_blank'
                                                                );
                                                            }}
                                                        >
                                                            <Doc />
                                                        </Box>
                                                    ) : (
                                                        <Box
                                                            onClick={() => {
                                                                window.open(
                                                                    card?.proof?  card?.proof : 'https://galileoprotocol.infura-ipfs.io/ipfs/QmZVFGoTeZqNMRZjQQpHegDpJ8xqgE8fMv138ULMbfkkhf',
                                                                    '_blank'
                                                                );
                                                            }}
                                                        >
                                                            <DocLight />
                                                        </Box>
                                                    )}
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>
                            <Pagination
                                count={Math.ceil(tracking.length / cardsPerPage)}
                                onChange={(event, value) => setCurrentPage(value)}
                                page={currentPage}
                            />
                        </MuiAccordionDetails>
                    </MuiAccordion>
                ))}
        </Box>
        </>
    );
};

history1.propTypes = {
    data: PropTypes.array,
    defaultExpandedId: PropTypes.string,
    expandIcon: PropTypes.object,
    square: PropTypes.bool,
    toggle: PropTypes.bool
};

export default history1;
