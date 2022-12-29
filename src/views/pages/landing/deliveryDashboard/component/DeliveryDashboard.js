import PropTypes from 'prop-types';

// material-ui
import {
    Box,
    Button,
    CardContent,
    Chip,
    Stack,
    Divider,
    Grid,
    LinearProgress,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography
} from '@mui/material';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// assets
import { IconEdit } from '@tabler/icons';
import PhonelinkRingTwoToneIcon from '@mui/icons-material/PhonelinkRingTwoTone';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';
import watch1 from 'assets/images/watch3.png';
import Avatar3 from 'assets/images/users/avatar-3.png';

// progress
function LinearProgressWithLabel({ value, ...other }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress {...other} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number
};

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Product Name', ':', 'Watch'),
    createData('Status', ':', 'status'),
    createData('Description', ':', ' Delivery Dashboard '),
    createData('Price', ':', '12345'),
    createData('Mint Type', ':', '+0 123456789 '),
    createData('Brand', ':', 'Joker'),
    createData('Token URL', ':', 'http://example.com')
];

// ==============================|| DeliveryDashboard ||============================== //

const DeliveryDashboard = () => (
    <SubCard>
        <Grid item md={12} xs={12} sx={{ display: 'flex' }}>
            {/* <Grid item md={4} lg={4} xs={12}>
                <SubCard
                    title={
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar alt="User 1" src={Avatar3} />
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography align="left" variant="subtitle1">
                                    Aiman
                                </Typography>
                                <Typography align="left" variant="subtitle2">
                                    User
                                </Typography>
                            </Grid>
                        </Grid>
                    }
                >
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItemButton>
                            <ListItemIcon>
                                <MailTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="subtitle1">Email</Typography>} />
                            <ListItemSecondaryAction>
                                <Typography variant="subtitle2" align="right">
                                    demo@sample.com
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemIcon>
                                <PhonelinkRingTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="subtitle1">Phone</Typography>} />
                            <ListItemSecondaryAction>
                                <Typography variant="subtitle2" align="right">
                                    (+99) 9999 999 999
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                        <Divider />
                        <ListItemButton>
                            <ListItemIcon>
                                <PinDropTwoToneIcon sx={{ fontSize: '1.3rem' }} />
                            </ListItemIcon>
                            <ListItemText primary={<Typography variant="subtitle1">Location</Typography>} />
                            <ListItemSecondaryAction>
                                <Typography variant="subtitle2" align="right">
                                    Melbourne
                                </Typography>
                            </ListItemSecondaryAction>
                        </ListItemButton>
                    </List>
                    <CardContent>
                        <Grid container spacing={0}>
                            <Grid item xs={4}>
                                <Typography align="center" variant="h3">
                                    37
                                </Typography>
                                <Typography align="center" variant="subtitle2">
                                    Buy
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align="center" variant="h3">
                                    2749
                                </Typography>
                                <Typography align="center" variant="subtitle2">
                                    Products
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography align="center" variant="h3">
                                    678
                                </Typography>
                                <Typography align="center" variant="subtitle2">
                                    Products
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </SubCard>

                <Stack mt={1} direction="row" spacing={2}>
                    <Button sx={{ width: '50%' }} variant="outlined" size="large">
                        cancel
                    </Button>
                    <Button
                        sx={{ width: '50%' }}
                        variant="contained"
                        size="large"
                        startIcon={<ShoppingCartIcon  />}
                    >
                        Buy Now
                    </Button>
                </Stack>
            </Grid> */}

            <Grid  item lg={12} md={12} xs={12}>
                <Grid container direction="column" spacing={gridSpacing}>
                    <Grid item xs={12}>
                        <SubCard title="Product Details">
                            <Grid container direction="column" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        Hello, Berry is React based admin template which helps you to build faster and beautiful web
                                        applications. Hello,Berry is React based admin template which helps you to build faster and
                                        beautiful web applications.
                                    </Typography>
                                </Grid>
                                <Grid item xs={12}></Grid>
                                <Divider sx={{ pt: 1 }} />
                                <Grid container spacing={3}>
                                    <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
                                        <Grid item xs={12}>
                                            <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                                <Grid item lg={6} className="Productdetails">
                                                    <img src={watch1} alt="Statement Image" className="ProductimageSize" />
                                                </Grid>

                                                <Grid item md={6} sm={12}>
                                                    <TableContainer sx={{ margin: '15px' }}>
                                                        <Table
                                                            sx={{
                                                                '& td': {
                                                                    borderBottom: 'none'
                                                                }
                                                            }}
                                                            size="small"
                                                        >
                                                            <TableBody>
                                                                {rows.map((row) => (
                                                                    <TableRow key={row.name}>
                                                                        <TableCell variant="head">{row.name}</TableCell>
                                                                        <TableCell>{row.calories}</TableCell>
                                                                        <TableCell>{row.fat}</TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    </SubCard>
);

export default DeliveryDashboard;
