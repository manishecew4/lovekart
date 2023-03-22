import React, { useState, useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'
import css from '../css/Stylecss'
import jsonuser from '../userData/json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Pexels from '../userData/pexels'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Button, Menu, Text, Divider, Provider } from 'react-native-paper';

const FriendsDetails = ({ route, navigation }) => {
    const { itemId, image, gender, status, location, bio, name } = route.params;



    const [photoList, setPhotoList] = useState([])



    useEffect(() => {
        setPhotoList(jsonuser);

    }, [])


    // console.log(Pexels);

    const renderItem = ({ item }) => {
        let url = item.avatar
        console.log("url", url);
        return (
            <View style={styles.photoRow}>
                <Image source={url} style={styles.photoSingle} />
            </View>
        )
    }


    return (
        <ScrollView style={[styles.container, css.pb_3]}>
            <View style={styles.profileImgWrap} >
                <Image style={styles.profileImg} source={image} />
            </View>
            <View style={[styles.info]}>
                <View style={[styles.scroll, css.px_3, css.mt_2]}>
                    <View style={[css.row_between, css.pt_3]}>
                        <Text variant="titleLarge">{name}</Text>
                        <Ionicons name="ios-person-add-outline" size={30} style={css.me_2} />
                    </View>
                    <Text variant="titleSmall">{status}</Text>
                    <Text variant="titleSmall">{location}</Text>
                    <View style={css.mt_3}>
                        <Text variant="titleSmall">Photos</Text>
                        <FlatList
                            data={photoList}
                            keyExtractor={item => item.id}
                            renderItem={renderItem}
                            horizontal={true}
                        />
                    </View>
                    <View style={css.mt_3}>
                        <Text variant="titleSmall">About</Text>
                        <Text>{bio}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default FriendsDetails

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    profileImgWrap: {
        alignItems: 'center',
        marginTop: 0,
    },
    profileImg: {
        width: width,
        height: height / 1.7,
        borderColor: '#fff',
        elevation: 5
    },
    info: {
        backgroundColor: "transparent",
        borderColor: '#000',
        // borderWidth: 1,
        borderTopLeftRadius: 25
    },
    scroll: {
        borderColor: '#000',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        // height: height/2
    },
    photoSingle:{
        width: width/4,
        height: width/5,
        marginRight:2
    }
})