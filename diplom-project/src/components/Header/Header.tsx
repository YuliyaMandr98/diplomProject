import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import UserMenu from '../../shared/ui/UserMenu/UserMenu';
import SideBar from '../SideBar/SideBar';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Header() {
    const [userMenu, setUserMenu] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const [sideBarOpen, setSideBarOpen] = useState(false);

    const handleToggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleToggleSideBar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <SideBar open={sideBarOpen} onClose={handleToggleSideBar} />

                    <NavLink to={'/'} style={{ color: 'white' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Мои финансы
                        </Typography>
                    </NavLink>

                    <Button color="inherit" onClick={handleMenuClick}>Login</Button>


                </Toolbar>
            </AppBar>
            <UserMenu anchorEl={anchorEl} open={open} onClose={handleMenuClose} />
            {userMenu && (
                <UserMenu
                    anchorEl={null}
                    open={false}
                    onClose={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
            )}
        </Box>
    );
}