import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SNACKBAR_OPEN } from 'store/actions';
import { useTheme } from '@mui/material/styles';
import { Typography, Grid } from '@mui/material';
import CryptoConvert from 'crypto-convert';
import { useSelector, useDispatch } from 'react-redux';
import { ethers, utils } from 'ethers';
import { Button } from '@mui/material';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { setWallet } from '../../../../redux/auth/actions';

const convert = new CryptoConvert(/*options?*/);

const Balance = () => {
    const theme = useTheme();

    const user = useSelector((state) => state.auth.user);
    console.log('user.walletAddress', user?.walletAddress);
    const dispatch = useDispatch();
    const [walletAddress, setWalletAddress] = useState();
    // const [bvalue, setBvalue] = useState(0);
    const [balanceValue, setbalanceValue] = useState();
    const [maticValue, setMaticValue] = useState();

    const handleConnect = async () => {
        const response = await window?.ethereum?.request({ method: 'eth_requestAccounts' });
        console.log('response', response);
        const provider = ethers.getDefaultProvider('https://polygon-mumbai.g.alchemy.com/v2/Wk2k1fN6Gv2KG4f7474ABGxpmhQrZKFM');
        const balance = await provider?.getBalance(response[0]);
        console.log(balance);
        const value = ethers.utils?.formatEther(balance);
        console.log(value, 'value');
        setMaticValue(value);
        // let val;
        // const arrow = async ()=>{

        await convert.ready(); //Wait for the initial cache to load

        const bvalue = convert.MATIC.USD(value);
        console.log(bvalue, 'val===');

        // }
        setbalanceValue(bvalue);
        // console.log(bvalue,'val===???????????????????')
        if (response) {
            if (!window.ethereum) {
                console.log('No crypto wallet found. Please install it.');
            } else if (utils?.getAddress(response[0]) !== user.walletAddress) {
                console.log('Please connect your registered Wallet Address');
                setWalletAddress();
            } else {
                const address = utils?.getAddress(response[0]);
                setWalletAddress(address);
            }
        } else {
            console.log('No crypto wallet found. Please install it.');
            // toast.error('No crypto wallet found. Please install it.');
        }
    };

    useEffect(() => {
        // setbalanceValue(value)
        dispatch(setWallet(walletAddress));
        handleConnect();
    }, [walletAddress]);

    if (window.ethereum) {
        window.ethereum.on('accountsChanged', function (accounts) {
            // Time to reload your interface with accounts[0]!
            // setReload(true)
            handleConnect();
        });
    }

    console.log('balanceValue', balanceValue);

    return (
        <>
            <Grid item xs={12}>
                <Typography
                    className="usd"
                    variant="h1"
                    component="h2"
                    sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}
                    onClick={() => {
                        handleConnect();
                        // handleConnect().arrow();
                    }}
                >
                    {maticValue ? maticValue.slice(0, 5) : 0} MATIC
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    className="balance"
                    variant="body2"
                    sx={{ textAlign: 'center', color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#6d6e72'}}
                >
                    Total Balance
                </Typography>
            </Grid>

            <Grid item xs={12}>
                <Typography
                    className="usd"
                    variant="h1"
                    component="h2"
                    sx={{ textAlign: 'center', color: theme.palette.mode === 'dark' ? '#CDCDCD' : '#6d6e72' }}
                    onClick={() => {
                        handleConnect();
                        // handleConnect().arrow();
                    }}
                >
                    {balanceValue ? balanceValue : 0} USD
                </Typography>
            </Grid>
        </>
    );
};

export default Balance;
