import { Divider, Grid } from '@mui/material';
import { gridSpacing } from 'store/constant';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useTheme } from '@mui/styles';

const NFTS = ({ marketplaceNfts }) => {
    const theme = useTheme();

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ paddingRight: '0%' }}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ mt: 2, textAlign: 'center', paddingRight: '1%' }}>
                    {marketplaceNfts.nfts && marketplaceNfts.nfts.rows && marketplaceNfts.nfts.rows.length > 0 &&
                        marketplaceNfts.nfts.rows.map((item) => (
                            <Grid item xs={11} sm={6} md={6} lg={2} xl={2}>
                                <Card
                                    sx={{
                                        color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                                        background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                                        maxWidth: 365,
                                        width: '105%',
                                        boxShadow: '1px 2px 9px #d3d3d3',
                                        borderRadius: '7px'
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia component="img" height="200" image={item.asset} />
                                        <CardContent style={{ padding: '6%' }}>
                                            <Grid container>
                                                <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                                    <span style={{ fontWeight: '550', fontSize: '130%' }}>{item.name}</span>
                                                    <div style={{ marginTop: '5%' }}>{item.description}</div>
                                                </Grid>
                                                <Grid item xs={4} sx={{ background: '' }}>
                                                    <span style={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>
                                                        {item.Brand.name}
                                                    </span>
                                                </Grid>
                                            </Grid>

                                            <Divider sx={{ mt: 2, mb: 2 }} />
                                            <Grid container sx={{ background: '' }}>
                                                {/* <Grid item xs={5} sx={{ pt: 1 }}>
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

export default NFTS;
