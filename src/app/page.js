'use client';

import CardComponent from '@components/CardComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=10')
            .then((r) => r.json())
            .then((r) => {
                setCards(r.photos);
            });
    }, []);

    return (
        <Container maxWidth="1080px" sx={{
            // backgroundColor: 'pink', //Denemek için
            display: 'flex',
            justifyContent: "center",
            // height: '100vh',
        }}>
            <Grid container spacing={2}
                justifyContent="center"
                sx={{
                    // backgroundColor: 'red', //Denemek için
                    mt: 8,
                }}>
                {cards.map((v, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3} key={i}>
                        <CardComponent sx={{
                            // mx: '-10px',
                        }}
                            imageUrl={v.url}
                            title={v.title}
                        />
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
}

//some.wtf
//  1   x < 768
//  2   768 <= x < 1280
//  3   1280 <= x < 1920
//  4   1920 >= 4

//dribble.com
//  1   x < 633
//  2   633 <= x < 963
//  3   963 <= x < 1349
//  4   1349 >= 4
// const cardMapping = 