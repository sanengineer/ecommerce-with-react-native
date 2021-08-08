import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { IconCrossBig } from '../../assets';
import {
  Button,
  Header,
  NavHeader,
  Space,
  TextField,
  TextInput,
} from '../../components';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    console.log(username);
  };

  return (
    <View style={styles.page}>
      <Space height={40} />
      <NavHeader title="" navGoBack={false} borderWidth={0}>
        <TouchableOpacity onPress={() => navigation.navigate('Start Screen')}>
          <IconCrossBig />
        </TouchableOpacity>
      </NavHeader>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        <Header title="Register" showDesc={false} />
        <View style={styles.mainContainer}>
          <View style={styles.avaForm}>
            <View style={styles.avaBorder}>
              <View style={styles.addAvaTextContainer}>
                <Text style={styles.addAvaText}>Add Avatar</Text>
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
            radius={6}
            txtSize={14}
            bgColor="#0030FF"
            padSizeX={20}
            borderWidth={0}
            fontFam="CircularStd-Bold"
            txtDecorationLine="none"
          />
          <Space height={50} />
        </View>
      </ScrollView>
      <Text></Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.compose({
  page: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    backgroundColor: '#fff',
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
    padding: 10,
    justofyContent: 'center',
  },
  addAvaText: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    textAlign: 'center',
    top: 12,
  },
});
