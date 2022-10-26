import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import {Divider,Typography, IconButton, Stack,Grid, Table, TableBody,Menu, TableCell,MenuItem, TableContainer, TableHead,Button, TableRow, Tooltip } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteManagementDialog from './deleteManagementDialog';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import moment from 'moment';
import Chip from 'ui-component/extended/Chip';
import AddUpdateDialog from './addUpdateManagement';
import MiniteringDialog from './minitingRole';
import BlockUnblockDialog from './blockUnblock';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { useNavigate } from 'react-router-dom';
const AdminTable = ({ page, limit, search, open, setOpen, brandId, setBrandId }) => {
    const theme = useTheme();
    const navigate = useNavigate();
   
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [minitering, setMinitering] = useState(false);
    const [isBlock, setIsBlock] = useState('');
    const [isMenu, setIsMenu] = useState(false);
    const [status, setStatus] = useState(false);
    const [fname, setFname] = useState();
    const [lname, setLname] = useState();
    const [email, setEmail] = useState();
    const [id, setId] = useState();
   
    const [approve, setApprove] = useState(false);
    const [update, setUpdate] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event?.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
       
    };
   
   
    const adminList = useSelector((state) => state.adminReducer.adminsList);
    console.log(adminList,"===============adminList===========================>");
    return (
        <TableContainer>
        <AddUpdateDialog
        fname={fname}
        lname={lname}
        email={email}
        page={page}
        limit={limit}
        setOpen={setOpen}
        open={open}
        update={update}
        setUpdate={setUpdate}
        search={search}
        
        />

            <DeleteManagementDialog
                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}
                id={id}
                page={page}
                limit={limit}
                search={search}
            />
            <BlockUnblockDialog
            isBlock={isBlock}
            email={email}
            open={status}
            setOpen={setStatus}
                brandId={brandId}
                page={page}
                limit={limit}
                search={search}
            />
            <MiniteringDialog
            isMenu={isMenu}
            setIsMenu={setIsMenu}
            isBlock={isBlock}
            open={minitering}
            email={email}
            setOpen={setMinitering}
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
                        <TableCell align="center">Minting Access</TableCell>
                        
                        
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                {adminList.admins!= undefined && adminList.count > 0 ? (
                <TableBody sx={{padding:"10px"}}>

                    {adminList.admins!= undefined &&
                        adminList.admins.map((row, index) => (
                            <TableRow>

                                <TableCell align="center" >
                                    {row.firstName}
                                </TableCell>
                                <TableCell align="center" >
                                    {row.lastName}
                                </TableCell>
                                <TableCell align="center" >
                                   {row.email}
                                </TableCell>
                               
                                <TableCell  align="center" >
                               {row.isActive == false   && <Chip label="Blocked" size="small" chipcolor="success" />}
                                {row.isActive == true  && <Chip label="Unblocked" size="small" chipcolor="orange" />} 
                           
                               
                                
                            </TableCell>
                                    
                             
                                <TableCell  align="center" >
                                 {row.hasMintingAccess == true   && <Chip label="Allowed" size="small" chipcolor="success" />}
                                {row.hasMintingAccess == false  && <Chip label="Not Allowed" size="small" chipcolor="orange" />}
                           
                           
                               
                                    
                                </TableCell>

                               
                                <TableCell align="center" >
                                <Grid item>
                                <MoreHorizOutlinedIcon
                                    fontSize="small"
                                    sx={{ color: theme.palette.grey[500], cursor: 'pointer' }}
                                    aria-controls="menu-user-details-card"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                />
                                <Menu
                                    id="menu-user-details-card"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    variant="selectedMenu"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                >
                                    <MenuItem onClick={() => {
                                        setOpen(true);
                                        setUpdate(true);
                                        setFname(row.firstName);
                                        setLname(row.lastName);
                                        setEmail(row.email);
                                        setAnchorEl(null);
                                    }}> edit</MenuItem>
                                    <MenuItem onClick={() => {
                                        setDeleteOpen(true);
                                        setId(row.id);
                                        setAnchorEl(null);
                                    }}> Delete</MenuItem>
                                    <MenuItem onClick={() => {
                                        setStatus(true);
                                        setEmail(row.email);
                                        setAnchorEl(null);
                                    }}> block Status </MenuItem>
                                    <MenuItem onClick={() => {
                                        setMinitering(true);
                                        setEmail(row.email);
                                        setAnchorEl(null);

                                    }}> Minting Status </MenuItem>
                                </Menu>
                            </Grid>
                                </TableCell>



                            </TableRow>
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
