import React, {useState, useEffect} from 'react';

const RestaurantDetail = props => {
  const [state, setState] = useState([]);

  const id = props.match.params.id;

  useEffect(() => {
    axios
      .get(`https://prisoner-skills-bw.herokuapp.com/api/users/${id}`)
      .then(response => {
        console.log(response.data);
      })
      .catch();
  }, []);

  return (
    <div>
      <h1> Welcome to single restaurant</h1>
    </div>
  );
};

export default RestaurantDetail;
