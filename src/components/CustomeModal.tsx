import React,{useState} from 'react';
import Modal from 'react-native-modal';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { vh, vw } from '../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../navigator/screensName';


interface Item {
  id: number;
  src: any; 
  txt: string;
}


interface CustomModalProps {
  visible: boolean;
  onRequestClose: () => void;
  data: Item[];
  onPress: () => void;
  confirmDelete ?:()=>void
  emojis?: string[];
  onEmojiSelect?: (emoji: string) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onRequestClose, data, onPress,confirmDelete, emojis,onEmojiSelect  }) => {
  const navigation = useNavigation<any>();
  const [modal2Requested, setModal2Requested] = useState<boolean>(false);

  const handelNavigation = (id: number) => {
    if (id === 1) {
      navigation.navigate(ScreenNames.contactSync);
    }
    if(id === 4){
      setModal2Requested(true)
    }
  };

  return (
    <Modal
      isVisible={visible}
      backdropOpacity={0.2}
      onBackdropPress={onRequestClose}

      onModalHide={()=>{
        if (modal2Requested) {
          confirmDelete?confirmDelete():null
          setModal2Requested(false)
        }
      }}
      style={{ margin: 0 }}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
        {emojis && (
            <View style={styles.emojiContainer}>
             {emojis.map((emoji, index) => (
                <TouchableOpacity key={index} onPress={() => onEmojiSelect?.(emoji)}>
                  <Text style={styles.emoji}>
                    {emoji}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {data.map(item => (
            <TouchableOpacity
              style={styles.outerView}
              key={item.id}
              onPress={() => {
                handelNavigation(item.id);
                onPress();
              }}>
              <Image
                source={item.src}
                style={styles.modalImg}
                resizeMode="contain"
              />
              <Text>{item.txt}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    marginTop: 'auto',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
  },
  outerView: {
    flexDirection: 'row',
    paddingVertical: vh(20),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f8',
  },
  modalImg: {
    height: vh(20),
    width: vw(20),
    marginRight: vw(20),
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: vh(20), // Adjust margin as needed
  },
  emoji: {
    fontSize: vw(30), // Adjust size as needed
  },
});

export default CustomModal;
