import React from 'react';
import { StyleSheet, View } from 'react-native';
import Modal from 'react-native-modal';
import { Button, Space } from '../../atoms';

const ModalBottom = ({
  isVisible,
  onBackdropPress,
  children,
  label,
  onPress,
}) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        style={styles.modal}
        onBackdropPress={onBackdropPress}>
        <View style={styles.subcontainer}>
          <View style={styles.touchContainer}>{children}</View>
          <Button
            radius={5}
            borderColor="red"
            borderWidth={1}
            bgColor="transparent"
            textColor="red"
            padSizeX={10}
            txtDecorationLine="none"
            label={label}
            txtSize={16}
            onPress={onPress}
          />
          <Space height={10} />
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
