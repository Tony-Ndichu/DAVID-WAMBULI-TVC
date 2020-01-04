import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import contact from '../../assets/images/contact.jpg';
import MapContainerMobile from './MapContainerMobile';
import MapContainerDesktop from './MapContainerDesktop';
import contactus from '../../assets/images/contactus.jpg';

export const ContactDetails = () => {
  return (
    <Wrapper>
      <Container>
        <LeftSide>
          <SmallTitle>Reach Us</SmallTitle>
          <Title>Contact Details</Title>
          <Details>
            <Box>
              <Key>
                <FontAwesomeIcon icon="envelope-open-text" /> Mail
              </Key>
              <Value>P.0 BOX 3308 - 90100 MACHAKOS</Value>
            </Box>

            <Box>
              <Key>
                <FontAwesomeIcon icon="phone" /> PHONE:
              </Key>
              <Value>0743896827</Value>
            </Box>

            <Box>
              <Key>
                <FontAwesomeIcon icon="envelope" /> Email
              </Key>
              <Value>davidwambulitvc@gmail.com</Value>
            </Box>
          </Details>
        </LeftSide>

        <RightSide>
          <Outer>
            <Container2>
              <FeaturedImage />
              <Overlay />
            </Container2>
          </Outer>
        </RightSide>
      </Container>

      <Map id="map">
        <Padded>
          <SmallTitle>Find Us</SmallTitle>
          <Title>Location</Title>
        </Padded>

        <MapMobile id="mapmobile">
          <MapContainerMobile />
        </MapMobile>
        <MapDesktop id="mapdesktop">
          <MapContainerDesktop />
        </MapDesktop>
      </Map>
    </Wrapper>
  );
};
const LeftSide = styled.div`
  @media only screen and (min-width: 960px) {
    width: 40%;
    padding: 3% 10% 5% 10%;
  }
`;

const RightSide = styled.div`
  display: none;
  @media only screen and (min-width: 960px) {
    display: block;
    width: 70%;
  }
`;

const Outer = styled.div`
  display: flex;

  @media only screen and (min-width: 960px) {
    width: 100%;
  }
`;

const Container2 = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  @media only screen and (min-width: 960px) {
    height: 500px;
  }
`;

const FeaturedImage = styled.div`
  display: block;
  background-image: url(${contactus});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;

  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  @media only screen and (min-width: 960px) {
  }
`;

const Overlay = styled.div`
  display: block;
  border: 1px solid white;
  z-index: 3;
  width: 94%;
  height: 94%;
  position: absolute;
  margin: 0 auto;
  top: 3%;
  right: 3%;
`;

const MapMobile = styled.div`
  width: 100%;
  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const MapDesktop = styled.div`
  width: 100%;
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;

  @media only screen and (min-width: 960px) {
    margin-bottom: 3%;
  }
`;

const SmallTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Key = styled.div`
width: 100%;
font-size: 20px
margin-right: 10px;
font-family: 'Sumana',serif;
font-weight: bold;
`;

const Value = styled.div`
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  color: #333;
`;

const Map = styled.div`
  width: 100%;
  height: 500px;
`;

const Container = styled.div`
  padding: 10%;
  background-image: url(${contact});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 960px) {
    padding: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Padded = styled.div`
  padding: 15% 0 5% 10%;

  @media only screen and (min-width: 960px) {
    padding: 5% 0 1% 10%;
  }
`;

const Title = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2em;
  color: #0c2340;
  margin-top: 0;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    margin: 0.75rem 0 1.875rem 0;
    background: #ae9142;
  }
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ContactDetails;
