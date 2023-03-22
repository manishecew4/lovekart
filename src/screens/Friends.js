import React, { useState, useEffect } from 'react'
import { useNavigation, StackActions } from '@react-navigation/native'
import css from '../css/Stylecss'
import jsonuser from '../userData/json'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import { Button, Menu, Text, Divider, Provider } from 'react-native-paper';

const Friends = () => {
    const [friends, setFriends] = useState([]);

    const navigation = useNavigation()

    console.log("Friends.js");

    useEffect(() => {
        setFriends(jsonuser);
    }, [])





    const renderItem = ({ item }) => {
        let imgsrc = item.avatar;
        let name= `${item.first_name} ${item.last_name}`
        // console.log("Name:", name)

        return (
            <TouchableOpacity
                style={[styles.renderItem, css.row_between]}
                onPress={() => navigation.navigate("FriendsDetails", {
                    itemId: item.id,
                    image: imgsrc,
                    gender: item.gender,
                    status: item.status,
                    bio: item.bio,
                    name: name
                })}
            >
                <View style={[styles.viewLeft, css.fdRow]}>
                    <View style={styles.avatarWrap}>
                        <Image source={imgsrc } style={styles.avatar} />
                    </View>
                    <View style={[styles.infoBlock, css.ms_3]}>
                        <Text variant="titleMedium">{item.first_name}</Text>
                        <Text variant="titleMedium">{item.last_name}</Text>
                    </View>
                </View>
                <View style={styles.viewRight}>
                    <Icon name="cards-heart-outline" size={25} color={theme} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Text>Friends</Text>
            <FlatList
                data={friends}
                keyExtractor={item => item.id}
                renderItem={renderItem}
            />
        </View>
    )
}

export default Friends

const theme = "#EC5858"
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    avatarWrap: {
        width: 70,
        height: 70
    },
    avatar: {
        width: "100%",
        height: "100%",
        borderRadius: 100
    },
    viewLeft: {
        alignItems: "center",
    },
    renderItem: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        shadowColor: "#afafaf",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.16,
        shadowRadius: 1.51,
        elevation: 2,
        borderColor: 'transparent'
    }
})