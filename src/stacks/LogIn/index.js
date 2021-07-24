import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Space, Header, Button, TextField, TextInput } from '../../components';

const LogIn = () => {
  return (
    <View style={styles.page}>
      <Space height={20} />
      <Header
        title="Login"
        desc="For buying drinks and beverages, login first."
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TextInput label="Email" placeholder="mylatte@coffee.com" />
          <Space height={30} />
          <TextInput label="Password" placeholder="******" />
          <Space height={50} />
          <Button
            label="Login"
            fontFam="CircularStd-Bold"
            txtDecorationLine="none"
          />
          <Space height={30} />
          <Button
            label="Create Account"
            txtSize={12}
            bgColor="#fff"
            textColor="#000"
            fontFam="CircularStd-Bold"
          />
        </View>
      </ScrollView>
    </View>
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
