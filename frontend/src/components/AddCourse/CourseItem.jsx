import React from 'react';

const CourseItem = props => {
  return (
    <div className = 'course__item'>
      <h2>title</h2>
      <p>description</p>
      <p>teacher</p>
      <p>time</p>
      <button>remove</button>
    </div>
  );
};

export default CourseItem;
