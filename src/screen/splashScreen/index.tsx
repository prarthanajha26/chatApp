import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import { Images } from '../../assets';
import { ScreenNames } from '../../navigator/screensName';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash: React.FC = () => {
    const navigation = useNavigation<any>();

    useEffect(() => {
        const checkUserStatus = async () => {
            setTimeout(() => {
                navigation.navigate(ScreenNames.Home);
                navigation.reset({
                    index: 0,
                    routes: [{ name: ScreenNames.Home }]
                });
            }, 2000);
        };

        checkUserStatus();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image source={Images.splash_img} />
        </View>
    );
};

export default Splash;
