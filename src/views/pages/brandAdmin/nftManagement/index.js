import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { gridSpacing } from 'store/constant';
import { Button, Grid, Typography } from '@mui/material';
import MainCard from 'ui-component/cards/MainCard';
import AddNft from './component/addNft';

const NftManagement = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const [addNftOpen, setAddNftOpen] = useState(false);
    console.log(' location.state', location.state.data);






    
    return (
        <>
            <AddNft open={addNftOpen} setOpen={setAddNftOpen} data={location.state.data}/>
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
        </>
    );
};

export default NftManagement;
