import React from 'react';
import { forwardRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import {
    Button,
    Dialog,
    Divider,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Typography,
    Grid,
    MenuItem,
    Menu,
    Pagination,
    OutlinedInput,
    TextField,
    InputAdornment
} from '@mui/material';
import { IconSearch } from '@tabler/icons';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';

import MainCard from 'ui-component/cards/MainCard';
import HeadingCard from 'shared/Card/HeadingCard';
import { getNftsByCategory } from 'redux/nftManagement/actions';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

import NftCard from './nftcard';

export default function NFTCategory() {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [nfts, setNfts] = useState([]);
    const { categoryName, categoryId } = useParams();

    const dispatch = useDispatch();
const brandId = useSelector((state)=>state.auth.user.brandId)
    // useEffect(() => {
    //   dispatch(
    //     getNftsByCategory({})
    //   );
    // });

    useEffect(() => {
        dispatch(
            getNftsByCategory({
                categoryId: categoryId,
                brandId: brandId,
                page: page,
                size: size
            })
        );
    }, [page, size]);

    const nftByCategoryList = useSelector((state) => state.nftsByCategoryReducer.nftsByCategoryList);
    console.log("nftByCategoryList", nftByCategoryList)
// setNfts(nftByCategoryList.nfts)

// console.log("nfts", nfts)

    return (
        <>
            <h1>Categories</h1>
            <HeadingCard title={categoryName} />
            <Grid container>
              {nftByCategoryList.map((d)=>{
                return (
                  <>
                     <NftCard asset={d.asset} name={d.name} price={d.price} description={d.description} currencyType={d.currencyType}/>
                  </>
                )
           

              })}
            </Grid>
        </>
    );
}
