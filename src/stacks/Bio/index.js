import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { get } from 'react-native-extra-dimensions-android';
import { useSelector } from 'react-redux';
import { Button, NavHeader, Space, TextPlainNav } from '../../components';

const data = {
  fullname: 'San Engineer',
  gender: 'Male',
  date_of_birth: 'January 1st, 1980',
  jobs: 'Gamer',
};

const data_to_array = Object.entries(data);

const ListForm = ({ title, subtitle, label, onPress }) => (
  <>
    <TextPlainNav title={title} subtitle={subtitle}>
      <Button
        bgColor="transparent"
        textColor="#BCBCBC"
        txtDecorationLine="none"
        label={label}
        txtSize={14}
        onPress={onPress}
        padSizeX={8}
        padSizeY={8}
      />
    </TextPlainNav>
    <Space height={10} />
  </>
);

const Bio = ({ navigation, route }) => {
  //debug
  console.log(navigation);

  const get_user_profile = useSelector(state => state.get_user_profile.data);
  const data = get_user_profile;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} navGoBack={true} />
      <View style={styles.stackContainer}>
        <Space height={10} />

        <ListForm
          title="Fullname"
          subtitle={data.name}
          label="Edit"
          onPress={() =>
            navigation.navigate('Bio Edit', {
              key: 'Fullname',
              value: data.name,
            })
          }
        />

        <ListForm
          title="Gender"
          subtitle={data.gender}
          label="Edit"
          onPress={() =>
            navigation.navigate('Bio Edit', {
              key: 'Gender',
              value: data.gender,
            })
          }
        />

        <ListForm
          title="Date Of Birth"
          subtitle={data.date_of_birth}
          label="Edit"
          onPress={() =>
            navigation.navigate('Bio Edit', {
              key: 'Date Of Birth',
              value: data.date_of_birth,
            })
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default Bio;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stackContainer: {
    paddingTop: 20,
  },
});
