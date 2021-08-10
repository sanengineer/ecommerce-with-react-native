import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getData } from './utils';

function App(props) {
  const [data, setData] = useState();

  useEffect(() => {
    getData('user').then(user => {
      //debug
      console.log('token_home_stack:', user.tokenString);

      setData(user);
    });
  }, []);

  //
  //debug
  console.log('PROPS:', props);
  console.log('DATA:', data);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
