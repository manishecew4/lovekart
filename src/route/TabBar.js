import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from '../screens/Home'
import Profile from '../screens/Profile'
import Message from '../screens/Message'
import Friends from '../screens/Friends'
import { StyleSheet, Text, View } from 'react-native'

const TabBar = () => {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
            activeColor="#EC5858"
            shifting={true}
            labeled={false}
            inActiveColor="#fff"
            barStyle={styles.tabBar}
            screenOptions={{
                headerShown: false,
                // tabBarActiveTintColor: 'tomato',
                // tabBarInactiveTintColor: 'gray',
                showLabel: false,
            }}
        >

            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Friends',
                    tabBarColor: '#EB596E',
                    tabBarIcon: ({ color }) => (
                        <MatIcon name="home" color={color} size={30} />
                    ),
                }} />

            <Tab.Screen name="Friends" component={Friends}
                options={{
                    tabBarLabel: 'Friends',
                    tabBarColor: '#EB596E',
                    tabBarIcon: ({ color }) => (
                        <MatIcon name="account-multiple" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen name="Message" component={Message}
                options={{
                    tabBarLabel: 'Message',
                    tabBarColor: '#EB596E',
                    tabBarIcon: ({ color }) => (
                        <MatIcon name="chat" color={color} size={30} />
                    ),
                }}
            />

            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarColor: '#EB596E',
                    tabBarIcon: ({ color }) => (
                        <MatIcon name="account" color={color} size={30} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default TabBar

const styles = StyleSheet.create({
    tabBar:{
        padding: 0,
        margin: 0,
    }
})