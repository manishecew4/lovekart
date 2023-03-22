import React from 'react'
import css from '../css/Stylecss'
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { useNavigation, StackActions } from '@react-navigation/native'
import { StyleSheet, View, ImageBackground, Image, Dimensions, ToastAndroid } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import Video from 'react-native-video';
import video_bg from '../img/v2.mp4';

const Signup = () => {

    const [email, setEmail] = React.useState("")
    const [pass, setPass] = React.useState("")

    const navigation = useNavigation()

    React.useEffect(() => {
        Toast.show({
            text1: 'Hello',
            text2: 'This is some something 👋'
        });
    }, []);
    // .createUserWithEmailAndPassword(email, pass)

    const handleSignup = async () => {
        try {

            const isUserCreated = await auth().createUserWithEmailAndPassword(email, pass)
            console.log("isUserCreated".isUserCreated);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imageBackground} source={require('../img/gradBg.png')}>
                <View style={[styles.sign_block, styles.top]}>
                    <Video
                        source={video_bg}                 // the video file
                        paused={false}                   // make it start    
                        style={styles.backgroundVideo}  // any style you want
                        repeat={true}                  // make it a loop
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
                            onPress={handleSignup}
                            mode="contained"
                            buttonColor="#FF0F7B"
                        >
                            Signup
                        </Button>
                        <View style={styles.goSignupWrap}>
                            <Text style={css.me_2}>Already have account?</Text>
                            <Text variant="titleMedium" style={css.ml_3} onPress={() => navigation.navigate('Signin')}>Signin</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Signup


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
    top: {
        height: height / 2.5,
        width: width,
    },
    sign_block: {
        position: 'relative'
    },
    pr: {
        position: 'relative',
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