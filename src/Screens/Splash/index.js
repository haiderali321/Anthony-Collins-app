
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
const logo = require('../../assets/logo.png')

export default function Splash({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignIn')
        }, 5000);
    })

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <Image resizeMode='contain' style={{ width: 250, height: 120, marginBottom: 50 }} source={logo} />
                <Text style={styles.text}>For access to IFED index values, charting, components and fact sheets</Text>
                <ActivityIndicator style={styles.loader} color={'#20698F'} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%'
    },
    text: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 15,
        lineHeight: 18,
        letterSpacing: -0.3
    },
    loader: {
        marginTop: 50,
    }
});
