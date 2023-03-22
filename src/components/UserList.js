import React, { useState, useEffect } from 'react'
import css from '../css/Stylecss'
import jsonuser from '../userData/json'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, View, Image, FlatList, Pressable } from 'react-native'
import { Text } from 'react-native-paper';

const UserList = () => {
    const [userList, setUserList] = useState([])
    const navigation = useNavigation();
    const android_ripple = {
        "color": "rgba(237, 90, 90, 0.2)",
        "foreground": true
    }

    useEffect(() => {
        setUserList(jsonuser)

    }, [])



    const renderItem = ({ item }) => {
        let imgsrc = item.avatar
        let location = item.location
        // console.log("Location", location)
        return (
            <View style={[styles.renderItem, css.mb_3]}>
                <Pressable
                    onPress={() => navigation.navigate("FriendsDetails", {
                        itemId: item.id,
                        image: imgsrc,
                        gender: item.gender,
                        status: item.status,
                        bio: item.bio,
                        name: item.first_name,
                        location: location,
                    })}
                    android_ripple={android_ripple}
                    style={styles.userImgWrap}>
                    <Image source={imgsrc} style={styles.userImg} />
                </Pressable>
                <Text variant="titleMedium" style={[css.mt_2, css.ms_2]}>{item.first_name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={userList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    renderItem: {
        paddingBottom: 5,

    },
    userImg: {
        width: 200,
        height: 200
    }
})