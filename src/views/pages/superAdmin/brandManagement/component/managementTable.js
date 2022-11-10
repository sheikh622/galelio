import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {
    Divider,
    Typography,
    IconButton,
    Stack,
    Grid,
    Table,
    TableBody,
    Menu,
    TableCell,
    MenuItem,
    TableContainer,
    TableHead,
    Button,
    TableRow,
    Tooltip
} from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteManagementDialog from './deleteManagementDialog';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import moment from 'moment';
import Chip from 'ui-component/extended/Chip';
import AddUpdateDialog from './addUpdateManagement';

import BlockUnblockDialog from './blockUnblock';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useNavigate } from 'react-router-dom';
const AdminTable = ({ page, limit, search, open, setOpen, brandId, brandsList }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    const [deleteOpen, setDeleteOpen] = useState(false);
 
    const [isMenu, setIsMenu] = useState(false);
    const [status, setStatus] = useState(false);

    const [brandManagement, setBrandManagement] = useState({
        id:'',
        firstName: '',
        lastName: '',        
       
        email: '',
        password: ''
    });
    const [detailId, setDetailId] = useState();

   

    const openDetails = (id) => {
        
        if (detailId === id) {
            setDetailId(null);
        } else {
            setDetailId(id);
        }
    };

    const brandAdminList = useSelector((state) => state.brandadminReducer.brandadminsList);

    return (
        <TableContainer>
            <AddUpdateDialog
            setBrandManagement={setBrandManagement}
            brandsList={brandsList}
            brandManagement={brandManagement}
                adminList={brandAdminList}
                page={page}
                limit={limit}
                setOpen={setOpen}
                open={open}  
                search={search}
            />

            <DeleteManagementDialog
                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}
                brandManagement={brandManagement}
                setBrandManagement={setBrandManagement}
                page={page}
                limit={limit}
                search={search}
            />
            <BlockUnblockDialog
            brandManagement={brandManagement}
            setBrandManagement={setBrandManagement}
                open={status}
                setOpen={setStatus}
                brandId={brandId}
                page={page}
                limit={limit}
                search={search}
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
                                                                setOpen(true);
                                                              

                                                                setBrandManagement({
                                                                    email: row.email,
                                                                    firstName: row.firstName,
                                                                    lastName: row.lastName,
                                                                    // brandName: row.brandName,
                                                                    password: ''
                                                                });
                                                            }}
                                                        >
                                                            edit
                                                        </Button>
                                                    </Grid>
                                                    <Grid item xs={4} md={4}>
                                                        <Button
                                                            variant="outlined"
                                                            size="large"
                                                            onClick={() => {
                                                                setDeleteOpen(true);
                                                                setBrandManagement({
                                                                   id:row.id,
                                                                
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
                                                                setStatus(true);
                                                                setBrandManagement({
                                                                    email: row.email
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

export default AdminTable;
