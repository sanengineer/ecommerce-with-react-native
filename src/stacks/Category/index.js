import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import { CoffeeCup, IconAngleLeftBig, IconHeartDisable } from '../../assets';
import { CardImageTextButton, NavHeader, Space } from '../../components';
import { useNavigation } from '@react-navigation/native';

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

const numColumns = 2;

const CartNav = () => (
  <TouchableOpacity onPress={() => console.log('item')}>
    <View style={{ zIndex: 2 }}>
      <Text style={styles.notifNumber}>16</Text>
    </View>
    <View>
      <Text style={{ fontSize: 34 }}>🛒</Text>
    </View>
  </TouchableOpacity>
);

const Category = ({ route, navigation }) => {
  // const navigation = useNavigation();

  console.log(route);

  const renderItem = ({ item }) => (
    <CardImageTextButton
      numColumns={2}
      item={item}
      onPressDetailProduct={() => navigation.navigate('Product Detail', item)}
      onPressAddCart={() => console.log('Add Item')}
    />
  );

  const FlatListFooterCategory = () => (
    <View>
      <Space height={100} />
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.stackContainer}>
        <NavHeader title={route.params.category_name} navigation={navigation}>
          <CartNav />
        </NavHeader>
        <FlatList
          numColumns={numColumns}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.product_id}
          style={styles.flatlistContainer}
          ListFooterComponent={FlatListFooterCategory}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  stackContainer: {
    paddingTop: 0,
  },

  flatlistContainer: {
    paddingTop: 10,
    paddingBottom: 100,
    marginHorizontal: 10,
  },
  notifNumber: {
    backgroundColor: 'red',
    position: 'absolute',
    fontSize: 13,
    top: -4,
    right: 0,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
