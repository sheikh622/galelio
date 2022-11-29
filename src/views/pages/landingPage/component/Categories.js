
import { useTheme } from '@mui/material/styles';
import {  Grid, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import CardMedia from '@mui/material/CardMedia';


const Categories = ({categories}) => {
    const theme = useTheme();
    
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
                            Categories
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                    {categories.length > 0 && categories.map((item) => (
                        <Grid sx={{ my: { xs: '10px', md: '0', sm: '10px' } }} item md={2} sm={6}>
                            <Grid container justifyContent="center" spacing={1}>
                                <Grid item   component={RouterLink}
                                to="/ProductDetails">
                                    <Box
                                  
                                  
                                        sx={{
                                            position: 'relative',
                                            background: theme.palette.mode === 'dark' ? theme.palette.dark.main : 
                                            '#f3f3f3',
                                            boxShadow: '1px 2px 9px #d3d3d3'
                                        }}
                                        
                                    >
                                        <CardMedia component="img" width="100%" height="auto" image={item.image} />

                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '7px',
                                                left: 0,
                                                width: '100%',
                                                bgcolor: 'rgba(0, 0, 0, 0.54)',
                                                color: 'white',
                                                padding: {
                                                    xs: '10px',
                                                    sm: '10px',
                                                    md: '10px',
                                                    lg: '10px'
                                                }
                                            }}
                                        >
                                            <Typography variant="h5" color="#fff">
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Categories;
