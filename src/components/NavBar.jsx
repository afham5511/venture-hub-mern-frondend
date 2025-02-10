import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAuth } from '../Contexts/AuthContext';
import Tooltip from '@mui/material/Tooltip';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { user } = useAuth();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar style={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ color: "white", fontFamily: "fantasy" }}
          >
            VH.
          </Typography>

          <Tooltip title="Go to your shopping cart">
            <Button onClick={() => (window.location.href = '/Cart')}>
              <ShoppingCartIcon style={{ color: "white" }} />
            </Button>
          </Tooltip>

          {user ? (
            <>
              
              <Button color='white'>Welcome, {user.fname}</Button>
            </>
          ) : (
            <Button
              id="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              color="white"
            >
              MY ACCOUNT
            </Button>
          )}

          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <h4>
              VENTURE HUB. <br /><br />
              A Venture Hub for a clothing brand is a support platform that helps new fashion businesses grow.<br />
              It offers resources like mentorship, funding, and networking with industry experts.<br />
              This helps brands improve their designs, marketing, and business strategies,<br />
              ultimately speeding up growth and success in a competitive market.
            </h4>

            <div className="g">
              <Link to="/sign">
                <Button color="white">
                  <MenuItem>SIGN IN</MenuItem>
                </Button>
              </Link>

              <Link to="/login">
                <Button color="white">
                  <MenuItem>LOGIN</MenuItem>
                </Button>
              </Link>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
