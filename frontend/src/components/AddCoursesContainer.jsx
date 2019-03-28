import React, { useState } from 'react';
// import { useFetchAPI } from './customHooks';
import AddCourse from './AddCourse/AddCourse';
import CurrentCourses from './AddCourse/CurrentCourses'
import '../style/courses.css'

const AddCoursesContainer = props => {
  const [courses, setCourses] = useState([1,2,3,4,5,6,7,8,9]);
  //load categories and other class data
  // const url = '';
  // const catalogue = useFetchAPI(url,{isLoading:true, data:null});

  return (
    <div className='course__container'>
      <CurrentCourses courses={courses} />
      <AddCourse courses={courses} setCourses={setCourses} />
    </div>
  );
};

export default AddCoursesContainer;
