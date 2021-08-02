import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import { Button, NavHeader, TextPlainNav } from '../../components';
import { ImageProfileSan } from '../../assets';
import { Touchable } from 'react-native';
import { TouchableOpacity } from 'react-native';

const data = {
  username: 'sanengineer',
  email: 'sanenginer@email.com',
  avatar: ImageProfileSan,
};

const Account = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      <View style={styles.avaContainer}>
        <ImageBackground source={ImageProfileSan} style={styles.avatar}>
          <TouchableOpacity
            style={{
              top: 140,
              backgroundColor: 'black',
              paddingVertical: 13,
              alignItems: 'center',
              opacity: 0.8,
            }}>
            <View>
              <Text
                style={{
                  color: '#fff',
                  fontFamily: 'CircularStd-Bold',
                  fontSize: 14,
                }}>
                Edit
              </Text>
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <TextPlainNav title="Username" subtitle={data.username}>
        <Button
          label="Edit"
          txtSize={14}
          textColor="#bdbdbd"
          txtDecorationLine="none"
          bgColor="transparent"
        />
      </TextPlainNav>
      <TextPlainNav title="Email" subtitle={data.email}>
        <Button
          label="Edit"
          txtSize={14}
          textColor="#bdbdbd"
          bgColor="transparent"
          txtDecorationLine="none"
        />
      </TextPlainNav>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  avaContainer: {
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 50,
    // backgroundColor: 'red',
  },
  avatar: {
    overflow: 'hidden',
    borderRadius: 60,
    width: 180,
    height: 180,
  },
});
