import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { IconMoreHorizontal } from '../../../assets';
import { Button, IconContainer, Space } from '../../atoms';

const CardTextButton = ({
  text = 'Text',
  subtext = 'Subtext',
  default_label = true,
  padding = 10,
  radius = 10,
  borderColor,
  label = 'Button',
  onPress,
  onPressEdit,
}) => {
  return (
    <View style={styles.card(padding, radius, borderColor)}>
      <View style={styles.firstRow}>
        <View style={styles.textContainer}>
          {default_label ? (
            <>
              <Text style={styles.text}>{text}</Text>
              <Space width={8} />
              <View style={styles.defaultContainer}>
                <Text style={styles.default}>default</Text>
              </View>
            </>
          ) : (
            <>
              <Text style={styles.text}>{text}</Text>
              <Space width={8} />
            </>
          )}
        </View>
        <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
          <IconContainer>
            <IconMoreHorizontal />
          </IconContainer>
        </TouchableOpacity>
      </View>
      <Space height={14} />
      <View style={styles.secondRow}>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>
      <Space height={30} />
      <Button
        padSizeX={10}
        radius={10}
        txtDecorationLine="none"
        bgColor="transparent"
        textColor="#000"
        fontFam="CircularStd-Bold"
        txtSize={12}
        borderWidth={1}
        borderColor="#cecece"
        label={label}
        onPress={onPressEdit}
      />
    </View>
  );
};

export default CardTextButton;

const styles = StyleSheet.create({
  card: (padding, radius, borderColor) => ({
    borderWidth: 1,
    borderColor: borderColor,
    padding: padding,
    borderRadius: radius,
  }),
  firstRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
  },
  textContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'aqua',
  },
  text: {
    fontFamily: 'CircularStd-Bold',
    fontSize: 12,
    textTransform: 'capitalize',
  },
  defaultContainer: {
    backgroundColor: '#A6B7FF',
    borderRadius: 4,
  },
  default: {
    color: '#0030FF',
    fontSize: 8,
    paddingHorizontal: 6,
    paddingVertical: 3,
    textTransform: 'capitalize',
  },
  secondRow: { paddingRight: 60 },
  subtext: {
    textTransform: 'capitalize',
    lineHeight: 20,
    fontFamily: 'CircularStd-Book',
  },
});
