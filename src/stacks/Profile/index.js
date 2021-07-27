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

import { IconContainer, ListText, Space } from '../../components';
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
            <View>
              <Pressable
                onPress={() => console.log('pressable profile stack')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(151, 151, 151, 0.1)'
                      : 'white',
                  },
                ]}>
                <View style={styles.listContainer}>
                  <View style={styles.listIconNameContainer}>
                    <IconContainer>
                      <Text style={{ fontSize: 26 }}>🧬</Text>
                    </IconContainer>
                    <Space width={10} />
                    <ListText text="Bio" />
                  </View>
                  <IconContainer>
                    <IconArrowRight />
                  </IconContainer>
                </View>
              </Pressable>
              <Space height={0} />
              <Pressable
                onPress={() => console.log('pressable profile stack')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(151, 151, 151, 0.1)'
                      : 'white',
                  },
                ]}>
                <View style={styles.listContainer}>
                  <View style={styles.listIconNameContainer}>
                    <IconContainer>
                      <Text style={{ fontSize: 26 }}>🚚</Text>
                    </IconContainer>
                    <Space width={10} />
                    <ListText text="Shipping" />
                  </View>
                  <IconContainer>
                    <IconArrowRight />
                  </IconContainer>
                </View>
              </Pressable>
              <Space height={0} />
              <Pressable
                onPress={() => console.log('pressable profile stack')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(151, 151, 151, 0.1)'
                      : 'white',
                  },
                ]}>
                <View style={styles.listContainer}>
                  <View style={styles.listIconNameContainer}>
                    <IconContainer>
                      <Text style={{ fontSize: 26 }}>🔐</Text>
                    </IconContainer>
                    <Space width={10} />
                    <ListText text="Security" />
                  </View>
                  <IconContainer>
                    <IconArrowRight />
                  </IconContainer>
                </View>
              </Pressable>
              <Space height={63} />
              <Pressable
                onPress={() => console.log('pressable profile stack')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(151, 151, 151, 0.1)'
                      : 'white',
                  },
                ]}>
                <View style={styles.listContainer}>
                  <View style={styles.listIconNameContainer}>
                    <IconContainer>
                      <Text style={{ fontSize: 26 }}>🤝</Text>
                    </IconContainer>
                    <Space width={10} />
                    <ListText text="Helps" />
                  </View>
                  <IconContainer>
                    <IconArrowRight />
                  </IconContainer>
                </View>
              </Pressable>
              <Pressable
                onPress={() => console.log('pressable profile stack')}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed
                      ? 'rgba(151, 151, 151, 0.1)'
                      : 'white',
                  },
                ]}>
                <View style={styles.listContainer}>
                  <View style={styles.listIconNameContainer}>
                    <IconContainer>
                      <Text style={{ fontSize: 26 }}>🌡</Text>
                    </IconContainer>
                    <Space width={10} />
                    <ListText text="Terms & Conditions" />
                  </View>
                  <IconContainer>
                    <IconArrowRight />
                  </IconContainer>
                </View>
              </Pressable>
            </View>

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

  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 66,
    paddingHorizontal: 18,
  },
  listIconNameContainer: {
    flexDirection: 'row',
  },
});
