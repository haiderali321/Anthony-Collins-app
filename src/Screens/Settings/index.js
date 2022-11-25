
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
const aeroLeft = require('../../assets/ArrowLeft.png')
const aeroRight = require('../../assets/aeroRight.png')

export default function Setting({ navigation }) {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.containerC1}>
                <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
                    <Image resizeMode='contain' source={aeroLeft} style={styles.iconSize} />
                </TouchableOpacity>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.text}>Settings</Text>
                </View>
            </View>
            <View style={styles.containerC2}>
                <Text style={styles.smallText}>Profile</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.text}>My Personal Information</Text>
                        <Image resizeMode='contain' source={aeroRight} style={styles.aeroRight} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('Profile')}>
                        <View>
                            <Text style={styles.text}>Profile Status </Text>
                            <Text style={styles.smallText}>Licensee</Text>
                        </View>
                        <Image resizeMode='contain' source={aeroRight} style={styles.aeroRight} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerC3}>
                <Text style={styles.smallText}>Settings</Text>
                <View style={styles.optionsContainer}>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.text}>Password</Text>
                        <Image resizeMode='contain' source={aeroRight} style={styles.aeroRight} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('PrivacyPolicy')}>
                        <View>
                            <Text style={styles.text}>Privacy Policy </Text>
                        </View>
                        <Image resizeMode='contain' source={aeroRight} style={styles.aeroRight} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options} onPress={() => navigation.navigate('TermsAndCondition')}>
                        <View>
                            <Text style={styles.text}>Terms and Conditions</Text>
                        </View>
                        <Image resizeMode='contain' source={aeroRight} style={styles.aeroRight} />
                    </TouchableOpacity>
                </View>
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
    text: {
        fontWeight: '700',
        fontSize: 16,
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
    optionsContainer: {
        borderTopColor: '#DEDEE1',
        borderTopWidth: 1,
        marginTop: 16,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: 50,
    },
    containerC1: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
    },
    containerC2: {
        flex: 2, width: '100%',
    },
    containerC3: {
        flex: 6, marginTop: 16, width: '100%',
    },
});
