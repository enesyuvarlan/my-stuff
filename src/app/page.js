'use client';

import CardComponent from '@components/CardComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {

        (async () => {
            const photos = localStorage.getItem("photos");

            if (!photos) {
                await fetch('https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=50')
                    .then((r) => r.json())
                    .then((r) => {
                        localStorage.setItem("photos", JSON.stringify(r.photos));
                    });
            }

            setCards(JSON.parse(photos));
        })()
    }, []);

    return (
        <Container maxWidth={false} sx={{
            display: 'flex',
            justifyContent: "center",
        }}>
            <Grid container spacing={2} sx={{ mt: 8, }}>
                {cards.map((v, i) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={i}>
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