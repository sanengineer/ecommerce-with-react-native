import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import {
  IconHome,
  IconHomeActive,
  IconCart,
  IconCartActive,
  IconProfile,
  IconProfileActive,
  IconHomeRounded,
  IconHomeRoundedActive,
  IconSearchRounded,
  IconSearchRoundedActive,
  IconCartRounded,
  IconCartRoundedActive,
  IconProfileRounded,
  IconProfileRoundedActive,
  IconMenuRounded,
  IconMenuRoundedActive,
} from '../../../assets';
import { IconContainer, SafeAreaViewCustom } from '../../atoms';

const Icon = ({ label, focus }) => {
  switch (label) {
    case 'Home':
      return focus ? <IconHomeRoundedActive /> : <IconHomeRounded />;
    case 'Menu':
      return focus ? <IconMenuRoundedActive /> : <IconMenuRounded />;
    case 'Cart':
      return focus ? <IconCartRoundedActive /> : <IconCartRounded />;
    case 'Profile':
      return focus ? <IconProfileRoundedActive /> : <IconProfileRounded />;
    default:
      return <IconHomeRounded />;
  }
};

const BottomNav = ({ state, descriptors, navigation }) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <View
        style={{
          flexDirection: 'row',
          borderTopWidth: 0.5,
          borderTopColor: '#efefef',
          minHeight: 40,
          paddingTop: 6,
          paddingBottom: 6,
          paddingHorizontal: 30,
          justifyContent: 'space-between',
          backgroundColor: '#fff',
          // backgroundColor: 'red',
        }}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableScale
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                alignItems: 'center',
                // backgroundColor: 'aqua',
                // justifyContent: 'center',
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingHorizontal: 8,
              }}>
              <View
                style={
                  {
                    // backgroundColor: 'red',
                    // alignItems: 'center',
                    // justifyContent: 'center',
                  }
                }>
                <Icon label={label} focus={isFocused} />
              </View>

              <Text
                style={{
                  color: '#000',
                  fontFamily: isFocused
                    ? 'CircularStd-Bold'
                    : 'CircularStd-Book',
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                {label}
              </Text>
            </TouchableScale>
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default BottomNav;

const styles = StyleSheet.compose({
  label: {
    fontFamily: 'CircularStd-Book',
    fontSize: 10,
  },
});
