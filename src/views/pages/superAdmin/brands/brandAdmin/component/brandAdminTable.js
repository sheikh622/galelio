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
    Tooltip,
    CircularProgress
} from '@mui/material';
import DeleteBrandAdminDialog from './deleteBrandAdminDialog';
import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateBrandAdmin';
import ChangeBrandAdminStatusDialog from './changeBrandAdminStatus';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const BrandAdminTable = ({ addUpdateOpen, setAddUpdateOpen, search, page, limit, brandAdminList, setBrandAdminData, brandAdminData }) => {
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

                {brandAdminList.admins == undefined && brandAdminList.count == 0 || undefined ? (
                     <>
                     <Grid item md={12}>
                         <Divider />
                     </Grid>
                     <Grid item>
                         <Typography style={{ padding: '20px', fontWeight: '800' }}> No Data Available</Typography>
                     </Grid>
                 </>
                   
                   
                ) : (
                    <TableBody sx={{ padding: '10px' }}>
                    {brandAdminList.count > 0 ? (
                        <>
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
                        </>
                    ) : (
                        <>
                            <Grid container justifyContent="center" sx={{ width: '300%', m: 5 }}>
                                <Grid item>
                                    <CircularProgress size={'4rem'} />
                                </Grid>
                            </Grid>
                        </>
                    )}
                </TableBody>
                )}
            </Table>
        </TableContainer>
    );
};

export default BrandAdminTable;
