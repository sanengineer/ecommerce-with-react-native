import React, { useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
} from 'react-native';

import { useScrollToTop } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { CoffeeCup, ImageHeaderBg } from '../../assets';
import { BannerHome, ListText, Space } from '../../components';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const numColumns = 2;

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

const categories = [
  {
    category_id: 1,
    category_name: '☕️  Coffee',
    featured_image: CoffeeCup,
  },
  {
    category_id: 2,
    category_name: '🥃  Tea',
    featured_image: CoffeeCup,
  },
  {
    category_id: 3,
    category_name: '🍵  Matcha',
    featured_image: CoffeeCup,
  },
  {
    category_id: 4,
    category_name: '🥐  Pastry',
    featured_image: CoffeeCup,
  },
];

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
    // backgroundColor: 'aqua',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: 30,
    marginBottom: 100,
    alignItems: 'flex-start',
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
    alignItems: 'flex-start',
    height: Dimensions.get('screen').height / 2,
    backgroundColor: '#18DA42',
    // backgroundColor:"#2701ff",
    position: 'relative',
    resizeMode: 'cover',
    paddingLeft: 20,
  },

  titleHeaderContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 20,
    // top: -Dimensions.get("screen").height / 13,
    // backgroundColor: 'black',
  },

  iconTitleUserContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    // backgroundColor: 'red',
  },

  iconTitle: {
    fontSize: 34,
  },

  textTitle: {
    fontSize: 30,
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
  },

  subTitleContainer: {
    paddingBottom: 40,
  },

  subTitle: {
    // backgroundColor: "red",
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },

  pointTitleContainer: {
    // backgroundColor: "red",
    // width: 90,
    // top: -Dimensions.get("screen").height / 6,
    // backgroundColor: 'green',
    // borderRadius: 100,
    // opacity: 0.8,
  },

  pointContainer: {
    // top: -Dimensions.get("screen").height / 6
  },

  textPoint: {
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    // backgroundColor: 'red',
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

  const FlatListHeaderHome = () => (
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
                <Text style={styles.subTitle}>Let's, drink again!</Text>
              </View>
              <View>
                <TouchableOpacity
                  style={styles.pointTitleContainer}
                  activeOpacity={0.6}
                  onPress={toggleModal}>
                  <ListText
                    paddingX={0}
                    paddingY={0}
                    text="Points"
                    size={16}
                    color="#fff"
                    fontFam="CircularStd-Bold"
                  />
                </TouchableOpacity>
                <Space height={2} />
              </View>
              <View style={styles.pointContainer}>
                <Text style={styles.textPoint}>200.000</Text>
              </View>
              <Space height={30} />
              <View
                style={{
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                }}>
                <Text style={{ color: '#fff' }}>📍 Send To</Text>
                <Space width={5} />
                <Text style={{ color: '#fff', fontFamily: 'CircularStd-Bold' }}>
                  Home Address 1
                </Text>
              </View>
            </View>
            <View style={styles.homeBannerContainer}>
              <BannerHome />
            </View>
          </ImageBackground>

          <Space height={Dimensions.get('screen').height / 40} />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginTop: Dimensions.get('screen').height / 10 }}>
            <View style={styles.categoriesGroupName}>
              {categories.map(item => (
                <>
                  <View style={styles.categoriesContainer}>
                    <TouchableOpacity style={styles.categoriesTouchable}>
                      <View style={styles.categoriesNameContainer}>
                        <ListText
                          text={`${item.category_name}`}
                          style={styles.categoriesName}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                  <Space width={20} />
                </>
              ))}
            </View>
          </ScrollView>
          <Space height={10} />
        </View>
      </ScrollView>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => console.log('press')}>
        <Image source={item.image} style={styles.itemImage} />

        {item.promo ? (
          <View style={styles.promoStickerProductContainer}>
            <Text style={styles.promoText}>promo</Text>
          </View>
        ) : null}

        <View style={styles.item}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Space height={12} />
          <Text style={styles.itemTextPrice}>Rp. {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ backgroundColor: 'green' }}>
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => item.product_id}
        ListHeaderComponent={FlatListHeaderHome}
        columnWrapperStyle={styles.containerFlatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
