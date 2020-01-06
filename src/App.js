import React from 'react';
import store from './store';
import { Provider } from 'react-redux';
import './App.css';
import SignupForm from './components/signup';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
          <SignupForm />
      </div>
    </Provider>
    
  );
}

export default App;
