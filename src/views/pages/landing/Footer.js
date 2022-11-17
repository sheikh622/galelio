import { useTheme, styled } from '@mui/material/styles';
import { Container, Grid, Link, Typography } from '@mui/material';

// project imports
import { gridSpacing } from 'store/constant';

// assets
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import logoDark from 'assets/images/logo-white.svg';

// styles
const FooterWrapper = styled('div')(({ theme }) => ({
    padding: '35px 0',
    color: '#fff',

    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

const FooterLink = styled(Link)({
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none !important',
    opacity: '0.8',
    '& svg': {
        fontsize: '1.125rem',
        marginRight: 8
    },
    '&:hover': {
        opacity: '1'
    }
});

const FooterSubWrapper = styled('div')(({ theme }) => ({
    padding: '20px 0',
    color: '#fff',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('md')]: {
        textAlign: 'center'
    }
}));

// ==============================|| LANDING - FOOTER PAGE ||============================== //

const FooterPage = () => {
    const theme = useTheme();

    return (
        <>
            <FooterWrapper>
                <Container>
                    <Grid item xs={12} sm={8}>
                        <Grid container alignItems="center" spacing={2} sx={{ background: '#000', border: '2px solid red' }}>
                            <Grid item>
                                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                                    <InstagramIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                    <FacebookIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                                    <TwitterIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                                    <InstagramIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                    <FacebookIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                                    <TwitterIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                                    <InstagramIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                    <FacebookIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                                    <TwitterIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                                    <InstagramIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                    <FacebookIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                                    <TwitterIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://blog.berrydashboard.io/" target="_blank" underline="hover">
                                    <InstagramIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://www.facebook.com/codedthemes" target="_blank" underline="hover">
                                    <FacebookIcon />
                                </FooterLink>
                            </Grid>
                            <Grid item>
                                <FooterLink href="https://twitter.com/codedthemes" target="_blank" underline="hover">
                                    <TwitterIcon />
                                </FooterLink>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </FooterWrapper>
        </>
    );
};

export default FooterPage;