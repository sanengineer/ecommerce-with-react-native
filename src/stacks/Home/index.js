import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Touchable,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { useScrollToTop } from '@react-navigation/native';

import { ShoesImage, CoffeeCup, ImageHeaderBg } from '../../assets';
import { TouchableOpacity } from 'react-native';
import { BannerHome, ListText } from '../../components';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const numColumns = 2;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },

  screen: {
    // backgroundColor: "red",
    flex: 1,
  },

  containerProduct: {
    // backgroundColor: "aqua",
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },

  subContainerProduct: {
    // backgroundColor: "#fff",
    paddingHorizontal: 12,
    flex: 1,
    flexWrap: 'wrap',
  },

  containerList: {
    // backgroundColor: "yellow",
    // flex: 1,
    flexDirection: 'column',
  },

  subContainerList: {
    // backgroundColor: "red",
    alignContent: 'stretch',
    padding: 6,
  },

  contentHeader: {
    // backgroundColor: "aqua",
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 100,
    alignItems: 'center',
  },

  notifContainer: {
    position: 'absolute',
    right: 2,
    top: 30,
  },

  notifTouch: {
    // backgroundColor: "red",
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  notifText: {
    fontSize: 20,
    padding: 5,
  },

  homeHeader: {
    fontSize: 26,
    fontFamily: 'CircularStd-Bold',
    marginRight: 20,
  },

  headerContainer: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('screen').height / 2,
    backgroundColor: '#18DA42',
    // backgroundColor:"#2701ff",
    position: 'relative',
    resizeMode: 'cover',
  },

  titleHeaderContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 20,
    // top: -Dimensions.get("screen").height / 13,
    // backgroundColor: "red",
  },

  iconTitleUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },

  iconTitle: {
    fontSize: 36,
  },

  textTitle: {
    fontSize: 32,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
  },

  subTitleContainer: {
    paddingBottom: 40,
  },

  subTitle: {
    // backgroundColor: "red",
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
    textAlign: 'center',
    color: '#fff',
  },

  pointTitleContainer: {
    // backgroundColor: "red",
    width: 90,
    // top: -Dimensions.get("screen").height / 6,
    backgroundColor: 'green',
    borderRadius: 100,
    opacity: 0.8,
  },

  pointContainer: {
    // top: -Dimensions.get("screen").height / 6
  },

  textPoint: {
    fontSize: 60,
    textAlign: 'center',
    fontFamily: 'CircularStd-Medium',
    color: '#fff',
  },

  homeBannerContainer: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 5,
    position: 'absolute',
    width: Dimensions.get('screen').width - 36,
    top: Dimensions.get('screen').height / 2.6,
    borderRadius: 20,
    borderWidth: 8,
    borderColor: '#fff',
    marginHorizontal: 18,
    zIndex: 4,
    overflow: 'hidden',
  },

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

  foodListsContainer: {
    // backgroundColor: "red",
  },

  carrouselContainer: {
    flexDirection: 'row',
  },

  categoriesGroupName: {
    flexDirection: 'row',
    paddingHorizontal: 18,
  },

  categoriesContainer: {
    // backgroundColor: "red",
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 6,
  },

  categoriesTouchable: {
    // backgroundColor: "red",
    borderRadius: 6,
  },

  categoriesNameContainer: {
    paddingHorizontal: 12,
  },

  categoriesName: {
    justifyContent: 'center',
    fontSize: 16,
  },

  //FlatList
  containerFlatlist: {
    flex: 1,
    marginVertical: 0,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
  },

  itemContainer: {
    // backgroundColor: "grey",
    overflow: 'hidden',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: '#efefef',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  item: {
    // backgroundColor: "red",
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'CircularStd-Book',
    lineHeight: 20,
  },

  itemTextPrice: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
  },

  itemImage: {
    height: 120,
    width: Dimensions.get('window').width / numColumns,
  },
  itemRateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  itemStar: {
    paddingRight: 2,
  },

  itemStars: {
    flexDirection: 'row',
  },

  itemNumRate: {
    fontFamily: 'CircularStd-Book',
    color: '#979797',
  },
});

const Home = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const ref = useRef();

  useScrollToTop(ref);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const FlatListHeadeHome = () => (
    <View style={styles.container}>
      <ScrollView
        style={styles.foodListsContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.screen}>
          <ImageBackground
            style={styles.headerContainer}
            source={ImageHeaderBg}>
            <View style={styles.notifContainer}>
              <TouchableOpacity style={styles.notifTouch} activeOpacity={0.7}>
                <Text style={styles.notifText}>🔔</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentHeader}>
              <View style={styles.titleHeaderContainer}>
                <View style={styles.iconTitleUserContainer}>
                  <Text style={styles.iconTitle}>👋</Text>
                  <Text style={styles.textTitle}>Hai, San!</Text>
                </View>
              </View>
              <View style={styles.subTitleContainer}>
                <Text style={styles.subTitle}>Let's, Order Again!</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.pointTitleContainer}
                  activeOpacity={0.6}
                  onPress={toggleModal}>
                  <ListText
                    paddingX={10}
                    paddingY={6}
                    text="💰 Your Point"
                    size={10}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.pointContainer}>
                <Text style={styles.textPoint}>2000</Text>
              </View>
            </View>
            <View style={styles.homeBannerContainer}>
              <BannerHome />
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </View>
  );

  return (
    <View style={{ backgroundColor: 'green' }}>
      <FlatList
        ref={ref}
        numColumns={numColumns}
        ListHeaderComponent={FlatListHeadeHome}
      />
    </View>
  );
};

export default Home;
