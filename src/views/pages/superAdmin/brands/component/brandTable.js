import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Tooltip,
    Grid,
    Typography,
    CircularProgress
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import DeleteBrandDialog from './deleteBrandDialog';
import Avatar from 'ui-component/extended/Avatar';
import moment from 'moment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const BrandTable = ({ brandsList, page, limit, search, setAddUpdateOpen, setBrandData }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [brandId, setBrandId] = useState();
    return (
        <TableContainer>
            <DeleteBrandDialog open={deleteOpen} setOpen={setDeleteOpen} brandId={brandId} page={page} limit={limit} search={search} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Location</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center">Updated At</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {(brandsList.brands != undefined && brandsList.count != 0) || undefined ? (
                        <>
                            {brandsList.brands != undefined &&
                                brandsList.brands.map((row, index) => (
                                    <TableRow>
                                        <TableCell align="center" justifyContent="center" alignItems="center">
                                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                <Grid item>
                                                    <Avatar alt="Brand Image" src={row.image} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {row.name}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </TableCell>
                                        <TableCell align="center" sx={{ padding: '0px' }}>
                                            {row.location}
                                        </TableCell>
                                        <TableCell align="center" sx={{ padding: '0px' }}>
                                            {row.description}
                                        </TableCell>
                                        <TableCell align="center">{moment(row.createdAt).format('DD-MMM-YYYY')}</TableCell>
                                        <TableCell align="center">{moment(row.updatedAt).format('DD-MMM-YYYY')}</TableCell>
                                        <TableCell align="center" sx={{ padding: '0px' }}>
                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                <Tooltip placement="top" title="Add Brand Admin">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="detail"
                                                        size="medium"
                                                        onClick={() => {
                                                            navigate('/brands/admin', {
                                                                state: {
                                                                    brandData: row
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        <AccountCircleIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip placement="top" title="Add Brand Categories">
                                                    <IconButton
                                                        sx={{ color: '#c71585' }}
                                                        aria-label="detail"
                                                        size="medium"
                                                        onClick={() => {
                                                            navigate('/brands/category', {
                                                                state: {
                                                                    brandData: row
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        <DashboardIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip placement="top" title="Edit">
                                                    <IconButton
                                                        sx={{ color: '#008b04' }}
                                                        aria-label="Edit"
                                                        size="large"
                                                        onClick={() => {
                                                            setAddUpdateOpen(true);
                                                            setBrandData({
                                                                id: row.id,
                                                                name: row.name,
                                                                description: row.description,
                                                                location: row.location,
                                                                image: null
                                                            });
                                                        }}
                                                    >
                                                        <EditOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip placement="top" title="Delete">
                                                    <IconButton
                                                        color="primary"
                                                        sx={{
                                                            color: theme.palette.orange.dark,
                                                            borderColor: theme.palette.orange.main,
                                                            '&:hover ': { background: theme.palette.orange.light }
                                                        }}
                                                        size="large"
                                                        onClick={() => {
                                                            setDeleteOpen(true);
                                                            setBrandId(row.id);
                                                        }}
                                                    >
                                                        <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </>
                    ) : (
                        <>
                            <Grid container justifyContent="center" sx={{ width: '400%', m: 5 }}>
                                <Grid item>
                                    <CircularProgress size={'4rem'} />
                                </Grid>
                            </Grid>
                        </>
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BrandTable;
