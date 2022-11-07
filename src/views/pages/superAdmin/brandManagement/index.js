import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import AdminTable from './component/managementTable';
import { Button, Typography, Grid, MenuItem, Menu, Pagination, OutlinedInput, InputAdornment, Divider  } from '@mui/material';
import { IconSearch } from '@tabler/icons';
import { getAllBrandAdmin } from '../../../../redux/brandManagement/actions';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { getAllBrands } from '../../../../redux/brand/actions';
import MainCard from 'ui-component/cards/MainCard';
import HeadingCard from 'shared/Card/HeadingCard';
const Brands = () => {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const brandAdminList = useSelector((state) => state.brandadminReducer.brandadminsList);
   
   
    
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [brandId, setBrandId] = useState();
    const [brandName, setBrandName] = useState('');
    const [addEditModal, setAddEditModal] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleCloseMenu = () => {
        setAnchorEl(null);
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
            getAllBrandAdmin({
                search:search,
                page: page,
                limit: limit
            })
        );
    }, [search, page, limit]);
    return (
        <>
        <HeadingCard title="Brand Management" />
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
                                    setAddEditModal(true);
                                   

                                   
                                }}
                            >
                                Add  Brand Admin
                            </Button>
                        </Grid>
                    </Grid>
                }
                content={false}
            >
            <AdminTable
            brandsList={brandsList}                        
            search={search}
            page={page}
            limit={limit}
            setOpen={setAddEditModal} open={addEditModal}
          
          
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
                                        count={brandAdminList.pages}
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

export default Brands;
