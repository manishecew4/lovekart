import React, { } from 'react'
import css from '../css/Stylecss'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import UserList from "../components/UserList"


const Home = () => {


    return (
        <View style={styles.container}>

            <View style={css.row_center}>
                <Text>List</Text>
            </View>

            <UserList />

        </View>
    )
}

export default Home

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})