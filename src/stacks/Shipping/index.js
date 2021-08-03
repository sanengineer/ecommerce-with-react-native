import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { IconPlusCircle } from '../../assets';
import { IconContainer, ListText, NavHeader, Space } from '../../components';
import CardTextButton from '../../components/molecules/CardTextButton';

const data = [
  {
    shipping_id: 1,
    name_shipping: 'home',
    street: 'espresso street',
    number: '20',
    city: 'gotham',
    province: 'middle earth',
    postal_code: '10902',
    main_address: true,
  },
  {
    shipping_id: 2,
    name_shipping: 'office',
    street: 'latte street',
    number: '40',
    city: 'central',
    province: 'middle earth',
    postal_code: '10962',
    main_address: false,
  },
  {
    shipping_id: 3,
    name_shipping: 'mother',
    street: 'latte street',
    number: '40',
    city: 'central',
    province: 'middle earth',
    postal_code: '10962',
    main_address: false,
  },
];

const Addresses = () => {
  return (
    <>
      {data.map(item => (
        <>
          <Space height={30} />
          <CardTextButton
            text={item.name_shipping}
            subtext={
              `${item.street}` +
              `, ` +
              `${item.number}` +
              `, ` +
              `${item.city}` +
              `, ` +
              `${item.province}` +
              `, ` +
              `${item.postal_code}`
            }
            borderColor={item.main_address ? '#A6B7FF' : '#cecece'}
            default_label={item.main_address}
            label="Edit Address"
          />
        </>
      ))}
    </>
  );
};

const Shipping = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name}>
        <TouchableOpacity onPress={() => navigation.navigate('New Address')}>
          <IconContainer>
            <IconPlusCircle />
          </IconContainer>
        </TouchableOpacity>
      </NavHeader>
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Address</Text>
        <Addresses />
        <Space height={80} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Shipping;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: '#fff' },
  mainContainer: {
    // backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  title: {
    fontSize: 18,
    fontFamily: 'CircularStd-Bold',
  },
});
