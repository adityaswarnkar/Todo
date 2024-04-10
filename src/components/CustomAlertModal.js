import React, {memo, useState} from 'react';
import {Modal, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

const CustomAlertModal = memo(({visible, onClose, message, onDeleteTask}) => {
  const handleSendData = () => {
    onDeleteTask(true);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.messageText}>{message}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleSendData}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
});

export default CustomAlertModal;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#1B1A17',
    height: 145,
    width: '75%',
    padding: 20,
    borderRadius: 4,
    alignItems: 'center',
    borderColor: '#A35709',
    borderTopWidth: 5,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  messageText: {
    fontSize: 18,
    marginBottom: 50,
    color: '#FFF',
    fontFamily: 'Roboto-Regular',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButton: {
    height: 24,
    width: 64,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#FF8303',
    backgroundColor: '#1F1E1B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#D9D9D9',
    fontSize: 10,
    fontFamily: 'Roboto-Regular',
  },
});
