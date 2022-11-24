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
import Chip from 'ui-component/extended/Chip';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddUpdateBrandCategoryDialog from './addUpdateBrandCategory';
import DeleteBrandCategoryDialog from './deleteBrandCategoryDialog';

const BrandCategoryTable = ({ addUpdateOpen, setAddUpdateOpen, search, page, limit, brandAdminList, setBrandAdminData, brandAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
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
            <AddUpdateBrandCategoryDialog
                open={addUpdateOpen}
                setOpen={setAddUpdateOpen}
                brandAdminData={brandAdminData}
                page={page}
                limit={limit}
                search={search}
            />

            <DeleteBrandCategoryDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
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

export default BrandCategoryTable;
