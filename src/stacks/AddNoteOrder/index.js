import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import { Button, NavHeader, Space } from '../../components';

const AddNoteOrder = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      <ScrollView style={styles.mainContainer}>
        <Space height={10} />
        <Text style={{ fontFamily: 'CircularStd-Book', fontSize: 16 }}>
          Max 250 Character
        </Text>
        <Space height={20} />
        <TextInput
          editable
          maxLength={250}
          multiline={true}
          numberOfLines={10}
          style={{
            height: 180,
            padding: 10,
            borderColor: '#cecece',
            borderRadius: 10,
            borderWidth: 1,
            lineHeight: 20,
            fontSize: 16,
            fontFamily: 'CircularStd-Book',
          }}
        />
        <Space height={30} />
        <Button
          label="Save"
          txtDecorationLine="none"
          padSizeX={16}
          bgColor="#fff"
          textColor="#0030FF"
          borderColor="#0030FF"
          borderWidth={1}
          radius={10}
          txtSize={16}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNoteOrder;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
