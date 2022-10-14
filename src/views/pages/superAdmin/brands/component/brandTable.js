import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteBrandDialog from './deleteBrandDialog';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const BrandTable = ({  page, limit, search, setOpen, setBrandName, setAddUpdateOpen, brandId, setBrandId }) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const brandsList = useSelector((state) => state.marketPlace.brandsList);
    console.log(brandsList.brandList,"==========================================>");
    return (
        <TableContainer>
            <DeleteBrandDialog
                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}
                brandId={brandId}
                page={page}
                limit={limit}
                search={search}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Id</TableCell>
                        <TableCell align="center">Brand Name</TableCell>
                        <TableCell align="center">Created At</TableCell>
                        <TableCell align="center">Updated At</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                
                {brandsList.brandList != undefined &&
                    brandsList.brandList.map((row, index) => (
                               <TableRow>
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                   {row.id}
                                    </TableCell>
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                    {row.name}
                                    </TableCell>
                                    <TableCell align="center">{moment(row.createdAt).format('DD-MM-YYYY')}</TableCell>
                                    <TableCell align="center">{moment(row.updatedAt).format('DD-MM-YYYY')}</TableCell>
                                   
  <TableCell align="center" sx={{ padding: '0px' }}>
                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                            <Tooltip placement="top" title="Edit">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="Edit"
                                                    size="large"
                                                    onClick={() => {
                                                        setBrandName(row.name);
                                                        setBrandId(row.id);
                                                        setAddUpdateOpen(true);
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
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BrandTable;
