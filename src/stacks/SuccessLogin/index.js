import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Space, TextField } from '../../components';

const SuccessLogin = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 24, paddingVertical: 24, flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 140, textAlign: 'center', paddingBottom: 50 }}>
          🎉
        </Text>
        <TextField
          textField="Login Success"
          fontFamily="CircularStd-Bold"
          fontSize={25}
        />
        <Space height={10} />
        <TextField
          textField="Grab Your Drink, Now!"
          fontFamily="CircularStd-Medium"
          fontSize={15}
        />
        <Space height={20} />
        <Button
          fontFam="CircularStd-Bold"
          txtSize={20}
          label="Let's Roll"
          bgColor="transparent"
          textColor="#000"
          txtDecorationLine="none"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default SuccessLogin;

const styles = StyleSheet.create({});
