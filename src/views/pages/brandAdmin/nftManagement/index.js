import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import { Button, Grid, Typography, Pagination, Menu, MenuItem, Box } from '@mui/material';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import MainCard from 'ui-component/cards/MainCard';
import AddNft from './component/addNft';
import { getAllNft } from '../../../../redux/nftManagement/actions';
import NftCard from './component/nftCard';
const NftManagement = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const nftList = useSelector((state) => state.nftReducer.nftList);
    console.log('nftList', nftList);
    const [addNftOpen, setAddNftOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    useEffect(() => {
        dispatch(
            getAllNft({
                categoryId: location.state.data.CategoryId,
                search: search,
                page: page,
                limit: limit
            })
        );
    }, [, search, page, limit]);

    return (
        <>
            <AddNft open={addNftOpen} setOpen={setAddNftOpen} data={location.state.data} />
            <MainCard
                className="yellow"
                style={{ marginBottom: '15px' }}
                title={
                    <Grid container spacing={gridSpacing}>
                        <Grid item xs={6}>
                            <Typography variant="h3" sx={{ fontWeight: 500, color: 'cadetblue' }}>
                                NFT Management
                            </Typography>
                        </Grid>
                        <Grid item xs={6} style={{ textAlign: 'end' }}>
                            <Button
                                size="small"
                                sx={{
                                    marginRight: '10px',
                                    ':hover': {
                                        boxShadow: 'none'
                                    }
                                }}
                                variant="contained"
                                onClick={() => {
                                    setAddNftOpen(true);
                                }}
                            >
                                Add NFT
                            </Button>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => {
                                    navigate('/categories');
                                }}
                            >
                                back
                            </Button>
                        </Grid>
                    </Grid>
                }
                content={false}
            ></MainCard>
            <Grid container>
                {nftList && nftList.nfts && nftList.nfts.rows && nftList.nfts.rows.length > 0 ? (
                    <>
                        {' '}
                        <Grid container spacing={gridSpacing} mb={4} pl={2}>
                            {nftList.nfts.rows &&
                                nftList.nfts.rows.map((nft, index) => {
                                    return (
                                        <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                                            <NftCard
                                                nftData={nft}
                                                categoryId={location.state.data.CategoryId}
                                                search={search}
                                                page={page}
                                                limit={limit}
                                            />
                                        </Grid>
                                    );
                                })}
                        </Grid>
                        <Grid item xs={12} sx={{ p: 3 }}>
                            <Grid container justifyContent="space-between" spacing={gridSpacing}>
                                <Grid item>
                                    <Pagination
                                        page={page}
                                        color="primary"
                                        showFirstButton
                                        showLastButton
                                        count={nftList && nftList.pages}
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
                                        onClose={handleClose}
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
                                            value={12}
                                            onClick={(e) => {
                                                setLimit(e.target.value);
                                                setPage(1);
                                                handleClose();
                                            }}
                                        >
                                            {' '}
                                            12 Rows
                                        </MenuItem>
                                        <MenuItem
                                            value={24}
                                            onClick={(e) => {
                                                setLimit(e.target.value);
                                                setPage(1);
                                                handleClose();
                                            }}
                                        >
                                            {' '}
                                            24 Rows
                                        </MenuItem>
                                        <MenuItem
                                            value={36}
                                            onClick={(e) => {
                                                setLimit(e.target.value);
                                                setPage(1);
                                                handleClose();
                                            }}
                                        >
                                            {' '}
                                            36 Rows{' '}
                                        </MenuItem>
                                    </Menu>
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid item>
                            <Typography style={{ padding: '20px' }}> No Data Available</Typography>
                        </Grid>
                    </>
                )}
            </Grid>
        </>
    );
};

export default NftManagement;
