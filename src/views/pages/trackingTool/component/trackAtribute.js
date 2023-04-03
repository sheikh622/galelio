import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    Grid,
    TableHead,
    TableRow,
    Paper,
    MenuItem,
    Menu,
    Card,
    CardHeader,
    CardContent
} from '@mui/material';

import { gridSpacing } from 'store/constant';
import { useTheme } from '@mui/material/styles';
import map from 'assets/images/map.png';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const rows = [
    {
        id: 1,
        title: 'Card 1',
        content: 'This is  card 1'
    }
];

const trackAtribute = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedRow, setSelectedRow] = useState(null);
    const handleMenuOpen = (event, row) => {
        setAnchorEl(event.currentTarget);
        setSelectedRow(row);
    };
    const handleMenuClose = () => {
        setAnchorEl(null);
        setSelectedRow(null);
    };

    return (
        <Grid container-fluid spacing={gridSpacing} sx={{ margin: '0 15px' }}>
            <Grid container>
                <Grid item xs={12} sm={6} md={6} sx={{ padding: '0 15px 0 02px' }}>
                    <Grid item xs={12} md={12}>
                        <TableContainer component={Paper} sx={{ borderRadius: '3px !important' }}>
                            <Table>
                                <TableHead>
                                    <TableRow></TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ border: 'none' }}>Attribute</TableCell>
                                            <TableCell sx={{ border: 'none' }}></TableCell>

                                            <TableCell sx={{ float: 'right', border: 'none' }}>
                                                <KeyboardArrowDownIcon
                                                    sx={{ color: '#2F53FF' }}
                                                    // onClick={(event) => handleMenuOpen(event, row)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}></Menu>
                        {selectedRow && (
                            <Card>
                                <CardHeader title={selectedRow.title} />
                                <CardContent>
                                    <p>Some content for the card.</p>
                                </CardContent>
                            </Card>
                        )}
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <TableContainer component={Paper} sx={{ borderRadius: '3px !important' }}>
                            <Table>
                                <TableHead>
                                    <TableRow></TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ border: 'none' }}>History 1</TableCell>
                                            <TableCell sx={{ border: 'none' }}></TableCell>

                                            <TableCell sx={{ float: 'right', border: 'none' }}>
                                                <KeyboardArrowDownIcon
                                                    sx={{ color: '#2F53FF' }}
                                                    // onClick={(event) => handleMenuOpen(event, row)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/*  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}></Menu>
                    {selectedRow && (
                        <Card>
                            <CardHeader title={selectedRow.title} />
                            <CardContent>
                                <p>Some content for the card.</p>
                            </CardContent>
                        </Card>
                    )} */}
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <TableContainer component={Paper} sx={{ borderRadius: '3px !important' }}>
                            <Table>
                                <TableHead>
                                    <TableRow></TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ border: 'none' }}>History 2</TableCell>
                                            <TableCell sx={{ border: 'none' }}></TableCell>

                                            <TableCell sx={{ float: 'right', border: 'none' }}>
                                                <KeyboardArrowDownIcon
                                                    sx={{ color: '#2F53FF' }}
                                                    // onClick={(event) => handleMenuOpen(event, row)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/*  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}></Menu>
                    {selectedRow && (
                        <Card>
                            <CardHeader title={selectedRow.title} />
                            <CardContent>
                                <p>Some content for the card.</p>
                            </CardContent>
                        </Card>
                    )} */}
                    </Grid>
                    <Grid mt={2} item xs={12} md={12}>
                        <TableContainer component={Paper} sx={{ borderRadius: '3px !important' }}>
                            <Table>
                                <TableHead>
                                    <TableRow></TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell sx={{ border: 'none' }}>History 3</TableCell>
                                            <TableCell sx={{ border: 'none' }}></TableCell>

                                            <TableCell sx={{ float: 'right', border: 'none' }}>
                                                <KeyboardArrowDownIcon
                                                    sx={{ color: '#2F53FF' }}
                                                    // onClick={(event) => handleMenuOpen(event, row)}
                                                />
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        {/*  <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}></Menu>
                    {selectedRow && (
                        <Card>
                            <CardHeader title={selectedRow.title} />
                            <CardContent>
                                <p>Some content for the card.</p>
                            </CardContent>
                        </Card>
                    )} */}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                   <img className='map'   src={map}/>
                </Grid>
            </Grid>
        </Grid>
    );
};
export default trackAtribute;
