import React from 'react';
import { StyleSheet, Touchable, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Space } from '../../atoms';

const ModalBottom = ({
  isVisible,
  onBackdropPress,
  children,
  label,
  onPress,
  showButton = true,
  showSwipeCloseButton = false,
  ...props
}) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        onBackdropPress={onBackdropPress}
        {...props}>
        {showSwipeCloseButton ? (
          <>
            <TouchableOpacity
              style={{ flexDirection: 'row', justifyContent: 'center' }}
              activeOpacity={0.5}>
              <View
                style={{
                  height: 7,
                  backgroundColor: '#ffffff90',
                  borderRadius: 100,
                  width: 100,
                }}
              />
            </TouchableOpacity>
            <Space height={10} />
          </>
        ) : (
          <></>
        )}

        <View style={styles.subcontainer}>
          {showButton ? (
            <>
              <View style={styles.touchContainer}>{children}</View>
              <Button
                radius={10}
                borderColor="red"
                borderWidth={1}
                bgColor="transparent"
                textColor="red"
                padSizeX={16}
                txtDecorationLine="none"
                label={label}
                txtSize={16}
                onPress={onPress}
              />
              <Space height={10} />
            </>
          ) : (
            <View style={styles.touchContainer}>{children}</View>
          )}
        </View>
      </Modal>
    </>
  );
};

export default ModalBottom;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  subcontainer: {
    backgroundColor: '#fff',
    // height: 180,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  touchContainer: {
    paddingBottom: 10,
  },
});
