'use client'

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea, CardMedia} from '@mui/material';

export default function CardComponent({imageUrl, title}) {

    return (

        <Card sx={{
            maxWidth: 500
        }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={imageUrl}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
