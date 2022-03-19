import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';
import { ImageHeaderBgBlue, LogoCoffeeShop } from '../../assets';
import { Button, Buttons, Space } from '../../components';

const StartScreen = ({ navigation }) => {
  return (
    <View style={styles.safeContainer}>
      {Platform.OS === 'android' && <StatusBar backgroundColor="#000000" />}
      <ImageBackground
        style={styles.mainContainer}
        source={ImageHeaderBgBlue}
        resizeMode="cover">
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: Dimensions.get('screen').height / 3,
          }}>
          <LogoCoffeeShop />
        </View>
        <View style={styles.buttonGroup}>
          <View style={styles.buttonContainer}>
            {/* <Button
              label="Log In"
              radius={6}
              txtSize={14}
              textColor="#0030FF"
              bgColor="#fff"
              padSizeX={20}
              borderWidth={0}
              fontFam="CircularStd-Bold"
              txtDecorationLine="none"
              onPress={() => navigation.navigate('Log In')}
            /> */}
            <Buttons.LG
              onPress={() => navigation.navigate('Log In')}
              label="Login"
              bgColor="#fff"
              textColor="#0030FF"
              height={60}
            />
          </View>
          <Space height={30} />
          {/* <Button
            label="Register"
            radius={6}
            txtSize={14}
            bgColor="green"
            padSizeX={20}
            borderWidth={0}
            fontFam="CircularStd-Bold"
            txtDecorationLine="none"
            // onPress={() => navigation.navigate('Register')}
          /> */}
          <View style={{ ...styles.buttonContainer, width: '30%' }}>
            <Buttons.LG
              onPress={() => navigation.navigate('Register')}
              label="Register"
              height={30}
            />
          </View>
          <Space height={40} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#0030FF',
  },
  mainContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    flex: 1,
    paddingVertical: Dimensions.get('screen').height / 100,
  },
  buttonGroup: {
    // backgroundColor: 'green',
    // flex: 1,
    height: 200,
    alignItems: 'center',
    // flexDirection: 'column',
  },
  buttonContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    // flex: 1,
    // height: 200,
  },
});
