// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Card, Grid, Typography, CardActionArea, CardContent, Divider, Button } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';
import {getAllSimilarProducts} from '../../../../../redux/marketplace/actions'
import NftCard from '../../commonComponent/nftCard';
const SimilarProducts = ({nft}) => {
    const theme = useTheme();
    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Cars',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
            heading: 'Zennie',
            title: 'Luxury Shoes',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Real Estate',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Goods',
            creator: 'Creator'
        },
        {
            img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
            heading: 'Zennie',
            title: 'Luxury Watches',
            creator: 'Creator'
        },
 
    ];

    const dispatch = useDispatch();
    const similarProductNfts = useSelector((state) => state.marketplaceReducer.similarProductNfts);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [click, setClick] = useState(false);
    useEffect(() => {
        console.log('useeffect from similar products ran');
        dispatch(
            getAllSimilarProducts({
                search: search,
                page: page,
                limit: limit,
                categoryId: nft.CategoryId,
                nftId:nft.id
            })
        );
        setClick(false)
    }, [click, search, page, limit]);

    console.log("nftnftnftnftnftnftnft",nft)
    console.log("similarProductNfts",similarProductNfts?.nfts?.rows)
    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
            <Grid item xs={12} lg={12} md={12}>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid item xs={12}>
                        <Typography
                            variant="h2"
                            mt={4}
                            component="div"
                            sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                        >
                            Similar Products
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <button onClick={()=>{
                 window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth"
                  });
            }}>
                click me
            </button>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{  textAlign: 'center' }}>
             
                    {similarProductNfts?.nfts?.rows.map((data) => (
                        <div  style={{width:"100%"}} onClick={()=>{
                          
                            window.scrollTo({
                                top: 0,
                                left: 0,
                                behavior: "smooth"
                              });
                              setClick(true)
                           }} >
                       <NftCard data={data}sx={{zIndex:"999"}}/>
                      </div>
                    ))}
                    
                </Grid>
            </Grid>
        </Grid>
    );
};

export default SimilarProducts;
