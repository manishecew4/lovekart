import { useNavigation, StackActions } from '@react-navigation/native'
import React, { useEffect } from 'react'
import auth from '@react-native-firebase/auth';
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native';
import { Text } from 'react-native-paper';

const Splash = () => {

    const navigation = useNavigation()

    useEffect(() => {
        setTimeout(() => {

            auth().onAuthStateChanged(user => {
                const userAuth = user ? "TabBar" : "Signin"
                navigation.dispatch(StackActions.replace(userAuth))
            })
        }, 2000)
    }, [])

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../img/splsh.jpg')}>
                <View style={styles.layer}></View>
                <View style={styles.pr}>
                    <Text style={styles.text} variant="displaySmall">Welcome to</Text>
                    <Text style={styles.text} variant="displaySmall">Lovekart</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Splash

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    layer: {
        backgroundColor: '#000',
        opacity: 0.2,
        position: 'absolute',
        width: width,
        height: height,
        zIndex: 5
    },
    pr: {
        position: 'relative',
        zIndex: 10,
        alignItems: 'center',
    },
    text: {
        color: '#F65A83',
        fontWeight: 'bold',
    }
})