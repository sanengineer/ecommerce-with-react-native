import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TouchableOpacity,
} from 'react-native';

import { IconContainer, IconTextNav, ListText, Space } from '../../components';
import { IconArrowRight, ImageProfileSan } from '../../assets';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.containerStack}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.subContainerStack}>
          <View style={styles.avaNameEmailContainer}>
            <View style={styles.avaContainer}>
              <Image source={ImageProfileSan} style={styles.avatar} />
            </View>
            <Space height={10} />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>San Engineer</Text>
            </View>
            <Space height={6} />
            <View style={styles.emailContainer}>
              <Text style={styles.email}>san@email.com</Text>
            </View>
          </View>
          <Space height={50} />
          <View style={styles.mainContainer}>
            <IconTextNav
              icon="🧬"
              text="Bio"
              onPress={() => navigation.navigate('Bio')}
            />

            <IconTextNav
              icon="🚚"
              text="Shipping"
              onPress={() => navigation.navigate('Shipping')}
            />

            <IconTextNav
              icon="🔐"
              text="Security"
              onPress={() => navigation.navigate('Security')}
            />
            <Space height={63} />

            <IconTextNav
              icon="🤝"
              text="Helps"
              onPress={() => navigation.navigate('Bio')}
            />
            <IconTextNav
              icon="🌡"
              text="Terms and Conditions"
              onPress={() => navigation.navigate('Bio')}
            />

            <Space height={30} />

            <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
              <TouchableOpacity>
                <View style={{ alignItems: 'center', padding: 20 }}>
                  <Text
                    style={{
                      fontFamily: 'CircularStd-Bold',
                      color: 'red',
                      fontSize: 16,
                    }}>
                    Logout
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  containerStack: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    // paddingTop: 20,
  },
  subContainerStack: {
    paddingTop: 30,
    paddingBottom: 10,
  },
  avaNameEmailContainer: {
    // flexDirection: 'column',
    // alignContent: 'center',
  },
  avaContainer: {
    alignItems: 'center',
  },
  avatar: {
    borderRadius: 38,
    width: 100,
    height: 100,
  },
  nameContainer: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
  },
  emailContainer: {
    alignItems: 'center',
  },
  email: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
  },
});
