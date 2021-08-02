import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, NavHeader, Space, TextSubtext } from '../../components';

const data = { fullname: 'San Engineer' };

const BioEdit = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      <View style={styles.textSubtextContainer}>
        <Space height={20} />
        <TextSubtext
          text="Fullname"
          textSize={14}
          subtext={data.fullname}
          bottomHeight={5}
        />
      </View>
      <Space height={30} />
      <View style={{ marginHorizontal: 20 }}>
        <Button
          label="Save"
          bgColor="#1440FF"
          txtDecorationLine="none"
          fontFam="CircularStd-Bold"
          txtSize={14}
          radius={6}
          padSizeX={16}
        />
      </View>
    </SafeAreaView>
  );
};

export default BioEdit;

const styles = StyleSheet.create({
  safeContainer: { flex: 1 },
  textSubtextContainer: {
    marginHorizontal: 20,
    borderBottomColor: '#1440FF',
    borderBottomWidth: 1,
  },
});
