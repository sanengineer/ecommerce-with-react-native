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
    num_rate: 10,
  },
  {
    product_id: 2,
    name: 'Carramel Machiato - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 10,
    image: CoffeeCup,
    num_rate: 30,
  },
  {
    product_id: 3,
    name: 'Caffe Americano - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 40,
    image: CoffeeCup,
    num_rate: 20,
  },
  {
    product_id: 4,
    name: 'Arabica Whole Beans Light Roast - 100gr',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 22,
    image: CoffeeCup,
    num_rate: 12,
  },
  {
    product_id: 5,
    name: 'Cold Brew - 250ml',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 16,
    image: CoffeeCup,
    num_rate: 12,
  },
  {
    product_id: 6,
    name: 'Caffe Americano - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    num_rate: 14,
  },
];

const numColumns = 2;

const Category = ({ route }) => {
  const navigation = useNavigation();

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
        <NavHeader title={route.params.category_name} navigation={navigation} />
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
    paddingTop: 20,
  },

  flatlistContainer: {
    paddingTop: 10,
    paddingBottom: 100,
    marginHorizontal: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
  },
  touchContainer: {
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
  titlePriceContainer: { flex: 1, padding: 10 },
  title: { fontFamily: 'CircularStd-Bold' },
  price: { fontFamily: 'CircularStd-Book' },
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
});
