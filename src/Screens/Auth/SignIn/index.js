
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';

const logo = require('../../../assets/logo.png')
const googleIcon = require('../../../assets/googleIcon.png')
const facebookIcon = require('../../../assets/facebookIcon.png')
const appleIcon = require('../../../assets/appleIcon.png')

export default function SignIn({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={styles.containerC1}>
                <View style={styles.containerc1_c1}>
                    <Image resizeMode='contain' style={{ width: 250, height: 120, marginBottom: 50 }} source={logo} />
                </View>
                <View style={styles.containerc1_c2}>
                    <Text style={styles.text}>Sign in</Text>
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
                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.submitButton_Text}>Sign in</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.forget_Password} onPress={() => navigation.navigate('ForgotPassword')}>Forgot password</Text>
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
                    <TouchableOpacity style={styles.socialText} onPress={() => navigation.navigate('Signup')}>
                        <Text style={[styles.socialTextC1, { fontWeight: 'bold' }]}>New to IFED Wizard? </Text>
                        <Text style={[styles.socialTextC1, { color: '#20698F', fontWeight: 'bold' }]}>Join Now</Text>
                    </TouchableOpacity>
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
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerc1_c2: {
        width: '100%',
    },
    containerc1_c3: {
        marginTop: 30,
        width: '100%',
        justifyContent: 'flex-end',
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
    }
});
