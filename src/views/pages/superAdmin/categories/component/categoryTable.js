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
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import DeleteCategoryDialog from './deleteCategoryDialog';
import Avatar from 'ui-component/extended/Avatar';
import moment from 'moment';

const CategoryTable = ({ categoryList, page, limit, search, setAddUpdateOpen, setCategoryData }) => {
    const theme = useTheme();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [categoryId, setCategoryId] = useState();
    return (
        <>
            <DeleteCategoryDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
                categoryId={categoryId}
                page={page}
                limit={limit}
                search={search}
            />
            <DeleteCategoryDialog />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Description</TableCell>
                            <TableCell align="center">Created At</TableCell>
                            <TableCell align="center">Updated At</TableCell>
                            <TableCell align="center">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    {categoryList.categories?.length > 0 ? (
                        <TableBody>
                            {categoryList.categories != undefined &&
                                categoryList.categories.map((row, index) => (
                                    <>
                                        <TableRow>
                                            <TableCell align="center" justifyContent="center" alignItems="center">
                                                <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                    <Grid item>
                                                        <Avatar alt="Category Image" src={row.image} />
                                                    </Grid>
                                                    <Grid item>
                                                        <Typography variant="subtitle1" component="div">
                                                            {row.name}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </TableCell>

                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                {row.description}
                                            </TableCell>
                                            <TableCell align="center">{moment(row.createdAt).format('DD-MMM-YYYY')}</TableCell>
                                            <TableCell align="center">{moment(row.updatedAt).format('DD-MMM-YYYY')}</TableCell>
                                            <TableCell align="center" sx={{ padding: '0px' }}>
                                                <Stack direction="row" justifyContent="center" alignItems="center">
                                                    <Tooltip placement="top" title="Edit">
                                                        <IconButton
                                                            color="primary"
                                                            aria-label="Edit"
                                                            size="large"
                                                            onClick={() => {
                                                                setAddUpdateOpen(true);
                                                                setCategoryData({
                                                                    id: row.id,
                                                                    name: row.name,
                                                                    description: row.description,
                                                                    image: null
                                                                });
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
                                                                setCategoryId(row.id);
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
            </TableContainer>
        </>
    );
};

export default CategoryTable;
