import React from 'react';
import { Header } from '../components/Header';
import { CoursesOfferedAndAdmissions } from '../components/CoursesOfferedAndAdmissions';
import { CourseTable } from '../components/CourseTable';

export const Academics = () => (
  <>
    <Header />
    <CoursesOfferedAndAdmissions />
    <CourseTable />
  </>
);

export default Academics;
