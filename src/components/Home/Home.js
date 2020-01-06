import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Home = () => {
  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get('https://prisoner-skills-bw.herokuapp.com/api/users/')
      .then(response => {
        console.log(response.data);
        setState(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <h1>Welcome Everyone</h1>
      {state.map(item => {
        return <h5>{item.prisonName}</h5>;
      })}
    </div>
  );
};

export default Home;
