import React from 'react';
import CourseItem from './CourseItem';

const CurrentCourses = props => {
  let { courses } = props;


  return (
    <div className='courses__current'>
      {courses.map(course => (
        <CourseItem course={course} />
      ))}
    </div>
  );
};

export default CurrentCourses;
