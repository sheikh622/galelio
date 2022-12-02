import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';

import SubCard from 'ui-component/cards/SubCard';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import {
    Button,
    Typography,
    Grid,
    Select,
    InputLabel,
    FormControl,
    MenuItem,
    Menu,
    Pagination,
    OutlinedInput,
    InputAdornment,
    Divider
} from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';

import MainCard from 'ui-component/cards/MainCard';
import HeadingCard from 'shared/Card/HeadingCard';
const Activity = () => {
    const theme = useTheme();
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
            from: 'Vlad556 ',
            to: 'Vlad556 ',
            days: '9 Days ago '
        },
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
            from: 'Vlad556 ',
            to: 'Vlad556 ',
            days: '9 Days ago '
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
                            sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                            title={
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="age-select">Filter</InputLabel>
                                            <Select
                                                fullWidth
                                                labelId="age-select"
                                                id="age"
                                                name="age"
                                                // defaultValue={formik.values.age}
                                                // onChange={formik.handleChange}
                                                label="Age"
                                            >
                                                <MenuItem value="">
                                                    <em>Filter</em>
                                                </MenuItem>
                                                <MenuItem value={10}>Ten</MenuItem>
                                                <MenuItem value={20}>Twenty</MenuItem>
                                                <MenuItem value={30}>Thirty</MenuItem>
                                            </Select>
                                        </FormControl>
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
                                            <TableCell align="center">Event </TableCell>
                                            <TableCell align="center">Price </TableCell>
                                            <TableCell align="center">From</TableCell>
                                            <TableCell align="center">To </TableCell>
                                            <TableCell align="center">Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {itemData.map((item) => (
                                        <TableBody>
                                            <TableRow>
                                                <TableCell align="center">{item.title}</TableCell>
                                                <TableCell align="center">{item.price}</TableCell>
                                                <TableCell sx={{ color: '#2194FF' }} align="center">
                                                    {item.from}
                                                </TableCell>
                                                <TableCell sx={{ color: '#2194FF' }} align="center">
                                                    {item.to}
                                                </TableCell>
                                                <TableCell align="center">{item.days}</TableCell>
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
