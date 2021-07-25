import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Platform } from 'react-native';
import { Button, Header, Space, TextField, TextInput } from '../../components';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(username);
  };

  return (
    <View style={styles.page}>
      <Space height={20} />
      <Header title="Register" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <View style={styles.avatar}>
            <View style={styles.avaBorder}>
              <View style={styles.avaContainer}>
                <Text style={styles.addAva}>Add Avatar</Text>
              </View>
            </View>
          </View>
          <TextInput
            label="Username"
            placeholder="yourusername"
            value={username}
            onChangeText={e => setUsername(e)}
          />
          <Space height={30} />
          <TextInput
            label="Email"
            placeholder="yourcoffee@email.com"
            value={email}
            onChangeText={e => setEmail(e)}
          />
          <Space height={30} />
          <TextInput
            label="Password"
            placeholder="********"
            value={password}
            onChangeText={e => setPassword(e)}
            secureTextEntry
          />
          <Space height={50} />
          <Button
            label="Register"
            txtDecorationLine="none"
            fontFam="CircularStd-Bold"
            onPress={() => onSubmit()}
          />
          <Space height={50} />
          <TextField textField="Have An Account?" />
          <Button
            label="Login Please"
            txtSize={12}
            bgColor="#fff"
            textColor="#000"
            fontFam="CircularStd-Bold"
            onPress={() => navigation.navigate('LogIn')}
          />
        </View>
      </ScrollView>
      <Text></Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 0,
    flex: 1,
  },

  page: {
    flex: 1,
    backgroundColor: '#fff',
  },

  addAva: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    textAlign: 'center',
    top: 12,
  },
  avaBorder: {
    borderRadius: 110,
    height: 110,
    width: 110,
    borderStyle: 'solid',
    borderColor: '#dedede',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avaContainer: {
    borderRadius: 90,
    height: 90,
    width: 90,
    backgroundColor: '#dedede',
    padding: 10,
    justofyContent: 'center',
  },
  avatar: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 50,
  },
});
