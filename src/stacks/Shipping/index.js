import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { IconPlusCircle } from '../../assets';
import {
  IconContainer,
  ListText,
  ModalBottom,
  NavHeader,
  Space,
} from '../../components';
import CardTextButton from '../../components/molecules/CardTextButton';

const data = [
  {
    shipping_id: 1,
    name_shipping: 'home',
    receiver_name: 'san home',
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
    receiver_name: 'san office',
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
    receiver_name: 'san mother',
    street: 'latte street',
    number: '40',
    city: 'central',
    province: 'middle earth',
    postal_code: '10962',
    main_address: false,
  },
];

const Addresses = ({ onPress, navigation }) => {
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
            onPress={onPress}
            onPressEdit={() => navigation.navigate('Edit Address', item)}
          />
        </>
      ))}
    </>
  );
};

const Shipping = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
        <Addresses onPress={toggleModal} navigation={navigation} />
        <Space height={80} />
      </ScrollView>
      <ModalBottom
        isVisible={isModalVisible}
        showButton={false}
        // onSwipeCancel={toggleModal}
        onBackdropPress={toggleModal}
        onSwipeComplete={toggleModal}
        showSwipeCloseButton={true}
        useNativeDriverForBackdrop
        swipeDirection={['down']}>
        <View>
          <TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 14,
              }}>
              <Text style={{ fontSize: 18, fontFamily: 'CircularStd-Book' }}>
                Set as default address
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                paddingHorizontal: 10,
                paddingVertical: 14,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'CircularStd-Book',
                  color: 'red',
                }}>
                Remove address
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ModalBottom>
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
