import React, { useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  ImageBackground,
} from 'react-native';

import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

import { Space } from '../../components';
import { CoffeeCup, ImagePastry } from '../../assets';
import { useSelector } from 'react-redux';

const data = [
  { query_id: 0, query: 'tea' },
  { query_id: 1, query: 'coffee latte' },
  { query_id: 2, query: 'beans' },
  { query_id: 3, query: 'pastry' },
  { query_id: 4, query: 'espresso' },
  { query_id: 5, query: 'iced coffee' },
  { query_id: 6, query: 'hot tea' },
  { query_id: 7, query: 'double shot' },
  { query_id: 8, query: 'cold brew' },
  { query_id: 9, query: 'black tea' },
];

// const categories = [
//   { category_id: 1, category_name: 'Favorite', featured_image: CoffeeCup },
//   { category_id: 2, category_name: 'Coffee', featured_image: CoffeeCup },
//   { category_id: 3, category_name: 'Tea', featured_image: CoffeeCup },
//   { category_id: 4, category_name: 'Matcha', featured_image: CoffeeCup },
//   { category_id: 5, category_name: 'Pastry', featured_image: ImagePastry },
// ];

const numColumns = 2;

const QueryMap = ({ data }) => {
  const listData = item => {
    return (
      <TouchableOpacity activeOpacity={0.7} key={item.query_id}>
        <View style={{ paddingRight: 14, paddingBottom: 14 }}>
          <View
            style={{
              paddingHorizontal: 14,
              paddingVertical: 8,
              justifyContent: 'center',
              borderRadius: 5,
              borderColor: '#e7e7e7',
              borderStyle: 'solid',
              borderWidth: 1,
            }}>
            <Text
              style={{
                fontFamily: 'CircularStd-Book',
                textAlign: 'center',
                fontSize: 14,
              }}>
              {item.query}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const collectionData = data.map(item => listData(item));

  return <>{collectionData}</>;
};

const FlatListHeaderMenu = () => (
  <>
    <Space height={30} />
    <View style={styles.sectionSecondContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Top Search</Text>
        <Space height={14} />
        <Text>
          <QueryMap data={data} />
        </Text>
      </View>
      <Space height={20} />
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Our Products</Text>
      </View>
    </View>
  </>
);

const FlatListFooterMenu = () => (
  <View style={styles.flatListFooter}>
    <Space height={100} />
  </View>
);

const Menu = () => {
  const navigation = useNavigation();
  const ref = useRef();
  useScrollToTop(ref);
  const get_categories = useSelector(state => state.get_categories.data);

  const ProductList = ({ item }) => (
    <>
      <View style={styles.itemContainer}>
        <TouchableOpacity onPress={() => console.log('menu')}>
          <View style={styles.featImageContainer}>
            <ImageBackground
              source={{ uri: item.image_featured }}
              style={styles.featImage}
            />
          </View>
          <Space height={6} />
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.stackContainer}>
        <View style={styles.sectionFirstContainer}>
          <View>
            <Text style={styles.headerTitle}>Search</Text>
          </View>
          <Space height={14} />
          <View style={styles.searchInputContainer}>
            <TextInput style={styles.searchInput} placeholder="type here..." />
          </View>
        </View>
      </View>

      <FlatList
        ref={ref}
        numColumns={numColumns}
        data={get_categories}
        ListHeaderComponent={FlatListHeaderMenu}
        ListFooterComponent={FlatListFooterMenu}
        renderItem={ProductList}
        keyExtractor={item => item.id}
        columnWrapperStyle={styles.containerFlatList}
        showsVerticalScrollIndicator={false}
        style={{
          // backgroundColor: 'red',
          marginHorizontal: 10,
        }}
      />
    </SafeAreaView>
  );
};

export default Menu;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
  },

  stackContainer: { paddingHorizontal: 18, paddingTop: 10, paddingBottom: 10 },

  sectionFirstContainer: {
    // backgroundColor: 'blue',
  },

  sectionSecondContainer: {
    marginTop: 0,
    marginBottom: 10,
    marginHorizontal: 10,
    // backgroundColor: 'aqua',
  },

  headerTitle: { fontFamily: 'CircularStd-Bold', fontSize: 18 },

  searchInputContainer: {
    backgroundColor: '#f1f1f1',
    padding: 4,
    borderRadius: 6,
  },

  searchInput: {
    fontSize: 16,
    fontFamily: 'CircularStd-Medium',
    color: '#000',
    padding: 6,
  },

  featImageContainer: {
    overflow: 'hidden',
    borderRadius: 10,
  },

  featImage: {
    flex: 1,
    height: 120,
    justifyContent: 'center',
    paddingBottom: 10,
    paddingLeft: 14,
    margin: 0,
  },

  itemContainer: {
    margin: 10,
    flex: 1,
    // backgroundColor: 'aqua',
  },

  item: {
    justifyContent: 'center',
  },

  itemTitle: {
    fontFamily: 'CircularStd-Bold',
    textAlign: 'left',
    textTransform: 'capitalize',
  },
});
