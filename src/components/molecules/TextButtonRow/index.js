import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Space } from '../../atoms';

const TextButtonRow = ({
  paddingHorizontal = 20,
  paddingVertical = 20,
  borderBottomWidth = 1,
  borderBottomColor = '#efefef',
  title = 'Title',
  Subtitle = 'Subtitle',
  titleTextSize = 12,
  titleTextFam = 'CircularStd-Book',
  subtitleTextSize = 16,
  subtitleTextFam = 'CircularStd-Bold',
  textButton = 'Text',
  showSubtitle = true,
  onPressButton,
  buttonRadius = 6,
  bgButton = '#1440FF',
  buttonPaddingX = 50,
  buttonPaddingY = 12,
  buttonTextColor = '#fff',
  showIcon = false,
  children,
}) => {
  return (
    <View
      style={styles.textButtonRowContainer(
        paddingHorizontal,
        paddingVertical,
        borderBottomWidth,
        borderBottomColor,
      )}>
      <View style={styles.titleSubtitleContainer}>
        {showSubtitle ? (
          <>
            <Text style={styles.title(titleTextSize, titleTextFam)}>
              {title}
            </Text>
            <Space height={7} />
            <Text style={styles.subtitle(subtitleTextSize, subtitleTextFam)}>
              {Subtitle}
            </Text>
          </>
        ) : (
          <Text style={styles.title(titleTextSize, titleTextFam)}>{title}</Text>
        )}
      </View>
      <View>
        <TouchableOpacity
          style={styles.buttonContainer(buttonRadius, bgButton)}
          onPress={onPressButton}>
          {showIcon ? (
            children
          ) : (
            <Text
              style={styles.button(
                buttonPaddingX,
                buttonPaddingY,
                buttonTextColor,
              )}>
              {textButton}
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextButtonRow;

const styles = StyleSheet.create({
  textButtonRowContainer: (
    paddingHorizontal,
    paddingVertical,
    borderContainerBottomWidth,
    borderContainerBottomColor,
  ) => ({
    paddingVertical: paddingVertical,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: paddingHorizontal,
    backgroundColor: '#fff',
    borderBottomWidth: borderContainerBottomWidth,
    borderBottomColor: borderContainerBottomColor,
    // borderBottomColor: 'red',
  }),

  titleSubtitleContainer: {
    // flexDirection: 'column',
  },

  buttonContainer: (buttonRadius, bgButton) => ({
    borderRadius: buttonRadius,
    backgroundColor: bgButton,
  }),

  button: (buttonPaddingX, buttonPaddingY, buttonTextColor) => ({
    fontFamily: 'CircularStd-Bold',
    // backgroundColor: 'red',
    paddingHorizontal: buttonPaddingX,
    paddingVertical: buttonPaddingY,
    color: buttonTextColor,
    fontSize: 14,
  }),

  title: (titleTextSize, titleTextFam) => ({
    fontSize: titleTextSize,
    fontFamily: titleTextFam,
  }),
  subtitle: (subtitleTextSize, subtitleTextFam) => ({
    fontSize: subtitleTextSize,
    fontFamily: subtitleTextFam,
  }),
});
