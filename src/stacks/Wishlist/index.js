import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';
import {
  CardImageTextButton,
  ModalCenterTwoButton,
  NavHeader,
} from '../../components';
import { CoffeeCup } from '../../assets';

const data = [
  {
    product_id: 1,
    name: 'Double Shoot Iced Shaken Espresso',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'medium',
    price: 30000,
    stock: 20,
    image: CoffeeCup,
    category: 'Coffee',
    promo: true,
    // num_rate: 10,
  },
  {
    product_id: 2,
    name: 'Carramel Machiato - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'short',
    price: 12000,
    stock: 10,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,

    // num_rate: 30,
  },
  {
    product_id: 3,
    name: 'Caffe Americano - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'medium',
    price: 12000,
    stock: 40,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,
    // num_rate: 20,
  },
  {
    product_id: 4,
    name: 'Arabica Whole Beans Light Roast - 100gr',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'short',
    price: 12000,
    stock: 22,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,
    // num_rate: 12,
  },
  {
    product_id: 5,
    name: 'Cold Brew - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'medium',
    price: 12000,
    stock: 16,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,
    // num_rate: 12,
  },
  {
    product_id: 6,
    name: 'Caffe Americano - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'tall',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,
    // num_rate: 14,
  },
  {
    product_id: 7,
    name: 'Palm Sugar Coffee Milk - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'short',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    category: 'Coffee',
    promo: false,
    // num_rate: 16,
  },
  {
    product_id: 8,
    name: 'Palm Sugar Coffee Milk - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    weight: {
      value: 250,
      unit: 'ml',
    },
    size: 'short',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    category: 'Tea',
    promo: true,
    // num_rate: 16,
  },
];

const Wishlist = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const renderItem = ({ item }) => (
    <CardImageTextButton
      item={item}
      onPressDetailProduct={() => navigation.navigate('Product Detail', item)}
      onPressAddCart={() => console.log('ADD ITEM')}
      onPressDeleteItem={toggleModal}
      showIconBottom={true}
    />
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />

      <FlatList
        numColumns={2}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.product_id}
        style={styles.flatlistContainer}
        showsVerticalScrollIndicator={false}
      />

      <ModalCenterTwoButton isVisible={isModalVisible} onPressNo={toggleModal}>
        <Text
          style={{
            textAlign: 'center',
            lineHeight: 20,
            fontSize: 16,
            fontFamily: 'CircularStd-Book',
          }}>
          Are you sure delete this item from wishlist ?
        </Text>
      </ModalCenterTwoButton>
    </SafeAreaView>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },

  flatlistContainer: {
    paddingTop: 10,
    paddingBottom: 100,
    marginHorizontal: 10,
  },
});
