import React, { useEffect } from 'react';
import { Header } from '../components/Header';
import { ContactDetails } from '../components/ContactDetails';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <ContactDetails />
    </>
  );
};

export default Contact;
