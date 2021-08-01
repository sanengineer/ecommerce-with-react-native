import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, NavHeader, Space, TextPlainNav } from '../../components';

const data = {
  name: 'San Engineer',
  birthplace: 'Liverpool',
  date_of_birth: 'January 1st, 1980',
  gender: 'Male',
  jobs: 'Gamer',
};

const ListForm = ({ title, subtitle, label }) => (
  <>
    <TextPlainNav title={title} Subtitle={subtitle}>
      <Button
        bgColor="transparent"
        textColor="#bdbdbd"
        txtDecorationLine="none"
        label={label}
        txtSize={14}
      />
    </TextPlainNav>
    <Space height={10} />
  </>
);

const Bio = ({ navigation, route }) => {
  //debug
  console.log(navigation);
  console.log(route);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.stackContainer}>
        <NavHeader navigation={navigation} title={route.name} />
        <Space height={10} />
        <ListForm title="Name" subtitle={data.name} label="Edit" />
        <ListForm title="Birthplace" subtitle={data.birthplace} label="Edit" />
        <ListForm
          title="Date Of Birth"
          subtitle={data.date_of_birth}
          label="Edit"
        />
        <ListForm title="Jobs" subtitle={data.jobs} label="Edit" />
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
