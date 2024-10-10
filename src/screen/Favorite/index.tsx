import React, { useEffect, useState } from 'react';
import { View,PermissionsAndroid, Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import { FlatList,Text } from 'react-native';


interface Contact {
  recordID: string;
  givenName: string;
  familyName: string;
}

const Home: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  
  const readContact = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts',
          message: 'This app would like to view your contacts.',
          buttonPositive: 'Please accept bare mortal',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        fetchContacts();
      } else {
        console.log('Contacts permission denied');
      }
    } catch (error) {
      console.error('Permission error: ', error);
    }
  };

  const fetchContacts = () => {
    Contacts.getAll()
      .then((contacts) => {
        setContacts(contacts); 
        // console.log('contacts', contacts);
      })
      .catch((e) => {
        console.log('error', e);
      });
  };
 
  useEffect(() => {
    if (Platform.OS === 'ios') {
      fetchContacts();
    } else {
      readContact();
    }
  }, []);

  const renderItem = ({ item }: { item: Contact }) => (
    <View style={{ padding: 10,borderBottomColor: '#ccc' }}>
      <Text>{item.givenName} {item.familyName}</Text>
    </View>
  );
  return (
    <View >
     
     <FlatList 
        data={contacts}
        renderItem={renderItem}
     />
    </View>
  );
};

export default Home;