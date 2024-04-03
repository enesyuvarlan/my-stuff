'use client'

import * as React from 'react';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from "@/icons/Logo";
import InputSearch from './InputSearch';
import SearchIcon from '@mui/icons-material/Search';


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard'];


export default function Header() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElUser, setAnchorElUser] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<AppBar position="fixed" sx={{
			borderBottom: 1,
			borderColor: 'border.default',
			backdropFilter: 'blur(10px)',
			top: 0,
			boxShadow: 0,
			height: '4rem',
			backgroundColor: 'header.main'
		}}>
			<Container maxWidth="xl" >

				<Toolbar disableGutters>

					{/* Logo */}
					<Box sx={{
						display: { xs: 'none', sm: 'none', md: 'flex', lg: 'flex', xl: 'flex' },
						justifyContent: 'center',
						mr: 3,
						'&:hover': { cursor: 'pointer' }
					}} >
						<Logo width={30} />
					</Box>

					{/* Menu Box */}
					<Box sx={{
						flexGrow: 1,
						display: { xs: 'flex', md: 'none' },
					}}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="icon.menuIcon"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							disableScrollLock={true} //mr problem solving
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
							PaperProps={{
								sx: {
									width: '100%',
									mt: '30px',
									boxShadow: 1,
									border: 1,
									borderColor: 'rgb(243, 243, 244)',
								},
							}}>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center"
										sx={{ color: 'text.navBarMenu', }} >
										{page}
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>


					<Box sx={{
						width: '100%',
						display: { xs: 'flex', md: 'none' },
						justifyContent: 'center',
						'&:hover': { cursor: 'pointer' }
					}} >
						<Logo width={30} sx={{
							mr: 2
						}} />
					</Box>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, mx: 3, color: 'rgb(0 0 0 /1 )', display: 'block' }}>
								{page}
							</Button>
						))}
					</Box>

					{/* Input Container */}
					<Box sx={{
						width: 300,
						minWidth: 200,
						justifyContent: 'flex-end',
						display: { xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }
					}} >
						<InputSearch sx={{ width: '100%' }} />
					</Box>


					<Box sx={{
						mr: '20px',
						alignItems: 'center',
						justifyContent: 'center',
						display: { xs: 'flex', sm: 'flex', md: 'none', lg: 'none', xl: 'none' }
					}} >
						<SearchIcon sx={{
							fontSize: 30,

						}} />
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open profile">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{
									p: 0,
									cursor: 'pointer',
								}}>
								<Avatar alt="Enes" src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745" />
							</IconButton>
						</Tooltip>
						<Menu
							disableScrollLock={true} //mr problem solving
							sx={{
								mt: '45px',
							}}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}

							PaperProps={{
								sx: {
									width: '300px',
									mt: '30px',
									boxShadow: 1,
									border: 1,
									borderColor: 'rgb(243, 243, 244)',
									borderRadius: '16px',
								},
							}}>

							<IconButton
								sx={{
									display: 'flex',
									mr: 'auto',
									ml: 'auto',
									my: '25px',
									cursor: 'pointer',
								}}>
								<Avatar alt="" src="https://ps.w.org/user-avatar-reloaded/assets/icon-128x128.png?rev=2540745" sx={{
									width: '70px',
									height: '70px',
								}} />
							</IconButton>

							<Typography textAlign="center" x={{
								mx: '20px',
							}}>
								Enes Yuvarlan
							</Typography>

							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
									sx={{
										ml: 2,
										mt: '20px',
									}}>
									<Typography textAlign="center" sx={{
										color: 'black',
									}}>
										{setting}
									</Typography>
								</MenuItem>
							))}
							<Divider sx={{
								mx: '20px',
							}} />
							<MenuItem>
								<Typography sx={{
									my: '15px',
									ml: 2,
									color: 'black',
								}}>
									Log Out
								</Typography>
							</MenuItem>
						</Menu>
					</Box>

				</Toolbar>

			</Container>
		</AppBar >
	);
}
