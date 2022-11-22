import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useState } from 'react';
import { Typography } from '../../utils';
import { StyledContainer, StyledNavbar } from './Navbar.styles';

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
        <StyledContainer flexGrow>
          <Typography as="h5"
                      size="lg"
                      weight="normal"
                      fontColor={{ color: 'primary', type: 'contrastText' }}>
            { title }
          </Typography>
        </StyledContainer>
        <StyledContainer>
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
                    onClick={() =>handleOnClickLogin?.()}>
              <Typography size="md" as="h5">Login</Typography>
            </Button>
          </>)
        }
        </StyledContainer>
      </Toolbar>
    </StyledNavbar>
  );
}
