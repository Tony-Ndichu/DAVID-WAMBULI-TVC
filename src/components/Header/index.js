import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Sticky from 'react-sticky-el';
import ShieldLogo from '../../assets/images/shield.svg';
import { SecondaryBar } from '../SecondaryBar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    borderTop: 'solid 5px #AE9042'
  },
  headerStyle: {
    display: 'flex',
    backgroundColor: '#0c2340',
    flexWrap: 'nowrap'
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
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });
  console.log('trigger===>', trigger);

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
              <Item>Home</Item>
              <Item>Gallery</Item>
              <Item>Media Center</Item>
              <Item>Contacts</Item>
              <Item>Charges</Item>
            </MenuItems>
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Sticky className="non-sticky">
        <SecondaryBar />
      </Sticky>

      <Cont>
        <Box my={2}>
          {[...new Array(70)]
            .map(
              () => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
            )
            .join('\n')}
        </Box>
      </Cont>
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
const Cont = styled.div`
  width: 100%;
`;

const MenuItems = styled.div`
  display: none;
  flex-wrap: nowrap;

  @media only screen and (min-width: 960px) {
    display: flex;
  }
`;

const Item = styled.div`
  @media only screen and (min-width: 960px) {
    padding: 0px 20px 0px 20px;
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
