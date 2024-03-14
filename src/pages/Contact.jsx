import React from 'react'
import BackButton from '../components/BackButton';

const Contact = () => {

   const url = window.location.pathname;

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="text-lg px-4">
        Contact gegevens en contact formulier
      </div>
      <BackButton url={url} />
    </div>
  );
}

export default Contact
