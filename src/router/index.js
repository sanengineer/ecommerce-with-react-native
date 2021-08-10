import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  Home,
  LogIn,
  Register,
  SuccessLogin,
  SuccessRegister,
  Menu,
  Profile,
  Cart,
  Inbox,
  Category,
  Bio,
  BioEdit,
  Shipping,
  Security,
  Help,
  TermCondition,
  Account,
  NewAddress,
  AddNoteOrder,
  ProductDetail,
  Wishlist,
  EditAddress,
  OrderShipmentOrPickup,
  Coupon,
  StartScreen,
  MessageDetail,
  NotificationDetail,
} from '../stacks';
import { BottomNav } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start Screen"
        component={StartScreen}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Log In"
        component={LogIn}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Success Login"
        component={SuccessLogin}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Success Register"
        component={SuccessRegister}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false, gestureEnabled: false }}
      />
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bio"
        component={Bio}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Bio Edit"
        component={BioEdit}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Shipping"
        component={Shipping}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Term Condition"
        component={TermCondition}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="New Address"
        component={NewAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Add Note Order"
        component={AddNoteOrder}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Wishlist"
        component={Wishlist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit Address"
        component={EditAddress}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Order Shipment Or Pickup"
        component={OrderShipmentOrPickup}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Coupon"
        component={Coupon}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Message Detail"
        component={MessageDetail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Notification Detail"
        component={NotificationDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;
