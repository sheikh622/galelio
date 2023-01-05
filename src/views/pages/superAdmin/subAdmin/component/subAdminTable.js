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
    Stack,
    TableRow,
    Tooltip,
    CircularProgress
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateSubAdmin';
import DeleteSubAdminDialog from './deleteSubAdminDialog';
import ChangeSubAdminStatusDialog from './changeSubAdminStatus';
import ChangeSubAdminMintingAccessDialog from './changeSubAdminMintingAccess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import UpdateIcon from '@mui/icons-material/Update';
const SubAdminTable = ({ subAdminList, search, page, limit, addUpdateOpen, setAddUpdateOpen, subAdminData, setSubAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const theme = useTheme();

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
                {subAdminList.admins == undefined && (subAdminList.count == 0 || undefined) ? (
                    <>
                        <Grid item>
                            <Typography style={{ padding: '20px', fontWeight: '800', textAlign: 'center' }}> 
                            No Data Available</Typography>
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
                                                <TableCell align="center" sx={{ textTransform: 'capitalize' }}>{row.firstName}</TableCell>
                                                <TableCell align="center" sx={{ textTransform: 'capitalize' }}>{row.lastName}</TableCell>
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
                                                               sx={{color:"#da07ac"}} 
                                                                aria-label="detail"
                                                                size="medium"
                                                                onClick={() => {
                                                                    setChangeStatusOpen(true);
                                                                    setSubAdminData({
                                                                        id: row.id,
                                                                        isActive: row.isActive
                                                                    });
                                                                }}
                                                            >
                                                                <UpdateIcon sx={{ fontSize: '1.5rem' }} />
                                                            </IconButton>
                                                        </Tooltip>
                                                    

                                                        <Tooltip placement="top" title="Edit">
                                                            <IconButton   sx={{color:"#008b04"}} aria-label="Edit" size="large"
                                                             onClick={() => {
                                                                
                                                                setAddUpdateOpen(true);
                                                                setSubAdminData({
                                                                    id: row.id,
                                                                    firstName: row.firstName,
                                                                    lastName: row.lastName,
                                                                    adminEmail: row.email,
                                                                    adminPassword: ''
                                                                });
                                                             }}>
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
                                                                    setSubAdminData({
                                                                        id: row.id
                                                                    });
                                                                }}
                                                            >
                                                                <DeleteOutlineOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                            </IconButton>
                                                        </Tooltip>
                                                    </Stack>
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
