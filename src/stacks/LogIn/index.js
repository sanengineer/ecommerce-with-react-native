import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { IconCrossBig } from '../../assets';
import {
  Space,
  Header,
  Button,
  TextField,
  TextInput,
  NavHeader,
} from '../../components';

import { DismissKeyboard, KeyboardScrollUpForms, useForm } from '../../utils';

const LogIn = ({ navigation, route }) => {
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form:', form);
  };

  //debug
  console.log('ROUTE:', route);
  return (
    <DismissKeyboard>
      <View style={styles.page}>
        <KeyboardScrollUpForms
          enabled
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
          <Space height={30} />
          <NavHeader
            borderWidth={0}
            showSpaceLeft={true}
            navGoBack={false}
            title="">
            {route.params === 'success_register' ? (
              <></>
            ) : (
              <TouchableOpacity
                onPress={() => navigation.navigate('Start Screen')}>
                <IconCrossBig />
              </TouchableOpacity>
            )}
          </NavHeader>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            showsVerticalScrollIndicator={false}>
            <Header
              title="Login"
              desc="For buying drinks and beverages, login first. 🤝"
            />
            <View style={styles.container}>
              <TextInput
                label="Email"
                placeholder="mylatte@coffee.com"
                onChangeText={value => setForm('email', value)}
              />
              <Space height={30} />
              <TextInput
                label="Password"
                placeholder="******"
                onChangeText={value => setForm('password', value)}
                secureTextEntry
              />
              <Space height={50} />
              <Button
                label="Log In"
                radius={6}
                txtSize={14}
                bgColor="#0030FF"
                padSizeX={20}
                borderWidth={0}
                fontFam="CircularStd-Bold"
                txtDecorationLine="none"
                onPress={() => navigation.replace('MainApp')}
              />
              <Space height={40} />
              <Button
                label="Forgot Password"
                txtSize={12}
                radius={0}
                borderWidth={0}
                bgColor="#fff"
                textColor="#0030FF"
                fontFam="CircularStd-Bold"
                onPress={() => navigation.navigate('Register')}
              />
            </View>
          </ScrollView>
        </KeyboardScrollUpForms>
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.compose({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 24,
    marginTop: 0,
    flex: 1,
  },
});

export default LogIn;
