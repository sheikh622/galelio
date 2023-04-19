// material-ui
import { Grid, TextField, Button } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

import NFTAbi from 'contractAbi/NFT.json';
import MarketplaceAbi from 'contractAbi/Marketplace.json';
import MarketplaceAddress from 'contractAbi/Marketplace-address.json';
import Erc20 from 'contractAbi/Erc20.json';
import { ethers, utils } from 'ethers';
import { useState } from 'react';

// ==============================|| TEXTFIELD PAGE ||============================== //

const Configuration = () => {
    const [marketFee, setMarketFee] = useState(0);
    const [recieverAddress, setRecieverAddress] = useState("");

    const marketplaceFeeFunc = async () => {
        console.log('marketFee', marketFee);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const nft = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
        
        await (await nft.setFee(marketFee)).wait();
    };

    const recieverAddressFunc = async () => {
        console.log('recieverAddress', recieverAddress);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const nft = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);
        
        await (await nft.setAddress(recieverAddress)).wait();
    };

    return (
        <>
            <MainCard title="Setting marketplace fees">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Enter Marketplace Fee">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField
                                        onChange={(e) => {
                                            console.log('e.target.event', e.target.value);
                                            setMarketFee(e.target.value);
                                        }}
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
                                    <Button
                                        variant="contained"
                                        onClick={() => {
                                            marketplaceFeeFunc();
                                        }}
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Receiver Address">
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <TextField fullWidth id="filled" label="Receiver Address" variant="standard" 
                                    onChange={(e)=>{
                                        setRecieverAddress(e.target.value)
                                    }}  
                                    
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button variant="contained"
                                    onClick={()=>{
                                        recieverAddressFunc()
                                    }}
                                    >Submit</Button>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default Configuration;
