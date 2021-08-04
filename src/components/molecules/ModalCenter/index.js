import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const ModalCenter = ({ isVisible, backdropColor, children, ...props }) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropColor={backdropColor}
        animationIn="zoomInDown"
        animationOut="zoomOutUp"
        animationInTiming={600}
        animationOutTiming={600}
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={600}
        {...props}>
        {children}
      </Modal>
    </>
  );
};

export default ModalCenter;

const styles = StyleSheet.create({});
