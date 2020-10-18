import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter, Link } from "react-router-dom";
import { useTokenContext } from "../lib/GlobalState";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontfamily: "pacifico",
  },
}));

export const Header = function () {
  const [state, _] = useTokenContext();
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
    <nav>
      <div className="nav-wrapper" style={{ color: "red" }}>
        {state.length === 0 || state[0].token === "" ? (
          <div
            className={classes.root}
            style={{
              color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <AppBar
              position="static"
              style={{
                backgroundColor: "#282728",
                height: "110px",
                paddingTop: "10px",
                fontFamily: "Pacifico",
              }}
            >
              <Toolbar style={{}}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{ fontFamily: "pacifico", fontSize: "50px" }}
                >
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
                    <Link to="/signup">
                      <ul
                        id="nav-mobile"
                        class="right hide-on-med-and-down"
                        style={{ display: "flex", listStyle: "none" }}
                      >
                        SIGN UP
                      </ul>
                      </Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to="/login">
                        <ul
                          id="nav-mobile"
                          class="right hide-on-med-and-down"
                          style={{ display: "flex", listStyle: "none" }}
                        >
                          LOG IN
                        </ul>
                      </Link>
                    </MenuItem>
                    <Link to="/jamsesh">
                      <MenuItem>
                        <ul
                          href={"/jamsesh"}
                          id="nav-mobile"
                          class="right hide-on-med-and-down"
                          style={{ position: "center", listStyle: "none" }}
                        >
                          JAM SESH
                        </ul>
                      </MenuItem>
                    </Link>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        ) : (
          <div
            className={classes.root}
            style={{
              color: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            }}
          >
            <AppBar
              position="static"
              style={{
                backgroundColor: "#282728",
                height: "110px",
                paddingTop: "10px",
                fontFamily: "Pacifico",
              }}
            >
              <Toolbar style={{}}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  style={{ fontFamily: "pacifico", fontSize: "50px" }}
                >
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
                      <Link to="/logout">
                        <ul
                          id="nav-mobile"
                          class="right hide-on-med-and-down"
                          style={{ display: "flex", listStyle: "none" }}
                        >
                          LOG OUT
                        </ul>
                      </Link>
                    </MenuItem>

                    <MenuItem>
                      <Link to="/jamsesh">
                        <ul
                          href={"/jamsesh"}
                          id="nav-mobile"
                          class="right hide-on-med-and-down"
                          style={{ position: "center", listStyle: "none" }}
                        >
                          JAM SESH
                        </ul>
                      </Link>
                    </MenuItem>
                  </Menu>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
