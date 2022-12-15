import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ data }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    console.log('data', data);
    return (
        <Grid
            item
            mt={4}
            md={4}
            sm={6}
            justifyContent='center'
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
                    width: '250%',
                    boxShadow: '1px 2px 6px #d3d3d3',
                    borderRadius: '7px'
                }}
            >
                <CardActionArea>
                    <CardMedia component="img" height="200" image={data.image} />
                    <CardContent style={{ padding: '6%' }}>
                        <Grid container>
                            <Grid item xs={8} sx={{ textAlign: 'left' }}>
                                <span style={{ fontWeight: '550', fontSize: '130%' }}> {data?.name}</span>
                                <div className="overflow" style={{ marginTop: '5%', color: '#656565' }}>
                                    34
                                </div>
                            </Grid>
                           
                        </Grid>

                    
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default BrandCard;
