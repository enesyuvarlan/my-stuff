'use client'

import * as React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card, CardContent, CardMedia, Link} from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";


export default function CardComponent({ imageUrl, title }) {

    return (
        <Card
            variant="plain"
            sx={{
                backgroundColor: 'card.default',
                p: 0,
                border: 1,
                borderRadius: '14px',
                borderColor: 'border.default',
                '&:hover': {
                    borderColor: 'border.hover',
                }
            }}
        >

            <CardContent sx={{padding:0}}>
                <Box sx={{
                    position: 'relative',
                }}>


                    <Paper
                        elevation={0}
                        square={true}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            bottom: 0,
                            '&:hover, &:focus-within': {
                                opacity: 1,
                            },
                            color: 'card.default',
                            opacity: 0,
                            padding: 2,
                            cursor: 'pointer',
                            background:
                                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',                        }}
                    >

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            width: '100%',
                            position: 'absolute',
                            left: 0,
                            bottom: 1,
                            padding: 2
                        }}>
                            <Box display="flex" alignItems="center">
                                <Typography level="h2" noWrap
                                            sx={{
                                                justifyContent: 'center'
                                            }}>
                                    {title.substring(0, 25)}
                                </Typography>
                            </Box>

                            <Box>
                                <IconButton
                                    disableRipple
                                    size="medium"
                                    color="black"
                                    sx={{
                                        backgroundColor: 'icon.background',
                                        borderRadius: '50%',
                                        marginRight: 0.6
                                    }}
                                >
                                    <BookmarkBorderIcon />
                                </IconButton>

                                <IconButton
                                    disableRipple
                                    size="medium"
                                    color="black"
                                    sx={{
                                        backgroundColor: 'icon.background',
                                        borderRadius: '50%'
                                    }}
                                >
                                    <FavoriteBorderIcon />
                                </IconButton>
                            </Box>
                        </Box>

                    </Paper>

                    <CardMedia
                        loading="lazy"
                        component="img"
                        image={imageUrl}
                        alt={title}
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', padding: 1 }}>

                    <Typography sx={{ fontSize: 'sm', fontWeight: 'md', padding: 1 }}>
                        {title.substring(0, 25)}
                    </Typography>

                    <Link
                        underline="none"
                        sx={{
                            fontWeight: 'md',
                            ml: 'auto',
                            color: '#616161',
                            '&:hover': { color: 'rgb(206, 147, 216)' },
                        }}
                    >
                        117
                    </Link>
                    <Link
                        underline="none"
                        sx={{
                            fontWeight: 'md',
                            color: '#616161',
                        }}
                    >
                        10.4k
                    </Link>
                </Box>
            </CardContent>



        </Card>
    );
}



