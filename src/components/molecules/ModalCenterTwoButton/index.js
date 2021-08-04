import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../../atoms';
import ModalCenter from '../ModalCenter';

const ModalCenterTwoButton = ({
  isVisible,
  onPressYes,
  onPressNo,
  children,
}) => (
  <ModalCenter isVisible={isVisible} style={{ padding: 20 }}>
    <View style={styles.modalContent}>
      <View style={styles.modalTitleContainer}>{children}</View>
      <View style={styles.buttonYesNoContainer}>
        <Button
          onPress={onPressYes}
          padSizeY={36}
          padSizeX={6}
          txtSize={14}
          radius={4}
          txtDecorationLine="none"
          bgColor="#fff"
          textColor="#000"
          borderColor="#000"
          borderWidth={1}
          label="Yes"
        />
        <Button
          onPress={onPressNo}
          padSizeY={38}
          padSizeX={6}
          txtSize={14}
          radius={4}
          txtDecorationLine="none"
          bgColor="#fff"
          textColor="red"
          borderColor="red"
          borderWidth={1}
          label="No"
        />
      </View>
    </View>
  </ModalCenter>
);

export default ModalCenterTwoButton;

const styles = StyleSheet.create({
  modalContent: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    height: 148,
    padding: 20,
    borderRadius: 10,
  },
  modalTitleContainer: {
    // backgroundColor: 'aqua',
  },
  buttonYesNoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});
