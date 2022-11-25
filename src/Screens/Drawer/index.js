
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const profileIcon = require('../../assets/profileIcon.png')

export default function DrawerScreen({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <Image resizeMode='contain' style={{ width: 120, height: 120, }} source={profileIcon} />
            <Text style={styles.text}>Amy Tan</Text>
            <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Setting')}>
                <Text style={styles.submitButton_Text}>Profile & Settings</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: '5%',
        marginTop:'15%'
    },
    text: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 32,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#000000'
    },
    submitButton: {
        backgroundColor: '#20698F',
        borderRadius: 10,
        marginTop: 10,
        borderRadius: 50,
        height: 44,
        width:'90%',
        marginTop: 30
    },
    submitButton_Text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#FFFFFF',
    },
});
