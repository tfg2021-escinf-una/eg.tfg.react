import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { useState } from 'react';
import { StyledNavbar } from './Navbar.styles';

export interface INavbarProps {
  isAuthenticated : boolean,
  title : string,
  handleOnClickLogin? : () => void,
  handleProfileClick? : () => void,
  handleSignOut? : () => void,
}

export const Navbar = ({
  isAuthenticated = false,
  title = "",
  handleSignOut,
  handleOnClickLogin,
  handleProfileClick
} : INavbarProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <StyledNavbar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          { title }
        </Typography>
        <div>
        {
          isAuthenticated && (
            <>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
              <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign out</MenuItem>
              </Menu>
            </>)
        }
        {!(isAuthenticated) && (
          <>
            <Button color="inherit"
                    variant="outlined"
                    size="medium"
                    onClick={() =>handleOnClickLogin?.()}>Login</Button>
          </>)
        }
        </div>
      </Toolbar>
    </StyledNavbar>
  );
}
