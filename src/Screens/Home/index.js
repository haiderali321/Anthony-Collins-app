
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, StatusBar, TextInput, KeyboardAvoidingView, Platform, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
const profileIcon = require('../../assets/profileIcon.png')
const searchIcon = require('../../assets/searchIcon.png')
const smallGraphIcon = require('../../assets/smallGraphIcon.png')

export default function Home({ navigation }) {
    const [isSearchSelected, setisSearchSelected] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [watchListDate, setwatchListDate] = useState(
        [
            {
                range: '1D',
                isSelected: true
            },
            {
                range: '1M',
                isSelected: false
            },
            {
                range: '1Y',
                isSelected: false
            },
            {
                range: '3Y',
                isSelected: false
            },
            {
                range: '5Y',
                isSelected: false
            },
        ]
    );
    const [data, setData] = useState([
        {
            itemName: 'IFED-L',
            rate: '149.63',
            percentage: '+0.50%'
        },
        {
            itemName: 'IFED-LM',
            rate: '1,587.09',
            percentage: '-1.50%'
        },
        {
            itemName: 'IFED-M',
            rate: '46.88',
            percentage: '+3.10%'
        },
        {
            itemName: 'IFED-S',
            rate: '46.88',
            percentage: '+3.10%'
        },
        {
            itemName: 'IFED-A',
            rate: '149.63',
            percentage: '+0.50%'
        },
        {
            itemName: 'IFED-L',
            rate: '149.63',
            percentage: '+0.50%'
        },
        {
            itemName: 'IFED-LM',
            rate: '1,587.09',
            percentage: '-1.50%'
        },
        {
            itemName: 'IFED-M',
            rate: '46.88',
            percentage: '+3.10%'
        },
        {
            itemName: 'IFED-S',
            rate: '46.88',
            percentage: '+3.10%'
        },
        {
            itemName: 'IFED-A',
            rate: '149.63',
            percentage: '+0.50%'
        },
    ]);
    const selectActivity = (key) => {
        let cloneWatchListDate = watchListDate.splice(0)
        for (let index = 0; index < cloneWatchListDate.length; index++) {
            let range = cloneWatchListDate[index].range;
            let isSelected = cloneWatchListDate[index].isSelected;
            if (range === key) {
                isSelected = true
            }
            else {
                isSelected = false
            }
            let obj = { range, isSelected };
            cloneWatchListDate.splice(index, 1, obj);
        }
        setwatchListDate(cloneWatchListDate)
    }

    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerC1}>
                        <TouchableOpacity onPress={() => { navigation.openDrawer() }}>
                            <Image resizeMode='contain' style={{ width: 32, height: 32, }} source={profileIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setisSearchSelected(!isSearchSelected)}>
                            <Image resizeMode='contain' style={{ width: 32, height: 32, }} source={searchIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.containerC2}>
                        {
                            isSearchSelected &&
                            <View style={styles.inputContiner}>
                                <View>
                                    <Image resizeMode='contain' style={{ width: 25, height: 25, }} source={searchIcon} />
                                </View>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={(e) => { console.log(e) }}
                                    placeholder={"Search"}
                                    placeholderTextColor="grey"
                                />
                            </View>
                        }
                    </View>

                    <View style={styles.containerC3}>
                        <Text style={styles.text}>Watchlist</Text>
                        <Picker
                            style={{ width: '28%' }}
                            mode={'dropdown'}
                            selectedValue={selectedLanguage}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedLanguage(itemValue)
                            }>
                            <Picker.Item label="All" value="All" />
                            <Picker.Item label="Saved" value="Saved" />
                        </Picker>
                    </View>

                    <View style={styles.containerC4}>
                        {
                            watchListDate.map((key, index) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.selectedRoud, { backgroundColor: key.isSelected ? '#20698F' : null }]}
                                        onPress={() => { selectActivity(key.range) }}
                                    >
                                        <Text style={[styles.selectedText, { color: key.isSelected ? '#ffffff' : '#A7A7A7' }]} key={index}>{key.range}</Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        <TouchableOpacity style={styles.custom} onPress={() => { selectActivity('Custom') }}>
                            <Text style={[styles.selectedText, { color: '#A7A7A7' }]} >Custom</Text>
                        </TouchableOpacity>
                    </View>
                    {
                        data.map((key, index) => {
                            return (
                                <View style={styles.containerC5}>
                                    <View style={{ flex: 2, justifyContent: 'center' }}>
                                        <Text style={styles.graphText}>{key.itemName}</Text>
                                    </View>
                                    <View style={{ flex: 2, alignItems: 'center' }}>
                                        <Image resizeMode='contain' style={{ width: 100, height: 80, }} source={smallGraphIcon} />
                                    </View>
                                    <View style={{ flex: 2, alignItems: 'flex-end' }}>
                                        <Text style={styles.graphText}>{key.rate}</Text>
                                        <Text style={styles.percentageText}>{key.percentage}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }
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
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: '5%',
    },
    containerC1: {
        flex: 1,
        height: 50,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerC2: {
        flex: 1,
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
    },
    containerC3: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    containerC4: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    containerC5: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        marginTop: 10,
        borderTopColor: '#DEDEE1',
        borderTopWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#000000',
    },
    graphText: {
        fontWeight: '700',
        fontSize: 18,
        lineHeight: 21,
        letterSpacing: -0.3,
        color: '#000000',
    },
    percentageText: {
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: -0.3,
        color: '#20698F',
    },
    inputContiner: {
        backgroundColor: 'white',
        borderColor: '#DCDCDC',
        borderWidth: 1,
        borderRadius: 10,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    input: {
        height: 50,
        color: "black",
        fontWeight: 'bold',
        width: "85%",
        marginLeft: 10
    },
    selectedRoud: {
        height: 40,
        width: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedText: {
        fontWeight: '700',
        fontSize: 16,
        lineHeight: 38,
        letterSpacing: -0.3,
        color: '#ffffff',
    },
    custom: {
        height: 40,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
