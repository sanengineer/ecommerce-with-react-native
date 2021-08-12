import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { IconCrossBig, IconCrossSmall } from '../../assets';
import {
  Space,
  Header,
  Button,
  TextField,
  TextInput,
  NavHeader,
} from '../../components';

import { authLoginAction } from '../../redux/actions/auth';

import { DismissKeyboard, KeyboardScrollUpForms, useForm } from '../../utils';

import base64 from 'base-64';
import FlashMessage from 'react-native-flash-message';

const LogIn = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const token = `${form.username}:${form.password}`;
  const encodedToken = base64.encode(token);

  const onSubmit = () => {
    dispatch(authLoginAction(encodedToken, navigation));

    //debug
    console.log('form:', form);
    console.log('token:', token);
    console.log('encoded', encodedToken);
  };

  const space = Dimensions.get('screen').height / 28;

  //debug
  console.log('ROUTE:', route);
  return (
    <SafeAreaView style={styles.page}>
      <KeyboardScrollUpForms
        enabled
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        {Platform.OS === 'android' && <StatusBar backgroundColor="#000000" />}
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
              <IconCrossSmall />
            </TouchableOpacity>
          )}
        </NavHeader>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <Space height={space} />
          <Header
            title="Login"
            desc="For buying drinks and beverages, login first. 🤝"
          />
          <View style={styles.container}>
            <TextInput
              label="Username"
              placeholder="mylattecoffee"
              onChangeText={value => setForm('username', value)}
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
              onPress={onSubmit}
              // onPress={() => navigation.replace('MainApp')}
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
      <FlashMessage
        // ref={showMessage}
        style={{ backgroundColor: 'red' }}
        textStyle={{ fontFamily: 'CircularStd-Bold' }}
        hideOnPress={true}
        duration={4000}
      />
    </SafeAreaView>
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
