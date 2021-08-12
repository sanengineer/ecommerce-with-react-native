import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native';

const SafeAreaViewCustom = ({ children, ...props }) => {
  return (
    <SafeAreaView {...props}>
      {Platform.OS === 'ios' && (
        <>
          <View
            style={{
              backgroundColor: 'red',
              height: 20,
              width: Dimensions.get('screen').width,
              position: 'absolute',
              top: 0,
              zIndex: 4,
            }}
          />
        </>
      )}
      {children}
    </SafeAreaView>
  );
};

export default SafeAreaViewCustom;
