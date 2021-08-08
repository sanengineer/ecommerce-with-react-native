import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

import { ImageHeaderBg, ImageCoinBg, ImageBannerDummy } from '../../assets';
import { Border, NavHeader, Space } from '../../components';

const data_message = [
  {
    id: 1,
    emoji: '🔖',
    image: ImageHeaderBg,
    title: 'Lets Create Account For More Benefit',
    subtitle: 'subtitle',
  },
  {
    id: 2,
    emoji: '🤝',
    image: ImageBannerDummy,
    title: 'Buy 1 Get 1. Buy 10 Get 10.',
    subtitle: 'subtitle',
  },
  {
    id: 3,
    emoji: '🎊',
    image: ImageCoinBg,
    title: 'Order More To Get More Point!',
    subtitle: 'subtitle',
  },
];

const CardNotifMessage = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={stylesSecondRoute.section}
      onPress={() => navigation.navigate('Message Detail', data_message[1])}>
      <View style={stylesSecondRoute.imageTextContainer}>
        <ImageBackground
          source={data_message[1].image}
          style={stylesSecondRoute.imageMessage}
        />
        <View style={stylesSecondRoute.titleMessageContainer}>
          <Text style={stylesSecondRoute.titleMessage}>
            {data_message[0].title}
          </Text>
        </View>
      </View>
      <Border height={2} />
    </TouchableOpacity>
  );
};

const FirstRoute = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={stylesFirstRoute.mainContainer}
      showsVerticalScrollIndicator={false}>
      <View style={stylesFirstRoute.section}>
        <View style={stylesFirstRoute.firstRow}>
          <Text style={stylesFirstRoute.date}>August 21st, 2021</Text>
        </View>
        <View style={stylesFirstRoute.secondRow}>
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity
            style={stylesFirstRoute.textNotifContainer}
            onPress={() => navigation.navigate('Notification Detail')}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
        </View>
      </View>
      <View style={stylesFirstRoute.section}>
        <View style={stylesFirstRoute.firstRow}>
          <Text style={stylesFirstRoute.date}>August 21st, 2021</Text>
        </View>
        <View style={stylesFirstRoute.secondRow}>
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>You receive 30.000</Text>
          </TouchableOpacity>
          <Border height={1} />
          <TouchableOpacity style={stylesFirstRoute.textNotifContainer}>
            <Text style={stylesFirstRoute.textNotif}>
              Your order has been received
            </Text>
          </TouchableOpacity>
          <Border height={1} />
        </View>
      </View>
    </ScrollView>
  );
};

const stylesFirstRoute = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  firstRow: {
    backgroundColor: '#efefef',
    paddingHorizontal: 20,
  },
  date: {
    fontFamily: 'CircularStd-Book',
    fontSize: 12,
    textTransform: 'uppercase',
    paddingVertical: 8,
    color: '#888',
  },
  secondRow: {
    // backgroundColor: 'aqua',
  },
  textNotifContainer: {
    paddingHorizontal: 20,
    paddingVertical: 18,
  },
  textNotif: {
    // backgroundColor: 'grey',
    justifyContent: 'center',
    flexDirection: 'row',
    fontFamily: 'CircularStd-Bold',
    fontSize: 14,
  },
});

const SecondRoute = () => {
  return (
    <ScrollView
      style={stylesSecondRoute.mainContainer}
      showsVerticalScrollIndicator={false}>
      <CardNotifMessage />
      <CardNotifMessage />
      <CardNotifMessage />
      <CardNotifMessage />
    </ScrollView>
  );
};

const stylesSecondRoute = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  section: {
    // flex: 1,
    // backgroundColor: 'grey',
  },
  imageTextContainer: {
    // backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageMessage: {
    height: Dimensions.get('screen').width / 3,
    overflow: 'hidden',
    borderRadius: 10,
  },
  titleMessageContainer: {
    marginTop: 20,

    // backgroundColor: 'orange',
  },
  titleMessage: {
    fontSize: 16,
    fontFamily: 'CircularStd-Bold',
    // backgroundColor: 'aqua',
    color: '#000',
  },
});

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  1: FirstRoute,
  2: SecondRoute,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#000' }}
    style={{ backgroundColor: 'transparent' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={styles.tabViewItem(focused)}>
        {focused ? `${route.emoji + ' ' + route.title}` : `${route.title}`}
      </Text>
    )}
  />
);

const Inbox = ({ route }) => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 1, title: 'Notification', emoji: '🔔' },
    { key: 2, title: 'Message', emoji: '📨' },
  ]);

  //debug
  console.log('NAVIGATION NOTIFICATION:', navigation);
  console.log('ROUTE NOTIFICATION:', route);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavHeader navigation={navigation} title={route.name} />
      {/* <View style={styles.screenContainer}> */}
      <TabView
        navigationState={{ index, routes }}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default Inbox;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // screenContainer: { paddingTop: 18 },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    paddingBottom: 5,
    paddingTop: 5,
  },
  textHeaderContainer: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 18,
    textTransform: 'capitalize',
  },
  iconBackContainer: { padding: 5 },
  scene: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  tabViewItem: focused => ({
    color: focused ? 'black' : 'grey',
    padding: 8,
    fontFamily: focused ? 'CircularStd-Bold' : 'CircularStd-Book',
    fontSize: 14,
    width: 130,
    textAlign: 'center',
  }),
});
