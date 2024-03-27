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
import AdbIcon from '@mui/icons-material/Adb';
import Logo from "@/icons/Logo";
import InputSearch from './InputSearch';

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
			bgcolor: 'rgb(255 255 255 /0.7)', // rgb(255 255 255 /0.7)
			borderBottom: 1,
			borderColor: 'rgb(229 231 235)',
			backdropFilter: 'blur(10px)',
			top: 0,
			boxShadow: 0,
			height: '4rem',
		}}>
			<Container maxWidth="xl" >

				<Toolbar disableGutters>

					<Logo width={30} />

					<Typography
						variant="h6"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mx: 2,
							display: { xs: 'none', md: 'flex' },
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '-0.05rem',
							color: 'rgb(0 0 0 /1 )',
							textDecoration: 'none',
						}
						}
					>
						My Stuff
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="rgb(0 0 0 /1 )"
						>
							<MenuIcon />
						</IconButton>
						<Menu
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
						>
							{pages.map((page) => (
								<MenuItem key={page} onClick={handleCloseNavMenu}>
									<Typography textAlign="center">{page}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>

					<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 2 }} />

					<Typography
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: { xs: 'flex', md: 'none' },
							flexGrow: 1,
							fontFamily: 'monospace',
							fontWeight: 700,
							letterSpacing: '.3rem',
							color: 'rgb(0 0 0 /1 )',
							textDecoration: 'none',
						}}
					>
						My Stuff
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{pages.map((page) => (
							<Button
								key={page}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: 'rgb(0 0 0 /1 )', display: 'block' }}
							>
								{page}
							</Button>
						))}
					</Box>

					<InputSearch />

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open profile">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{
									p: 0,
									cursor: 'pointer',
								}}>
								<Avatar alt="Enes" src="" />
							</IconButton>
						</Tooltip>
						<Menu
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
									width: '300px', // Kağıdın genişliğini burada belirleyin
									mt: '30px',
									boxShadow: 1,
									border: 1,
									borderColor: 'rgb(243, 243, 244)',
									borderRadius: '16px',
								},
							}}
						>

							<IconButton
								sx={{
									display: 'flex',
									mr: 'auto',
									ml: 'auto',
									my: '25px',
									cursor: 'pointer',
								}}>
								<Avatar alt="" src="" sx={{
									width: '70px',
									height: '70px',
								}} />
							</IconButton>

							<Typography textAlign="center" x={{
								mx: '20px',
							}}
							>
								Profile Name
							</Typography>

							{settings.map((setting) => (
								<MenuItem
									key={setting}
									onClick={handleCloseUserMenu}
									sx={{
										ml: 2,
										mt: '20px',
									}}
								>
									<Typography textAlign="center" sx={{
										color: 'black',
									}}
									> {setting}</Typography>
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
								}}
								>
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
