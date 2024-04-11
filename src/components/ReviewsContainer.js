// ReviewsContainer.js

import React from 'react';
import './ReviewsContainer.css';

const reviewsData = [
  {
    id: 1,
    name: "Amit Shah",
    imageUrl:"https://res.cloudinary.com/deryas3xc/image/upload/v1712826509/th_7_oifwee.jpg",
    review: "I must say,it's been an incredible learning experience so far."
  },
  {
    id: 2,
    name: "John Doe",
    imageUrl:"https://res.cloudinary.com/deryas3xc/image/upload/v1712828114/maxresdefault_2_dsmrzw.jpg",
    review: "They help me gauge my understanding of the material and identify areas whereneed to focus more attention"
  },
  {
    id: 3,
    name: "John Doe",
    imageUrl:"https://res.cloudinary.com/deryas3xc/image/upload/v1712828107/maxresdefault_1_f8uyer.jpg",
    review: "Enrolling in the NEET course was one of the best decisions I made. The instructors were knowledgeable, and the course materials were up-to-date. I felt well-prepared on exam day."
  },
  {
    id: 4,
    name: "John Doe",
    imageUrl:"https://res.cloudinary.com/deryas3xc/image/upload/v1712828161/neet-ug-top-rankers-2023-copy-1686736964_djvucu.jpg",
    review: "The NEET course exceeded my expectations. The interactive lessons and regular assessments kept me engaged, and I felt confident going into the exam."
  },
  
];

const ReviewsContainer = () => {
  return (
    <div className="reviews-container">
      {reviewsData.map((review) => (
        <div key={review.id} className="single-container m-3">
          <img
            src={review.imageUrl}
            className="images"
            alt="avatar"
          />
          <div className="reviews-card">
            <h1 className="name">{review.name}</h1>
            <p className="review">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewsContainer;
