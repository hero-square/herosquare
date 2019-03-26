import React,{useState} from 'react';

const AddClass = props => {
  const [department, setDepartment] = useState('');
  const [classID, setClassID] = useState('');
  const {setClasses} = props;

  const handleChange = ({ name, value }) => {
    const f = { setDepartment, setClassID };
    console.log(name, value);
    f[`set${name}`](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // fetch class data with classID here
    //TODO display all the relevant classes in the display div
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="Department"
          placeholder="Department"
          type="text"
          value={department}
          onChange={e => handleChange(e.target)}
        />
        <input
          name="ClassID"
          placeholder="Class"
          type="text"
          value={classID}
          onChange={e => handleChange(e.target)}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <p>this shows a clickable list of each of the classes available</p>
      </div>
    </div>
  );
};

export default AddClass;