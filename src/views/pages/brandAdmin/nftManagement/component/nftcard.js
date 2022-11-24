import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function NftCard({ asset, name, price, currencyType, description }) {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia component="img" height="140" image={asset} />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Description: </b> {description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <b>Price:</b> {price} {currencyType}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Details</Button>
            </CardActions>
        </Card>
    );
}
