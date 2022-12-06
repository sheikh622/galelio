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
import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateSubAdmin';
import DeleteSubAdminDialog from './deleteSubAdminDialog';
import ChangeSubAdminStatusDialog from './changeSubAdminStatus';
import ChangeSubAdminMintingAccessDialog from './changeSubAdminMintingAccess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const SubAdminTable = ({ subAdminList, search, page, limit, addUpdateOpen, setAddUpdateOpen, subAdminData, setSubAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [changeStatusOpen, setChangeStatusOpen] = useState(false);
    const [changeMintingAccessOpen, setChangeMintingAccessOpen] = useState(false);
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
                subAdminData={subAdminData}
                page={page}
                limit={limit}
                search={search}
            />

            <DeleteSubAdminDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
            />

            <ChangeSubAdminStatusDialog
                open={changeStatusOpen}
                setOpen={setChangeStatusOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
            />

            <ChangeSubAdminMintingAccessDialog
                open={changeMintingAccessOpen}
                setOpen={setChangeMintingAccessOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
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
                {(subAdminList.admins == undefined) && (subAdminList.count == 0 || undefined) ? (
                    <>
                        <Grid item>
                            <Typography style={{ padding: '20px', fontWeight: '800', textAlign: 'center' }}> No Data Available</Typography>
                        </Grid>
                    </>
                ) : (
                    <>
                        {subAdminList.count > 0 ? (
                            <TableBody sx={{ padding: '10px' }}>
                                {subAdminList.admins != undefined &&
                                    subAdminList.admins.map((row, index) => (
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
                                                            <Grid item xs={3} md={3}>
                                                                <Button
                                                                    variant="outlined"
                                                                    size="large"
                                                                    onClick={() => {
                                                                        setAddUpdateOpen(true);
                                                                        setSubAdminData({
                                                                            id: row.id,
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
                                                            <Grid item xs={3} md={3}>
                                                                <Button
                                                                    variant="outlined"
                                                                    size="large"
                                                                    onClick={() => {
                                                                        setDeleteOpen(true);
                                                                        setSubAdminData({
                                                                            id: row.id
                                                                        });
                                                                    }}
                                                                >
                                                                    Delete
                                                                </Button>
                                                            </Grid>
                                                            <Grid item xs={3} md={3}>
                                                                <Button
                                                                    variant="outlined"
                                                                    size="large"
                                                                    onClick={() => {
                                                                        setChangeStatusOpen(true);
                                                                        setSubAdminData({
                                                                            id: row.id,
                                                                            isActive: row.isActive
                                                                        });
                                                                    }}
                                                                >
                                                                    Change Status
                                                                </Button>
                                                            </Grid>

                                                            <Grid item xs={3} md={3}>
                                                                <Button
                                                                    variant="outlined"
                                                                    size="large"
                                                                    onClick={() => {
                                                                        setChangeMintingAccessOpen(true);
                                                                        setSubAdminData({
                                                                            id: row.id,
                                                                            hasMintingAccess: row.hasMintingAccess
                                                                        });
                                                                    }}
                                                                >
                                                                    Change Minting Access
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
                                <Grid container justifyContent="center" sx={{ width: '300%', m: 5 }}>
                                    <Grid item>
                                        <CircularProgress size={'4rem'} />
                                    </Grid>
                                </Grid>
                            </>
                        )}
                    </>
                )}
             
            </Table>
        </TableContainer>
    );
};

export default SubAdminTable;
