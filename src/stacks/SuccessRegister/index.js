import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Space, TextField } from '../../components';

const SuccessRegister = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 24, paddingVertical: 24, flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 140,
            textAlign: 'center',
            paddingBottom: 50,
          }}>
          🎉
        </Text>
        <TextField
          textField="Register Success"
          fontFamily="CircularStd-Bold"
          fontSize={25}
        />
        <Space height={10} />
        <TextField
          textField="Let's Login and Grab Your Coffee!"
          fontFamily="CircularStd-Medium"
          fontSize={15}
        />
        <Space height={50} />
        <Button
          txtDecorationLine="none"
          fontFam="CircularStd-Bold"
          txtSize={16}
          label="Login"
          padSizeX={20}
          padSizeY={60}
          onPress={() => navigation.replace('Log In', 'success_register')}
        />
      </View>
    </View>
  );
};

export default SuccessRegister;

const styles = StyleSheet.create({});
