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
import ContactMailIcon from '@mui/icons-material/ContactMail';

// project imports
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import PersonIcon from '@mui/icons-material/Person';
import TourIcon from '@mui/icons-material/Tour';
import ModeIcon from '@mui/icons-material/Mode';
// assets
import { IconEdit } from '@tabler/icons';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import PinDropTwoToneIcon from '@mui/icons-material/PinDropTwoTone';
import DescriptionIcon from '@mui/icons-material/Description';
import moment from 'moment';
import { User } from '@auth0/auth0-spa-js';
import { useSelector } from 'react-redux';
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

const DeliveryDashboard = ({ productList }) => {
    const user = useSelector((state)=>state.auth.user)
    return (
        <Grid item lg={12} md={12} xs={12}>
            <Grid container direction="column" spacing={gridSpacing}>
                <Grid item xs={12}>
                    <SubCard title="Delivery Dashboard">
                        <Grid container direction="column" spacing={2}>
                            <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
                                <Grid item xs={12}>
                                    {productList?.length > 0 &&
                                        productList?.map((row) => (
                                            <>
                                            <Grid container justifyContent="center" spacing={gridSpacing} 
                                            sx={{ textAlign: 'center', marginBottom:'20px' }}>
                                                <Grid item md={1} sm={12}></Grid>

                                                        <Grid item md={4} lg={4} className="Productdetails" 
                                                        sx={{ height: 'auto' }}>
                                                            <SubCard>
                                                                <img
                                                                    src={row?.Nft.asset}
                                                                    alt="Statement Image"
                                                                    className="ProductimageSize"
                                                                />
                                                            </SubCard>{' '}
                                                        </Grid>

                                                <Grid item md={6} sm={12} sx={{ height: 'auto' }}>
                                                    <SubCard>
                                                        <TableContainer sx={{}}>
                                                            <List component="nav" aria-label="main mailbox folders">
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <PersonIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Name</Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography sx={{color:'#000'}} variant="subtitle1" align="right" >
                                                                            {row?.Nft.name}
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                                <Divider />
                                                              {/*   <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <ModeIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Created At </Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography sx={{color:'#000'}} variant="subtitle1" align="right">
                                                                        {moment(row?.createdAt).format('DD-MMM-YYYY')} 
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                                <Divider /> */}
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <DescriptionIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Description</Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography sx={{color:'#9e9e9e' , textTransform:'capitalize'}} variant="subtitle1" align="right">
                                                                        {row?.Nft.description}
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                                <Divider />
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <TourIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Status</Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography color = { row?.status == 'Delivered'? 'Green' : row?.status == 'pending'?  'Blue' : 'Orange'} variant="subtitle1" align="right">
                                                                        {row?.status}
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                                <Divider />
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <MonetizationOnIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Price</Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography sx={{color:'Orange'}} variant="subtitle1" align="right">
                                                                        {row?.Nft.price}
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                                <ListItemButton>
                                                                    <ListItemIcon>
                                                                        <ContactMailIcon sx={{ fontSize: '1.3rem' }} />
                                                                    </ListItemIcon>
                                                                    <ListItemText
                                                                        primary={<Typography variant="subtitle1">Address</Typography>}
                                                                    />
                                                                    <ListItemSecondaryAction>
                                                                        <Typography variant="subtitle1" align="right">
                                                                        {user?.address}
                                                                        </Typography>
                                                                    </ListItemSecondaryAction>
                                                                </ListItemButton>
                                                              
                                                             
                                                            </List>
                                                        </TableContainer>
                                                    </SubCard>
                                                </Grid>
                                                <Grid item md={1} sm={12}></Grid>
                                            </Grid>
                                          
                                            </>
                                        ))}
                                </Grid>
                            </Grid>
                        </Grid>
                    </SubCard>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default DeliveryDashboard;
