import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteCategoryDialog from './deleteCategoryDialog';
import moment from 'moment';
const CategoryTable = ({
    categoryList,
    mainBrandId,
    page,
    limit,
    search,
    categoryData,
    setCategoryData,
    setAddUpdateOpen,
    categoryId,
    setCategoryId
}) => {
    const theme = useTheme();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [deleteCategory, setDeleteCategory] = useState();

    return (
        <TableContainer>
            <DeleteCategoryDialog
            mainBrandId={mainBrandId}
            deleteId={deleteId}
            setCategoryData={setCategoryData.brandId}
                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}
                categoryId={categoryId}
                categoryData={categoryData}
                page={page}
                limit={limit}
                search={search}
            />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                       
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categoryList.categoryList != undefined &&
                        
                      
                        categoryList.categoryList.map((row, index) => (
                            <>
                                <TableRow   onClick={() => {
                                        console.log('nfts', row);
                                    }}>
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                        {row.label}
                                    </TableCell>
                                   
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                            <Tooltip placement="top" title="Edit">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="Edit"
                                                    size="large"
                                                    onClick={() => {
                                                        console.log('row', row);
                                                        setCategoryData({
                                                            name: row.name,
                                                            brandId: row.BrandId
                                                        });
                                                        setCategoryId(row.value);
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
                                                        setDeleteId(row.value)
                                                        setDeleteOpen(true);
                                                        setCategoryId(row.id);
                                                        // setCategoryData({
                                                        //     name: row.name,
                                                        //     brandId: row.BrandId
                                                        // });
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
            </Table>
        </TableContainer>
    );
};

export default CategoryTable;
