import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  secondaryBar: {
    backgroundColor: 'white'
  }
}));

export const SecondaryBar = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.secondaryBar}>
        <div className="navbar-mobile">
          <ul className="no-bullets">
            <li>
              <FontAwesomeIcon icon="home" size="2x" />
            </li>

            <li>
              <FontAwesomeIcon icon="images" size="2x" />
            </li>

            <li>
              <FontAwesomeIcon icon="envelope" size="2x" />
            </li>

            <li>
              <FontAwesomeIcon icon="bars" size="2x" />
            </li>
          </ul>
        </div>
      </AppBar>
    </div>
  );
};

export default SecondaryBar;
