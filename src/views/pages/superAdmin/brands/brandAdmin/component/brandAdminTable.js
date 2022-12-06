import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import {
    Divider,
    Typography,
    IconButton,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    Button,
    TableRow,
    Tooltip,
    Stack
} from '@mui/material';
import DeleteBrandAdminDialog from './deleteBrandAdminDialog';
import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateBrandAdmin';
import UpdateIcon from '@mui/icons-material/Update';
import ChangeBrandAdminStatusDialog from './changeBrandAdminStatus';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const BrandAdminTable = ({ addUpdateOpen, setAddUpdateOpen, search, page, limit, brandAdminList, setBrandAdminData, brandAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const theme = useTheme();

    const [changeStatusOpen, setChangeStatusOpen] = useState(false);
    const [detailId, setDetailId] = useState();
    const openDetails = (id) => {
        if (detailId === id) {
            setDetailId(null);
        } else {
            setDetailId(id);
        }
    };

    return (
        <TableContainer>
            <AddUpdateBrandAdminDialog
                open={addUpdateOpen}
                setOpen={setAddUpdateOpen}
                brandAdminData={brandAdminData}
                page={page}
                limit={limit}
                search={search}
            />

            <DeleteBrandAdminDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
                page={page}
                limit={limit}
                search={search}
                brandAdminData={brandAdminData}
            />

            <ChangeBrandAdminStatusDialog
                open={changeStatusOpen}
                setOpen={setChangeStatusOpen}
                page={page}
                limit={limit}
                search={search}
                brandAdminData={brandAdminData}
            />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">First Name</TableCell>
                        <TableCell align="center">Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                {brandAdminList.admins != undefined && brandAdminList.count > 0 ? (
                    <TableBody sx={{ padding: '10px' }}>
                        {brandAdminList.admins != undefined &&
                            brandAdminList.admins.map((row, index) => (
                                <>
                                    <TableRow>
                                        <TableCell align="center">{row.firstName}</TableCell>
                                        <TableCell align="center">{row.lastName}</TableCell>
                                        <TableCell align="center">{row.email}</TableCell>

                                        <TableCell align="center">
                                            {row.isActive == false ? (
                                                <Chip label="Blocked" size="small" chipcolor="orange" />
                                            ) : (
                                                <Chip label="Unblocked" size="small" chipcolor="success" />
                                            )}
                                        </TableCell>
                                        <TableCell align="center" sx={{ padding: '0px' }}>
                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                <Tooltip placement="top" title="Change Status">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="detail"
                                                        size="medium"
                                                        onClick={() => {
                                                            setChangeStatusOpen(true);
                                                            setBrandAdminData({
                                                                id: row.id,
                                                                brandId: row.BrandId,
                                                                isActive: row.isActive
                                                            });
                                                        }}
                                                    >
                                                        <UpdateIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip placement="top" title="Edit">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="Edit"
                                                        size="large"
                                                        onClick={() => {
                                                            setAddUpdateOpen(true);
                                                            setBrandAdminData({
                                                                id: row.id,
                                                                brandId: row.BrandId,
                                                                firstName: row.firstName,
                                                                lastName: row.lastName,
                                                                adminEmail: row.email,
                                                                adminPassword: ''
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
                                                            setBrandAdminData({
                                                                id: row.id,
                                                                brandId: row.BrandId
                                                            });
                                                        }}
                                                    >
                                                        <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>
                                            </Stack>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow style={{ display: detailId !== row.id ? 'none' : '' }}>
                                        <TableCell sx={{ pl: 12 }} colSpan={12}>
                                            <div>
                                                <Grid container spacing={4}>
                                                    <Grid item xs={4} md={4}>
                                                        <Button
                                                            variant="outlined"
                                                            size="large"
                                                            onClick={() => {
                                                                setAddUpdateOpen(true);
                                                                setBrandAdminData({
                                                                    id: row.id,
                                                                    brandId: row.BrandId,
                                                                    firstName: row.firstName,
                                                                    lastName: row.lastName,
                                                                    adminEmail: row.email,
                                                                    adminPassword: ''
                                                                });
                                                            }}
                                                        >
                                                            Edit
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4} md={4}>
                                                        <Button
                                                            variant="outlined"
                                                            size="large"
                                                            onClick={() => {
                                                                setDeleteOpen(true);
                                                                setBrandAdminData({
                                                                    id: row.id,
                                                                    brandId: row.BrandId
                                                                });
                                                            }}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4} md={4}>
                                                        <Button
                                                            variant="outlined"
                                                            size="large"
                                                            onClick={() => {
                                                                setChangeStatusOpen(true);
                                                                setBrandAdminData({
                                                                    id: row.id,
                                                                    brandId: row.BrandId,
                                                                    isActive: row.isActive
                                                                });
                                                            }}
                                                        >
                                                            Change Status
                                                        </Button>
                                                    </Grid>
                                                </Grid>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </>
                            ))}
                    </TableBody>
                ) : (
                    <>
                        <Grid item md={12}>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Typography style={{ padding: '20px', fontWeight: '800' }}> No Data Available</Typography>
                        </Grid>
                    </>
                )}
            </Table>
        </TableContainer>
    );
};

export default BrandAdminTable;
