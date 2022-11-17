import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import {
    IconButton,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Grid,
    Divider,
    Typography,
    TableHead,
    TableRow,
    Tooltip
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const CategoryTable = ({ setOpen, open, categories, setCategories, categoryList, setDeleteOpen }) => {

    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Profit</TableCell>

                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {categoryList.categories?.length > 0 ? (
                        <TableBody>
                            {categoryList.categories != undefined &&
                                categoryList.categories.map((row, index) => (
                                    <>
                                        <TableRow onClick={() => {}}>
                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                {row.profitPercentage}%
                                            </TableCell>

                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                <Stack direction="row" justifyContent="center" alignItems="center">
                                                    <Tooltip placement="top" title="View">
                                                        <IconButton
                                                            color="primary"
                                                            aria-label="View"
                                                            size="large"
                                                            onClick={() => {                                                            
                                                            }}
                                                        >
                                                            <VisibilityIcon sx={{ fontSize: '1.5rem' }}
                                                            onClick={()=>{
                                                                navigate(  `/${row.name}/${row.id}`, {replace: true})
                                                            }}
                                                            
                                                            />
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
                            <Grid item md={12}>
                                <Divider />
                            </Grid>
                            <Grid item>
                                <Typography style={{ padding: '20px', fontWeight: '800' }}> No Data Available</Typography>
                            </Grid>
                        </>
                    )}
                </Table>
                <Divider />
            </TableContainer>
        </>
    );
};

export default CategoryTable;
