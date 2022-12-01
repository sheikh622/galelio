// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography, CardActionArea, CardContent, Divider } from '@mui/material';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';
import { Link as RouterLink } from 'react-router-dom';

const NewAndTrendingNfts = ({ nfts }) => {
    const theme = useTheme();

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ background: '', margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                            New & Trending
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                    {nfts && nfts.length > 0 &&
                        nfts.map((item) => (
                            <Grid
                                item
                                md={2}
                                sm={6}
                                component={RouterLink}
                                to="/ProductDetails"
                                sx={{ color: theme.palette.mode === 'dark' ? 'white' : 'black', textDecoration: 'none' }}
                            >
                                <Card
                                    sx={{
                                        color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                        background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                        maxWidth: 365,
                                        width: '105%',
                                        boxShadow: '1px 2px 6px #d3d3d3',
                                        borderRadius: '7px'
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia component="img" height="200" image={item.asset} />
                                        <CardContent style={{ padding: '6%' }}>
                                            <Grid container>
                                                <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                                    <span style={{ fontWeight: '550', fontSize: '130%' }}>{item.name}</span>
                                                    <div className="overflow" style={{ marginTop: '5%' }}>
                                                        {item.description}
                                                    </div>
                                                </Grid>
                                                <Grid item xs={4} sx={{ background: '' }}>
                                                    <span style={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>
                                                        {/* {item.creator} */}Nike
                                                    </span>
                                                </Grid>
                                            </Grid>

                                            <Divider sx={{ mt: 2, mb: 2 }} />
                                            <Grid container sx={{ background: '' }}>
                                                {/* <Grid item md={6} xs={12} className="overflow" sx={{ pt: 1 }}>
                                                    <span
                                                        style={{
                                                            background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                            padding: '3% 4%',
                                                            borderRadius: '10%',
                                                            color: 'white',
                                                            fontSize: '80%'
                                                        }}
                                                    >
                                                        02h
                                                    </span>{' '}
                                                    :{' '}
                                                    <span
                                                        style={{
                                                            background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                            padding: '3% 4%',
                                                            borderRadius: '10%',
                                                            color: 'white',
                                                            fontSize: '80%'
                                                        }}
                                                    >
                                                        25m
                                                    </span>{' '}
                                                    :{' '}
                                                    <span
                                                        style={{
                                                            background: theme.palette.mode === 'dark' ? 'black' : '#d9d9d9',
                                                            padding: '3% 4%  ',
                                                            borderRadius: '10%',
                                                            color: 'white',
                                                            fontSize: '80%'
                                                        }}
                                                    >
                                                        04s
                                                    </span>
                                                </Grid> */}
                                                <Grid
                                                    item
                                                    md={7}
                                                    xs={12}
                                                    className="overflow"
                                                    sx={{ pl: 1, marginTop: { xs: '10px', md: '0' } }}
                                                >
                                                    Current Price
                                                    <div style={{ marginTop: '5%', fontSize: '110%' }}>
                                                        <b>{item.currencyType + ' ' + item.price}</b>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default NewAndTrendingNfts;
