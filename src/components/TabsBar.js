import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import avatarLogo from '../images/avatar.png';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import '../styles/TabsBar.css'

const TabsBar = () => {

    const username = localStorage.getItem('username');

    const customTheme = createTheme({
      });
    const StyledAvatar = styled(Avatar)`
        ${({ theme }) => `
        cursor: pointer;
        transition: ${theme.transitions.create(['transform'], {
            duration: theme.transitions.duration.standard,
        })};
        &:hover {
            transform: scale(1.3);
        }
        `}
        `;

    const [anchorElUser, setAnchorElUser] = React.useState(null);  

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };

    return(
        <AppBar color='default'>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/main"
                sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                }}
            >
                ESTACIONATE
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'} }>
                <Button sx={{ my: 2, color: 'inherit', fontFamily: 'unset', display: 'block', '&:hover': { textDecoration: 'underline'} }} href='/reservations'>
                    Mis reservas
                </Button>
                <Button sx={{ my: 2, color: 'inherit', fontFamily: 'unset', display: 'block', '&:hover': { textDecoration: 'underline'} }} href='/checkAvailability'>
                    Ver disponibilidad
                </Button>
                <Button sx={{ my: 2, color: 'inherit', fontFamily: 'unset', display: 'block', '&:hover': { textDecoration: 'underline'} }} href='/aboutUs'>
                    Sobre Nosotros
                </Button>
            </Box>

            <Button sx={{ my: 2, color: 'inherit', fontFamily: 'unset', display: 'block' }} href='/reservations'>
                    {username}
            </Button>

            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Abrir ajustes">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <ThemeProvider theme={customTheme}>
                    <StyledAvatar src = {avatarLogo}></StyledAvatar>
                </ThemeProvider>
                </IconButton>
                </Tooltip>
                <Menu
                sx={{ mt: '45px' }}
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
                >
                
                    <Button sx={{ color: 'inherit', fontFamily: 'unset', display: 'block' }}>
                        Mi cuenta
                    </Button>

                    <Button sx={{ color: 'inherit', fontFamily: 'unset', display: 'block' }}>
                    Ajustes
                    </Button>

                    <Button sx={{ color: 'inherit', fontFamily: 'unset', display: 'block' }} onClick={ () => {localStorage.removeItem('token'); window.location.replace('/login');}}>
                    Cerrar sesion
                    </Button>
                
                </Menu>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    );
}

export default TabsBar;