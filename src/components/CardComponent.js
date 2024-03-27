'use client'

import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import Favorite from '@mui/icons-material/Favorite';
import Visibility from '@mui/icons-material/Visibility';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


export default function CardComponent({ imageUrl, title }) {
    return (
        <Card
            variant="plain"
            sx={{
                maxWidth: 440,
                backgroundColor: 'rgb(255 255 255 /1)', //Bg Color rgba(249, 250, 251, 1)
                p: 0,
                border: 1,
                borderColor: 'rgb(229 231 235)', //Border Color
                '&:hover': {
                    //backgroundColor: 'rgb(255 255 255 /1)', //Hover Bg Clr
                    borderColor: 'rgb(156 163 175)' //Hover Border Clr
                }
            }}
        >

            <Box sx={{ position: 'relative' }}>

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

                <CardCover
                    className="gradient-cover"
                    sx={{
                        '&:hover, &:focus-within': {
                            opacity: 1,
                        },
                        opacity: 0,
                        transition: '0.1s ease-in',
                        background:
                            'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                    }}
                >
                    {/* The first box acts as a container that inherits style from the CardCover */}
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
                            <Typography level="h2" noWrap sx={{ fontSize: 'lg' }}>
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
                                <BookmarkBorderIcon />
                            </IconButton>
                            <IconButton
                                size="sm"
                                variant="solid"
                                color="black"
                                sx={{
                                    bgcolor: 'white',
                                    borderRadius: '50%',
                                    '&:hover': {
                                        color: 'rgb(0 0 0 /0.3)', //Hover Bg Clr
                                    }
                                }}
                            >
                                <FavoriteBorderIcon />
                            </IconButton>
                        </Box>
                    </div>
                </CardCover>
            </Box>

            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', padding: 1 }}>
                <Avatar
                    src="https://images.unsplash.com/profile-1502669002421-a8d274ad2897?dpr=2&auto=format&fit=crop&w=32&h=32&q=60&crop=faces&bg=fff"
                    size="sm"
                    sx={{ '--Avatar-size': '1.5rem' }}
                />
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

        </Card >
    );
}



