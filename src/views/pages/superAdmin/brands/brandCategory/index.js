import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import BrandCategoryTable from './component/brandCategoryTable';
import { Button, Typography, Grid, MenuItem, Menu, Pagination, OutlinedInput, InputAdornment } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { getAllBrandCategories, getAllCategoriesDropdown } from '../../../../../redux/brandCategory/actions';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MainCard from 'ui-component/cards/MainCard';
import AddUpdateBrandCategoryDialog from './component/addUpdateBrandCategory';

const BrandCategory = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const brandCategoriesList = useSelector((state) => state.brandCategoryReducer.brandCategoriesList);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [addUpdateOpen, setAddUpdateOpen] = useState(false);
    const [brandCategoryData, setBrandCategoryData] = useState({
        brand: location.state.brandData,
        brandId: location.state.brandData.id,
        categoryId: 0,
        profitPercentage: ''
    });
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(
            getAllBrandCategories({
                brandId: location.state.brandData.id,
                search: search,
                page: page,
                limit: limit
            })
        );
    }, [search, page, limit]);
  
    return (
        <>
            <AddUpdateBrandCategoryDialog
                open={addUpdateOpen}
                setOpen={setAddUpdateOpen}
                brandCategoryData={brandCategoryData}
                page={page}
                limit={limit}
                search={search}
            />
            <MainCard
                title={
                    <Typography variant="h3" sx={{ fontWeight: 500, color: 'cadetblue' }}>
                        Category Management of : {location.state.brandData.name}
                    </Typography>
                }
                secondary={
                    <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                            navigate('/brands');
                        }}
                    >
                        back
                    </Button>
                }
                content={false}
            ></MainCard>

            <MainCard
                title={
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <OutlinedInput
                                id="input-search-list-style1"
                                placeholder="Search"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <IconSearch stroke={1.5} size="1rem" />
                                    </InputAdornment>
                                }
                                size="small"
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    setAddUpdateOpen(true);
                                    setBrandCategoryData({
                                        brand: location.state.brandData,
                                        brandId: location.state.brandData.id,
                                        categoryId: 0,
                                        profitPercentage: ''
                                    });
                                    dispatch(getAllCategoriesDropdown({ brandId: location.state.brandData.id }));
                                }}
                            >
                                Add Brand Catgeory
                            </Button>
                        </Grid>
                    </Grid>
                }
                content={false}
            >
                <BrandCategoryTable
                    brandCategoriesList={brandCategoriesList}
                    search={search}
                    page={page}
                    limit={limit}
                    addUpdateOpen={addUpdateOpen}
                    setAddUpdateOpen={setAddUpdateOpen}
                    brandCategoryData={brandCategoryData}
                    setBrandCategoryData={setBrandCategoryData}
                />

                <>
                    <Grid item xs={12} sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item>
                                <Pagination
                                    color="primary"
                                    showFirstButton
                                    showLastButton
                                    page={page}
                                    count={brandCategoriesList.pages}
                                    onChange={(event, newPage) => {
                                        setPage(newPage);
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button
                                    size="large"
                                    sx={{ color: theme.palette.grey[900] }}
                                    color="secondary"
                                    endIcon={<ExpandMoreRoundedIcon />}
                                    onClick={handleClick}
                                >
                                    {limit} Rows
                                </Button>
                                <Menu
                                    id="menu-user-list-style1"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleCloseMenu}
                                    variant="selectedMenu"
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    transformOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                >
                                    <MenuItem
                                        value={10}
                                        onClick={(e) => {
                                            setLimit(e.target.value);
                                            setPage(1);
                                            handleCloseMenu();
                                        }}
                                    >
                                        {' '}
                                        10 Rows
                                    </MenuItem>
                                    <MenuItem
                                        value={25}
                                        onClick={(e) => {
                                            setLimit(e.target.value);
                                            setPage(1);
                                            handleCloseMenu();
                                        }}
                                    >
                                        {' '}
                                        25 Rows
                                    </MenuItem>
                                    <MenuItem
                                        value={50}
                                        onClick={(e) => {
                                            setLimit(e.target.value);
                                            setPage(1);
                                            handleCloseMenu();
                                        }}
                                    >
                                        {' '}
                                        50 Rows{' '}
                                    </MenuItem>
                                </Menu>
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            </MainCard>
        </>
    );
};

export default BrandCategory;
