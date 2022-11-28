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
    TableRow,
    Tooltip
} from '@mui/material';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Avatar from 'ui-component/extended/Avatar';
import { useNavigate } from 'react-router-dom';
const BrandCategoryTable = ({ brandCategoriesList }) => {
    const navigate = useNavigate();

    return (
        <TableContainer>
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

                                        <TableCell align="center">
                                            <Tooltip placement="top" title="View NFT's">
                                                <IconButton
                                                    color="primary"
                                                    aria-label="detail"
                                                    size="large"
                                                    onClick={() => {
                                                        navigate('/nftManagement', {
                                                            state: {
                                                                data: row
                                                            }
                                                        });
                                                    }}
                                                >
                                                    <VisibilityOutlinedIcon sx={{ fontSize: '1.5rem' }} />
                                                </IconButton>
                                            </Tooltip>
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

export default BrandCategoryTable;
