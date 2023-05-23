import { useState, useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import '@fontsource/public-sans';
import SubCard from 'ui-component/cards/SubCard';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Typography, Grid, Select, InputLabel, FormControl, MenuItem, Divider } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import FactoryAbi from 'contractAbi/Factory.json';
import { ethers, utils } from 'ethers';
import FactoryAddress from 'contractAbi/Factory-address.json';
import MainCard from 'ui-component/cards/MainCard';
const Activity = ({nftList}) => {
    console.log(nftList?.nft?.NFTTokens?.[0]?.serialId , 'nftList*********');
    var serialId = nftList?.nft?.NFTTokens?.[0]?.serialId;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const factoryAddr = new ethers.Contract(FactoryAddress.address, FactoryAbi.abi, signer);
    console.log('factoryAddr', factoryAddr);
    // let res =  factoryAddr.serials(serialId);
    // console.log(res,'res******')
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250
            }
        }
    };

    const names = [
        'Sales',
        'Listings',
        'Offers',
        'Transfers',
    ];

    function getStyles(name, personName) {
        return {
            fontWeight: personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium
        };
    }
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value
        );
    };
    const itemData = [
        {
            title: 'List',
            price: '0.006 ETH',
            from: 'Vlad556 ',
            to: 'Vlad556 ',
            days: '9 Days ago '
        },
        {
            title: 'List',
            price: '0.006 ETH',
            from: 'Alex 67 ',
            to: 'Alex 67 ',
            days: '6 Days ago '
        },
        {
            title: 'List',
            price: '0.006 ETH',
            from: 'cynthia321 ',
            to: 'cynthia321 ',
            days: '60 Days ago '
        },
        {
            title: 'List',
            price: '0.006 ETH',
            from: 'Vlad556 ',
            to: 'Vlad556 ',
            days: '79 Days ago '
        }
    ];
    const [search, setSearch] = useState('');

    return (
        <>
            <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
                <Grid item xs={12} lg={12} md={12}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography
                                color={theme.palette.mode === 'dark' ? '#FFFFFF' : 'black'}
                                className="productfigmastyl"
                                variant="h2"
                                mt={4}
                                component="div"
                                sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                            >
                                Activity
                                <AutorenewIcon />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={12}>
                    <Grid item md={12} sm={12}>
                        <MainCard
                            className="tableShadow"
                            sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                            title={
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <div>
                                            <FormControl
                                                sx={{
                                                    background: theme.palette.mode === 'dark' ? '#181C1F' : '#d9d9d9',
                                                    color: theme.palette.mode === 'dark' ? '#ffff' : 'black',
                                                    padding: '10px 10px 10px 10px',
                                                    border: '2px solid #CDCDCD',
                                                    borderRadius: '4px'
                                                }}
                                                fullWidth
                                            >
                                                <Select
                                                    variant="standard"
                                                    fullWidth
                                                    displayEmpty
                                                    value={personName}
                                                    onChange={handleChange}
                                                    // input={<OutlinedInput />}
                                                    renderValue={(selected) => {
                                                        if (selected.length === 0) {
                                                            return <em className="fontfamily">filter</em>;
                                                        }

                                                        return selected.join(', ');
                                                    }}
                                                    MenuProps={MenuProps}
                                                    inputProps={{ 'aria-label': 'Without label' }}
                                                >
                                                    {/* <MenuItem disabled value="">
                                          <em>aiman</em>
                                        </MenuItem> */}
                                                    {names.map((name) => (
                                                        <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
                                                            {name}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </div>
                                        {/*    <FormControl  sx={{ background:theme.palette.mode === 'dark' ? '#181C1F'
                                        : '#d9d9d9',color:theme.palette.mode === 'dark' ? '#ffff'
                                        : 'black', border: '2px solid #CDCDCD' , borderRadius:'4px'}} fullWidth>
                                            <InputLabel className='activityTable'  sx={{color:'#CDCDCD'}} id="age-select">Filter</InputLabel>
                                            <Select
                                            variant='standard'
                                                fullWidth
                                                labelId="age-select"
                                                id="age"
                                                name="age"
                                                // defaultValue={formik.values.age}
                                                // onChange={formik.handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em className='activityTable' >Filter</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl> */}
                                    </Grid>
                                </Grid>
                            }
                            content={false}
                        >
                            <Divider />
                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                Event{' '}
                                            </TableCell>
                                            <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                Price{' '}
                                            </TableCell>
                                            <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                From
                                            </TableCell>
                                            <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                To{' '}
                                            </TableCell>
                                            <TableCell className="activityTable" sx={{ fontSize: '18px !important' }} align="center">
                                                Date
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {itemData.map((item) => (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="activityTable" sx={{ fontSize: '15px' }} align="center">
                                                    {item.title}
                                                </TableCell>
                                                <TableCell className="activityTable" sx={{ fontSize: '15px' }} align="center">
                                                    {item.price}
                                                </TableCell>
                                                <TableCell
                                                    className="activityTable"
                                                    sx={{ fontSize: '15px', color: '#2194FF' }}
                                                    align="center"
                                                >
                                                    {item.from}
                                                </TableCell>
                                                <TableCell
                                                    className="activityTable"
                                                    sx={{ fontSize: '15px', color: '#2194FF' }}
                                                    align="center"
                                                >
                                                    {item.to}
                                                </TableCell>
                                                <TableCell className="activityTable" sx={{ fontSize: '15px' }} align="center">
                                                    {item.days}
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    ))}
                                </Table>
                            </TableContainer>
                        </MainCard>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Activity;
