import React from 'react';
import styled from 'styled-components';
import bg from '../../assets/images/bg.jpg';
import uni from '../../assets/images/uni.jpg';

export const Introduction = () => {
  return (
    <Wrapper>
      <Outer>
        <Container>
          <FeaturedImage />
          <Overlay />
        </Container>
      </Outer>

      <Text>
        <SmallTitle>About Us</SmallTitle>
        <Title>Who We Are</Title>

        <Description>
          <Span>
            David Mbiti Wambuli Vocational and Technical College is a registered
            National Technical and Vocational college located in Mbooni, Makueni
            County-Kenya.
          </Span>

          <Span>
            A college with a national and International outlook supported by
            comprehensive and flexible teaching strategies, first class
            trainers, state of the art training equipment and affordable
            hostels. An institution committed to responding to emerging global
            training needs.
          </Span>

          <Span>
            We pride ourselves in our deliberate focus on skill development,
            innovation and mentorship and training of first class graduates for
            the evolving world. Our programmes are market driven and flexible
            for a dynamic society.
          </Span>
        </Description>
      </Text>
    </Wrapper>
  );
};

const SmallTitle = styled.div`
  font-family: 'Oswald', sans-serif;
  color: #555;
  text-transform: uppercase;
  margin-bottom: 15px;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;

  @media only screen and (min-width: 960px) {
    flex-direction: row-reverse;
    background-image: url(${bg});
  }
`;

const Outer = styled.div`
  display: flex;

  @media only screen and (min-width: 960px) {
    width: 70%;
    padding-top: 5%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  @media only screen and (min-width: 960px) {
    height: 600px;
  }
`;

const FeaturedImage = styled.div`
  display: block;
  background-image: url(${uni});
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

const Text = styled.div`
  display: block;
  margin-top: 10%;
  padding: 10%;

  @media only screen and (min-width: 960px) {
    width: 30%;
    margin-top: 0;
  }
`;

const Description = styled.div`
  font-family: 'Libre Franklin', sans-serif;
`;

const Span = styled.span`
  display: block;
  float: left;
  margin-bottom: 20px;
`;

export default Introduction;
