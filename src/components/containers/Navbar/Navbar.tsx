import { AccountCircle } from '@mui/icons-material';
import { Button, IconButton, Menu, MenuItem, Toolbar } from "@mui/material";
import { useCallback, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Typography } from '../../utils';
import { StyledContainer, StyledNavbar } from './Navbar.styles';

export interface INavbarProps {
  isAuthenticated : boolean,
  title : string,
  handleProfileClick? : () => void,
  handleSignOut? : () => void,
}

export const Navbar = ({
  isAuthenticated = false,
  title = "",
  handleSignOut,
  handleProfileClick
} : INavbarProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { pathname } = useLocation()
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);
  const navigate = useNavigate()

  const handleOnClick = () => (
    pathname.includes('/login')
      ? navigate('/register')
      : navigate('/login')
  )

  const action = useCallback(() => {
    return pathname.includes('/login')
      ? 'Registrarme'
      : 'Ingresar'
  }, [pathname])

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
              <IconButton size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleMenu}
                          color="inherit">
              <AccountCircle />
              </IconButton>
              <Menu id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}>
                <MenuItem onClick={handleProfileClick}>Perfil</MenuItem>
                <MenuItem onClick={handleSignOut}>Cerrar sesion</MenuItem>
              </Menu>
            </>)
        }
        {
          (!isAuthenticated) && (
            <Button color="inherit"
                    variant="outlined"
                    size="medium"
                    onClick={() => handleOnClick()}>
              <Typography size="md" as="h5">
                { action() }
              </Typography>
            </Button>
          )
        }
        </StyledContainer>
      </Toolbar>
    </StyledNavbar>
  );
}
