import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Image, ScrollView, TouchableOpacity, FlatList, Dimensions } from 'react-native'

const pexels = () => {

    const [photoList, setPhotoList] = useState()



    useEffect(() => {

        fetch_pexels()
    })

    const fetch_pexels = () => {
        fetch("https://api.pexels.com/v1/search?query=people", {
            headers: {
                Authorization: "563492ad6f917000010000010c9ec095a13a486a80176a1c1525a63f"
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                let photos = data.photos
                // console.log(photos[0].src.portrait)
                setPhotoList(photos)
            })
    }

    const renderItem = ({ item }) => {
        let url = item.src.portrait;
        return (
            <View style={styles.photoRow}>
                <Image source={url} style={styles.photoSingle} />
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <FlatList
                data={photoList}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    )
}

export default pexels

const styles = StyleSheet.create({
    photoSingle: {
        width: 100,
        height: 100
    }
})