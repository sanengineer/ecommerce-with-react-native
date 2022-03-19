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
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator, Colors } from 'react-native-paper';
import { IconCrossBig, IconCrossSmall } from '../../assets';
import {
  Space,
  Header,
  Button,
  TextField,
  TextInput,
  NavHeader,
  Buttons,
} from '../../components';

import { authLoginAction } from '../../redux/actions/auth';

import { DismissKeyboard, KeyboardScrollUpForms, useForm } from '../../utils';

import base64 from 'base-64';
import FlashMessage, { showMessage } from 'react-native-flash-message';

const LogIn = ({ navigation, route }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    username: '',
    password: '',
  });

  const token = `${form.username}:${form.password}`;
  const encodedToken = base64.encode(token);
  const auth = useSelector(state => state.auth_login);

  const onSubmit = () => {
    if (form.username.length != 0 && form.password.length != 0) {
      dispatch(authLoginAction(encodedToken, navigation));
    } else {
      return showMessage({
        message: '⚠️',
        description: "Username and Password can't be empty",
        style: { backgroundColor: 'orange' },
      });
    }

    //debug
    // console.log('form:', form);
    console.log('token:', token);
    console.log('encoded', encodedToken);
    console.log('FORM_USERNAME:', form.username.length);
    console.log('FORM_PASSWORD:', form.password.length);
  };

  const onForgotPassword = () => {
    showMessage({
      message: '⚙️',
      description: 'Feature coming soon',
      style: { backgroundColor: '#000' },
    });
  };

  const space = Dimensions.get('screen').height / 28;

  //debug_all
  console.log('ROUTE:', route);
  console.log('AUTH: ', auth);

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
            <>
              {auth.loading ? (
                <></>
              ) : (
                <TouchableOpacity
                  onPress={() => navigation.navigate('Start Screen')}>
                  <IconCrossSmall />
                </TouchableOpacity>
              )}
            </>
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
            <Buttons.LG
              onPress={onSubmit}
              label={`Login`}
              isLoading={auth.loading}
            />
            <Space height={40} />
            {!auth.loading && (
              <Button
                label="Forgot Password"
                txtSize={12}
                radius={0}
                borderWidth={0}
                bgColor="#fff"
                textColor="#0030FF"
                fontFam="CircularStd-Bold"
                onPress={onForgotPassword}
              />
            )}
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
