import React, { useEffect, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { LogoCoffeeShop } from '../../assets';
import { Button, Space } from '../../components';

const StartScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.mainContainer}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: Dimensions.get('screen').height / 3,
          }}>
          <LogoCoffeeShop />
        </View>

        <View style={styles.buttonContainer}>
          <Button
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
          />
          <Space height={30} />
          <Button
            label="Register"
            radius={6}
            txtSize={14}
            bgColor="transparent"
            padSizeX={20}
            borderWidth={0}
            fontFam="CircularStd-Bold"
            txtDecorationLine="none"
            onPress={() => navigation.navigate('Register')}
          />
          <Space height={40} />
        </View>
      </View>
    </SafeAreaView>
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
  },
});
