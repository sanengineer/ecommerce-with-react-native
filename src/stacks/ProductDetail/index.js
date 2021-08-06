import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {
  IconHeartDisable,
  IconMinusCircle,
  IconPlusCircle,
} from '../../assets';
import {
  Dot,
  IconContainer,
  NavHeader,
  Row,
  Space,
  RadioFormCustom,
  Button,
  IconTextNav,
} from '../../components';

var radio_props = [
  { label: 'less', value: 0 },
  { label: 'normal', value: 1 },
  { label: 'more', value: 2 },
];

const NavBottomBetween = () => (
  <View style={styles.navBottomContainer}>
    <TouchableOpacity
      style={styles.touchFastBuyContainer}
      onPress={() => console.log('FAST BUY')}>
      <View style={styles.fastBuyContainer}>
        <Text style={styles.fastBuy}>⚡ Fast Buy</Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity style={styles.touchAddCartContainer}>
      <View style={styles.addCartContainer}>
        <Text style={styles.addCart}>🛒 Add Cart</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const ProductDetail = ({ navigation, route }) => {
  const product = route.params;
  //debug
  console.log(route);
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={product.category} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground style={styles.featImage} source={product.image} />
        <Row>
          <View style={styles.priceWeightLove}>
            <View style={styles.priceWeight}>
              <Text style={styles.price}>Rp. {product.price}</Text>
              <Dot />
              <Text style={styles.weight}>
                {product.weight.value} {product.weight.unit}
              </Text>
            </View>
            <TouchableOpacity>
              <IconContainer>
                <IconHeartDisable />
              </IconContainer>
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>{product.name}</Text>
          <Space height={10} />
          <Text style={styles.desc}>{product.desc}</Text>
        </Row>
        <Row>
          <Text style={styles.rowTitle}>Custom Request</Text>
          <View style={styles.labelGroupContainer}>
            {radio_props.map(item => (
              <View style={styles.labelContainer} key={item.value}>
                <Text style={styles.label}>{item.label}</Text>
              </View>
            ))}
          </View>
          <View style={styles.radioFormContainer}>
            <View style={styles.radioTitleContainer}>
              <Text style={styles.radioTitle}>Sugar</Text>
            </View>
            <RadioFormCustom
              radio_props={radio_props}
              initial={0}
              onPress={() => console.log('radio')}
              // formHorizontal={false}
            />
          </View>
          <View style={styles.radioFormContainer}>
            <View style={styles.radioTitleContainer}>
              <Text style={styles.radioTitle}>Ice</Text>
            </View>
            <RadioFormCustom
              radio_props={radio_props}
              initial={0}
              onPress={() => console.log('radio')}
              // formHorizontal={false}
            />
          </View>
        </Row>
        <Row
          paddingBottom={15}
          paddingTop={15}
          //   borderBottomColor="red"
          flexDirection={true}>
          <Button
            bgColor="transparent"
            textColor="#0030FF"
            txtDecorationLine="none"
            padSizeX={10}
            txtSize={16}
            label="Add Notes"
            fontFam="CircularStd-Bold"
            onPress={() => navigation.navigate('Add Note Order')}
          />
        </Row>
        <Row flexDirection={true}>
          <Text style={styles.rowTitle}>Quantity</Text>
          <Space width={30} />
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
        </Row>
      </ScrollView>
      <NavBottomBetween />
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    // backgroundColor: 'red',
  },
  featImage: {
    height: Dimensions.get('window').height / 3,
  },
  priceWeightLove: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
  },
  priceWeight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    paddingRight: 10,
  },
  weight: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    paddingLeft: 10,
  },
  name: {
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
    paddingRight: 30,
    fontSize: 16,
  },
  desc: {
    paddingRight: 30,
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    lineHeight: 20,
  },
  labelGroupContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  labelContainer: {
    left: 60,
    width: 50,
    // backgroundColor: 'red',
    marginRight: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  label: {
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
  },
  radioFormContainer: {
    flexDirection: 'row',
    // backgroundColor: 'grey',
    alignItems: 'center',
    marginTop: 10,
    left: 0,
    height: 30,
  },
  radioTitleContainer: {
    width: 60,
    fontSize: 15,
    // backgroundColor: 'aqua',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  radioTitle: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
  },
  rowTitle: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
  },
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

  navBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderTopColor: '#efefef',
    borderTopWidth: 0.5,
    backgroundColor: '#fff',
    shadowColor: '#bdbdbd',
    shadowOffset: { width: 0, height: -6 },
    shadowOpacity: 0.1,
  },
  touchFastBuyContainer: {
    paddingVertical: 6,
    // backgroundColor: 'cyan',
  },
  touchAddCartContainer: {
    paddingVertical: 6,
    // backgroundColor: 'cyan'
  },
  fastBuyContainer: {
    // backgroundColor: "cyan",
  },
  addCartContainer: {
    // backgroundColor: "red" ,
  },
  fastBuy: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
  },
  addCart: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
  },
});
