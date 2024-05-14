import commonStyle from './styles';
import React, { Component, useState, useReducer } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import { Switch } from 'react-native-ui-lib';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import logoIconList from '../../data/CameraConsoleList';
import { initialWatermarkEditorConf, watermarkEditorReducer } from './reducer';

export default function() {
    const [editorConfs, dispatch] = useReducer(watermarkEditorReducer, initialWatermarkEditorConf);
    function checkLogo(item) {
        dispatch({type: 'toggleLogo', logo: item.id});
    }

    const CheckedIcon = (
        <View style={styles.checkedIcon}>
            <FontAwesome name="check-square" size={15} style={styles.checkedIcon} />
        </View>
    );

    return (
        <View style={styles.card}>
            <View style={styles.card.title}>
                <Text>显示设备Logo</Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{color: '#BDC3C7', marginRight: 5, fontSize: 12}}>
                        {editorConfs.logo ? (editorConfs.logo === true ? '自动识别' : logoIconList.find(item => item.id == editorConfs.logo).name) : ''}
                    </Text>
                    <Switch width={28} height={18} thumbSize={12} value={editorConfs.logo} onValueChange={(value) => dispatch({
                        type: 'toggleLogo',
                        logo: value
                    })} />
                </View>
            </View>
            {editorConfs.logo && <View style={styles.card.hr}></View>}
            {editorConfs.logo && <FlatList
                horizontal = {true}
                data={logoIconList}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Pressable style={[
                        styles.logoItem,
                        item.id === editorConfs.logo ? styles.logoItem.checked : ''
                    ]} onPress={() =>{checkLogo(item)}}>
                        <Image source={item.icon}  resizeMode='contain'
                            style={{height: 30, width: 30* item.aspectRatio, maxWidth: 50, }}></Image>
                        {item.id === editorConfs.logo && CheckedIcon}
                    </Pressable>
                )}
                ListHeaderComponent={
                    <Pressable style={[
                        styles.logoItem,
                        editorConfs.logo === true ? styles.logoItem.checked : ''
                    ]} onPress={() => dispatch({
                        type: 'toggleLogo',
                        logo: true
                    })}>
                        <MaterialIcons name="photo-filter" size={30} />
                        {editorConfs.logo === true && CheckedIcon}
                    </Pressable>
                }
                keyExtractor={item => item.id}
            />}
        </View>
    );
}

const styles = StyleSheet.create({
    ...commonStyle,
    logoItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        height: 56,
        borderWidth: 3,
        borderColor: '#ECF0F1',
        borderRadius: 6,
        marginRight: 8,
        position: 'relative',
        checked: {
            borderColor: 'rgb(90, 72, 245)',
        }
    },
    checkedIcon: {
        color: 'rgb(90, 72, 245)',
        position: 'absolute',
        right: -1,
        bottom: -1,
    }
})