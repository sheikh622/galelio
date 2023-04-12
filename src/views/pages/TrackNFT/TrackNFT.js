import { Box, Grid, Stack } from '@mui/material';

import '@fontsource/public-sans';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';

import TextField from '@material-ui/core/TextField';
import galileoLogo from '../../../assets/images/galileo-white.png';
import { padding } from '@mui/system';
import music from '../../../assets/vedio.mp4';
import { useNavigate } from 'react-router-dom';
import FactoryAbi from 'contractAbi/Factory.json';
import FactoryAddress from 'contractAbi/Factory-address.json';
import { ethers, utils } from 'ethers';
const axios = require('axios');

let graphQLURL = 'https://api.studio.thegraph.com/query/44351/factory-graph2/14';

const TrackNFT = () => {
    const [serialNo, setSerialNo] = useState("")
    const navigate = useNavigate();

    const searchSerial = async () => {

        console.log('serialNo',serialNo);
        
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const factoryAddr = new ethers.Contract(FactoryAddress.address, FactoryAbi.abi, signer);
        console.log('factoryAddr', factoryAddr);

        // let res = await (
        //     await factoryAddr.serials("GALGNS1")
        // )?.wait();

        let res = await factoryAddr.serials(serialNo);

        console.log('res',res);

        let address = res[0].toLowerCase()
        address = `"${address}"`
        let tokenId = parseInt(res?._tokenId?._hex)

        // console.log('res?._tokenId?',res);
        tokenId=  tokenId.toString()

        tokenId= `"${tokenId}"`

        // let address = `"0x4600b6a0f068ae1283ed68792ff3f0a085b3f0ef"`;
        // let tokenId = `"1"`;

        console.log('address', address);
        console.log('tokenId', tokenId);
       
        // console.log('resTokenId', resTokenId);

        const main = async () => {
            try {
               const result= await axios.post(graphQLURL, {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',     
                        'X-Requested-With': 'XMLHttpRequest'
                    },
                    query: `{
                          galileoProtocolDeployeds(first: 5) {
                              id
                              _mintingContract
                              blockNumber
                              blockTimestamp
                            }
                            roleAdminChangeds(first: 5) {
                              id
                              role
                              previousAdminRole
                              newAdminRole
                            }
                             handleMints(where: {collections: ${address}, _tokenId: ${tokenId}}, orderBy: blockTimestamp,){ 
                              id 
                              _minter
                              _tokenId 
                              blockTimestamp 
                            }
                            handleUpdateUris(where: {collections: ${address}, _tokenId: ${tokenId}}, orderBy: blockTimestamp,){ 
                              id 
                              _tokenId
                              _tokenURI
                              _updator
                              blockTimestamp 
                            }
                          }
                          `
                });
                console.log('Query result: \n', result.data);
            } catch (err) {
                console.log(err);
            }
        };

        main();
    };

    return (
        <Stack position={'relative'} sx={{ height: '100vh', overflow: 'hidden' }}>
            {/* <Stack className="mainTracking main"></Stack> */}

            <video src={music} loop autoPlay="true" />
            <Grid item md={12} xs={12} position={'absolute'} sx={{ width: '100%' }}>
                <Grid container-fluid>
                    <Grid sx={{ textAlign: 'center', marginTop: '30px' }}>
                        <img className="mainLogo" src={galileoLogo} alt="logo" />
                    </Grid>
                    <Grid
                        sx={{
                            marginTop: { xs: '100px', md: '200px' },
                            marginLeft: { xs: '20px', md: '0px' },
                            marginRight: { xs: '20px', md: 'none' }
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                fontFamily: 'Public Sans !important',
                                fontStyle: 'normal !important',
                                fontWeight: '700',
                                textAlign: 'center',
                                fontSize: { xs: '12px', sm: '30px', md: '30px', lg: '30px' },
                                lineHeight: { xs: '1', sm: '1', md: '33px', lg: '33px' },

                                color: 'white'
                            }}
                        >
                            Track your NFT history{' '}
                        </Typography>
                        <Box className="trackBox">
                            <input className="trackInput" placeholder="GAL-BMW-1234" 

                            onChange={(e)=>{
                                setSerialNo(e.target.value)
                            }}
                            
                            />
                            <Button
                                sx={{ alignSelf: 'center !important' }}
                                className="create"
                                size="small"
                                variant="contained"
                                color="secondary"
                                onClick={() => {
                                    // navigate('/tracking');

                                    searchSerial();
                                }}
                            >
                                Track
                            </Button>
                        </Box>
                        <Box>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontFamily: 'Public Sans !important',
                                    fontStyle: 'normal !important',
                                    fontWeight: '400',
                                    textAlign: 'center',
                                    fontSize: { xs: '12px', sm: '15px', md: '15px', lg: '15px' },
                                    // lineHeight: { xs: '1', sm: '1', md: '33px', lg: '33px' },

                                    color: 'white'
                                }}
                            >
                                By initiating authentication, you declare that you accept our{' '}
                                <a href="" style={{ color: '#ffff' }}>
                                    Legal Notice
                                </a>{' '}
                                and{' '}
                                <a href="" style={{ color: '#ffff' }}>
                                    Privacy Policy.
                                </a>
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default TrackNFT;
