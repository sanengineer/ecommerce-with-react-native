import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Border,
  IconContainer,
  IconTextNav,
  NavHeader,
  Space,
  TextButtonRow,
  TextSubtext,
} from '../../components';
import { CoffeeCup, IconChevronDown } from '../../assets';

const data_address = [
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
];
const data_product = [
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
];

const data = data_address[0];

const CardProduct = () => (
  <View style={styles.cardOrderItemContainer}>
    <View style={styles.firstRowCardOrderItem}>
      <Image
        source={data_product[0].image}
        style={{ height: 80, width: 80, borderRadius: 10 }}
      />
      <View style={styles.titleDescProduct}>
        <Text style={styles.titleProduct}>{data_product[0].name}</Text>
        <Text style={styles.descProduct}>{data_product[0].desc}</Text>
      </View>
    </View>
    <View style={styles.secondRowCardOrderItem}>
      <TextSubtext
        alignItems="flex-end"
        text="Rp. 30.000"
        textSize={12}
        textFam="CircularStd-Bold"
        midHeight={2}
        subtext="per item"
        subtextSize={10}
        subtextFam="CircularStd-Book"
      />
    </View>
    <Space height={20} />
    <View style={styles.thirdRowCardOrderItem}>
      <Text style={styles.subtotalTitle}>Subtotal</Text>
      <View style={styles.subtotalPriceDropdownContainer}>
        <Text style={styles.subtotalPrice}>Rp. 900.000</Text>
        <Space width={10} />
        <TouchableOpacity>
          <IconContainer>
            <IconChevronDown />
          </IconContainer>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

const OrderShipment = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title="Shipment" />
      <ScrollView
        style={styles.mainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.addressContainer}>
          <TextButtonRow
            showSubtitle={false}
            bgButton="transparent"
            buttonTextColor="#1440FF"
            title="Shipment Address"
            titleTextSize={14}
            titleTextFam="CircularStd-Bold"
            buttonPaddingX={0}
            buttonPaddingY={0}
            textButton="Change"
            borderBottomColor={0}
            paddingHorizontal={0}
          />
          <Text style={styles.titleAddress}>{data.name_shipping}</Text>
          <Space height={10} />
          <Text style={styles.descAddress}>
            {`${data.street} No ${data.number}, ${data.city}`}
          </Text>
          <Text style={styles.footAddress}>
            {`${data.province} ${data.postal_code}`}
          </Text>
          <Space height={20} />
        </View>
        <Border />
        <CardProduct />
        <Border />
        <CardProduct />
        <Border />
        <IconTextNav />
        <Border />
        <IconTextNav />
        <Border />
        <TextSubtext />
        <Border />
        <TextButtonRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderShipment;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    // backgroundColor: 'red',
  },
  addressContainer: {
    paddingHorizontal: 20,
  },
  titleAddress: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
    textTransform: 'capitalize',
    lineHeight: 20,
  },
  descAddress: {
    fontSize: 14,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Book',
    paddingRight: 60,
    lineHeight: 20,
  },
  footAddress: {
    fontSize: 14,
    lineHeight: 20,
    textTransform: 'capitalize',
    fontFamily: 'CircularStd-Book',
    paddingRight: 60,
  },
  cardOrderItemContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
  },
  firstRowCardOrderItem: {
    flexDirection: 'row',
  },
  titleDescProduct: {
    paddingHorizontal: 20,
    marginRight: Dimensions.get('window').width / 2.5,
  },
  titleProduct: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 14,
    lineHeight: 20,
    paddingBottom: 10,
  },
  descProduct: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    lineHeight: 20,
  },
  secondRowCardOrderItem: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  thirdRowCardOrderItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalTitle: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
  },
  subtotalPriceDropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subtotalPrice: {
    fontSize: 14,
    fontFamily: 'CircularStd-Bold',
  },
});
