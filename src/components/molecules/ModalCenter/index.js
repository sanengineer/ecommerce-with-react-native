import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const ModalCenter = ({ isVisible, backdropColor, children, ...props }) => {
  return (
    <>
      <Modal
        isVisible={isVisible}
        backdropColor={backdropColor}
        animationIn="fadeIn"
        animationOut="fadeOut"
        animationInTiming={10}
        animationOutTiming={1}
        backdropTransitionInTiming={10}
        backdropTransitionOutTiming={1}
        {...props}>
        {children}
      </Modal>
    </>
  );
};

export default ModalCenter;

const styles = StyleSheet.create({});
