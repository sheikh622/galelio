import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Grid, Pagination, Menu, MenuItem, Button } from '@mui/material';
import { useTheme } from '@mui/styles';
import Tabs from './component/tabs';
import NFTS from './component/nfts';
import { getAllMarketplaceCategories, getAllMarketplaceNftsByCategory } from 'redux/marketplace/actions';
const Marketplace = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const marketplaceCategories = useSelector((state) => state.marketplaceReducer.marketplaceCategories);
    const marketplaceNfts = useSelector((state) => state.marketplaceReducer.marketplaceNfts);
    console.log('marketplaceNfts', marketplaceNfts);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [category, setCategory] = useState(0);
    const handleCategoryChange = (event, newValue) => {
        setCategory(newValue);
    };
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    useEffect(() => {
        dispatch(
            getAllMarketplaceNftsByCategory({
                search: search,
                page: page,
                limit: limit,
                category: category
            })
        );
    }, [search, page, limit, category]);
    useEffect(() => {
        dispatch(getAllMarketplaceCategories());
    }, []);

    useEffect(() => {
        console.log('category', category);
    }, [category]);
    return (
        <Grid
            style={{
                background: theme.palette.mode === 'dark' ? 'black' : '#f3f3f3',
                color: theme.palette.mode === 'dark' ? 'white' : '#404040'
            }}
        >
            <Grid container-fluid sx={{ display: { xs: 'block', sm: 'block', md: 'flex' }, marginBottom: '40px' }}>
                <Grid item md={12} xs={12} sx={{ mt: 2, paddingLeft: 1, paddingRight: 2 }}>
                    <Grid container>
                        <h1 style={{ paddingLeft: '0.5%' }}>Marketplace</h1>

                        <Grid item md={12} xs={12}>
                            <Tabs
                                marketplaceCategories={marketplaceCategories}
                                category={category}
                                handleCategoryChange={handleCategoryChange}
                            />
                        </Grid>
                        <Grid item md={12} xs={12}>
                            <NFTS marketplaceNfts={marketplaceNfts} />
                        </Grid>
                        <Grid item xs={12} sx={{ p: 3 }}>
                            <Grid container justifyContent="space-between" spacing={gridSpacing}>
                                <Grid item>
                                    <Pagination
                                        color="primary"
                                        showFirstButton
                                        showLastButton
                                        page={page}
                                        count={marketplaceNfts.pages}
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
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Marketplace;
