import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
} from 'react-native';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { useNavigation } from '@react-navigation/native';

import { IconAngleLeftBig } from '../../assets';
import { NavHeader, Space } from '../../components';

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <Text>Notification</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Text>Inbox</Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
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

const Notification = ({ route }) => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'Notfiication', emoji: '🔔' },
    { key: 'second', title: 'Message', emoji: '📨' },
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

export default Notification;

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
