import * as React from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../store/AuthContext";
import PropTypes from "prop-types";
import MediaQuery, { useMediaQuery } from "react-responsive";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import tickitnow from "../../assets/images/tickitnow.png";
import { Avatar } from "@mui/material";

const navItems = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Events",
    route: "/",
  },
];
const authItems = [
  {
    name: "Login",
    route: "/",
  },
  {
    name: "Signup",
    route: "/",
  },
];
const userItems = [
  {
    name: "Calendar",
    route: "/user/",
  },
  {
    name: "Dashboard",
    route: "/organiser/",
  }
];

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function NavBar(props) {
    const navigate = useNavigate();
    const { isLoggedIn, role, logout } = useAuth();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    const location = useLocation();
    const logoutHandler = () => {
      logout();
      handleClose();
    }
    return (
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            color=""
            sx={{
              boxShadow: "none",
              backgroundColor: "var(--bg-color)",
            }}
          >
            <Toolbar
            // sx={{
            //   width: "80%",
            //   margin: "0 auto",
            // }}
            >
              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navItems.map((item) => (
                    <NavLink
                      to={`${item.route}${item.name.toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                      key={item.name}
                    >
                      <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{item.name}</Typography>
                      </MenuItem>
                    </NavLink>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                component="a"
                href="/"
                noWrap
                sx={{
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontWeight: 700,
                  color: "inherit",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
              >
                TickItNow
              </Typography>
              <Avatar
                src={tickitnow}
                alt="tickitnow"
                sx={{
                  display: { xs: "none", md: "flex" },
                  mr: 1,
                }}
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
              <Typography
                variant="h6"
                component="a"
                noWrap
                href="/"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  display: { xs: "none", sm: "block" },
                }}
              >
                TickItNow
              </Typography>
              <Box
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                {navItems.map((item) => (
                  <NavLink
                    to={`${item.route}${item.name.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={item.name}
                  >
                    <Link
                      key={item.name}
                      underline="none"
                      sx={{
                        color: "#000",
                        fontWeight: 700,
                        mr: 4,
                        padding: "0.3rem 0",
                        transition: "all 0.2s ease",
                        borderBottom: `${location.pathname === item.route+item.name.toLowerCase() ? "3px solid #000" : "none"}`,
                        "&:hover": {
                          borderBottom: "3px solid #000",
                        },
                      }}
                    >
                      {item.name}
                    </Link>
                  </NavLink>
                ))}
                { isLoggedIn === false &&
                  authItems.map((item) => (
                  <NavLink
                    to={`${item.route}${item.name.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={item.name}
                  >
                    <Link
                      key={item.name}
                      underline="none"
                      sx={{
                        color: "#000",
                        fontWeight: 700,
                        mr: 4,
                        padding: "0.3rem 0",
                        transition: "all 0.2s ease",
                        borderBottom: `${location.pathname === item.route+item.name.toLowerCase() ? "3px solid #000" : "none"}`,
                        "&:hover": {
                          borderBottom: "3px solid #000",
                        },
                      }}
                    >
                      {item.name}
                    </Link>
                  </NavLink>
                ))}
                { isLoggedIn === true &&
                  userItems.map((item) => (
                    ( role === "attendee" && item.name === "Calendar" ||
                    role === "organizer" && item.name === "Dashboard" ) &&
                  <NavLink
                    to={`${item.route}${item.name.toLowerCase()}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                    key={item.name}
                  >
                    <Link
                      key={item.name}
                      underline="none"
                      sx={{
                        color: "#000",
                        fontWeight: 700,
                        mr: 4,
                        padding: "0.3rem 0",
                        transition: "all 0.2s ease",
                        borderBottom: `${location.pathname === item.route+item.name.toLowerCase() ? "3px solid #000" : "none"}`,
                        "&:hover": {
                          borderBottom: "3px solid #000",
                        },
                      }}
                    >
                      {item.name}
                    </Link>
                  </NavLink>
                ))}
              </Box>
              { isLoggedIn === true &&
                <IconButton
                  color="inherit"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  <AccountCircle
                    sx={{
                      height: 50,
                      width: 50,
                    }}
                  />
                </IconButton>
              }
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>
                  { localStorage.getItem("user") ? 
                    JSON.parse(localStorage.getItem("user")).username
                    : null
                  }
                </MenuItem>
                <MenuItem
                  onClick={logoutHandler}
                >Logout</MenuItem>
              </Menu>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar id="back-to-top-anchor" />
        <Container></Container>
        <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </React.Fragment>
    );
}