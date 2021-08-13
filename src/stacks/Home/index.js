import React, { useState, useRef, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Dimensions,
  ImageBackground,
  StatusBar,
  Platform,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { CoffeeCup, ImageHeaderBg, ImageHeaderBgBlue } from '../../assets';
import {
  BannerHome,
  IconText,
  ListText,
  ModalBottom,
  Space,
} from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import getUserProfileReducer from '../../redux/reducers/getUserProfile';
import { getUserProfileAction } from '../../redux/actions/getUserProfile';
import { getData } from '../../utils';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const numColumns = 2;

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
    // backgroundColor: 'transparent',
    // backgroundColor: 'red',
    flex: 1,
  },

  screen: {
    // backgroundColor: 'red',
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
    // backgroundColor: '#fff',
    paddingHorizontal: 12,
    flex: 1,
    flexWrap: 'wrap',
  },

  containerList: {
    // backgroundColor: 'yellow',
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
    // flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    marginTop: 30,
    height: Dimensions.get('screen').height / 3.3,
    // paddingBottom: 100,
    // marginBottom: 100,
    alignItems: 'flex-start',
  },

  notifContainer: {
    position: 'absolute',
    right: 2,
    top: 30,
    // backgroundColor: 'red',
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
    // backgroundColor: '#18DA42',
    // backgroundColor: '#0030FF',
    backgroundColor: 'transparent',
    // backgroundColor:"#2701ff",
    position: 'relative',
    resizeMode: 'cover',
    // top: 20,
    paddingLeft: 20,
  },

  titleHeaderContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginTop: 0,
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
    // paddingBottom: 40,
  },

  subTitle: {
    // backgroundColor: "red",
    fontFamily: 'CircularStd-Book',
    fontSize: 14,
    // textAlign: 'center',
    color: '#fff',
  },

  pointTitleContainer: {
    // backgroundColor: 'red',
    // width: 90,
    // top: -Dimensions.get("screen").height / 6,
    // backgroundColor: 'green',
    // borderRadius: 100,
    // opacity: 0.8,
  },

  pointContainer: {
    // top: -Dimensions.get("screen").height / 6
    // backgroundColor: 'aqua',
    // flexDirection: 'row',
  },

  textPoint: {
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'CircularStd-Bold',
    color: '#fff',
    // backgroundColor: 'orange',
  },

  homeBannerContainer: {
    backgroundColor: '#fff',
    height: Dimensions.get('screen').height / 4.3,
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
    marginRight: 20,
  },

  categoriesTouchable: {
    // backgroundColor: "red",
    borderRadius: 6,
    paddingVertical: 10,
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
    // backgroundColor: 'red',
  },

  itemContainer: {
    // backgroundColor: 'grey',
    overflow: 'hidden',
    flex: 1,
    margin: 10,
    borderRadius: 10,
    borderColor: '#efefef',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  titlePriceContainer: {
    // backgroundColor: 'red',
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

const Home = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [dataLocal, setDataLocal] = useState({});
  const ref = useRef();
  const dispatch = useDispatch();
  const data_login_success = useSelector(state => state.auth_login_res_data);
  const get_user_profile = useSelector(state => state.get_user_profile.data);
  const name = get_user_profile.name;
  const firstname = name.split(' ')[0];

  console.log('NAME:', firstname);

  // const data_local_storage = getData('user').then(user => {
  //   setDataLocal(user);
  // });

  // const token = dataLocal.tokenString;
  // const user_id = dataLocal.userId;

  // const token = data_login_success;
  // const user_id = data_login_success;

  useEffect(() => {
    getData('user_profile').then(user => {
      setDataLocal(user);
      dispatch(getUserProfileAction(user));
    });
    // dispatch(getUserProfileAction(user_id, token));
  }, []);

  //debug
  // console.log(route);
  // console.log('\n', 'TOKEN-home.js:', token);
  // console.log('\n', 'USERID-home.js:', user_id);
  console.log('\n', 'GET_USER_PROFILE-home.js:', get_user_profile);
  console.log('\n', 'AUTH_LOGIN_RES_DATA-home.js:', data_login_success);
  console.log('\n', 'DATA_LOCAL_STORAGE-home.js:', dataLocal);

  // const navigation = useNavigation();

  useScrollToTop(ref);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const FlatListHeaderHome = () => (
    <View style={styles.container}>
      {Platform.OS === 'android' && <StatusBar backgroundColor="#000000" />}

      <ScrollView
        style={styles.foodListsContainer}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#fff',
            height: Dimensions.get('screen').height / 5,
            width: Dimensions.get('screen').width,
            bottom: 0,
          }}
        />
        <View style={styles.screen}>
          <ImageBackground
            style={styles.headerContainer}
            // source={ImageHeaderBgBlue}
          >
            <View style={styles.notifContainer}>
              <TouchableOpacity
                style={styles.notifTouch}
                activeOpacity={0.7}
                onPress={() => navigation.navigate('Inbox')}>
                <Text style={styles.notifText}>🔔</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contentHeader}>
              <View style={styles.titleHeaderContainer}>
                <View style={styles.iconTitleUserContainer}>
                  <Text style={styles.iconTitle}>👋</Text>
                  <Space width={4} />
                  <Text style={styles.textTitle} adjustsFontSizeToFit={true}>
                    Hai, {firstname}!
                  </Text>
                </View>
                <Space height={3} />
                <View style={styles.subTitleContainer}>
                  <Text style={styles.subTitle}>Let's, drink again!</Text>
                </View>
              </View>
              <View
                style={{
                  // backgroundColor: 'aqua',
                  alignItems: 'flex-start',
                }}>
                <TouchableOpacity
                  style={styles.pointTitleContainer}
                  activeOpacity={0.6}
                  onPress={() => console.log('POINT')}>
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
                <View style={styles.pointContainer}>
                  <Text style={styles.textPoint}>200.000</Text>
                </View>
              </View>
              {/* <Space height={30} /> */}
              <View
                style={{
                  // backgroundColor: 'red',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text>📍</Text>
                <Space width={6} />
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    // justifyContent: 'center',
                  }}
                  onPress={toggleModal}>
                  <Text
                    style={{ color: '#fff', fontFamily: 'CircularStd-Book' }}>
                    Send To
                  </Text>
                  <Space width={4} />
                  <Text
                    style={{ color: '#fff', fontFamily: 'CircularStd-Black' }}>
                    Home Address 1
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* <Space height={20} /> */}
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
                <View style={styles.categoriesContainer} key={item.category_id}>
                  <TouchableOpacity
                    style={styles.categoriesTouchable}
                    onPress={() => navigation.navigate('Category', item)}>
                    <View style={styles.categoriesNameContainer}>
                      <ListText
                        text={`${item.category_name}`}
                        style={styles.categoriesName}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
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
        onPress={() => navigation.navigate('Product Detail', item)}>
        <Image source={item.image} style={styles.itemImage} />

        {item.promo ? (
          <View style={styles.promoStickerProductContainer}>
            <Text style={styles.promoText}>promo</Text>
          </View>
        ) : (
          <></>
        )}

        <View style={styles.titlePriceContainer}>
          <Text style={styles.itemText}>{item.name}</Text>
          <Space height={12} />
          <Text style={styles.itemTextPrice}>Rp. {item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View
        style={{
          backgroundColor: '#fff',
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height / 4,
          position: 'absolute',
          bottom: 0,
          zIndex: -1,
        }}
      />
      <Image
        source={ImageHeaderBgBlue}
        style={{
          width: Dimensions.get('screen').width,
          height: Dimensions.get('screen').height / 1.25,
          backgroundColor: '#0030FF',
          top: 0,
          position: 'absolute',
          zIndex: -4,
        }}
      />
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => item.product_id}
        ListHeaderComponent={FlatListHeaderHome}
        ListFooterComponent={() => <Space height={20} />}
        columnWrapperStyle={styles.containerFlatlist}
        showsVerticalScrollIndicator={false}
        scrollsToTop={true}
      />
      <ModalBottom
        onBackdropPress={toggleModal}
        isVisible={isModalVisible}
        onPress={toggleModal}
        label="Close">
        <TouchableOpacity>
          <IconText
            icon="📦"
            text="Send To Home"
            iconSize={30}
            textFam="CircularStd-Book"
          />
        </TouchableOpacity>
        <Space height={10} />
        <TouchableOpacity>
          <IconText
            icon="🤚"
            text="Pickup At Store"
            iconSize={30}
            textFam="CircularStd-Book"
          />
        </TouchableOpacity>
        <Space height={20} />
      </ModalBottom>
    </>
  );
};

export default Home;
