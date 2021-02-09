import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";

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
  navButton: {
    textDecoration: "none",
    color: "#FFF",
    fontSize: "1rem",
  },
  buttonGroup: {
    marginLeft: "auto",
  },
}));
const NavBar = (params) => {
  const classes = useStyles();
  const onlinePeopleCount = useSelector((state) => state.count);

  return (
    <Grid className={classes.root}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            Tim's Profile in online view
            {onlinePeopleCount && (
              <>
                , currently {onlinePeopleCount}{" "}
                {onlinePeopleCount !== 1 ? "people" : "person"}
                {" online"}
              </>
            )}
          </Typography>

          <Grid className={classes.buttonGroup}>
            <NavButton to="/Home" text="home" />
            <NavButton to="/Chat" text="Chat" />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

const NavButton = (props) => {
  const classes = useStyles();

  return (
    <Link className={classes.navButton} to={props.to}>
      <Button color="inherit">{props.text}</Button>
    </Link>
  );
};
export default NavBar;
