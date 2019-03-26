import React, { useState, useEffect } from 'react';
import { useFetchAPI } from './customHooks';

const AddClasses = props => {
  const [classes, setClasses] = useState([]);
  const [department, setDepartment] = useState('');
  const [classID, setClassID] = useState('');
  //load categories and other class data
  // const url = '';
  // const catalogue = useFetchAPI(url,{isLoading:true, data:null});
  const handleSubmit = e => {
    e.preventDefault();
    // fetch class data with classID here
    const newClass = {};

    setClasses([...classes, newClass]);
  };

  const handleChange = ({ name, value }) => {
    const f = { setDepartment, setClassID };
    console.log(name, value);
    f[`set${name}`](value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Department"
          type="text"
          value={department}
          onChange={e => handleChange(e.target)}
        />
        <input
          name="ClassID"
          type="text"
          value={classID}
          onChange={e => handleChange(e.target)}
        />
      </form>
    </div>
  );
};

export default AddClasses;
