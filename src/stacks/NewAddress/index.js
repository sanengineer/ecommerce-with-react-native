import React from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import {
  Button,
  IconText,
  NavHeader,
  Space,
  TextSubtextInput,
} from '../../components';

const data_placeholder = {
  shipping_id: 1,
  receiver_name: 'san engineer',
  name_shipping: 'home',
  street: 'espresso street',
  number: '20',
  city: 'gotham',
  province: 'middle earth',
  postal_code: '10902',
  main_address: true,
};

const Form = ({ text, ...props }) => (
  <>
    <View style={styles.formContainer}>
      <TextSubtextInput
        bottomHeight={6}
        text={text}
        subtextFam="CircularStd-Book"
        textSize={12}
        subtext="..."
        subtextSize={16}
        {...props}
      />
    </View>
    <Space height={30} />
  </>
);

const NewAddress = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title="" borderWidth={0} />

      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <IconText
          showIcon={false}
          text={route.name}
          width={0}
          color="#0030FF"
          textSize={18}
        />
        <Space height={20} />
        <Form text="Receiver Name" />
        <Form
          text="Save Address As "
          boldOn={true}
          bold_text="(Home, Office or Mother)"
          boldFamily="CircularStd-Bold"
        />
        <Form text="Street Address" />
        <Form text="City" />
        <Form text="Province" />
        <Form text="Zip Code" />
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewAddress;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  mainContainer: { paddingHorizontal: 20, paddingBottom: 20 },
  formContainer: { borderBottomColor: '#cecece', borderBottomWidth: 1 },
});
