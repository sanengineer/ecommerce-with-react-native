import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Touchable,
} from 'react-native';

import {
  CoffeeCup,
  IconHeartDisable,
  IconHeartEnable,
  IconMinusCircle,
  IconPlusCircle,
  IconTrashGrey,
} from '../../assets';
import {
  Button,
  IconContainer,
  ModalCenter,
  ModalCenterTwoButton,
  NavHeader,
  Space,
  TextButtonRow,
} from '../../components';
import { useScrollToTop } from '@react-navigation/native';

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

const FlatListFooterCart = () => (
  <View
    style={{
      bottom: 100,
    }}>
    <TextButtonRow title="Total Price" Subtitle="Rp 990.000" textButton="Buy" />
  </View>
);

const Cart = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const ref = useRef();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useScrollToTop(ref);

  const renderItem = ({ item }) => (
    <View style={styles.listItemContainer}>
      <View style={styles.firstRowContainer}>
        <View style={styles.titleDescPriceContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Product Detail', item)}>
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
        <TouchableOpacity onPress={toggleModal}>
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
        <NavHeader navGoBack={false} title="Cart" showSpaceLeft={false}>
          <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
            <IconContainer>
              <IconHeartDisable />
            </IconContainer>
          </TouchableOpacity>
        </NavHeader>
        <FlatList
          ref={ref}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.product_id}
          // ListFooterComponent={FlatListFooterCart}
          style={styles.flatList}
          showsVerticalScrollIndicator={false}
        />
        <FlatListFooterCart />
      </View>
      <ModalCenterTwoButton
        onPressYes={() => console.log('YES')}
        onPressNo={toggleModal}
        isVisible={isModalVisible}>
        <Text style={styles.modalTitle}>Are you sure delete this item ?</Text>
      </ModalCenterTwoButton>
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
    paddingBottom: 34,
    backgroundColor: '#fff',
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
  flatList: { marginBottom: 100 },
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

  modalTitle: {
    fontFamily: 'CircularStd-Medium',
    fontSize: 18,
    textAlign: 'center',
  },
});
