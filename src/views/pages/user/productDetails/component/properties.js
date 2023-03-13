// material-ui
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Container, Grid, Typography, Tooltip } from '@mui/material';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
// project imports
import Edit from './editProperties';
import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Properties = ({ nft }) => {
    const theme = useTheme();
    const [propertiesOpen, setPropertiesOpen] = useState(false);
    const [metadata, setMetadata] = useState('');
    const [value, setValue] = useState('');
    const [editable, setEditable] = useState('');
    const [id, setId] = useState('');
    const buyerNft = useSelector((state) => state.nftReducer.nftBuyer);
    console.log('nft?.NFTMetaData?', nft?.NFTMetaData );
    const property = [
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        },
        {
            heading: 'Background',
            title: 'Red Light ',
            title2: '94% Have this trait'
        }
    ];

    return (
        <>
            <Edit open={propertiesOpen} id={id} setOpen={setPropertiesOpen} metadata={metadata} value={value} nft={nft} editable={editable}/>
            <Grid container-fluid spacing={gridSpacing} sx={{ margin: '15px' }}>
                <Grid item xs={12} lg={12} md={12}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography
                                color={theme.palette.mode === 'dark' ? '#FFFFFF' : 'black'}
                                className="productfigmastyl"
                                variant="h2"
                                mt={4}
                                component="div"
                                sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' },
                                 textTransform: 'capitalize' }}
                            >
                                Properties
                              
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {nft?.NFTMetaData?.length > 0 ? (
                    <>
                        <Grid item xs={12}>
                            <Grid container justifyContent="left" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                {nft?.NFTMetaData.map((item) => (
                                   <>
                                  
                                    <Grid item md={4} lg={2} xs={12} sm={6}>
                                        <SubCard
                                            className="property propertyShadow"
                                            sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                                        > 
                                            <Grid container justifyContent="center" spacing={2}>
                                                <Grid item xs={12}>
                                                    <Typography className="pbackground" variant="h3">
                                                        {item.fieldName}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography
                                                        color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                        className="centerText encapPropertry"
                                                        variant="h3"
                                                    >
                                                        {item?.fieldValue}{' '}
                                                    </Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Typography
                                                        // color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                        className="plight"
                                                        variant="body2"
                                                    >
                                                   94% Have this trait
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </SubCard>
                                    </Grid>
                                   {(buyerNft?.status == 'Redeem' &&  item?.isEditable == true &&
                                   <Tooltip
                                    placement="right"
                                    title="Edit Properties"
                                  
                                >
                                
                                    <ModeEditIcon sx={{  color: '#bde2f0 ', }}   
                                     onClick={() => {
                                        setPropertiesOpen(true);
                                        setMetadata(item.fieldName);
                                        setValue(item.fieldValue);
                                        setEditable(item.isEditable);
                                        setId(item.id);
                                    }}/>
                                </Tooltip>
                                )} 
                                    </>
                                ))}
                            </Grid>
                        </Grid>
                    </>
                ) : (
                    <>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography
                                    className="fontfamily"
                                    variant="h3"
                                    mt={2}
                                    component="div"
                                    sx={{
                                        textAlign: { xs: 'center', md: 'left', sm: 'center' },
                                        textTransform: 'capitalize',
                                        color: ' #9498AA'
                                    }}
                                >
                                    No Property Found.
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Grid>
        </>
    );
};

export default Properties;
