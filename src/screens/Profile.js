import React, { useState, useEffect } from 'react'
import css from '../css/Stylecss'
import jsonuser from '../userData/json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Button, Menu, Text, Divider, Provider } from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const Profile = () => {

    const [profile, setProfile] = useState([])
    const [photos, setPhotos] = useState([])

    console.log("List New :-", photos);

    useEffect(() => {
        setPhotos(jsonuser)
        setProfile(jsonuser[0])

    }, []);


    const renderItem = ({ item }) => {
        let imgsrc = item.avatar
        console.log("Image", imgsrc);
        return (
            <TouchableOpacity style={styles.photosInnerWrap}>
                <Image source={imgsrc} style={styles.myPhotos} />
            </TouchableOpacity>
        )
    }
    const itemSaperator = () => {
        return (
            <View style={styles.separater}></View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileImgWrap} >
                <Image style={styles.profileImg} source={profile.avatar} />
                <Text variant="titleLarge">{profile.first_name}</Text>
                {/* <Text variant="titleSmall">{profile.email}</Text> */}
            </View>
            <View style={[styles.photosWrap, css.px_3, css.mt_3]}>
                <Text style={css.mb_2} variant="titleMedium">My Photos</Text>
                <FlatList
                    data={photos}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                    horizontal={true}
                    ItemSeparatorComponent={itemSaperator}
                />
            </View>
            <View style={[styles.moreInfo, css.px_3, css.mt_5]}>
                <View style={[css.fdRow, css.mt_2]}>
                    <AntDesign name="user" size={25} style={css.me_2} />
                    <Text variant="titleMedium">Profile</Text>
                </View>
                <View style={[css.fdRow, css.mt_2]}>
                    <Ionicons name="ios-settings-outline" size={25} style={css.me_2} />
                    <Text variant="titleMedium">Settings</Text>
                </View>
                <View style={[css.fdRow, css.mt_2]}>
                    <Icon name="logout" size={25} style={css.me_2} />
                    <TouchableOpacity onPress={() => {
                        auth().signOut()
                    }}>
                        <Text variant="titleMedium">Logout</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

// const handleSignout = () => {
//     auth()
//         .signOut()
//         .then(() => console.log('User signed out!'));
// }

export default Profile

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileImgWrap: {
        alignItems: 'center',
        marginTop: 25,
    },
    profileImg: {
        width: width / 2,
        height: width / 2,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: '#fff',
        elevation: 5
    },
    myPhotos: {
        width: width / 3.5,
        height: width / 3.5
    },
    separater: {
        borderWidth: 3,
        borderColor: '#fff',
    }
})