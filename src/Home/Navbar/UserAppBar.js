import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../Assets/logoicons.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const UserAppBar = () => {
  const pag = [];
  const pge = ["Logout"];
  const settings = ["Logout"];
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

  const AS = async () => { };

  const Logos = Logo;
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="" sx={{ padding: "2px" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={Logos} id="Logoicon" alt="Logo"></img>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/user"
            sx={{
              mr: 4,
              display: { xs: "none", md: "flex" },
              fontFamily: "cursive",
              fontWeight: 900,
              fontStyle: "italic",

              textDecoration: "none",
              color: "black",
            }}
          >
            Freelance
          </Typography>

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
              {pag.map((page) => (
                <MenuItem
                  key={page}
                  onClick={async () => {
                    AS();
                  }}
                >
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to="/info"
                    >
                      {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <img src={Logos} id="Logo" alt="Logo"></img>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/user"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "cursive",
              fontStyle: "italic",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "black",
              textDecoration: "none",
            }}
          >
            Freelance
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pag.map((page) => (
              <Link style={{ textDecoration: "none" }} to="/info">
                <Button
                  className="Nav_btn"
                  key={page}
                  onClick={() => {
                    AS();
                  }}
                  sx={{
                    my: 2,
                    fontSize: "large",
                    color: "black",
                    display: "block",
                    textDecoration: "none",
                  }}
                >
                  {page}

                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
            <Tooltip title="Open settings">
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
                sx={{ p: 0 }}
              >
                <MenuIcon />
              </IconButton>

            </Tooltip>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
            {pge.map((page) => (
              <Link style={{ textDecoration: "none" }} to={`/logout`}>
                <Button
                  className="Nav_btn"
                  key={page}
                  onClick={() => {
                    AS();
                  }}
                  sx={{
                    my: 2,
                    fontSize: "large",
                    color: "black",
                    display: "block",
                    marginRight: "7px",
                  }}
                >
                  {page}

                </Button>
              </Link>
            ))}

            <Button
              className="Nav__btn"
              variant="contained"
              color="warning"
              onClick={() => navigate("/project")}
            >
              Post a Project
            </Button>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/${setting}`}
                    >
                      {" "}
                      {setting}{" "}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
