import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Button = ({
  onPress,
  height = 60,
  label = 'Button',
  bgColor = '#000',
  borderColor,
  borderWidth,
  padSizeX = 0,
  padSizeY = 0,
  radius = 0,
  textColor = '#fff',
  txtSize = 20,
  fontFam = 'CircularStd-Book',
  txtDecorationLine = 'underline',
  txtDecorationStyle = 'solid',
  txtAlign = 'center',
  isLoading = false,
  propsStyle,
}) => {
  //debug_all
  console.log('PROPS-BUTTON:', propsStyle);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      disabled={isLoading}
      // style={{
      //   height: height,
      //   backgroundColor: 'red',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      // }}
      style={styles.container({
        color: bgColor,
        padSizeX,
        padSizeY,
        radius,
        borderColor,
        borderWidth,
        height,
        justifyContent: 'center',
        ...propsStyle,
      })}>
      {isLoading ? (
        <ActivityIndicator
          color={Colors.white}
          animating={true}
          size={`small`}
        />
      ) : (
        <Text
          style={styles.title({
            color: textColor,
            fontFam,
            txtSize,
            txtDecorationLine,
            txtDecorationStyle,
            txtAlign,
          })}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const Buttons = {
  LG: ({
    isLoading,
    onPress,
    label,
    propsStyle,
    height,
    bgColor = '#0030FF',
    textColor = '#fff',
  }) => {
    return (
      <Button
        label={label}
        radius={6}
        txtSize={14}
        bgColor={bgColor}
        padSizeX={0}
        borderWidth={0}
        fontFam="CircularStd-Bold"
        txtDecorationLine="none"
        isLoading={isLoading}
        onPress={onPress}
        height={height}
        textColor={textColor}
        propsStyle={propsStyle}
      />
    );
  },
  SM: () => {
    return (
      <Button
        label="Button"
        bgColor="#000"
        borderColor="#000"
        borderWidth={1}
        padSizeX={20}
        padSizeY={20}
        radius={6}
        textColor="#fff"
        txtSize={20}
        fontFam="CircularStd-Bold"
        txtDecorationLine="none"
        txtAlign="center"
        height={90}
      />
    );
  },
};

export { Button as default, Buttons };

const styles = StyleSheet.compose({
  title: ({
    color,
    fontFam,
    txtSize,
    txtDecorationLine,
    txtDecorationStyle,
    txtAlign,
  }) => ({
    color: color,
    fontFamily: fontFam,
    fontSize: txtSize,
    textDecorationStyle: txtDecorationStyle,
    textDecorationLine: txtDecorationLine,
    textAlign: txtAlign,
  }),

  container: ({
    color,
    sizeY,
    sizeX,
    radius,
    borderColor,
    borderWidth,
    height,
    ...propsStyle
  }) => ({
    backgroundColor: color,
    paddingVertical: sizeY,
    paddingHorizontal: sizeX,
    borderRadius: radius,
    borderColor: borderColor,
    borderWidth: borderWidth,
    height: height,
    flex: 1,
    ...propsStyle,
  }),
});
