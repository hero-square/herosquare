import React, { useState } from 'react';
// import { useFetchAPI } from './customHooks';
import AddClass from './AddClasses/AddClass';
import CurrentClasses from './AddClasses/currentClasses'

const AddClassesContainer = props => {
  const [classes, setClasses] = useState([]);
  //load categories and other class data
  // const url = '';
  // const catalogue = useFetchAPI(url,{isLoading:true, data:null});
  return (
    <div>
      <CurrentClasses classes={classes} />
      <AddClass classes={classes} setClasses={setClasses} />

    </div>
  );
};

export default AddClassesContainer;
