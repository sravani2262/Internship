// AboutUs.js

import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  // Dummy data for images and descriptions
  const data = [
    {
      id: 1,
      title: "Company XYZ",
      image: "https://res.cloudinary.com/deryas3xc/image/upload/v1712820919/th_2_xkpkxa.jpg",
      description: "Company XYZ is dedicated to providing high-quality products and services to our customers. With a focus on innovation and customer satisfaction, we strive to exceed expectations in every aspect of our business operations. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies urna id arcu interdum.",
    },
    {
      id: 2,
      title: "Company ABC",
      image: "https://res.cloudinary.com/deryas3xc/image/upload/v1712820912/th_3_olafou.jpg",
      description: "At Company ABC, we are committed to delivering excellence. Our team of experts works tirelessly to develop cutting-edge solutions and deliver exceptional results to our clients. Customer success is at the heart of everything we do. Vivamus nec magna ac ligula facilisis tempor.",
    },
    {
      id: 3,
      title: "Company DEF",
      image: "https://res.cloudinary.com/deryas3xc/image/upload/v1712820967/th_1_gnpnw3.jpg",
      description: "Company DEF is a leader in the industry, known for our integrity and dedication to excellence. We pride ourselves on fostering a culture of collaboration and innovation, driving positive change and making a lasting impact in the communities we serve. Nullam et urna at nunc varius ullamcorper.",
    },
  ];

  return (
    <div className="about-us-container">
      
      {data.map(item => (
        <div className="about-us-item" key={item.id}>
          <div className="image-container">
            <img src={item.image} alt={item.title} className="about-us-image" />
          </div>
          <div className="description-container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
