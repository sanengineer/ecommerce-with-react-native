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
import { NavHeader, Space } from '../../components';
import { useNavigation } from '@react-navigation/native';
const data = [
  {
    product_id: 1,
    name: 'Double Shoot Iced Shaken Espresso',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 30000,
    stock: 20,
    image: CoffeeCup,
    promo: true,
    // num_rate: 10,
  },
  {
    product_id: 2,
    name: 'Carramel Machiato - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 10,
    image: CoffeeCup,
    promo: false,
    // num_rate: 30,
  },
  {
    product_id: 3,
    name: 'Caffe Americano - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 40,
    image: CoffeeCup,
    promo: false,
    // num_rate: 20,
  },
  {
    product_id: 4,
    name: 'Arabica Whole Beans Light Roast - 100gr',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 22,
    image: CoffeeCup,
    promo: false,
    // num_rate: 12,
  },
  {
    product_id: 5,
    name: 'Cold Brew - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 16,
    image: CoffeeCup,
    promo: false,
    // num_rate: 12,
  },
  {
    product_id: 6,
    name: 'Caffe Americano - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    promo: false,
    // num_rate: 14,
  },
  {
    product_id: 7,
    name: 'Palm Sugar Coffee Milk - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    promo: false,
    // num_rate: 16,
  },
  {
    product_id: 8,
    name: 'Palm Sugar Coffee Milk - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
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
    <View style={styles.itemContainer}>
      <View style={styles.touchContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => console.log('Product')}>
          <Image source={item.image} style={styles.featImage} />
          {item.promo ? (
            <View style={styles.promoStickerProductContainer}>
              <Text style={styles.promoText}>promo</Text>
            </View>
          ) : null}
          <View style={styles.titlePriceContainer}>
            <Text style={styles.title}>{item.name}</Text>
            <Space height={12} />
            <Text style={styles.price}>Rp. {item.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Space height={10} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => console.log('Add Item')}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  itemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'space-around',
  },
  touchContainer: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,
    borderColor: '#efefef',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  featImage: {
    height: 120,
    width: Dimensions.get('window').width / numColumns,
  },
  titlePriceContainer: {
    // flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 10,
    // backgroundColor: 'red',
  },
  title: { fontFamily: 'CircularStd-Book' },
  price: { fontFamily: 'CircularStd-Bold' },
  promoStickerProductContainer: {
    position: 'absolute',
    borderBottomRightRadius: 10,
    backgroundColor: 'green',
    paddingRight: 6,
    paddingBottom: 4,
    paddingTop: 4,
    paddingLeft: 4,
  },
  promoText: {
    color: '#fff',
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Bold',
  },
  buttonContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#efefef',
    paddingVertical: 5,
  },
  button: {
    fontFamily: 'CircularStd-Book',
    textAlign: 'center',
    fontSize: 14,
  },
  notifNumber: {
    backgroundColor: 'red',
    position: 'absolute',
    fontSize: 13,
    top: -10,
    right: 0,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
});
