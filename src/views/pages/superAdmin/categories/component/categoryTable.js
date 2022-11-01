import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, Grid, Divider, Typography, TableHead, TableRow, Tooltip } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


import moment from 'moment';
const CategoryTable = ({
    setOpen,
    open,
    categories,
    setCategories,
    categoryList,
    setDeleteOpen,
   
   



}) => {
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
                                        <TableRow onClick={() => {

                                        }}>

                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                {row.profitPercentage}%
                                            </TableCell>

                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                <Stack direction="row" justifyContent="center" alignItems="center">
                                                    <Tooltip placement="top" title="Edit">
                                                        <IconButton
                                                            color="primary"
                                                            aria-label="Edit"
                                                            size="large"
                                                            onClick={() => {
                                                               
                                                                setOpen(true);
                                                               
                                                                setCategories({   name: row.name,
                                                                profitPercentage: row.profitPercentage,
                                                                brandId:row.BrandId,
                                                                categoryId:row.id });
                                                               
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
                                                                setCategories({   
                                                                    brandId:row.BrandId,
                                                                    categoryId:row.id });
                                                                
                                                                setDeleteOpen(true); //open delete dialoge


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
            </TableContainer></>
    );
};

export default CategoryTable;
