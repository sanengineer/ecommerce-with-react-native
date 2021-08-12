import React, { useEffect } from 'react';
import { StyleSheet, View, ImageBackground, StatusBar } from 'react-native';
import { ImageHeaderBgBlue } from '../../assets';
import { getData } from '../../utils';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    getData('user').then(user => {
      //debug
      console.log('token_home_stack:', user);

      setTimeout(() => {
        if (user) {
          navigation.reset({ index: 0, routes: [{ name: 'MainApp' }] });
        } else {
          navigation.reset({ index: 0, routes: [{ name: 'Start Screen' }] });
        }
      }, 2000);
    });
  }, []);

  return (
    <View style={styles.mainContainer}>
      {Platform.OS === 'android' && <StatusBar backgroundColor="#000000" />}
      <ImageBackground
        source={ImageHeaderBgBlue}
        style={styles.bg}
        resizeMode="cover"></ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#0030FF',
  },
  bg: {
    // backgroundColor: 'red',
    flex: 1,
    // resizeMode: 'contain',
    // flex: 1,
    // flex: 1,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // width: '100%',
    // height: '100%',
  },
});
