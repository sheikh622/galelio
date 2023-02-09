import { useTheme } from '@mui/material/styles';
import { Card, Grid, CardActionArea, CardContent, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

const BrandCard = ({ data, brands }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Grid
            sx={{
                color: theme.palette.mode === 'dark' ? 'white' : 'black',
                textDecoration: 'none',
                ml: {
                    xs: brands && brands?.length > 5 ? 4 : 0,
                    sm: brands && brands?.length > 5 ? 2 : 0,
                    md: brands && brands?.length > 5 ? 2 : 2
                },
                mr: { xs: brands && brands?.length > 5 ? 1 : 0,
                     md: brands && brands?.length > 5 ? 4 : 2 }
            }}
            item
            lg={brands && brands?.length > 5 ? 12 : 2}
            md={brands && brands?.length > 5 ? 12 : 4}
            sm={brands && brands?.length > 5 ? 12 : 4}
            xs={12}
            justifyContent="center"
            onClick={() => {
                navigate('/landingPage', {
                    state: {
                        nft: data
                    }
                });
            }}
        >
            <Card
                sx={{
                    color: theme.palette.mode === 'dark' ? 'white' : '#404040',
                    background: theme.palette.mode === 'dark' ? '#000' : 'white',
                    width: brands && brands?.length > 5 ? '100%' : { lg: '220px' },
                    // boxShadow: '1px 2px 6px #d3d3d3',
                    borderRadius: '3px',
                    marginBottom: '10px'
                }}
            >
                <CardActionArea>
                    <CardMedia component="img" height="200"  image={data.image} />
                    <CardContent style={{ padding: '6%' }}>
                        <Grid container>
                            <Grid item xs={8}  className='encap' sx={{ textAlign: 'left' }}>
                                <span className='cardHeading' style={{ fontSize: '130%' }}> {data?.name}</span>
                                <Grid className="overflow Creationstyling" 
                                style={{ marginTop: '5%',
                                color: theme.palette.mode === 'dark' ? ' #a99d9d ' : '#404040', }}>
                                     Brand
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default BrandCard;
