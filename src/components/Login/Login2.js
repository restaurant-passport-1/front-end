import React, { useState } from "react";
import { login } from '../../actions';
import { connect } from 'react-redux';

const Register = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: ""
    
  });
const { username, password } = user;




  

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      props.login(user);
      setUser({
          username:'',
          password: ''
      });
      props.history.push('/');
     
  }
 

  return (
    <div>
      <div className="container center">
        <div className="row">
          <div className="col s8 offset-s2 m6 offset-m3 l6 offset-l3">
            <h1 style={{ fontSize: "2rem" }}>
              Login for Restaurant Passport
            </h1>
            <div className="card-panel grey lighten-4 black-text text-darken-4 z-depth-3">
              <form onSubmit= {handleSubmit} >
                <div className="input-field">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                    placeholder='Username'
                    required
                  />
                 
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder='Password'
                    onChange={handleChange}
                    required
                  />
                  
                </div>
                
                <input
                  type="submit"
                  class="btn btn-large purple waves-effect "
                  value="login"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => (
    {username: state.username }
)
export default connect(mapStateToProps, {login})(Register);
