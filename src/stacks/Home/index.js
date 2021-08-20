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
import {
  getUserProfileAction,
  getUserProfileActionSuccess,
} from '../../redux/actions/getUserProfile';
import { getProductsAction } from '../../redux/actions/getProducts';
import { getData } from '../../utils';
import { getCategoriesAction } from '../../redux/actions/getCategory';
import ContentLoader, { Rect, Circle, Path } from 'react-content-loader/native';
import { get } from 'react-native-extra-dimensions-android';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');
const numColumns = 2;

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'transparent',
    // backgroundColor: 'red',
    paddingTop: Dimensions.get('screen').height / 200,
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
    width: Dimensions.get('screen').width / numColumns,
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

const CategoryLoader = props => (
  <ContentLoader
    speed={2}
    width={120}
    height={60}
    viewBox="0 0 150 60"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <Rect x="0" y="0" rx="6" ry="6" width="120" height="60" />
  </ContentLoader>
);

const ProductLoader = props => (
  <View style={styles.itemContainer}>
    <ContentLoader
      speed={2}
      width="200"
      height="150"
      viewBox="0 0 200 150"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}>
      <Rect x="0" y="0" rx="0" ry="0" width="200" height="70" />
      {/* <Rect x="0" y="0" rx="0" ry="0" width="200" height="70" /> */}
      <Rect
        x="10"
        y="80"
        rx="4"
        ry="4"
        width={Dimensions.get('window').width / 3}
        height="16"
      />
      <Rect
        x="10"
        y="105"
        rx="4"
        ry="4"
        width={Dimensions.get('window').width / 4}
        height="16"
      />
    </ContentLoader>
  </View>
);

const Home = ({ navigation, route }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const ref = useRef();
  const dispatch = useDispatch();
  const [dataLocal, setDataLocal] = useState({});
  const data_login_success = useSelector(state => state.auth_login_res_data);
  const data_products = useSelector(state => state.get_products);
  const get_user_profile = useSelector(state => state.get_user_profile.data);
  const get_categories = useSelector(state => state.get_categories);
  const name = get_user_profile.name;
  const firstname = name == undefined ? '' : name.split(' ')[0];
  const data = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ];

  // console.log('NAME:', firstname);

  // const data_local_storage = getData('user').then(user => {
  //   setDataLocal(user);
  // });

  // const token = dataLocal.tokenString;
  // const user_id = dataLocal.userId;

  // const token = data_login_success;
  // const user_id = data_login_success;

  useEffect(() => {
    getData('user').then(user => {
      //debug
      console.log('\nUSERRR:', user, '\n');

      setDataLocal(user);
      dispatch(getProductsAction(user.tokenString));
      dispatch(getUserProfileAction(user.userId, user.tokenString));
      dispatch(getUserProfileActionSuccess(user));
      dispatch(getCategoriesAction(user.tokenString));
    });
    // dispatch(getUserProfileAction(user_id, token));
  }, []);

  //debug
  // console.log(route);
  // console.log('\n', 'TOKEN-home.js:', token);
  // console.log('\n', 'USERID-home.js:', user_id);
  console.log('\n', 'GET_USER_PROFILE-home.js:', get_user_profile);
  console.log('\n', 'AUTH_LOGIN_RES_DATA-home.js:', data_login_success);
  console.log('\n', 'PRODUCTS_DATA-home.js:', data_products);
  console.log('\n', 'CATEGORIES_DATA-home.js:', get_categories);

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
                    style={{
                      color: '#fff',
                      fontFamily: 'CircularStd-Black',
                    }}>
                    {get_user_profile.shipping_address_default == undefined
                      ? 'Not Address'
                      : get_user_profile.shipping_address_default}
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
              {get_categories.loading ? (
                <>
                  <CategoryLoader />
                  <CategoryLoader />
                  <CategoryLoader />
                  <CategoryLoader />
                </>
              ) : (
                <>
                  {get_categories.data.map(item => (
                    <View style={styles.categoriesContainer} key={item.id}>
                      <TouchableOpacity
                        style={styles.categoriesTouchable}
                        onPress={() => navigation.navigate('Category', item)}>
                        <View style={styles.categoriesNameContainer}>
                          <ListText
                            text={`${item.icon}  ${item.title}`}
                            style={styles.categoriesName}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  ))}
                </>
              )}
            </View>
          </ScrollView>
          <Space height={10} />
        </View>
      </ScrollView>
    </View>
  );

  const renderItem = ({ item }) => {
    //debug
    console.log('\n', 'ITEM_FLATLIST-home.js', item, '\n');

    return (
      <View style={styles.itemContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Product Detail', item)}>
          <Image
            source={{ uri: item.image_featured }}
            style={styles.itemImage}
          />

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
  };

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
        data={data_products.loading ? data : data_products.data}
        renderItem={data_products.loading ? ProductLoader : renderItem}
        numColumns={numColumns}
        keyExtractor={(item, index) => item.id}
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
