import { useState } from 'react';
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
    Tooltip
} from '@mui/material';
import DeleteBrandAdminDialog from './deleteBrandAdminDialog';
import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateBrandAdmin';
import BlockUnblockDialog from './blockUnblock';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BrandAdminTable = ({ addUpdateOpen, setAddUpdateOpen, search, page, limit, brandAdminList, setBrandAdminData, brandAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [changeStatusOpen, setChangeStatusOpen] = useState(false);
    const [adminId, setAdminId] = useState();
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

            {/* <BlockUnblockDialog
                adminId={adminId}
                open={changeStatusOpen}
                setOpen={setChangeStatusOpen}
                brandId={brandId}
                page={page}
                limit={limit}s
                search={search}
            /> */}

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

                                        <TableCell align="center">
                                            <Tooltip placement="top" title="View">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="detail"
                                                    size="large"
                                                    onClick={() => {
                                                        openDetails(row.id);
                                                    }}
                                                >
                                                    <KeyboardArrowDownIcon sx={{ fontSize: '1.5rem' }} />
                                                </IconButton>
                                            </Tooltip>
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
                                                                console.log('row', row);
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
                                                                    brandId: row.BrandId,
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
