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
import BlockIcon from '@mui/icons-material/Block';

import Chip from 'ui-component/extended/Chip';
import AddUpdateBrandAdminDialog from './addUpdateSubAdmin';
import DeleteSubAdminDialog from './deleteSubAdminDialog';
import ChangeSubAdminStatusDialog from './changeSubAdminStatus';
import ChangeRoleDialog from './changeRole';
import ChangeSubAdminMintingAccessDialog from './changeSubAdminMintingAccess';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import UpdateIcon from '@mui/icons-material/Update';
import CurrencyExchangeIcon from 'assets/images/CurrencyExchangeIcon.png';
const SubAdminTable = ({ subAdminList, search, page, limit, addUpdateOpen, setAddUpdateOpen, subAdminData, setSubAdminData }) => {
    const [deleteOpen, setDeleteOpen] = useState(false);
    const theme = useTheme();

    const [changeStatusOpen, setChangeStatusOpen] = useState(false);
    const [changeRoleOpen, setChangeRoleOpen] = useState(false);
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
                setSubAdminData={setSubAdminData}

            />

            <DeleteSubAdminDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
                setSubAdminData={setSubAdminData}

            />

            <ChangeSubAdminStatusDialog
                open={changeStatusOpen}
                setOpen={setChangeStatusOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
                setSubAdminData={setSubAdminData}

            />
            <ChangeRoleDialog
                open={changeRoleOpen}
                setOpen={setChangeRoleOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
                setSubAdminData={setSubAdminData}
            />

            <ChangeSubAdminMintingAccessDialog
            setSubAdminData={setSubAdminData}
                open={changeMintingAccessOpen}
                setOpen={setChangeMintingAccessOpen}
                page={page}
                limit={limit}
                search={search}
                subAdminData={subAdminData}
            />
            {subAdminList?.admins != undefined ? (
                <>
                    {subAdminList?.count > 0 ? (
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}></TableCell>
                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        First Name
                                    </TableCell>
                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        Last Name
                                    </TableCell>
                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        Role
                                    </TableCell>
                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        Email
                                    </TableCell>

                                    <TableCell align="left" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        Status
                                    </TableCell>
                                    <TableCell align="center" className="Tableheading" sx={{ borderBottom: 'none' }}>
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>

                            <>
                                <TableBody sx={{ padding: '10px' }}>
                                    {subAdminList.admins != undefined &&
                                        subAdminList.admins.map((row, index) => (
                                            <>
                                                <TableRow>
                                                    <TableCell
                                                        align="left"
                                                        className="tableName"
                                                        sx={{ textTransform: 'capitalize' }}
                                                    ></TableCell>
                                                    <TableCell align="left" className="tableName" sx={{ textTransform: 'capitalize' }}>
                                                        {row.firstName}
                                                    </TableCell>
                                                    <TableCell align="left" className="tableName" sx={{ textTransform: 'capitalize' }}>
                                                        {row.lastName}
                                                    </TableCell>
                                                    {row.role == 'Admin' ? (
                                                        <TableCell
                                                            align="left"
                                                            className="tableName"
                                                            sx={{ borderBottom: 'none', color: '#2f53ff !important' }}
                                                        >
                                                            {row.role}
                                                        </TableCell>
                                                    ) : (
                                                        <TableCell
                                                            align="left"
                                                            className="tableName"
                                                            sx={{ borderBottom: 'none', color: '#ed6c02 !important' }}
                                                        >
                                                            {row.role}
                                                        </TableCell>
                                                    )}
                                                    <TableCell align="left" className="tableName">
                                                        {row.email}
                                                    </TableCell>

                                                    <TableCell align="left" sx={{ borderBottom: 'none' }}>
                                                        {row.isActive == false ? (
                                                            <Chip label="Blocked" size="small" chipcolor="orange" />
                                                        ) : (
                                                            <Chip label="Unblocked" size="small" chipcolor="success" />
                                                        )}
                                                    </TableCell>

                                                    <TableCell align="center" sx={{ borderBottom: 'none' }}>
                                                        {row.role == 'Admin' ? (
                                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                                <Tooltip placement="top" title="Change Status">
                                                                    <BlockIcon
                                                                        className="color"
                                                                        color="primary"
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
                                                                    </BlockIcon>
                                                                </Tooltip>
                                                                <Tooltip placement="top" title="Change minting access" sx={{ ml: 1 }}>
                                                                    <IconButton
                                                                        className="color"
                                                                        aria-label="Edit"
                                                                        size="large"
                                                                        onClick={() => {
                                                                            setChangeMintingAccessOpen(true);
                                                                            setSubAdminData({
                                                                                id: row.id,
                                                                                walletAddress: row.walletAddress,
                                                                                isActive: row.isActive
                                                                            });
                                                                        }}
                                                                    >
                                                                        <img src={CurrencyExchangeIcon} />
                                                                    </IconButton>
                                                                </Tooltip>

                                                                <Tooltip placement="top" title="Edit">
                                                                    <IconButton
                                                                        className="color"
                                                                        aria-label="Edit"
                                                                        size="large"
                                                                        onClick={() => {
                                                                            setAddUpdateOpen(true);
                                                                            setSubAdminData({
                                                                                id: row.id,
                                                                                firstName: row.firstName,
                                                                                lastName: row.lastName,
                                                                                adminEmail: row.email,
                                                                                adminPassword: '',
                                                                                walletAddress: row.walletAddress,
                                                                            });
                                                                        }}
                                                                    >
                                                                        <EditOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip placement="top" title="Change Role">
                                                                    <IconButton
                                                                        className="color"
                                                                        sx={{
                                                                            borderColor: theme.palette.orange.main,
                                                                            '&:hover ': { background: theme.palette.orange.light }
                                                                        }}
                                                                        size="large"
                                                                        onClick={() => {
                                                                            setChangeRoleOpen(true);
                                                                            setSubAdminData({
                                                                                id: row.id,
                                                                                role: row.role
                                                                            });
                                                                        }}
                                                                    >
                                                                        <ChangeCircleIcon sx={{ fontSize: '1.5rem' }} />
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
                                                        ) : (
                                                            <Button
                                                                variant="outlined"
                                                                onClick={() => {
                                                                    setChangeRoleOpen(true);
                                                                    setSubAdminData({
                                                                        id: row.id,
                                                                        role: row.role
                                                                    });
                                                                }}
                                                                endIcon={<ChangeCircleIcon />}
                                                            >
                                                                Change Role
                                                            </Button>
                                                        )}
                                                    </TableCell>
                                                    <TableCell
                                                        align="left"
                                                        className="tableName"
                                                        sx={{ textTransform: 'capitalize' }}
                                                    ></TableCell>
                                                </TableRow>
                                            </>
                                        ))}
                                </TableBody>
                            </>
                        </Table>
                    ) : (
                        <>
                            <Grid item>
                                <Typography className="statustypo" style={{ padding: '20px 20px 20px 70px', fontWeight: '500' }}>
                                    No Data Available
                                </Typography>
                            </Grid>
                        </>
                    )}
                </>
            )
        :(
            <Grid container justifyContent="center" sx={{ width: '80%', m: '15px auto '}}>
                        <Grid item>
                    <CircularProgress disableShrink size={'4rem'} />
                </Grid>
                        </Grid>
        )}
        </TableContainer>
    );
};

export default SubAdminTable;
