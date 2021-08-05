import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { IconArrowRight } from '../../../assets';
import { IconContainer, Space } from '../../atoms';
import ListText from '../ListText';

const IconTextNav = ({ onPress, icon = '👻', text = 'Text', hideIcon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? 'rgba(151, 151, 151, 0.1)' : 'white',
        },
      ]}>
      <View style={styles.iconTextNavContainer}>
        <View style={styles.iconTextContainer}>
          {hideIcon ? (
            <></>
          ) : (
            <>
              <IconContainer>
                <Text style={{ fontSize: 26 }}>{icon}</Text>
              </IconContainer>
              <Space width={20} />
            </>
          )}
          <ListText text={text} />
        </View>
        <IconContainer>
          <IconArrowRight />
        </IconContainer>
      </View>
    </Pressable>
  );
};

export default IconTextNav;

const styles = StyleSheet.create({
  iconTextNavContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 66,
    paddingHorizontal: 18,
  },
  iconTextContainer: {
    flexDirection: 'row',
  },
});
