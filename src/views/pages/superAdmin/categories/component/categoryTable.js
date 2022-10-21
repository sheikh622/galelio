import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteCategoryDialog from './deleteCategoryDialog';
import AddUpdateCategory from '../../categories/component/AddUpdateCategory';
import moment from 'moment';
const CategoryTable = ({
    categoryList,
    mainBrandId,
    page,
    limit,
    search,
    open, setOpen,



}) => {
    const theme = useTheme();
    const [update, setUpdate] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(0);
    const [name, setName] = useState();
    const [profitPercentage, setProfitPercentage] = useState();
console.log(mainBrandId, "brand id================>")

    return (
        <><AddUpdateCategory 
        profitPercentage={profitPercentage}
        mainBrandId={mainBrandId}
        open={open}
        deleteId={deleteId}
        name={name}
        setOpen={setOpen}
        update={update}
        setUpdate={setUpdate}
        categoryList={categoryList}
        page={page}
        limit={limit}
        search={search}
        /><TableContainer>
            {/* delete */}
            <DeleteCategoryDialog
                mainBrandId={mainBrandId}
                deleteId={deleteId}

                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}

                page={page}
                limit={limit}
                search={search} />
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Profit</TableCell>

                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {categoryList.categoryList != undefined &&


                        categoryList.categoryList.map((row, index) => (
                            <>
                                <TableRow onClick={() => {
                                   
                                }}>
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                        {row.label}
                                    </TableCell>
                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                        {row.profit}
                                    </TableCell>

                                    <TableCell align="center" sx={{ padding: '0px' }}>
                                        <Stack direction="row" justifyContent="center" alignItems="center">
                                            <Tooltip placement="top" title="Edit">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="Edit"
                                                    size="large"
                                                    onClick={() => {
                                                        setName(row.label);
                                                        setProfitPercentage(row.profit);
                                                        setOpen(true);
                                                        setUpdate(true);
                                                        setDeleteId(row.value);
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
                                                        setDeleteId(row.value); //categoryid
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
            </Table>
        </TableContainer></>
    );
};

export default CategoryTable;
