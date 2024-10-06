import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { vh, vw } from '../utils/dimension';

interface ConfirmationModalProps {
  visible: boolean;
  onClose: () => void;
  backDropPress:()=>void
  title: string;
  message: string;
 
  image: any; // Adjust this type based on your image prop (e.g., ImageSourcePropType)
}

class ConfirmationModal extends Component<ConfirmationModalProps> {
  render() {
    const { visible, onClose, title, message, image,backDropPress  } = this.props;

    return (
      <Modal
        backdropOpacity={0.6}
        isVisible={visible}
        onBackdropPress={backDropPress}
        style={{ margin: 0 }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.lockIconContainer}>
              <Image style={styles.ModalIcon} source={image} />
            </View>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{message}</Text>

            <TouchableOpacity onPress={onClose} style={styles.startChatButton}>
              <Text style={styles.startChat}>Start Chat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  lockIconContainer: {
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalText: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '400',
    color: '#60707d',
  },
  ModalIcon: {
    height: 60,
    width: 60,
  },
  startChatButton: {
    backgroundColor: '#2a7bbb',
    paddingVertical: vh(15),
    paddingHorizontal: vw(25),
    borderRadius: 12,
    marginTop: vh(10),
  },
  startChat: {
    color: 'white',
    fontSize: 16,
  },
});

export default ConfirmationModal;
