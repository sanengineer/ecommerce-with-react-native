import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';

import { useDispatch } from 'react-redux';
import { IconCrossBig, IconCrossSmall } from '../../assets';
import {
  Button,
  Header,
  NavHeader,
  Space,
  TextField,
  TextInput,
} from '../../components';

import { authRegisterAction } from '../../redux/actions/auth';
import TouchableScale from 'react-native-touchable-scale';
import { KeyboardScrollUpForms, useForm } from '../../utils';

const Register = ({ navigation }) => {
  const dispatch = useDispatch();

  const [form, setForm] = useForm({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const onSubmit = () => {
    dispatch(authRegisterAction(form, navigation));
    console.log(form);
  };

  return (
    <SafeAreaView style={styles.page}>
      <NavHeader title="" navGoBack={false} borderWidth={0}>
        <TouchableOpacity onPress={() => navigation.navigate('Start Screen')}>
          <IconCrossSmall />
        </TouchableOpacity>
      </NavHeader>
      <KeyboardScrollUpForms
        enabled
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          showsVerticalScrollIndicator={false}>
          <Header title="Register" showDesc={false} />
          <Space height={8} />
          <View style={styles.mainContainer}>
            <View style={styles.avaForm}>
              <View style={styles.avaBorder}>
                <TouchableScale tension={100}>
                  <View style={styles.addAvaTextContainer}>
                    <Text style={styles.addAvaText}>Add Avatar</Text>
                  </View>
                </TouchableScale>
              </View>
            </View>
            <TextInput
              label="Name"
              placeholder="name"
              value={form.name}
              onChangeText={e => setForm('name', e)}
            />
            <Space height={30} />
            <TextInput
              label="Username"
              placeholder="yourusername"
              value={form.username}
              onChangeText={e => setForm('username', e)}
            />
            <Space height={30} />
            <TextInput
              label="Email"
              placeholder="yourcoffee@email.com"
              value={form.email}
              onChangeText={e => setForm('email', e)}
            />
            <Space height={30} />

            <TextInput
              label="Password"
              placeholder="********"
              value={form.password}
              onChangeText={e => setForm('password', e)}
              secureTextEntry
            />
            <Space height={50} />

            <Button
              label="Register"
              radius={6}
              txtSize={14}
              bgColor="#0030FF"
              padSizeX={20}
              borderWidth={0}
              fontFam="CircularStd-Bold"
              txtDecorationLine="none"
              onPress={onSubmit}
            />
            <Space height={50} />
          </View>
        </ScrollView>
      </KeyboardScrollUpForms>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.compose({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'red',
  },
  mainContainer: {
    backgroundColor: '#fff',
    // backgroundColor: 'red',
    paddingHorizontal: 24,
    paddingBottom: 24,
    paddingTop: 24,
    marginTop: 0,
    flex: 1,
  },
  avaForm: {
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 30,
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
  addAvaTextContainer: {
    borderRadius: 90,
    height: 90,
    width: 90,
    backgroundColor: '#dedede',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addAvaText: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    textAlign: 'center',
    // backgroundColor: 'red',
  },
});
