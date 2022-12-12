import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const NftCard = ({ data }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    console.log('data', data);
    return (
        <Grid
            item
            md={2}
            sm={6}
            onClick={() => {
                navigate('/productDetails', {
                    state: {
                        nft: data
                    }
                });
            }}
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
                    <CardMedia component="img" height="200" image={data.asset} />
                    <CardContent style={{ padding: '6%' }}>
                        <Grid container>
                            <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                <span style={{ fontWeight: '550', fontSize: '130%' }}> {data.Brand.name}</span>
                                <div className="overflow" style={{ marginTop: '5%' }}>
                                    {data.name}
                                </div>
                            </Grid>
                            <Grid item xs={4} sx={{ background: '' }}>
                                <span style={{ fontWeight: '50 !important ', fontSize: '110%', float: 'right' }}>Creator</span>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Grid container sx={{ background: '' }}>
                            <Grid item md={7} xs={12} className="overflow" sx={{ pl: 1, marginTop: { xs: '10px', md: '0' } }}>
                                Current Price
                                <div style={{ marginTop: '5%', fontSize: '110%' }}>
                                    <b>{data.currencyType + ' ' + data.price}</b>
                                </div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default NftCard;
