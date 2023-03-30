import { Link as RouterLink } from 'react-router-dom';
import { useTheme, styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import widget1 from 'assets/images/watch.png';
import { useSelector } from 'react-redux';

const HeaderAnimationImage = styled('img')({
    maxWidth: '100%',
    filter: 'drop-shadow(0px 0px 50px rgb(33 150 243 / 30%))'
});

const Header = () => {
    const user = useSelector((state) => state.auth.user);
    const token = useSelector((state) => state.auth.token);
    const theme = useTheme();

    return (
        <Grid container-fluid>
            <Container>
                <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={gridSpacing}
                    sx={{ mt: { xs: 10, sm: 6, md: 4 }, mb: { xs: 2.5, md: 10 } }}
                >
                    <Grid item xs={12} md={8}>
                        <Grid
                            container
                            spacing={gridSpacing}
                            sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}
                        >
                            <Grid item xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 150,
                                        damping: 30
                                    }}
                                >
                                    <Typography
                                        variant="h1"
                                        sx={{
                                            fontFamily: 'Public Sans !important',
                                            fontStyle: 'normal !important',
                                            fontWeight: '600',

                                            fontSize: { xs: '2.25rem', sm: '3rem', md: '78px', lg: '78px' },
                                            lineHeight: { xs: '1', sm: '1', md: '84px', lg: '84px' },

                                            color: '#000'
                                        }}
                                    >
                                       The Future of 
                                        <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        Ownership!
                                        </Box>
                                    </Typography>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 150,
                                        damping: 30,
                                        delay: 0.2
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        color="inherit"
                                        sx={{
                                            color: '#000',
                                            fontFamily: 'Public Sans  !important',
                                            fontStyle: 'normal',

                                            textTransform: 'capitalize  !important',
                                            fontSize: { xs: '1rem', md: '27px', lg: '27px' },
                                            fontWeight: 400,
                                            lineHeight: 1.4
                                        }}
                                    >
                                      Unlock the Value of Physical Assets with Tokenisation
                                    </Typography>
                                </motion.div>
                            </Grid>
                            <Grid item xs={12} sx={{ my: 3.25 }}>
                                <motion.div
                                    initial={{ opacity: 0, translateY: 550 }}
                                    animate={{ opacity: 1, translateY: 0 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 150,
                                        damping: 30,
                                        delay: 0.4
                                    }}
                                >
                                    {(token == null || undefined) && (
                                        <>
                                            <Grid
                                                container
                                                spacing={2}
                                                sx={{ justifyContent: { xs: 'center', md: 'center', lg: 'flex-start' } }}
                                            >
                                                <Grid item>
                                                    <AnimateButton>
                                                        <Button
                                                            className="create"
                                                            component={RouterLink}
                                                            to="/login"
                                                            size="large"
                                                            variant="contained"
                                                            color="secondary"
                                                        >
                                                            Create Your's
                                                        </Button>
                                                    </AnimateButton>
                                                </Grid>
                                            </Grid>
                                        </>
                                    )}
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Box
                            sx={{
                                width: '290px',
                                animation: '10s slideY linear infinite'
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <HeaderAnimationImage src={widget1} alt="watch" />
                            </motion.div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Grid>
    );
};

export default Header;
