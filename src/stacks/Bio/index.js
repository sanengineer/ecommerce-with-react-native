import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
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

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} navGoBack={true} />
      <View style={styles.stackContainer}>
        <Space height={10} />

        <ListForm
          title="Fullname"
          subtitle={data.fullname}
          label="Edit"
          onPress={() => navigation.navigate('Bio Edit', data_to_array[0])}
        />

        <ListForm
          title="Gender"
          subtitle={data.gender}
          label="Edit"
          onPress={() => navigation.navigate('Bio Edit', data_to_array[1])}
        />

        <ListForm
          title="Date Of Birth"
          subtitle={data.date_of_birth}
          label="Edit"
          onPress={() => navigation.navigate('Bio Edit', data_to_array[2])}
        />

        <ListForm
          title="Jobs"
          subtitle={data.jobs}
          label="Edit"
          onPress={() => navigation.navigate('Bio Edit', data_to_array[3])}
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
