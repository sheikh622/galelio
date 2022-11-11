import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import CategoryTable from './component/categoryTable';
import {
    Button,
    Dialog,
    Divider,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Typography,
    Grid,
    MenuItem,
    Menu,
    Pagination,
    OutlinedInput,
    TextField,
    InputAdornment
} from '@mui/material';
import { IconSearch } from '@tabler/icons';

import { getAllBrands } from '../../../../redux/brand/actions';
import { getAllCategories } from '../../../../redux/categories/actions';
import DeleteCategoryDialog from './component/deleteCategoryDialog';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import AddUpdateCategory from './component/addUpdateCategory';

import MainCard from 'ui-component/cards/MainCard';
import HeadingCard from 'shared/Card/HeadingCard';

const Categories = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const categoryList = useSelector((state) => state.category.categoryList);
    const user = useSelector((state) => state.auth.user);
    console.log('redux user')
    console.log('redux user', user)
    const [brand, setBrand] = useState(0);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [searchCategories, setSearchCategories] = useState('');
    const [pageCategories, setPageCategories] = useState(1);
    const [limitCategories, setLimitCategories] = useState(10);
    const [addEditModal, setAddEditModal] = useState(false);
    const [categories, setCategories] = useState({
        name: '',
        profitPercentage: '',
        brandId: 0,
        categoryId: 0
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const handleBrandChange = (event) => {
        setBrand(event.target.value);
    };

    useEffect(() => {
       
        dispatch(
            getAllBrands({
                search: search,
                page: page,
                limit: limit
            })
        );
    }, [search, page, limit]);

    const brandsList = useSelector((state) => state.brand.brandsList);

    useEffect(() => {
        dispatch(
            getAllCategories({
                brandId: brand == 0 ? 0 : brand,

                search: searchCategories,
                page: pageCategories,
                limit: limitCategories
            })
        );
    }, [searchCategories, pageCategories, limitCategories, brand]);

    return (
        <>
            <AddUpdateCategory
                open={addEditModal}
                categories={categories}
                setCategories={setCategories}
                setOpen={setAddEditModal}
                page={page}
                limit={limit}
                search={search}
            />
            <DeleteCategoryDialog
                categories={categories}
                setCategories={setCategories}
                deleteOpen={deleteOpen}
                setDeleteOpen={setDeleteOpen}
                page={page}
                limit={limit}
                search={search}
            />
            <HeadingCard title="Category Management" />
            <MainCard
                title={
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={3}>
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
                                    setSearchCategories(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                className="selectField"
                                id="outlined-select-budget"
                                select
                                fullWidth
                                label="Select Brand"
                                value={ brand}
                                // defaultValue={brand}
                                onChange={handleBrandChange}
                            >
                                <MenuItem value="0">Select</MenuItem>
                                {brandsList != undefined &&
                                    brandsList?.brands?.map((option, index) => (
                                        <MenuItem key={index} value={option.id}>
                                            {option.name}
                                        </MenuItem>
                                    ))}
                            </TextField>
                        </Grid>
                        <Grid item xs={6} textAlign="end">
                            <Button
                                variant="contained"
                                size="large"
                                onClick={() => {
                                    setAddEditModal(true);
                                    setCategories({ name: '', profitPercentage: '', brandId: 0, categoryId: 0 });
                                }}
                            >
                                Add Category
                            </Button>
                        </Grid>
                    </Grid>
                }
                content={false}
            >
                <CategoryTable
                    open={addEditModal}
                    categories={categories}
                    setCategories={setCategories}
                    setOpen={setAddEditModal}
                    setDeleteOpen={setDeleteOpen}
                    mainBrandId={brand}
                    categoryList={categoryList}
                    page={pageCategories}
                    limit={limitCategories}
                    search={searchCategories}
                />
              
                <>
                    <Grid item xs={12} sx={{ p: 3 }}>
                        <Grid container justifyContent="space-between" spacing={gridSpacing}>
                            <Grid item>
                                <Pagination
                                    color="primary"
                                    showFirstButton
                                    showLastButton
                                    page={pageCategories}
                                    count={categoryList.totalPages}
                                    onChange={(event, newPage) => {
                                        setPageCategories(newPage);
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
                                    {limitCategories} Rows
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
                                            setLimitCategories(e.target.value);
                                            setPageCategories(1);
                                            handleCloseMenu();
                                        }}
                                    >
                                        {' '}
                                        10 Rows
                                    </MenuItem>
                                    <MenuItem
                                        value={25}
                                        onClick={(e) => {
                                            setLimitCategories(e.target.value);
                                            setPageCategories(1);
                                            handleCloseMenu();
                                        }}
                                    >
                                        {' '}
                                        25 Rows
                                    </MenuItem>
                                    <MenuItem
                                        value={50}
                                        onClick={(e) => {
                                            setLimitCategories(e.target.value);
                                            setPageCategories(1);
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

export default Categories;
