import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Space } from '../../atoms';

const TextButtonRow = ({
  title = 'Title',
  Subtitle = 'Subtitle',
  titleTextSize = 12,
  titleTextFam = 'CircularStd-Book',
  subtitleTextSize = 16,
  subtitleTextFam = 'CircularStd-Bold',
  textButton = 'Text',
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
      <View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.button}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextButtonRow;

const styles = StyleSheet.create({
  textButtonRowContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#efefef',
  },

  titleSubtitleContainer: {
    // flexDirection: 'column',
  },

  buttonContainer: {
    borderRadius: 6,
    backgroundColor: '#1440FF',
  },

  button: {
    fontFamily: 'CircularStd-Bold',
    // backgroundColor: 'red',
    paddingHorizontal: 50,
    paddingVertical: 12,
    color: '#fff',
    fontSize: 14,
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
