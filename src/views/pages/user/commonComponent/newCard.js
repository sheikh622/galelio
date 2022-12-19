import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';


const NewCard = ({ data , nfts }) => {

    const theme = useTheme();
    const navigate = useNavigate();
    console.log('nfts=>', nfts);
    return (
        
        <Grid
            item
          
            mt={5}
            md={nfts && nfts?.length > 3 ? 12 : 3}
            ml={nfts && nfts?.length > 3 ? 4 : 0}
            mr={nfts && nfts?.length > 3 ? 4 : 0}
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
                    // maxWidth: nfts && nfts?.length > 3? 0 : 365,
                    // width: nfts && nfts?.length > 3? '0' : '250%',
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
                                <div className="overflow" style={{ marginTop: '5%', color:"#656565" }}>
                                    {data.name}
                                </div>
                            </Grid>
                            <Grid item xs={4} sx={{ background: '' }}>
                                <span style={{ fontWeight: '40 !important ', fontSize: '110%', float: 'right', color:"#878787" }}>Creator</span>
                            </Grid>
                        </Grid>

                        <Divider sx={{ mt: 2, mb: 2 }} />
                        <Grid>
                            <Grid item md={12} xs={12} className="overflow" sx={{ marginTop: { xs: '10px', md: '0' } }}>
                               <span style={{float:"left"}}>
                               Current Price :
                                </span>
                                <span style={{marginLeft:"2%"}}>
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
