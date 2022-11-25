
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const aeroLeft = require('../../assets/ArrowLeft.png')

export default function PrivacyPolicy({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerC1}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Setting')}>
                    <Image resizeMode='contain' source={aeroLeft} style={styles.iconSize} />
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.HeaderText}>Privacy Policy</Text>
                </View>
            </View>
            <View style={styles.containerC2}>
     
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '5%',
        backgroundColor: '#ffffff'
    },
    HeaderText: {
        left:'-7%',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000'
    },
    text: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000'
    },
    smallText: {
        fontSize: 16,
        lineHeight: 19,
        letterSpacing: -0.3,
        color: '#000000'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: 'blue'
    },
    back: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '42%',
    },
    iconSize: {
        width: 35,
        height: 35,
        left: -10
    },
    aeroRight: {
        width: 15,
        height: 15,
    },
    headerTextContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '58%',
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
        marginTop: 16,
    },
    containerC1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    containerC2: {
        flex: 8,
        width: '100%',
    },
    containerC3: {
        flex: 2,
        width: '100%',
    },
    submitButton: {
        borderColor:'#20698F',
        borderWidth:1,
        borderRadius: 10,
        marginTop: 10,
        borderRadius: 50,
        height: 44,
        marginTop: 30
    },
    submitButton_Text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#20698F',
    },
});
