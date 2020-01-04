import React from 'react';
import styled from 'styled-components';
import vision from '../../assets/images/vision.jpg';

export const VisionAndMission = () => {
  return (
    <Wrapper>
      <Container>
        <Image />
      </Container>

      <Texts>
        <TextOne>
          <SmallTitle>Purpose</SmallTitle>
          <Title>Vision</Title>
          <Description>
            To be a Centre of Excellence in the provision of innovative
            Technical Vocational Education and Training (TVET) programs.
          </Description>
        </TextOne>

        <TextTwo>
          <Title>Mission</Title>
          <Description>
            To nurture and impart TVET knowledge, skills and attitudes through
            research, innovation and technology for self-reliance and National
            development.
          </Description>
        </TextTwo>
      </Texts>
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
  justify-content: center;

  @media only screen and (min-width: 960px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
const Image = styled.div`
  background-image: url(${vision});
  width: 90%;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media only screen and (min-width: 960px) {
    height: 400px;
    width: 100%;
  }
`;

const Texts = styled.div``;

const TextOne = styled.div`
  justify-content: center;
  padding: 10% 10% 2% 10%;
`;

const TextTwo = styled.div`
  justify-content: center;
  padding: 10% 10% 2% 10%;
`;

const Title = styled.div`
  display: block;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 1.25em;
  font-family: 'Sumana', serif;
  color: #0c2340;
  margin-bottom: 5%;
`;

const Description = styled.div`
  width: 100%;
  font-family: 'Libre Franklin', sans-serif;
  color: #333;
`;
export default VisionAndMission;
