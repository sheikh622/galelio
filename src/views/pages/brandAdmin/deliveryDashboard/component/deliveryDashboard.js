import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Grid,
    Divider,
    Typography,
    TableHead,
    TableRow,
    Tooltip,Button,
    CircularProgress
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import ChangeStatusDialog from './changeStatus';

import Avatar from 'ui-component/extended/Avatar';
import moment from 'moment';

const DeliveryDashboard = ({ deliveryList , user }) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const [deliveryId, setDeliveryId] = useState(0);
    return (
        <>
        <ChangeStatusDialog setOpen={setOpen} open={open} user={user} setDeliveryId ={setDeliveryId} deliveryId={deliveryId}/>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Created At</TableCell>
                            <TableCell align="center">Updated At</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <>
                        {(deliveryList == undefined && deliveryList?.length == 0) || undefined ? (
                            <>
                                <Grid item>
                                    <Typography style={{ padding: '20px', fontWeight: '800', justifyContent: 'center' }}>
                                        {' '}
                                        No Data Available
                                    </Typography>
                                </Grid>
                            </>
                        ) : (
                            <TableBody>
                                {deliveryList != undefined &&
                                    deliveryList?.map((row, index) => (
                                        <>
                                            <TableRow>
                                                <TableCell align="center" justifyContent="center" alignItems="center">
                                                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                        <Grid item>
                                                            <Avatar alt="Image" src={row?.Nft.asset} />
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="subtitle1" component="div">
                                                                {row?.Nft.name}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </TableCell>

                                                <TableCell align="center" sx={{ padding: '0px' }}>
                                                    {row?.Nft.price} {row?.Nft.currencyType}
                                                </TableCell>
                                                <TableCell
                                                    align="center"
                                                    sx={{
                                                        padding: '0px',
                                                        color:
                                                            row?.status == 'Delivered'
                                                                ? 'Green'
                                                                : row?.status == 'pending'
                                                                ? 'Blue'
                                                                : 'Orange'
                                                    }}
                                                >
                                                    {row?.status}
                                                </TableCell>
                                                <TableCell align="center" sx={{ padding: '0px' }}>
                                                    {row?.Nft.description}
                                                </TableCell>
                                                <TableCell align="center">{moment(row.createdAt).format('DD-MMM-YYYY')}</TableCell>
                                                <TableCell align="center">{moment(row.updatedAt).format('DD-MMM-YYYY')}</TableCell>
                                                <TableCell align="center" sx={{ padding: '0px' }}>
                                                    <Stack direction="row" justifyContent="center" alignItems="center">
                                                        <Tooltip placement="top" title="Status">
                                                        <Button variant="outlined" endIcon={<SendIcon />} 
                                                        onClick={() => {
                                                            setOpen(true);
                                                             setDeliveryId(row?.id);
                                                        }}   >
                                                        Status
                                                      </Button>
                                                        </Tooltip>
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        </>
                                    ))}
                            </TableBody>
                        )}
                    </>
                </Table>
                <Divider />
            </TableContainer>
        </>
    );
};

export default DeliveryDashboard;
