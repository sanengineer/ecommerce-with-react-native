import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import { IconAngleLeftBig, ImageCoinBg } from '../../assets';
import { Button, Space } from '../../components';

const MessageDetail = ({ navigation, route }) => {
  //debug
  console.log(route);

  const data = route.params;
  return (
    <SafeAreaView style={styles.safeContainer}>
      <ImageBackground source={ImageCoinBg} style={styles.imageFeat}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.navGoback}>
          <IconAngleLeftBig />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.textSection}>
        <Text style={styles.title}>{data.title}</Text>
        <Space height={10} />
        <Text style={styles.subtitle}>
          Buy 1 get 1 without terms and conditions. Let’s Order!
        </Text>
        <Space height={10} />
        <View style={styles.couponCodeContainer}>
          <Text style={styles.couponCodelabel}>Coupon Code:</Text>
          <Space width={6} />
          <TouchableOpacity>
            <Text style={styles.couponCode}>029Jk8yIb</Text>
          </TouchableOpacity>
        </View>
        <Space height={10} />
        <View style={styles.couponExpiredContainer}>
          <Text style={styles.couponExpired}>
            valid till judgement day 🤣 🤝.
          </Text>
        </View>
        <Space height={30} />
        <Button
          label="Copy Coupon"
          textColor="#0030FF"
          bgColor="transparent"
          borderWidth={1}
          radius={8}
          padSizeX={15}
          txtSize={14}
          txtDecorationLine="none"
          borderColor="#0030FF"
        />
      </View>
    </SafeAreaView>
  );
};

export default MessageDetail;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navGoback: {
    backgroundColor: '#00000017',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // paddingHorizontal: 10,
    width: 40,
    height: 40,
    borderRadius: 100,
    left: 10,
    top: 10,
    // paddingVertical: 10,
  },
  imageFeat: {
    height: Dimensions.get('window').width / 1.7,
  },
  textSection: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
  },
  subtitle: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    lineHeight: 20,
  },
  couponCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponCodelabel: {
    fontFamily: 'CircularStd-Book',
    fontSize: 16,
    lineHeight: 20,
  },
  couponCode: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 16,
    color: '#0030FF',
    lineHeight: 20,
  },
  couponExpiredContainer: {
    flexWrap: 'wrap',
  },
  couponExpired: {
    color: '#fff',
    fontSize: 10,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#0030FF',
    fontFamily: 'CircularStd-Bold',
    lineHeight: 20,
  },
});
