'use client';

import CardComponent from '@components/CardComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useEffect, useState } from 'react';

export default function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((r) => r.json())
            .then((r) => {
                setCards(r);
            });
    }, []);

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
    return (
        <Container maxWidth="1080px">
            <Grid container spacing={5}
                sx={{
                    mt: 7,
                }}>
                {cards.map((v, i) => (
                    <Grid item xl={3} key={i}>
                        <CardComponent
                            imageUrl={v.image}
                            title={v.title}
                        />
                    </Grid>
                ))}

            </Grid>
        </Container>
    );
}
