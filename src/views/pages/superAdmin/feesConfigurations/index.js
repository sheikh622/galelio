// material-ui
import { Grid, TextField, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// assets

// ==============================|| TEXTFIELD PAGE ||============================== //

const Configuration = () => (
    <MainCard title="Setting marketplace fees">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12} md={6}>
                <SubCard title="Enter Marketplace Fee">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="filled-basic"
                                type="number"
                                InputProps={{
                                    inputProps: { min: 0 }
                                }}
                                label="Marketplace Fee"
                                variant="standard"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
            <Grid item xs={12} md={6}>
                <SubCard title="Receiver Address">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField fullWidth id="filled" label="Receiver Address" variant="standard" />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained">Submit</Button>
                        </Grid>
                    </Grid>
                </SubCard>
            </Grid>
        </Grid>
    </MainCard>
);

export default Configuration;
