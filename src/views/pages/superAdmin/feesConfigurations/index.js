// material-ui
import { Grid, TextField, Button , CircularProgress } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';
import SubCard from 'ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NFTAbi from 'contractAbi/NFT.json';
import MarketplaceAbi from 'contractAbi/Marketplace.json';
import MarketplaceAddress from 'contractAbi/Marketplace-address.json';
import Erc20 from 'contractAbi/Erc20.json';
import { ethers, utils } from 'ethers';
import { useState } from 'react';

// ==============================|| TEXTFIELD PAGE ||============================== //

const Configuration = () => {
    const [loader, setLoader] = useState(false);
    const [loaderAddress, setLoaderAddress] = useState(false);
    const [marketFee, setMarketFee] = useState('');
    const [recieverAddress, setRecieverAddress] = useState('');

    const marketplaceFeeFunc = async (e) => {
        e.preventDefault();
        setLoader(true);
        console.log('marketFee', marketFee);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const nft = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

        await (await nft.setFee(marketFee)).wait();
        setMarketFee('');
        toast.success('successfully Submit');
        setLoader(false);
    };

    const recieverAddressFunc = async (e) => {
        e.preventDefault();
        setLoaderAddress(true)
        console.log('recieverAddress', recieverAddress);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        const nft = new ethers.Contract(MarketplaceAddress.address, MarketplaceAbi.abi, signer);

        await (await nft.setAddress(recieverAddress)).wait();

        setRecieverAddress('');
        toast.success('successfully Submit');
        setLoaderAddress(false)
    };

    return (
        <>
            <MainCard title="Setting marketplace fees">
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Enter Marketplace Fee">
                            <form onSubmit={marketplaceFeeFunc}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            value={marketFee}
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
                                    {loader==false?  
                                         <Grid item xs={12}>
                                    <Button type="submit" variant="contained">
                                        Submit
                                    </Button>
                                </Grid>
                            :
                            <Grid item xs={12}>
                            <Button>
                               <CircularProgress/>
                            </Button>
                        </Grid>
                        }
                                  
                                   
                                </Grid>
                            </form>
                        </SubCard>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <SubCard title="Receiver Address">
                            <form onSubmit={recieverAddressFunc}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <TextField
                                            value={recieverAddress}
                                            fullWidth
                                            id="filled"
                                            label="Receiver Address"
                                            variant="standard"
                                            onChange={(e) => {
                                                setRecieverAddress(e.target.value);
                                            }}
                                        />
                                    </Grid>
                                    {loaderAddress==false?  
                                        <Grid item xs={12}>
                                   <Button type="submit" variant="contained">
                                       Submit
                                   </Button>
                               </Grid>
                           :
                           <Grid item xs={12}>
                           <Button>
                              <CircularProgress/>
                           </Button>
                       </Grid>
                       }
                                </Grid>
                            </form>
                        </SubCard>
                    </Grid>
                </Grid>
            </MainCard>
        </>
    );
};

export default Configuration;
