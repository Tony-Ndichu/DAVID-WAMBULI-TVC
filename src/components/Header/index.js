import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Sticky from 'react-sticky-el';
import { Link } from 'react-router-dom';
import ShieldLogo from '../../assets/images/shield.svg';
import SecondaryBar from '../SecondaryBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderTop: 'solid 5px #AE9042'
  },
  headerStyle: {
    display: 'flex',
    backgroundColor: '#0c2340',
    flexWrap: 'nowrap',
    borderBottom: '6px solid #081629'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: {
    margin: '0 auto',
    display: 'flex',
    minHeight: 128,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    paddingLeft: '0px',
    paddingRight: '0px',

    [theme.breakpoints.up('md')]: {
      width: '100%',
      justifyContent: 'space-around',
      minHeight: 80
    }
  },
  title: {
    flexGrow: 1,
    alignSelf: 'center'
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export const Header = props => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="boundary">
      <HideOnScroll {...props}>
        <AppBar position="static" className={classes.headerStyle}>
          <Toolbar className={classes.toolbar} id="tools">
            <LeftSide>
              <Logo src={ShieldLogo} alt="logo" />
              <Title>
                <Main>David Mbiti Wambuli </Main>
                <Sub>Vocational and Technical College</Sub>
              </Title>
            </LeftSide>

            <MenuItems id="menus">
              <Link
                to="/home"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                <Item>Home</Item>
              </Link>
              <Link
                to="/academics"
                style={{ textDecoration: 'none', color: 'white' }}
              >
                {' '}
                <Item>Academics</Item>
              </Link>

              <Link
                to="/contact"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                {' '}
                <Item>Contacts</Item>
              </Link>

              <Link
                to="#"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  cursor: 'pointer'
                }}
              >
                {' '}
                <Item>Media Center</Item>
              </Link>
            </MenuItems>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Sticky className="non-sticky">
        <SecondaryBar />
      </Sticky>
    </div>
  );
};

const LeftSide = styled.div`
  display: flex;
  width: 330px;
  height: 100px;
  align-items: center;
  margin-right: 10%;

  @media only screen and (min-width: 960px) {
    width: 350px;
  }
`;

const MenuItems = styled.div`
  display: none;
  flex-wrap: nowrap;

  @media only screen and (min-width: 960px) {
    display: flex;
  }
`;

const Item = styled.div`
  font-family: 'Oswald', sans-serif;
  font-size: 0.75rem;

  @media only screen and (min-width: 960px) {
    padding: 0px 20px 0px 20px;
    font-size: 1.125rem;
  }
`;

const Logo = styled.img`
  width: 70px;
`;

const Title = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-itens: center;
  font-family: 'Abril Fatface', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Main = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media only screen and (min-width: 960px) {
    font-size: 22px;
  }
`;

const Sub = styled.div`
  text-align: center;
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;

  @media only screen and (min-width: 960px) {
    font-size: 18px;
  }
`;

export default Header;
