import { View, TextField, Text, Button, Image, } from 'react-native-ui-lib';
import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { useCqh } from '../utils/util';
import cameraConsoleList from '../data/CameraConsoleList';


export const defaultConf = {
    id: 'narmalWaterMark',
    name: '标准水印',
    author: 'Bisy',
    resource: require('../assets/watermark/1.png'),
    width: 750,
    height: 500,
    details: {
        logo: 'sony',
        left1: 'ILCE-7RM4',
        left2: '2019-04-08 13:56:57',
        right1: '85.0mm F/4.0 1/160 ISO320',
        right2: '39.9087° N, 116.3975° E',
        // bar 的高度，默认是照片高度的 15%
        barSize: 0.15,
        // 内容缩放比例，默认是1
        watermarkSize: 1,
    },
    // 组件的配置项，用于在编辑器中展示
    templateOptions: {
        hasLogo: true,
        handlers: [{ 
            id: 'left1',
            name: '系列名称',
            required: true,
            type: 'text',
            defaultMode: 'console'
        }, { 
            id: 'left2',
            name: '拍摄时间',
            type: 'text',
            defaultMode: 'date'
        }, { 
            id: 'right1',
            required: true,
            name: '照片参数',
            type: 'text',
            defaultMode: 'shotDetail'
        }, { 
            id: 'right2',
            name: '地理位置',
            type: 'text',
            defaultMode: 'location'
        },]
    }
}

// 不管组件内部宽高如何处理，内容决不能超出container的宽高
export default function WMComp1 ({
    resource = defaultConf.resource,
    width = defaultConf.width,
    height = defaultConf.height,
    details = defaultConf.details,
    containerHeight, containerWidth
}) {
    console.log(details)
    // 水印条的大小，默认高度是照片高度的 15%。竖向照片按宽度走。
    const [barSize, setBarSize] = useState(details.barSize || 0.15);
    // 水印条上的内容的缩放比例，默认为 1
    const [watermarkSize, setWatermarkSize] = useState(details.watermarkSize || 1);
    // 计算出水印条的真实PX高度
    const barHeight = (height > width ? width : height) * barSize;
    // 模拟一个 container cqh单位
    const cqh = useCqh(barHeight);
    // 相机图标详细信息，如果没有就使用默认的
    const cameraIcon = cameraConsoleList.find(i => i.id === details.logo) || cameraConsoleList[0];

    const styles = StyleSheet.create({
        wrapper: {
            height: containerHeight || '100%',
            width: containerWidth || '100%',
            position: 'relative'
        },
        scaleBox: {
            position: 'absolute',
            left: '50%',
            transform: [{ translateX: '-50%' }, {
                scale: containerHeight / (height + barHeight)
            }],
            transformOrigin: 'top center',
        },
        image: {
            width,
            height,
        },
        watermarkWrapper: {
            width: '100%',
            height: barHeight,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
        },
        leftMark: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: cqh(30),
            gap: cqh(3) * watermarkSize,
        },
        rightMark: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: cqh(30),
        },
        title: {
            color: '#2C3E50',
            fontWeight: 500,
            fontSize: cqh(20) * watermarkSize,
        },
        subtitle: {
            color: '#95A5A6',
            fontWeight: 100,
            fontSize: cqh(16) * watermarkSize
        },
        logoIcon: {
            height: cqh(cameraIcon.heightCqh || 40) * watermarkSize
        },
        logoBorder : {
            borderRightWidth: 1,
            borderColor: '#ECF0F1',
            height: cqh(30) * watermarkSize,
            marginHorizontal: cqh(22) * watermarkSize
        },
    });

    return <View style={styles.wrapper}>
        <View style={styles.scaleBox}>
            <Image source={resource || defaultConf.initialImage} style= {styles.image} />
            <View style={styles.watermarkWrapper}>
                <View style={styles.leftMark}>
                    <Text style={styles.title}>{ details.left1 || 'Bizy - 开源&免费的照片工具'}</Text>
                    { details.left2 && (<Text style={styles.subtitle}>{ details.left2 }</Text>)}
                </View>
                <View style={styles.rightMark}>
                    <Image
                        source={ cameraIcon.icon }
                        style={[{
                            width: styles.logoIcon.height * (cameraIcon.aspectRatio || 1)
                        }, styles.logoIcon]}
                        resizeMode='contain'></Image>
                    <View style={styles.logoBorder}></View>
                    <View style={[styles.leftMark, {margin: 0}]}>
                        <Text style={styles.title}>{details.right1 || '未知拍摄参数'}</Text>
                        { details.right2 && <Text style={styles.subtitle}>{ details.right2 }</Text> }
                    </View>
                </View>
            </View>
        </View>
    </View>
}