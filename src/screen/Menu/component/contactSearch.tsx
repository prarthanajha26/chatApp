import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Images } from '../../../assets';
import { vh, vw } from '../../../utils/dimension';
import { useNavigation } from '@react-navigation/native';
import Data from '../../../data/data.json';
import { ScreenNames } from '../../../navigator/screensName';


interface User {
  id: number|string;
  firstName: string;
  lastName: string;
  Department: string;
}


const ContactSearch: React.FC = () => {
  const navigation = useNavigation<any>();
  const [input, setInput] = useState<User[]>([]);
 


  useEffect(() => {
    setInput(Data.users as [])
  }, []);

  const handleChange = (query: string) => {
    if (query !== '') {
      const filteredUsers = input.filter(
        (user) =>
          user.firstName.toLowerCase().includes(query.toLowerCase()) ||
          user.lastName.toLowerCase().includes(query.toLowerCase())
      );
      setInput(filteredUsers);
    } 
    else{
      setInput(Data.users as []);
    }
  };

  const setSelectedUser = (id: number|string,firstName: string, lastName: string) => {
    navigation.navigate(ScreenNames.chat, { userId: id , initials:getInitials(firstName,lastName),firstname:firstName,lastname:lastName });

  };

  const getInitials = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0).toUpperCase()}${lastName.charAt(0).toUpperCase()}`;
  };

  const renderItem = ({ item }: { item: User }) => (
    <TouchableOpacity onPress={() => setSelectedUser(item.id,item.firstName,item.lastName)} style={styles.userContainer}>
      <View style={styles.initialsContainer}>
        <Text style={styles.initialsText}>
          {getInitials(item.firstName, item.lastName)}
        </Text>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={styles.userPhone}>{item.Department}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backContainer}>
          <Image style={styles.backIcon} resizeMode='contain' source={Images.whiteBack} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder='Search here'
          onChangeText={handleChange}
        />
      </View>
      <View style={styles.resultContainer}>
        {input.length > 0 ? (
          <FlatList
            data={input}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()} 
          />
        ) : (
          <View style={styles.result}>
            <Image resizeMode='contain' style={styles.resultIcon} source={Images.noResult} />
            <Text style={styles.resultText}>No Result Found</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ecf4',
  },
  header: {
    paddingTop: vh(60),
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: vw(10),
  },
  backIcon: {
    height: vh(25),
    width: vw(25),
  },
  backContainer: {
    backgroundColor: 'white',
    width: '13%',
    paddingVertical: vh(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  input: {
    width: '80%',
    borderRadius: 8,
    paddingHorizontal: vw(10),
    backgroundColor: 'white',
  },
  resultContainer: {
    flex: 1,
  },
  result: {
    alignItems: 'center',
    paddingTop: vh(150),
  },
  resultIcon: {
    height: vh(200),
    width: vw(200),
  },
  resultText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 14,
  },
  initialsContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  initialsText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
  },
  userInfo: {
    flexDirection: 'column',
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
  },
  userPhone: {
    fontSize: 14,
    color: '#777',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: vh(10),
    paddingHorizontal:vw(20),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    
  },
});

export default ContactSearch;
