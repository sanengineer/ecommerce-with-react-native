import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
  Button,
  FormTextSubtext,
  IconText,
  NavHeader,
  Space,
} from '../../components';

const EditAddress = ({ navigation, route }) => {
  const address = route.params;

  //debug
  console.log('ADDRESS', address);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader
        navigation={navigation}
        borderWidth={0}
        borderColor="#fff"
        title=""
      />
      <ScrollView style={styles.mainContainer}>
        <IconText
          showIcon={false}
          text={route.name}
          width={0}
          color="#000"
          textSize={18}
          paddingX={0}
        />
        <Space height={20} />
        <FormTextSubtext text="Receiver Name" subtext={address.receiver_name} />
        <FormTextSubtext
          text="Save Address As "
          boldOn={true}
          bold_text="(Home, Office or Mother)"
          boldFamily="CircularStd-Bold"
          subtext={address.name_shipping}
        />
        <FormTextSubtext text="Street Address" subtext={address.street} />
        <FormTextSubtext text="City" subtext={address.city} />
        <FormTextSubtext text="Province" subtext={address.province} />
        <FormTextSubtext text="Zip Code" subtext={address.postal_code} />
        <Space height={20} />

        <Button
          label="Save"
          bgColor="#fff"
          textColor="#0030FF"
          borderColor="#0030FF"
          borderWidth={1}
          txtDecorationLine="none"
          txtSize={14}
          padSizeX={16}
          radius={8}
        />
        <Space height={60} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditAddress;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
});
