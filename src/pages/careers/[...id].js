import Banner from '@/components/UI/Positions/Banner';
import ContactForm from '@/components/UI/Positions/ContactForm';
import Description from '@/components/UI/Positions/Description';
import BackIcon from '@/components/icons/BackIcon';
import Link from 'next/link';
import React from 'react';

const Position = () => {
  return (
    <div>
      <Banner />
      <Description />
      <ContactForm />
    </div>
  );
};

export default Position;