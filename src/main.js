import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getData } from './utils';
import DeviceInfo from 'react-native-device-info';
import { Platform, StatusBar, View } from 'react-native';
import { Space } from './components';

function App(props) {
  const [data, setData] = useState();

  useEffect(() => {
    getData('user').then(user => {
      //debug
      console.log('TOKEN - MAIN_JS:', user);
      setData(user);
    });
  }, []);

  //
  //debug
  console.log('PROPS:', props);
  console.log('DATA:', data);
  console.log(
    'DEVICE_INFO:',
    DeviceInfo.getMacAddress().then(e => {
      console.log(e);
    }),
  );

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
