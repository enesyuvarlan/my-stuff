'use client'

import * as React from 'react';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card, Link} from "@mui/material";
import Box from "@mui/material/Box";
import {AspectRatio} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import theme from "@/theme";


export default function CardComponent({ imageUrl, title }) {
    return (
        <Card
            variant="plain"
            sx={{
                maxWidth: 440,
                backgroundColor: theme.palette.primary.main,
                p: 0,
                border: 1,
                borderColor: theme.palette.info.main,
                '&:hover': {
                    borderColor: theme.palette.info.main
                }
            }}
        >

            <Box sx={{position: 'relative'}}>

                <AspectRatio ratio="4/3">
                    <img
                        src={imageUrl}
                        srcSet={`${imageUrl} 2x`}
                        loading="lazy"
                        alt={title}
                        style={{
                            // padding: '1rem',
                            objectFit: 'contain',
                            backgroundColor: 'rgb(255 255 255 /1)',
                        }}
                    />
                </AspectRatio>

                <div>
                    <Box
                        sx={{
                            p: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            flexGrow: 1,
                            alignSelf: 'flex-end',
                        }}
                    >
                        <Typography level="h2" noWrap sx={{fontSize: 'lg'}}>
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
                                bgcolor: 'white',
                                borderRadius: '50%',
                                '&:hover': {
                                    color: 'rgb(0 0 0 /0.3)', //Hover Bg Clr
                                }
                            }}
                        >
                            <BookmarkBorderIcon/>
                        </IconButton>
                        <IconButton
                            size="sm"
                            variant="solid"
                            color="black"
                            sx={{
                                bgColor: 'white',
                                borderRadius: '50%',
                                '&:hover': {
                                    color: 'rgb(0 0 0 /0.3)', //Hover Bg Clr
                                }
                            }}
                        >
                            <FavoriteBorderIcon/>
                        </IconButton>
                    </Box>
                </div>
            </Box>

            <Box sx={{display: 'flex', gap: 1, alignItems: 'center', padding: 1}}>

                <Typography sx={{fontSize: 'sm', fontWeight: 'md', padding: 1}}>
                    {title.substring(0, 25)}
                </Typography>

                <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Favorite/>}
                    sx={{
                        fontWeight: 'md',
                        ml: 'auto',
                        color: '#616161',
                        '&:hover': {color: 'rgb(206, 147, 216)'},
                    }}
                >
                    117
                </Link>
                <Link
                    href="#dribbble-shot"
                    level="body-xs"
                    underline="none"
                    startDecorator={<Visibility/>}
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



