import React from 'react';
import appLayoutStyles from '../App.module.css';

const AboutPage: React.FC = () => {
  return (
    <section className={appLayoutStyles.contentSection}>
      <h2>About Our Company</h2>
      <p>We are dedicated to providing the best products and services to our customers worldwide. Our mission is to innovate and deliver excellence.</p>
      <p>Founded in 2023, we have grown rapidly, thanks to our passionate team and loyal customers.</p>
      <p>Our commitment to quality and customer satisfaction sets us apart. We believe in creating memorable experiences for everyone who interacts with our brand.</p>
    </section>
  );
};

export default AboutPage;