import React from 'react';
import CourseItem from './CourseItem';

const CurrentCourses = props => {
  let { courses } = props;

  return (
    <div className="currentcourses">
      <h1 className="currentcourses__title">Current Courses</h1>
      <div className="currentcourses__courses">
        {courses.map(course => (
          <CourseItem course={course} />
        ))}
      </div>
    </div>
  );
};

export default CurrentCourses;
