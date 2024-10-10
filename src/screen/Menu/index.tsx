import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Keyboard,
} from 'react-native';
import {Images} from '../../assets';
import styles from './style';
import CustomModal from '../../components/CustomeModal';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {ScreenNames} from '../../navigator/screensName';
import {modaldata} from '../../data/ModalData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import data from '../../data/data.json';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { vh } from '../../utils/dimension';


interface User {
  id: number | string;
  firstName: string;
  lastName: string;
  Department: string;
  lastMessage?: string;
  dateObject?: string;
  user?: {
    name: string;
  };
}

const Menu: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [chattedUser, setChattedUser] = useState<User[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigation = useNavigation<any>();
  const isFocused = useIsFocused();
  const insets = useSafeAreaInsets();

  useEffect(() => {
    checkChats();
  }, [isFocused]);

  const checkChats = async () => {
    const keys = await AsyncStorage.getAllKeys();
    const usersWithMessages = await Promise.all(
      data.users
        .filter(user => keys.includes(user.id)) //[1,6,4,8]
        .map(async user => {
          const lastMessage = await AsyncStorage.getItem(`${user.id}`);
          const parsedMessage = lastMessage ? JSON.parse(lastMessage) : null;
          const dateObject = new Date(
            parsedMessage[0].createdAt,
          ).toLocaleString([], {
            hour: '2-digit',
            minute: '2-digit',
          });

          return {
            ...user,
            lastMessage:
              parsedMessage && parsedMessage.length > 0
                ? parsedMessage[0].text
                : 'No message',
            dateObject: dateObject,
            user: {
              name:
                parsedMessage && parsedMessage.length > 0
                  ? parsedMessage[0].user.name
                  : 'React-Native',
            },
          };
        }),
    );
    setChattedUser(usersWithMessages);
  };
  const toggleModal = () => {
    setVisible(!visible);
  };

  const navigateToContact = () => {
    Keyboard.dismiss()
    navigation.navigate(ScreenNames.contactSync);
    
  };

  const closeModal = () => {
    setVisible(false);
  };

  const setSelectedUser = (
    id: number | string,
    firstName: string,
    lastName: string,
  ) => {
    Keyboard.dismiss()
    navigation.navigate(ScreenNames.chat, {
      userId: id,
      initials: getInitials(firstName, lastName),
      firstname: firstName,
      lastname: lastName,
    });
  };

  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0).toUpperCase()}${lastName
      .charAt(0)
      .toUpperCase()}`;
  };

  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity
      onPress={() => setSelectedUser(item.id, item.firstName, item.lastName)}
      style={styles.userContainer}>
      <View style={styles.outerContainer}>
        <View style={styles.initialsContainer}>
          <Text style={styles.initialsText}>
            {getInitials(item.firstName, item.lastName)}
          </Text>
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>
            {item.firstName} {item.lastName}
          </Text>
          <View style={styles.lastmsg}>
            <Text style={styles.userPhone}>{item.user?.name}: </Text>
            <Text style={styles.userPhone}>{item.lastMessage}</Text>
          </View>
        </View>
      </View>
      <Text style={styles.date}>{item.dateObject}</Text>
    </TouchableOpacity>
  );

  const filteredUsers = chattedUser.filter(user => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    // console.log(fullName.includes(searchQuery.toLowerCase()));
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={[styles.upper,{paddingTop: insets.top+vh(30),}]}>
        <View>
          <Text style={styles.chatsText}>Messages</Text>
          <Text style={styles.contactText}>45 Contacts</Text>
        </View>

        <View style={styles.rightContainer}>
          <TouchableOpacity
            onPress={navigateToContact}
            style={styles.addContainer}>
            <Text style={styles.addIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Search Messages..."
            value={searchQuery}
            onChangeText={setSearchQuery} 
          />
          <Image style={styles.inputIcon} source={Images.blackSearch} />
        </View>
        {/* <View style={styles.announcementContainer}>
          <View style={styles.announcementIconContainer}>
            <Image
              resizeMode="contain"
              style={styles.announcementIcon}
              source={Images.announcement}
            />
          </View>
          <Text style={styles.userPhone}>Announcement</Text>
        </View> */}
        {filteredUsers.length === 0 ? (
          <View style={styles.chatsContainer}>
            <View style={styles.middleChat}>
              <View style={styles.noChat}>
                <Image source={Images.noChat} resizeMode="contain" />
              </View>
              <Text style={styles.noChatYet}>No Chats Yet</Text>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.startChatButton}>
                <Text style={styles.startChat}>Start Chat</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.listContainer}>
            <FlatList
              data={filteredUsers}
              renderItem={renderItem}
              keyExtractor={item => item.id.toString()}
            />
          </View>
        )}
      </View>

      <CustomModal
        visible={visible}
        onRequestClose={toggleModal}
        data={modaldata}
        onPress={closeModal}
      />
    </View>
  );
};

export default Menu;
