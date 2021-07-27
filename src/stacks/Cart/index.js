import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';

import {
  CoffeeCup,
  IconMinusCircle,
  IconPlusCircle,
  IconTrashGrey,
} from '../../assets';
import { Space } from '../../components';
import { useScrollToTop } from '@react-navigation/native';

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
  {
    product_id: 7,
    name: 'Palm Sugar Coffee Milk - 1L',
    desc: 'Espresso based with 80% milk and 20% espresso coffee',
    price: 12000,
    stock: 18,
    image: CoffeeCup,
    num_rate: 16,
  },
];

const Cart = ({ navigation }) => {
  const ref = useRef();
  useScrollToTop(ref);

  const renderItem = ({ item }) => (
    <View style={styles.listItemContainer}>
      <View style={styles.firstRowContainer}>
        <View style={styles.titleDescPriceContainer}>
          <TouchableOpacity onPress={() => console.log('onpress list cart')}>
            <Text style={styles.price}>Rp. {item.price}</Text>
            <Space height={8} />
            <Text style={styles.title}>{item.name}</Text>
            <Space height={8} />
            <Text style={styles.desc}>{item.desc}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.featImageContainer}>
          <ImageBackground source={item.image} style={styles.featImage} />
        </View>
      </View>
      <Space height={20} />

      <View style={styles.secondRowContainer}>
        <TouchableOpacity>
          <View style={styles.iconTrash}>
            <IconTrashGrey />
          </View>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity>
            <View style={styles.iconMinusCircle}>
              <IconMinusCircle />
            </View>
          </TouchableOpacity>
          <View style={styles.numberOrderContainer}>
            <Text style={styles.numberOrder}>2</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.iconPlusCircle}>
              <IconPlusCircle />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.stackContainer}>
        <View style={styles.headerContainer}>
          <View>
            <Space width={30} />
          </View>
          <Text style={styles.textHeader}>Cart</Text>
          <View>
            <Space width={30} />
          </View>
        </View>
        <FlatList
          ref={ref}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.product_id}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    // paddingTop: 20,
    // paddingBottom: 10,
    backgroundColor: '#fff',
  },
  stackContainer: {
    // paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 42,
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    paddingTop: 4,
    paddingBottom: 10,
  },
  textHeader: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
    // textTransform: 'capitalize',
  },

  listItemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    // flexDirection: 'column',
    // flex: 1,
  },
  flatList: { paddingBottom: 100 },
  firstRowContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  secondRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleDescPriceContainer: {
    flex: 1,
    paddingRight: 16,
  },
  price: { fontFamily: 'CircularStd-Bold', fontSize: 18 },
  title: { fontFamily: 'CircularStd-Bold', fontSize: 14, lineHeight: 17.5 },
  desc: { fontFamily: 'CircularStd-Book', lineHeight: 17.5 },
  featImageContainer: {
    width: 80,
    borderRadius: 10,
  },
  featImage: {
    overflow: 'hidden',
    resizeMode: 'cover',
    borderRadius: 10,
    height: 80,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 10,
  },
  iconTrash: { marginLeft: 4 },
  iconMinusCircle: { marginRight: 4 },
  numberOrderContainer: {
    borderBottomWidth: 3,
    borderColor: '#cecece',
    borderStyle: 'solid',
  },
  numberOrder: {
    paddingHorizontal: 8,
    marginHorizontal: 6,
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
  },

  iconPlusCircle: { marginLeft: 4 },
});
