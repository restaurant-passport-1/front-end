import React, { useState } from "react";
import { signup } from "../../actions";
import { connect } from "react-redux";

const Register = props => {
  const { signup } = props;
  const initialState = {
    username: "",
    password: "",
    name: "",
    city: "",
    email: ""
  };
  
  const [user, setUser] = useState(initialState);
  const { username, password, name, city, email } = user;

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    signup(user);
    setUser(initialState);



    //   
  };

  


  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="cols10 m8 l6">
            <h1 style={{ fontSize: "2rem" }}>
              Sign-up for Restaurant Passport
            </h1>
            <div className="card-panel grey lighten-4 black-text text-darken-4 z-depth-3">
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    value={username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    placeholder="Password"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    placeholder="name"
                  />
                </div>
                <div className="input-field">
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={handleChange}
                    placeholder="city"
                  />
                </div>
                <div className="input-field">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>

                <input
                  type="submit"
                  class="btn btn-large purple btn-extend"
                  value="signup"
                />
              </form>
              {error && <h5>{error}</h5>}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return { error: state.error };
};
export default connect(mapStateToProps, { signup })(Register);
