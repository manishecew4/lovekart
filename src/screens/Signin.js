import React, { useState, useEffect } from 'react'
import css from '../css/Stylecss'
import auth from '@react-native-firebase/auth';
import { useNavigation, StackActions } from '@react-navigation/native'
import { StyleSheet, View, ImageBackground, Image, Dimensions, Modal, Pressable, ActivityIndicator } from 'react-native';
import { Text, TextInput, Button, Snackbar } from 'react-native-paper';
import Video from 'react-native-video';
import video_bg from '../img/v2.mp4';

const Signin = () => {

    const [email, setEmail] = React.useState("manish.ecew4@gmail.com")
    const [pass, setPass] = React.useState("Manish@123")
    const [modalVisible, setModalVisible] = useState(false);
    const [pressed, setPressed] = useState(false);


    const navigation = useNavigation();

    useEffect(() => {

    }, [])


    const handleSignin = () => {
        setPressed(true);
        indicator();
        auth()
            .signInWithEmailAndPassword(email, pass)
            .then(() => {
                navigation.dispatch(StackActions.replace('Home'))
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    setModalVisible(true);
                    console.log('That email address is already in use!');
                }

                if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                    setPressed(false);
                }

                console.error(error);
            });
    }
    const indicator = () => {
        return (
            <View style={styles.indiwrap}>
                {/* <ActivityIndicator size="large" color="#EB596E" /> */}
                <Image source={require('../img/heartbgg.gif')} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {pressed ? indicator() : null}
            <ImageBackground style={styles.imageBackground} source={require('../img/gradBg.png')}>
                <View style={[styles.sign_block, styles.top]}>
                    <Video
                        source={video_bg}
                        paused={false}
                        style={styles.backgroundVideo}
                        repeat={true}
                        resizeMode="cover"
                    />
                </View>
                <View style={[styles.sign_block, styles.bottom]}>
                    <View style={styles.forms}>
                        <TextInput
                            style={css.mb_3}
                            label="Email"
                            value={email}
                            mode="outlined"
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            style={css.mb_3}
                            label="Password"
                            value={pass}
                            mode="outlined"
                            onChangeText={text => setPass(text)}
                        />
                        <Button
                            onPress={handleSignin}
                            mode="contained"
                            buttonColor="#FF0F7B"
                        >
                            Login
                        </Button>
                        <View style={styles.goSignupWrap}>
                            <Text style={css.me_2}>New at LoveKart</Text>
                            <Text variant="titleMedium" style={css.ml_3} onPress={() => navigation.navigate('Signup')}>Signup</Text>
                        </View>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </ImageBackground>
        </View>
    )
}

export default Signin


const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = StyleSheet.create({
    indiwrap: {
        position: 'absolute',
        zIndex: 9999,
        // backgroundColor: '#ffffff59',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height / 2.4,
    },
    container: {
        flex: 1,
    },
    imageBackground: {
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    top: {
        height: height / 2.5,
        width: width,
    },
    img_animation: {
        width: width,
        height: height / 2.5,
        position: 'relative',
        zIndex: 99
    },
    sign_block: {
        position: 'relative',
    },
    pr: {
        position: 'relative',
        zIndex: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white'
    },
    bottom: {
        backgroundColor: 'white',
        width: width,
        flex: 1,
        alignItems: 'center',
        position: 'relative',
        zIndex: 99
    },
    forms: {
        width: width - 25,
        position: 'absolute',
        top: -50,
        backgroundColor: 'white',
        paddingTop: 26,
        paddingHorizontal: 25,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    goSignupWrap: {
        flexDirection: 'row',
        marginTop: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundVideo: {
        width: "100%",
        height: "100%",
    }
})