import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Space } from '../../atoms';

const TextPlainNav = ({
  title = 'Title',
  Subtitle = 'Subtitle',
  titleTextSize = 12,
  titleTextFam = 'CircularStd-Book',
  subtitleTextSize = 16,
  subtitleTextFam = 'CircularStd-Bold',
  children,
}) => {
  return (
    <View style={styles.textButtonRowContainer}>
      <View style={styles.titleSubtitleContainer}>
        <Text style={styles.title(titleTextSize, titleTextFam)}>{title}</Text>
        <Space height={7} />
        <Text style={styles.subtitle(subtitleTextSize, subtitleTextFam)}>
          {Subtitle}
        </Text>
      </View>
      {children}
    </View>
  );
};

export default TextPlainNav;

const styles = StyleSheet.create({
  textButtonRowContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#efefef',
  },
  title: (titleTextSize, titleTextFam) => ({
    fontSize: titleTextSize,
    fontFamily: titleTextFam,
  }),
  subtitle: (subtitleTextSize, subtitleTextFam) => ({
    fontSize: subtitleTextSize,
    fontFamily: subtitleTextFam,
  }),
});
