import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const NftCard = ({ data }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Grid
            item
            md={2}
            lg={2}
            sm={6}
            xs={12}
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
                    <CardMedia component="img" height="200" sx={{objectFit:'revert'}}  image={data.asset} />
                    <CardContent sx={{ padding: '6%' }}>
                        <Grid container>
                            <Grid item xs={8}  className='encap' sx={{ textAlign: 'left' }}>
                                <span style={{ fontWeight: '550', fontSize: '100%' }}>  {data.name} </span>
                                <div className="overflow" style={{ marginTop: '5%', color: '#656565' }}>
                                {data.Brand.name}
                                </div>
                            </Grid>
                            <Grid item xs={4} sx={{ background: '' }}>
                                <span sx={{ fontWeight: '40 !important ', fontSize: '110%', float: 'right', color: '#878787' }}>
                                    Creator
                                </span>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Grid>
                            <Grid item md={12} xs={12} className="overflow" 
                            sx={{ marginTop: { xs: '10px', md: '0' } }}>
                                <span sx={{ float: 'left' }}>Current Price :</span>
                                <span sx={{ marginLeft: '2%' }}>
                                    <b>{data.currencyType + ' ' + data.price}</b>
                                </span>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default NftCard;
