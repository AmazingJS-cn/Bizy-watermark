import { StyleSheet, Text, View, Image, ImageBackground, Pressable } from 'react-native';
import { useI18n } from '../i18n';
const $t = useI18n();

import {toolList} from '../data/IndexFunctionalList';


const Item = ({item}) => (
    <View style={[styles.item]}>
        <ImageBackground source={item.bg} style={{width: '100%', height: '100%'}} >
            <Text style={styles.itemText}>{item.title}</Text>
        </ImageBackground>
    </View>
);

export default function IndexToolbox() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{$t('indexToolbox.title')}</Text>
            </View>
            <View style={styles.list}>
                {toolList.map((item, index) => {
                    return (<Item item={item} key={item.id}/>);
                })}
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        flex: 1,
        fontSize: 28,
        marginBottom: 5,
        color: '#363940',
    },
    titleMore: {
        fontSize: 18,
        color: '#363940',

    },
    list: {
        flex: 1,
        alignItems: 'between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 10,
    },
    item: {
        minWidth: '40%',
        flex: 1,
        height: 100,
    },
    itemText: {
        fontSize: 18,
        margin: 8,
        color: '#fff',
    }
})