import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export const Header = function () {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Jam Sesh
          </Typography>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem>
                <ul
                  id="nav-mobile"
                  class="right hide-on-med-and-down"
                  style={{ display: "flex", listStyle: "none" }}
                >
                  <li style={{ margin: "0 1em" }}>
                    <Link to="/signup">Sign Up</Link>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem>
                <ul
                  id="nav-mobile"
                  class="right hide-on-med-and-down"
                  style={{ display: "flex", listStyle: "none" }}
                >
                  <li style={{ margin: "0 1em" }}>
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              </MenuItem>
              <MenuItem>
                <ul
                  id="nav-mobile"
                  class="right hide-on-med-and-down"
                  style={{ display: "flex", listStyle: "none" }}
                >
                  <li style={{ margin: "0 1em" }}>
                    <Link to="/jamsesh">Jam Sesh</Link>
                  </li>
                </ul>
              </MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
