import { useState } from 'react';
import { useTheme } from '@mui/material/styles';

import { useNavigate } from 'react-router-dom';
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
    TableRow,
    Tooltip,
    Stack
} from '@mui/material';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddUpdateBrandCategoryDialog from './addUpdateBrandCategory';
import DeleteBrandCategoryDialog from './deleteBrandCategoryDialog';
import Avatar from 'ui-component/extended/Avatar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
const BrandCategoryTable = ({
    brandCategoriesList,
    search,
    page,
    limit,
    addUpdateOpen,
    setAddUpdateOpen,
    brandCategoryData,
    setBrandCategoryData
}) => {
    const navigate = useNavigate();
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [detailId, setDetailId] = useState();
    const theme = useTheme();

    const openDetails = (id) => {
        if (detailId === id) {
            setDetailId(null);
        } else {
            setDetailId(id);
        }
    };

    return (
        <TableContainer>
            <AddUpdateBrandCategoryDialog
                open={addUpdateOpen}
                setOpen={setAddUpdateOpen}
                brandCategoryData={brandCategoryData}
                page={page}
                limit={limit}
                search={search}
            />

            <DeleteBrandCategoryDialog
                open={deleteOpen}
                setOpen={setDeleteOpen}
                page={page}
                limit={limit}
                search={search}
                brandCategoryData={brandCategoryData}
            />

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Category</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Profit percentage</TableCell>
                        <TableCell align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                {brandCategoriesList.brandCategories != undefined && brandCategoriesList.count > 0 ? (
                    <TableBody sx={{ padding: '10px' }}>
                        {brandCategoriesList.brandCategories != undefined &&
                            brandCategoriesList.brandCategories.map((row, index) => (
                                <>
                                    <TableRow>
                                        <TableCell align="center" justifyContent="center" alignItems="center">
                                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                                <Grid item>
                                                    <Avatar alt="Category Image" src={row.Category.image} />
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="subtitle1" component="div">
                                                        {row.Category.name}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </TableCell>

                                        <TableCell align="center">{row.Category.description}</TableCell>
                                        <TableCell align="center">{row.profitPercentage}</TableCell>

                                        <TableCell align="center" sx={{ padding: '0px' }}>
                                            <Stack direction="row" justifyContent="center" alignItems="center">
                                                <Tooltip placement="top" title=" View NFT'S">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="detail"
                                                        size="medium"
                                                        onClick={() => {
                                                            navigate('/nftManagement', {
                                                                state: {
                                                                    brandData: row
                                                                }
                                                            });
                                                        }}
                                                    >
                                                        <RemoveRedEyeIcon sx={{ fontSize: '1.5rem' }} />
                                                    </IconButton>
                                                </Tooltip>

                                                <Tooltip placement="top" title="Edit">
                                                    <IconButton
                                                        color="primary"
                                                        aria-label="Edit"
                                                        size="large"
                                                        onClick={() => {
                                                            setAddUpdateOpen(true);
                                                            setBrandCategoryData({
                                                                categoryId: row.CategoryId,
                                                                brandId: row.BrandId,
                                                                profitPercentage: row.profitPercentage
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
                                                            setBrandCategoryData({
                                                                categoryId: row.CategoryId,
                                                                brandId: row.BrandId
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
                        <Grid item md={12}>
                            <Divider />
                        </Grid>
                        <Grid item>
                            <Typography style={{ padding: '20px', fontWeight: '800' }}> No Dataa Available</Typography>
                        </Grid>
                    </>
                )}
            </Table>
        </TableContainer>
    );
};

export default BrandCategoryTable;
