import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { LandingHeader } from './Headers';
import PopularArticles from './PopularArticles';
import '../style/landing.css';

const Landing = props => {
  
  useEffect(() => {
    props.history.push('/addCourses');
  }, []);

  return (
    <div>
      <LandingHeader />
      <div className="landing">
        {/* <PopularArticles /> */}
        <h1>this is home page</h1>
        <Link to="/login">
          <button className="button--solid">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
