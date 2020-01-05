import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { CoursesOfferedAndAdmissions } from '../components/CoursesOfferedAndAdmissions';
import { CourseTable } from '../components/CourseTable';
import { ShortCourses } from '../components/ShortCourses';

export const Academics = () => (
  <>
    <Header />
    <CoursesOfferedAndAdmissions />

    <Container>
      <Title>Course Table</Title>

      <CourseTable />
    </Container>

    <ContainerTwo>
      <Title>Short Courses</Title>
      <ShortCourses />
    </ContainerTwo>
  </>
);

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

const Container = styled.div`
  border-radius: 10px;
  width: 95%;
  margin-bottom: 10%;
  display: block;
  margin: 0 auto;

  @media only screen and (min-width: 960px) {
    width: 80%;
  }
`;

const ContainerTwo = styled.div`
  border-radius: 10px;
  width: 95%;
  display: block;
  margin: 0 auto;
  margin-bottom: 10%;

  @media only screen and (min-width: 960px) {
    width: 80%;
  }
`;
export default Academics;
