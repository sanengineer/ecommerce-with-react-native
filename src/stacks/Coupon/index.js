import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconInfoCircle } from '../../assets';
import {
  Border,
  Button,
  FormTextSubtext,
  IconContainer,
  NavHeader,
  RadioFormCustom,
  Space,
  TextButtonRow,
} from '../../components';

const data_coupon = [
  {
    id: 1,
    title: 'cashback Rp 30.000',
    expired: 'valid 2 hours left (2:00:00)',
    nb: '',
  },
  {
    id: 2,
    title: 'cashback Rp 20.000',
    expired: 'valid thru till apocalypse',
    nb: '',
  },
  {
    id: 3,
    title: 'Free Shipment Charge',
    expired: 'valid thru till september 22nd 2480',
    nb: '(12.000 Point)',
  },
];

var radio_props = [
  { label: 'less', value: 0 },
  { label: 'normal', value: 1 },
  //   { label: 'more', value: 2 },
];

const CardCouponList = ({ item }) => (
  <>
    <View style={styles.cardCouponContainer}>
      <View style={styles.firstColumnCardCoupon}>
        <RadioFormCustom radio_props={radio_props} marginRight={0} width={0} />
      </View>
      <View style={styles.secondColumnCardCoupon}>
        <View style={{ flexDirection: 'column' }}>
          <View style={styles.couponTitleNbContainer}>
            <Text style={styles.couponTitle}>{item.title}</Text>
            <Space width={6} />
            <Text style={styles.couponNb}>{item.nb}</Text>
          </View>
          <Text style={styles.couponExpired}>{item.expired}</Text>
        </View>
        <IconContainer>
          <TouchableOpacity>
            <IconInfoCircle />
          </TouchableOpacity>
        </IconContainer>
      </View>
    </View>
    <Space height={20} />
  </>
);

const NavBottom = () => (
  <View
    style={{
      bottom: 0,
      shadowColor: '#ccc',
      shadowOffset: { width: 0, height: -6 },
      shadowOpacity: 0.1,
    }}>
    <TextButtonRow
      title="You Can Save"
      Subtitle="Rp 90.000"
      textButton="Apply"
      borderBottomWidth={0}
      onPressButton={() => console.log('APPLY')}
    />
  </View>
);

const Coupon = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      <ScrollView>
        <Space height={30} />
        <View style={styles.formCouponInputButtonContainer}>
          <FormTextSubtext
            text="Coupon Code"
            textColor="#747474"
            borderBottomColor="#1440FF"
          />

          <Space width={20} />
          <Button
            padSizeY={50}
            padSizeX={16}
            txtSize={14}
            radius={6}
            txtDecorationLine="none"
            bgColor="#1440FF"
            fontFam="CircularStd-Bold"
            label="Use"
          />
        </View>
        <Space height={30} />
        <Border height={10} />
        <View style={styles.couponListContainer}>
          <Text style={{ fontSize: 14, fontFamily: 'CircularStd-Bold' }}>
            List For You<Text style={{ fontSize: 18 }}> 🤝</Text>
          </Text>
          <Space height={20} />
          {data_coupon.map(item => (
            <CardCouponList item={item} />
          ))}
          <Space height={20} />
        </View>
      </ScrollView>
      <NavBottom />
    </SafeAreaView>
  );
};

export default Coupon;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formCouponInputButtonContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  couponListContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  cardCouponContainer: {
    borderRadius: 10,
    borderColor: '#E7E7E7',
    borderWidth: 1,
    paddingHorizontal: 6,
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
  },
  firstColumnCardCoupon: {
    // backgroundColor: 'aqua',
    marginRight: 20,
    marginLeft: 20,
    top: 2,
  },
  secondColumnCardCoupon: {
    // backgroundColor: 'grey',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginRight: 7,
  },
  couponTitleNbContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  couponTitle: {
    lineHeight: 20,
    fontFamily: 'CircularStd-Bold',
    fontSize: 14,
    textTransform: 'capitalize',
  },
  couponNb: {
    fontSize: 12,
    fontFamily: 'CircularStd-Book',
  },
  couponExpired: {
    lineHeight: 20,
    fontFamily: 'CircularStd-Book',
    fontSize: 10,
  },
});
