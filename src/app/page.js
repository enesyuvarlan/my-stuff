'use client';

import CardComponent from '@components/CardComponent';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import {useEffect, useState} from 'react';

export default function HomePage() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((r) => r.json())
            .then((r) => {
                setCards(r);
            });
    }, []);

    return (
        <Container maxWidth="100%">
            <Grid container spacing={1} sx={{
                marginTop: 2
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
