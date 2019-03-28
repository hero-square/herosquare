import React, { useState } from 'react';
// import { useFetchAPI } from './customHooks';
import AddCourse from './AddCourse/AddCourse';
import CurrentCourses from './AddCourse/CurrentCourses';
import DisplayPossiblCourses from './AddCourse/DisplayPossibleCourses';
import '../style/courses.css';

const AddCoursesContainer = props => {
  const [courses, setCourses] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  //load categories and other class data
  // const url = '';
  // const catalogue = useFetchAPI(url,{isLoading:true, data:null});

  return (
    <div className="course__container">
        <div className="course__current">
          <CurrentCourses courses={courses} />
        </div>
        <div className="course__finder">
          <AddCourse courses={courses} setCourses={setCourses} />
        </div>
        <div className='course__potential'></div>
        <CurrentCourses courses={courses} />
    </div>
  );
};

export default AddCoursesContainer;
