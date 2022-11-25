
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
const aeroLeft = require('../../../assets/ArrowLeft.png')

export default function ForgotPassword({ navigation }) {

    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerC1}>
                <View style={styles.containerc1_c1}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Image source={aeroLeft} style={styles.iconSize} />
                    </TouchableOpacity>
                </View>
                <View style={styles.containerc1_c2}>
                    <Text style={styles.text}>Forgot Password</Text>
                    <Text style={styles.forget_Password}>We will send a reset code to your email</Text>
                    <View style={styles.inputContiner}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => { console.log(e) }}
                            placeholder={"Email"}
                            placeholderTextColor="grey"
                        />
                    </View>
                </View>
                <View style={styles.containerc1_c3}>
                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('VerifyEmail')}>
                        <Text style={styles.submitButton_Text}>Reset Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={[styles.forget_Password, { textAlign: 'center' }]}>Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    containerC1: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    text: {
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#000000',
    },
    containerc1_c1: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerc1_c2: {
        flex: 8,
        width: '100%',
    },
    containerc1_c3: {
        width: '100%',
        flex: 2,
    },
    inputContiner: {
        backgroundColor: 'white',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 20,
    },
    input: {
        height: 50,
        width: "90%",
        color: "black",
        marginLeft: 7,
        fontWeight: 'bold'
    },
    submitButton: {
        backgroundColor: '#20698F',
        borderRadius: 10,
        borderRadius: 50,
        height: 44,
        marginTop: 15
    },
    submitButton_Text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#FFFFFF',
    },
    forget_Password: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#000000',
        marginTop: 10,
    },
    iconSize: {
        width: 30,
        height: 30,
    },
    back: {
        justifyContent: 'flex-end',
        width: '100%',
    }
});
