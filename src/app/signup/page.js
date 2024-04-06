'use client';
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Logo from "@/icons/Logo";
import {Icon, Input} from "@mui/material";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                MyStuff
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignInSide() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
        <Grid container component="main" sx={{height: '100vh'}}>
            <CssBaseline/>
            <Grid
                item
                xs={false}
                sm={4}
                md={7}
                sx={{
                    backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                    backgroundRepeat: 'no-repeat',
                    // backgroundColor: (t) =>
                    //     t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <Icon sx={{m: 1, mb: 7, width: 50, height: 50}}>
                        <Logo/>
                    </Icon>


                    <Box component="form" noValidate onSubmit={handleSubmit}
                         sx={{mt: 2}}>
                        <Grid container spacing={1}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center">
                                <Typography
                                    component="h1"
                                    variant="h5"
                                    sx={{
                                        mb: 2,
                                        fontWeight: '800',
                                        justifyContent: 'flex-end',
                                    }}>
                                    Sign up to MyStuff
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="First Name"
                                    name="firstName"
                                    autoComplete="given-name"
                                    autoFocus
                                    disableUnderline
                                    placeholder="First Name"
                                    sx={{
                                        p: 1.5,
                                        border: 1.5,
                                        borderRadius: '10px',
                                        mb: 2,
                                        borderColor: 'border.default',
                                        transition: 'background-color 200ms ease, outline 200ms ease, color 200ms ease, ' +
                                            'box-shadow 200ms ease, -webkit-box-shadow 200ms ease',
                                        '&:hover': {
                                            boxShadow: '0 0 0 4px rgba(234,100,217,0.1)'
                                        },
                                        '&.Mui-focused': {
                                            boxShadow: '0 0 0 4px rgba(234,100,217,0.1)',
                                            borderColor: 'border.inputFocus',
                                        },
                                        '&:active': {
                                            borderColor: 'border.default',
                                            boxShadow: 0
                                        }
                                    }}

                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Input
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                    autoFocus
                                    disableUnderline
                                    placeholder="Last Name"
                                    sx={{
                                        p: 1.5,
                                        border: 1.5,
                                        borderRadius: '10px',
                                        mb: 2,
                                        borderColor: 'border.default',
                                        transition: 'background-color 200ms ease, outline 200ms ease, color 200ms ease, ' +
                                            'box-shadow 200ms ease, -webkit-box-shadow 200ms ease',
                                        '&:hover': {
                                            boxShadow: '0 0 0 4px rgba(234,100,217,0.1)'
                                        },
                                        '&.Mui-focused': {
                                            boxShadow: '0 0 0 4px rgba(234,100,217,0.1)',
                                            borderColor: 'border.inputFocus',
                                        },
                                        '&:active': {
                                            borderColor: 'border.default',
                                            boxShadow: 0
                                        }
                                    }}

                                />
                            </Grid>
                        </Grid>
                        <Input
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            disableUnderline
                            placeholder="Username or Email"
                            sx={{
                                p: 1.5,
                                border: 1.5,
                                borderRadius: '10px',
                                mb: 2,
                                borderColor: 'border.default',
                                transition: 'background-color 200ms ease, outline 200ms ease, color 200ms ease, ' +
                                    'box-shadow 200ms ease, -webkit-box-shadow 200ms ease',
                                '&:hover': {
                                    boxShadow: '0 0 0 4px rgba(234,100,217,0.1)'
                                },
                                '&.Mui-focused': {
                                    boxShadow: '0 0 0 4px rgba(234,100,217,0.1)',
                                    borderColor: 'border.inputFocus',
                                },
                                '&:active': {
                                    borderColor: 'border.default',
                                    boxShadow: 0
                                }
                            }}

                        />
                        <Input
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            disableUnderline
                            placeholder="Password"
                            sx={{
                                mb: 2,
                                p: 1.5,
                                border: 1.5,
                                borderRadius: '10px',
                                borderColor: 'border.default',
                                transition: 'background-color 200ms ease, outline 200ms ease, color 200ms ease, ' +
                                    'box-shadow 200ms ease, -webkit-box-shadow 200ms ease',
                                '&:hover': {
                                    boxShadow: '0 0 0 4px rgba(234,100,217,0.1)'
                                },
                                '&.Mui-focused': {
                                    boxShadow: '0 0 0 4px rgba(234,100,217,0.1)',
                                    borderColor: 'border.inputFocus',
                                },
                                '&:active': {
                                    borderColor: 'border.default',
                                    boxShadow: 0
                                }
                            }}
                        />

                        <FormControlLabel
                            control={<Checkbox
                                value="remember"
                                sx={{
                                    color: 'border.checkbox',
                                    '&.Mui-checked': {
                                        color: 'checkbox.true',
                                    }
                                }}
                            />
                            } label="Remember me"
                            sx={{
                                ml: 0.1,
                                color: 'text.login',
                            }}
                        />
                        <Grid item xs container display="flex" justifyContent="flex-end">
                            <Link href="#"
                                  variant="body2"
                                  color={'text.login'}
                                  sx={{mr: 2}}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                mt: 3, mb: 2,
                                backgroundColor: 'button.login',
                                height: 50,
                                borderRadius: '25px',
                                color: 'text.buttonBlack',
                                fontWeight: 'bold',
                                '&:hover': {
                                    backgroundColor: 'button.loginHover',
                                    boxShadow: 0,
                                }
                            }}
                        >
                            Sign In
                        </Button>

                        <Grid container>

                            <Grid item container justifyContent="center">
                                <Link href="#"
                                      variant="body2"
                                      color={'text.login'}
                                      underline="none"
                                      sx={{mr: 1,}}>
                                    {"Don't have an account?"}
                                </Link>
                                <Link href="#"
                                      variant="body2"
                                      color={'text.login'}
                                >
                                    {"Sing Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Copyright sx={{mt: 5}}/>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}
