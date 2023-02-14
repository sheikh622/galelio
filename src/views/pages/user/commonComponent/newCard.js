import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const NewCard = ({ data, nfts }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Grid
            item
            xs={12}
            mt={5}
            sx={{
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                textDecoration: 'none',

                ml: {
                    xs: nfts && nfts?.length > 5 ? 4 : 0,
                    sm: nfts && nfts?.length > 5 ? 2 : 0,
                    md: nfts && nfts?.length > 5 ? 2 : 0
                },
                mr: { xs: nfts && nfts?.length > 5 ? 1 : 0, md: nfts && nfts?.length > 5 ? 4 : 4 }
            }}
            md={nfts && nfts?.length > 5 ? 12 : 4}
            lg={nfts && nfts?.length > 5 ? 12 : 2}
            xl={nfts && nfts?.length > 5 ? 12 : 2}
            sm={nfts && nfts?.length > 5 ? 12 : 4}
           
            onClick={() => {
                navigate('/productDetails', {
                    state: {
                        nft: data
                    }
                });
            }}
        >
            <Card
                sx={{
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                    background: theme.palette.mode === 'dark' ? '#181C1F' : 'white',
                    // maxWidth: nfts && nfts?.length > 3? 0 : 365,
                    width: nfts && nfts?.length > 5 ? '100%' : { lg: '220px', xl:'100%' },
                    
                    // boxShadow: '1px 2px 6px #d3d3d3',
                    borderRadius: '3px',
                    marginBottom: '10px',
                    maxWidth:{xl:'100%'},
                }}
            >
                <CardActionArea>
                    <CardMedia component="img" height="200" sx={{objectFit:'cover'}}  image={data.asset} />
                    <CardContent  style={{ padding: '6%' ,  }}>
                        <Grid container >
                            <Grid item className='encap' xs={8} sx={{ textAlign: 'left' }}>
                                <span className='cardHeading'  style={{ fontSize: '130%' }}> {data.name} </span>
                                <div className="overflow" style={{ marginTop: '5%', color: '#656565' }}>
                                   
                                    {data.Brand.name}
                                </div>
                            </Grid>
                            <Grid item xs={4} sx={{ background: '' }}>
                                <span className='newCreator' style={{ fontSize: '110%', float: 'right', color: '#878787' }}>
                                    Brand
                                </span>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Grid>
                            <Grid item md={12} xs={12} className="overflow" sx={{ marginTop: { xs: '10px', md: '0' } }}>
                                <span style={{ float: 'left' }}>Current Price :</span>
                                <span style={{ marginLeft: '2%' }}>
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

export default NewCard;
