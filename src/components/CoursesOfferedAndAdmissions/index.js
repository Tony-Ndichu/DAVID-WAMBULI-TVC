import React from 'react';
import styled from 'styled-components';
import courses from '../../assets/images/courses.jpg';
import computer from '../../assets/images/computer.png';

export const CoursesOfferedAndAdmissions = () => {
  return (
    <Wrapper>
      <ContentOne>
        <Outer>
          <Container>
            <FeaturedImage />
            <Overlay />
          </Container>
        </Outer>

        <Box style={{ marginTop: '5%' }}>
          <SmallTitle>STUDIES</SmallTitle>
          <TitleSpecial>Courses Offered</TitleSpecial>

          <Sub>Courses we offer include:</Sub>
          <Text>
            <Item>Artisan and Short Courses (Brochure Details)</Item>
            <Item>Certificate courses</Item>
            <Item>Diploma courses</Item>
          </Text>
        </Box>
      </ContentOne>

      <ContentTwoMobile>
        <Outer>
          <Container>
            <FeaturedImageTwo />
            <Overlay />
          </Container>
        </Outer>

        <Box>
          <SmallTitle>Beliefs</SmallTitle>
          <Title>Core Values</Title>

          <Sub>Admissions</Sub>
          <Text>
            <Item>Short/Artisan Courses</Item>
            <Item>Payment Procedure</Item>
            <Item>Government sponsoredm</Item>
            <Item>Self sponsored</Item>
            <Item>Continuous module</Item>
          </Text>
        </Box>
      </ContentTwoMobile>

      <ContentTwoDesktop>
        <BoxDesktop>
          <SmallTitle>Entry</SmallTitle>
          <Title>Admissions</Title>

          <Sub>Admissions</Sub>
          <Text>
            <Item>Short/Artisan Courses</Item>
            <Item>Payment Procedure</Item>
            <Item>Government sponsoredm</Item>
            <Item>Self sponsored</Item>
            <Item>Continuous module</Item>
          </Text>
        </BoxDesktop>

        <Outer>
          <Container>
            <FeaturedImageTwo />
            <Overlay />
          </Container>
        </Outer>
      </ContentTwoDesktop>
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
  flex-direction: column;
  background-color: white;
  margin-top: 20%;

  @media only screen and (min-width: 960px) {
    margin-top: 0;
  }
`;

const Outer = styled.div`
  display: flex;

  @media only screen and (min-width: 960px) {
    width: 50%;
    padding-top: 5%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 300px;
  position: relative;

  @media only screen and (min-width: 960px) {
    height: 400px;
  }
`;

const FeaturedImage = styled.div`
  display: block;
  background-image: url(${courses});
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

const FeaturedImageTwo = styled.div`
  display: block;
  background-image: url(${computer});
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

const Box = styled.div`
  padding: 10%;

  @media only screen and (min-width: 960px) {
    padding: 5%;
  }
`;

const BoxDesktop = styled.div`
  padding: 10%;

  @media only screen and (min-width: 960px) {
    padding: 10% 20% 5% 15%;
  }
`;

const Text = styled.ul`
  color: #333;
  font-family: 'Libre Franklin', sans-serif;

  @media only screen and (min-width: 960px) {
    font-size: 1rem;
  }
`;

const Item = styled.li``;

const Title = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2em;
  color: #0c2340;
  margin-top: 10%;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    margin: 0.75rem 0 1.875rem 0;
    background: #ae9142;
  }
`;

const TitleSpecial = styled.div`
  font-family: 'Anton', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2em;
  color: #0c2340;
  margin-top: 10%;

  &:after {
    content: '';
    display: block;
    width: 50px;
    height: 4px;
    margin: 0.75rem 0 1.875rem 0;
    background: #ae9142;
  }

  @media only screen and (min-width: 960px) {
    margin-top: 2%;
  }
`;

const Sub = styled.span`
  margin-bottom: 5%;
  font-family: 'Libre Franklin', sans-serif;
  color: white;

  @media only screen and (min-width: 960px) {
    font-size: 1.5rem;
  }
`;

const ContentOne = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
  }
`;

const ContentTwoMobile = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 960px) {
    display: none;
  }
`;

const ContentTwoDesktop = styled.div`
  display: none;
  @media only screen and (min-width: 960px) {
    display: flex;
    flex-direction: row;
  }
`;
export default CoursesOfferedAndAdmissions;
