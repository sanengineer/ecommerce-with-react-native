import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Button, NavHeader, Space, TextSubtext } from '../../components';

const BioEdit = ({ navigation, route }) => {
  console.log(route.params);
  console.log(route);

  const replaced = route.params[0].replace(/_/g, ' ');

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      <View style={styles.textSubtextContainer}>
        <Space height={20} />
        <TextSubtext
          text={replaced}
          textSize={14}
          subtext={route.params[1]}
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
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  textSubtextContainer: {
    marginHorizontal: 20,
    borderBottomColor: '#1440FF',
    borderBottomWidth: 1,
  },
});
