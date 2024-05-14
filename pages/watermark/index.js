import React, { Component, useState, useReducer } from 'react';
import { View, Text, Image, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Switch, TextField, Button } from 'react-native-ui-lib';

import LogoEditor from './LogoEditor';

import logoIconList from '../../data/CameraConsoleList';
import allWatermarks from '../../data/WaterMarksList';
import { initialWatermarkEditorConf, watermarkEditorReducer } from './reducer';


export default function WatermarkScreen({watermarkId = 'narmalWaterMark'}) {
    const navigation = useNavigation();
    const [editorConfs, dispatch] = useReducer(watermarkEditorReducer, initialWatermarkEditorConf);

    // 当前选中的水印样式
    const WMTemplate = allWatermarks.find(item => item.id === watermarkId) || allWatermarks[0];
    const WMComp = WMTemplate.comp;


    function goWatermarkList() {
        navigation.navigate('WatermarkList');
    }


    const [readLogoFromEXIF, setReadLogoFromEXIF] = useState(true);
    const [checkedLogo, setcheckedLogo] = useState(logoIconList[0]);

    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                {/* <Image source={route.params.bg} style={styles.image} resizeMode='contain'></Image> */}
                <WMComp details={{
                    ...WMTemplate.details,
                    logo: editorConfs.logo,
                }} containerHeight={200}></WMComp>
                <Pressable style={styles.changeStyleBtn} onPress={goWatermarkList}>
                    <Text style={styles.changeStyleBtn.btn}>更换样式</Text>
                </Pressable>
                <View style={{height: 10}}></View>
                <LogoEditor></LogoEditor>
                {/* <Text>Logo显示</Text>
                <View>
                    <Text>从照片中读取</Text>
                    <Switch value={readLogoFromEXIF} onValueChange={(value) => setReadLogoFromEXIF(value)} />
                </View>
                {!readLogoFromEXIF && (<FlatList
                    horizontal = {true}
                    data={logoIconList}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({item, index}) => (
                        <Pressable onPress={() =>{checkLogo(item)}}>
                            <Image source={item.icon} style={{width: 60, height: 60}} resizeMode='contain'></Image>
                            <CheckBox checked={checkedLogo.id === item.id} />
                        </Pressable>
                    )}
                    keyExtractor={item => item.id}
                />)}
                <Text>EXIF信息自动识别</Text>
                <View style={styles.exifWrapper}>
                    <CheckBox style={styles.exifCheckbox} title={'焦距'} />
                    <CheckBox style={styles.exifCheckbox} title={'光圈'} />
                    <CheckBox style={styles.exifCheckbox} title={'快门'} />
                    <CheckBox style={styles.exifCheckbox} title={'ISO'} />
                    <CheckBox style={styles.exifCheckbox} title={'镜头信息'} />
                    <CheckBox style={styles.exifCheckbox} title={'镜头标识'} />
                    <CheckBox style={styles.exifCheckbox} title={'GPS信息'} />
                    <CheckBox style={styles.exifCheckbox} title={'拍摄时间'} />
                    <CheckBox style={styles.exifCheckbox} title={'分辨率'} />
                    <CheckBox style={styles.exifCheckbox} title={'拍摄时间'} />
                </View>        */}
            </ScrollView>
            <View style={styles.button}>
                <Button title="开始添加水印" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    changeStyleBtn: {
        position: 'absolute',
        top: 70,
        left: '50%',
        transform: [{ translateX: '-50%', translateY: '-50%' }],
        btn: {
            color: '#fff',
            paddingVertical: 7,
            paddingHorizontal: 15,
            backgroundColor: 'rgba(178,178,178,0.5)',
            border: '1px solid #fff',
            borderRadius: 100,
            opacity: 0.9,
            fontSize: 12,
        }
    },
    exifWrapper: {
        alignItems: 'between',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    exifCheckbox: {
        flex: 1,
        minWidth:'33%',
    },
    button: {
        height: 50,
        backgroundColor: '#fff',
    }
})