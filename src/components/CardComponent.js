'use client'

import * as React from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Avatar, Card, CardContent, CardMedia, Link } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { useState } from 'react';
import { useEffect } from 'react';


export default function CardComponent({ imageUrl, title }) {
    // const [avatars, setAvatars] = useState([]);

    // useEffect(() => {

    //     (async () => {
    //         const avatarsUrl = localStorage.getItem("avatars");

    //         if (!avatarsUrl) {

    //             fetch('https://picsum.photos/v2/list')
    //                 .then((r) => r.json())
    //                 .then((r) => {
    //                     localStorage.setItem("avatars", JSON.stringify(r.download_url))
    //                     console.log(avatarsUrl)
    //                 });
    //         }
    //         setAvatars(JSON.parse(avatarsUrl))

    //     })()
    // }, [])


    return (
        <Card
            variant="plain"
            sx={{
                backgroundColor: 'card.default',
                p: 0,
                border: 1,
                borderRadius: '10px',
                borderColor: 'border.default',
                '&:hover': {
                    borderColor: 'border.hover',
                }
            }}
        >

            <CardContent sx={{
                p: 0,
                mb: '-24px',
                '&:hover, &:focus-within': {
                    backgroundColor: 'card.hover'
                },
            }}>
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
                                'linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)',
                        }}
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
                                    {title.substring(0, 20)}
                                </Typography>
                            </Box>

                            <Box>
                                <IconButton
                                    disableRipple
                                    size="medium"
                                    sx={{
                                        backgroundColor: 'icon.background',
                                        borderRadius: '50%',
                                        marginRight: 0.8
                                    }}
                                >
                                    <BookmarkBorderIcon
                                        sx={{
                                            color: 'icon.iconBorder',
                                            '&:hover': {
                                                color: 'icon.iconBorderHover',
                                            }
                                        }} />
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
                                    <FavoriteBorderIcon sx={{
                                        color: 'icon.iconBorder',
                                        '&:hover': {
                                            color: 'icon.iconBorderHover',
                                        }
                                    }} />
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

                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    alignItems: 'center',
                    padding: 1,
                    justifyContent: 'space-between'
                }}>
                    <Box sx={{ display: 'flex', }}>
                        {/* {avatars.map((v, i) => ( */}
                        <Avatar
                            // key={i}
                            alt="Profile"
                            src={'https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745'}
                            // onClick={handleClick}
                            sx={{ cursor: 'pointer', height: '35px', width: '35px', mr: 0.5 }}
                        />
                        {/* ))} */}
                        <Typography
                            sx={{
                                fontSize: 15,
                                fontWeight: 'md',
                                padding: 1,
                                mb: 0,
                                wordWrap: 'break-word',
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}>
                            {title.length > 10 ? `${title.slice(0, 10)}...` : title}
                        </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Box sx={{ mr: 1, alignItems: 'center', display: 'flex' }}>
                            <FavoriteIcon sx={{
                                mr: 0.3,
                                fontSize: 17,
                                color: 'icon.fill',
                                '&:hover': { color: 'rgb(206, 147, 216)' }
                            }} />
                            <Link
                                underline="none"
                                sx={{
                                    fontSize: 12,
                                    fontWeight: 'md',
                                    ml: 'auto',
                                    color: 'text.cardLink',
                                }}
                            >
                                117
                            </Link>
                        </Box>

                        <Box sx={{ alignItems: 'center', display: 'flex' }}>
                            <VisibilityIcon sx={{
                                mr: 0.3,
                                fontSize: 17,
                                color: 'icon.fill'
                            }} />
                            <Link
                                underline="none"
                                sx={{
                                    fontSize: 13,
                                    fontWeight: 'md',
                                    color: 'text.cardLink',
                                }}
                            >
                                10.4k
                            </Link>
                        </Box>
                    </Box>

                </Box>
            </CardContent>



        </Card >
    );
}
