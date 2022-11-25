
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
const aeroLeft = require('../../assets/ArrowLeft.png')
const aeroRight = require('../../assets/aeroRight.png')

export default function EditProfile({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerC1}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate('Profile')}>
                    <Image resizeMode='contain' source={aeroLeft} style={styles.iconSize} />
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.HeaderText}>Edit Profile</Text>
                </View>
            </View>

            <ScrollView style={{ width: '100%', }} contentContainerStyle={{ paddingBottom: 100 }} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={styles.options}>
                        <Text style={styles.smallText}>Full name</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"Amy Tan"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>
                    <View style={styles.options}>
                        <Text style={styles.smallText}>Business Entity</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"Business"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>
                    <View style={styles.options}>
                        <Text style={styles.smallText}>Job title</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"Investor"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>

                    <View style={styles.options}>
                        <Text style={styles.smallText}>Email</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"amytan@email.com"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>

                    <View style={styles.options}>
                        <Text style={styles.smallText}>Zip/Postal Code</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"43062"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>

                    <View style={styles.options}>
                        <Text style={styles.smallText}>Phone number</Text>
                        <View style={styles.inputContiner}>
                            <TextInput
                                onChangeText={(e) => { console.log(e) }}
                                placeholder={"(321) 883-3110"}
                                placeholderTextColor="#000000"
                                style={styles.text}
                            />
                        </View>
                    </View>

                </View>
                <View>
                    <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.submitButton_Text}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.cancleButton} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.cancleButton_Text}>Cancle</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000'
    },
    text: {
        left: -3.5,
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000'
    },
    smallText: {
        top: 10,
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
        paddingLeft: 10,
        width: '100%',
        height: 70,
        marginTop: 16,
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 10,
        overflow: 'hidden',
    },
    containerC1: {
        height:50,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    submitButton: {
        backgroundColor: '#20698F',
        borderWidth: 1,
        borderRadius: 10,
        borderRadius: 50,
        height: 44,
        marginTop: 10
    },
    submitButton_Text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#ffffff',
    },
    cancleButton: {
        borderColor: '#20698F',
        borderWidth: 1,
        borderRadius: 10,
        borderRadius: 50,
        height: 44,
        marginTop: 10
    },
    cancleButton_Text: {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#20698F',
    },
    inputContiner: {
        width: '100%',
    },
});
