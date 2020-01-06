import React, {useState, useEffect} from 'react';
import axios from 'axios';
import RestaurantList from '../RestaurantList/RestaurantList';

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
      {state.map(list => {
        return <RestaurantList list={list} key={list.id} />;
      })}
    </div>
  );
};

export default Home;
