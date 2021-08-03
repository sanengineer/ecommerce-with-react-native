import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {
  Button,
  IconText,
  NavHeader,
  Space,
  TextSubtext,
} from '../../components';

const NewAddress = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title="" borderWidth={0} />

      <View style={styles.mainContainer}>
        <IconText showIcon={false} text={route.name} width={0} />
        <Space height={20} />
        <TextSubtext bottomHeight={8} />
        <TextSubtext bottomHeight={8} />
        <TextSubtext bottomHeight={8} />
        <TextSubtext bottomHeight={8} />
        <TextSubtext bottomHeight={8} />
        <Space height={20} />
        <Button
          label="Save"
          bgColor="#fff"
          textColor="#0030FF"
          borderColor="#0030FF"
          borderWidth={1}
          txtDecorationLine="none"
          txtSize={14}
          padSizeX={10}
          radius={8}
        />
      </View>
    </SafeAreaView>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  mainContainer: { paddingHorizontal: 20 },
});
