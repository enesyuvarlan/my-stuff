'use client'

import * as React from 'react';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card, CardMedia, Link } from "@mui/material";
import Box from "@mui/material/Box";
import { AspectRatio } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { theme } from "@/theme/theme";


export default function CardComponent({ imageUrl, title }) {



    return (
        <Card
            variant="plain"
            sx={{
                maxWidth: 440,
                backgroundColor: theme.light.palette.card,
                p: 0,
                border: 1,
                borderRadius: '14px',
                borderColor: theme.light.palette.border.default,
                '&:hover': {
                    borderColor: theme.light.palette.border.hover,
                }
            }}
        >

            <Box sx={{ position: 'relative' }}>
                <CardMedia
                    // src=
                    // srcSet={`${imageUrl} 2x`}
                    loading="lazy"
                    component="img"
                    height="340"
                    image={imageUrl}
                    alt={title}
                />

                <Box sx={{
                    '&:hover, &:focus-within': {
                        opacity: 1,
                    },
                    opacity: 0,
                    transition: '0.1s ease-in',
                    background:
                        'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                }}>

                    {/* Card Animation */}
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            alignSelf: 'flex-end',
                            // backgroundColor:'transparent',
                            opacity: 0,
                        }}
                    >
                        <Typography level="h2" noWrap
                            sx={{ fontSize: 'lg', }}>
                            <Link
                                href="#dribbble-shot"
                                overlay
                                underline="none"
                                sx={{
                                    color: '#fff',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    display: 'block',
                                }}
                            >
                                {title.substring(0, 25)}
                            </Link>
                        </Typography>
                        <IconButton
                            size="sm"
                            variant="solid"
                            color="black"
                            sx={{
                                ml: 'auto',
                                bgColor: theme.light.palette.icon.background,
                                borderRadius: '50%',
                                '&:hover': {
                                    color: 'rgb(0 0 0 /0.3)', //Hover Bg Clr
                                }
                            }}
                        >
                            <BookmarkBorderIcon />
                        </IconButton>
                        <IconButton
                            size="sm"
                            variant="solid"
                            color="black"
                            sx={{
                                bgColor: theme.light.palette.icon.background,
                                borderRadius: '50%',
                                '&:hover': {
                                    color: 'rgb(0 0 0 /0.3)', //Hover Bg Clr
                                }
                            }}
                        >
                            <FavoriteBorderIcon />
                        </IconButton>
                    </Box>
                    {/* Card Animation */}

                </Box>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', padding: 1 }}>

                <Typography sx={{ fontSize: 'sm', fontWeight: 'md', padding: 1 }}>
                    {title.substring(0, 25)}
                </Typography>

                <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite />}
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
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility />}
                    sx={{
                        fontWeight: 'md',
                        color: '#616161',
                    }}
                >
                    10.4k
                </Link>
            </Box>

        </Card>
    );
}



