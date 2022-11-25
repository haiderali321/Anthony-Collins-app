
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const logo = require('../../../assets/logo.png')
const googleIcon = require('../../../assets/googleIcon.png')
const facebookIcon = require('../../../assets/facebookIcon.png')
const appleIcon = require('../../../assets/appleIcon.png')
const aeroLeft = require('../../../assets/ArrowLeft.png')

export default function Signup({ navigation }) {
    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.containerC1}>
                <View style={styles.containerc1_c1}>
                    <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                        <Image source={aeroLeft} style={{ height: 30, width: 30, }} />
                    </TouchableOpacity>
                    <Image resizeMode='contain' style={{ width: 250, height: 120, marginBottom: 50 }} source={logo} />
                </View>
                <View style={styles.containerc1_c2}>
                    <Text style={styles.text}>Sign up</Text>
                    <View style={styles.inputContiner}>
                        <TextInput
                            style={styles.input}
                            onChangeText={(e) => { console.log(e) }}
                            placeholder={"User Name"}
                            placeholderTextColor="grey"
                        />
                    </View>
                    <View style={styles.inputContiner}>
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            onChangeText={(e) => { console.log(e) }}
                            placeholder={"Password"}
                            placeholderTextColor="grey"
                        />
                    </View>
                    <View style={styles.inputContiner}>
                        <TextInput
                            secureTextEntry
                            style={styles.input}
                            onChangeText={(e) => { console.log(e) }}
                            placeholder={"Confirm Password"}
                            placeholderTextColor="grey"
                        />
                    </View>

                    <View style={styles.checkboxContainer}>
                        <CheckBox
                            tintColors={'#000000'}
                            disabled={false}
                            value={isSelected}
                            onValueChange={setSelection}
                        />
                        <Text style={styles.label}>I have read Terms and Conditions and Privacy Policy</Text>
                    </View>

                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.submitButton_Text}>Create Account</Text>
                    </TouchableOpacity>

                </View>
                <View style={styles.containerc1_c3}>
                    <View style={styles.socialText}>
                        <Text style={styles.socialTextC1}>or </Text>
                        <Text style={[styles.socialTextC1, { fontWeight: 'bold', }]}>sign in </Text>
                        <Text style={styles.socialTextC1}>with social</Text>
                    </View>
                    <View style={styles.socialIcon}>
                        <TouchableOpacity>
                            <Image resizeMode='contain' style={styles.iconSize} source={googleIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode='contain' style={[styles.iconSize, { top: -4 }]} source={appleIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image resizeMode='contain' style={styles.iconSize} source={facebookIcon} />
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    containerC1: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: '5%',
    },
    text: {
        fontWeight: '700',
        fontSize: 32,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#000000'
    },
    containerc1_c1: {
        height: 180,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerc1_c2: {
        width: '100%',
    },
    containerc1_c3: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'flex-end',
        marginBottom: 20
    },
    inputContiner: {
        backgroundColor: 'white',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
    },
    input: {
        height: 50, width: "90%", color: "black",
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
        color: '#20698F',
        marginTop: 10,
    },
    socialText: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    socialTextC1: {
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#3E4651',
        marginTop: 10,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    socialIcon: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
    },
    iconSize: {
        width: 36,
        height: 36,
    },
    checkboxContainer: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 20,
    },
    label: {
        marginTop: 5,
        color: '#000000'
    },
    back: {
        top: '15%',
        justifyContent: 'flex-end',
        width: '100%',
    }
});
