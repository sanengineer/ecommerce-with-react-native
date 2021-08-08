import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  IconAngleLeftBig,
  IconCheckCircle,
  IconChevronDown,
  IconCrossBig,
  LogoCoffeeShopBlueWhitSquareRound,
  LogoMidtrans,
} from '../../assets';
import { Border, LogoCoffeeCustom, NavHeader, Space } from '../../components';

const TitleSection = ({ text }) => (
  <Text style={{ fontFamily: 'CircularStd-Bold', fontSize: 16 }}>{text}</Text>
);

const SubtitleSection = ({ text, color = '#000' }) => (
  <Text style={{ fontFamily: 'CircularStd-Book', fontSize: 14, color: color }}>
    {text}
  </Text>
);

const LabelValueIcon = ({ label = 'label', value = 'value' }) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View>
        <SubtitleSection text={label} />
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <SubtitleSection text={value} />
        <Space width={10} />
        <TouchableOpacity>
          <IconChevronDown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const NotificationDetail = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconAngleLeftBig />
        </TouchableOpacity>
        <View
          style={{ height: 20, flexDirection: 'row', alignItems: 'center' }}>
          <LogoCoffeeCustom width={32} height={32} />
          <Space width={10} />
          <Text
            style={{
              fontFamily: 'CircularStd-Bold',
              fontSize: 18,
              color: '#0030FF',
            }}>
            Coffee Shop
          </Text>
        </View>
        <Space width={32} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              // backgroundColor: 'aqua',
              paddingHorizontal: 20,
              paddingTop: 40,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <IconCheckCircle />
              <Space width={6} />
              <TitleSection text="Received" />
            </View>
            <View
              style={
                {
                  // backgroundColor: 'red'
                }
              }>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: 'CircularStd-Book',
                  color: '#626262',
                }}>
                August 23rd, 2026. 20:23
              </Text>
            </View>
          </View>
          {/* <Space height={20} /> */}
          <Border height={10} />
          <View style={styles.sectionContainer}>
            <TitleSection text="ID Order" />
            <Space height={10} />
            <SubtitleSection text="jdsnsasdjiTSn8-ksdknaj$2kmaIIydjl-$ffBH6gj" />
          </View>
          <Border />
          <View style={styles.sectionContainer}>
            <TitleSection text="Order:" />
            <Space height={10} />
            <LabelValueIcon label="Total Price (6 Items)" value="Rp. 990.000" />
            <Space height={10} />
            <LabelValueIcon label="Shipment Charge" value="Rp 50.000" />
            <Space height={10} />
            <LabelValueIcon label="Discount From Coupon" value="Rp. 30000" />
          </View>
          <Border />
          <View style={styles.sectionContainer}>
            <TitleSection text="Total Billing:" />
            <Space height={10} />
            <SubtitleSection text="Rp. 1060.000" />
          </View>
          <Border />
          <View style={styles.sectionContainer}>
            <LogoMidtrans />
            <Space height={10} />
            <SubtitleSection
              text="Reference number: 8292139nsnk-sdnjfnja97-shakl"
              color="#626262"
            />
          </View>
          <Border />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationDetail;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 22,
  },
});
