// material-ui
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import editicon from 'assets/images/edit.png';
import { Container, Grid, Typography, Tooltip } from '@mui/material';
// import ModeEditIcon from '@mui/icons-material/ModeEdit';
import ModeEditIcon from '@mui/icons-material/BorderColorSharp';
// project imports
import Edit from './editProperties';
import SubCard from 'ui-component/cards/SubCard';

import { gridSpacing } from 'store/constant';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const Properties = ({ nftList }) => {
    // console.log(nftList?.nft?.NFTMetaData, 'properties==========================================>');
    const theme = useTheme();
    const [propertiesOpen, setPropertiesOpen] = useState(false);
    const [metadata, setMetadata] = useState('');
    const [value, setValue] = useState('');
    const [editable, setEditable] = useState('');
    const [proofRequired, setProofRequired] = useState('');
    const [id, setId] = useState('');
    const buyerNft = useSelector((state) => state.nftReducer.nftBuyer);
    // console.log('nft?.NFTMetaData?', nft?.NFTMetaData );
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
            <Edit
                nftList={nftList}
                open={propertiesOpen}
                id={id}
                setOpen={setPropertiesOpen}
                metadata={metadata}
                value={value}
                editable={editable}
                proofRequired={proofRequired}
            />
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
                                sx={{ textAlign: { xs: 'center', md: 'left', sm: 'center' }, textTransform: 'capitalize' }}
                            >
                                Properties
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                {nftList?.nft?.NFTMetaData?.length > 0 ? (
                    <>
                        <Grid item xs={12}>
                            <Grid container justifyContent="left" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                                {nftList?.nft?.NFTMetaData?.map((item) => (
                                    <>
                                        {item.fieldName == 'Serial ID' && (
                                            <Grid item md={2} lg={2} xs={6} sm={2}>
                                                <SubCard
                                                    className="property propertyShadow postion-property"
                                                    sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                                                >
                                                    <Grid container justifyContent="center" spacing={2} className="postion-fields ">
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="right" title={item.fieldName}>
                                                                <Typography className="pbackground encap-fieldName" variant="h3">
                                                                    {item?.fieldName.slice(0, 12)}
                                                                </Typography>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="bottom" title={item?.fieldValue}>
                                                                <Typography
                                                                    color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                                    className="centerText encapPropertry"
                                                                    variant="h3"
                                                                >
                                                                    {item?.fieldValue.slice(0, 12)}{' '}
                                                                </Typography>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography
                                                                // color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                                className="plight"
                                                                variant="body2"
                                                            >
                                                                {item?.Proofs[0]?.proof ? (
                                                                    <span
                                                                        onClick={() => {
                                                                            // useNavigate(option.fieldValue)
                                                                            window.open(item?.Proofs[0]?.proof, '_blank');
                                                                        }}
                                                                        style={{
                                                                            cursor: 'pointer',
                                                                            color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'darkgray',
                                                                            textDecoration: 'underline'
                                                                        }}
                                                                    >
                                                                        Proof of metadata
                                                                    </span>
                                                                ) : (
                                                                    <span style={{ color: 'transparent' }}>no proof</span>
                                                                )}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>

                                                    {buyerNft?.status == 'Redeem' && item?.isEditable == true && (
                                                        <Tooltip placement="right" title="Edit Properties" className="postion-icon">
                                                            <ModeEditIcon
                                                                sx={{
                                                                    color: theme.palette.mode === 'dark' ? '#bde2f0' : '#000',
                                                                    float: 'right'
                                                                }}
                                                                onClick={() => {
                                                                    setPropertiesOpen(true);
                                                                    setMetadata(item?.fieldName);
                                                                    setValue(item?.fieldValue);
                                                                    setEditable(item?.isEditable);
                                                                    setProofRequired(item?.proofRequired);
                                                                    setId(item?.id);
                                                                }}
                                                            />
                                                        </Tooltip>
                                                    )}
                                                </SubCard>
                                            </Grid>
                                        )}
                                     
                                    </>
                                ))}
                                {nftList?.nft?.NFTMetaData?.map((item) => (
                                    <>
                                        {item.fieldName != 'Serial ID' && (
                                            <Grid item md={2} lg={2} xs={6} sm={2}>
                                                <SubCard
                                                    className="property propertyShadow postion-property"
                                                    sx={{ background: theme.palette.mode === 'dark' ? '#181C1F' : '#fff' }}
                                                >
                                                    <Grid container justifyContent="center" spacing={2} className="postion-fields ">
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="right" title={item.fieldName}>
                                                                <Typography className="pbackground encap-fieldName" variant="h3">
                                                                    {item?.fieldName.slice(0, 12)}
                                                                </Typography>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Tooltip placement="bottom" title={item?.fieldValue}>
                                                                <Typography
                                                                    color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                                    className="centerText encapPropertry"
                                                                    variant="h3"
                                                                >
                                                                    {item?.fieldValue.slice(0, 12)}{' '}
                                                                </Typography>
                                                            </Tooltip>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Typography
                                                                // color={theme.palette.mode === 'dark' ? 'white' : 'black'}
                                                                className="plight"
                                                                variant="body2"
                                                            >
                                                                {item?.Proofs[0]?.proof ? (
                                                                    <span
                                                                        onClick={() => {
                                                                            // useNavigate(option.fieldValue)
                                                                            window.open(item?.Proofs[0]?.proof, '_blank');
                                                                        }}
                                                                        style={{
                                                                            cursor: 'pointer',
                                                                            color: theme.palette.mode === 'dark' ? '#CDCDCD' : 'darkgray',
                                                                            textDecoration: 'underline'
                                                                        }}
                                                                    >
                                                                        Proof of metadata
                                                                    </span>
                                                                ) : (
                                                                    <span style={{ color: 'transparent' }}>no proof</span>
                                                                )}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>

                                                    {buyerNft?.status == 'Redeem' && item?.isEditable == true && (
                                                        <Tooltip placement="right" title="Edit Properties" className="postion-icon">
                                                            <ModeEditIcon
                                                                sx={{
                                                                    color: theme.palette.mode === 'dark' ? '#bde2f0' : '#000',
                                                                    float: 'right'
                                                                }}
                                                                onClick={() => {
                                                                    setPropertiesOpen(true);
                                                                    setMetadata(item?.fieldName);
                                                                    setValue(item?.fieldValue);
                                                                    setEditable(item?.isEditable);
                                                                    setProofRequired(item?.proofRequired);
                                                                    setId(item?.id);
                                                                }}
                                                            />
                                                        </Tooltip>
                                                    )}
                                                </SubCard>
                                            </Grid>
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
