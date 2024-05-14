import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useI18n } from '../i18n';
const $t = useI18n();


const Item = ({item, isLast}) => (
    <View style={[styles.item, isLast && styles.itemLast]}>
        <Image source={item.bg} style={{height: 150, width: 225}} />
        {/* <Text style={styles.itemText}>{item.title}</Text> */}
    </View>
);

export default function IndexImageList({ title, listData, type}) {
    const navigation = useNavigation();
    function goMore() {
        if (type === 'watermark') {
            // go watermark
        } else if (type === 'picFrame') {
            // go picFrame
        }
    }
    function goEditor(item) {
        console.log(item )
        if (type === 'watermark') {
            navigation.navigate('Watermark', item )
        } else if (type === 'picFrame') {
            // go picFrame
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{title || $t('indexTitleWaterMark')}</Text>
                <Pressable onPress={goMore}>
                    <Text style={styles.titleMore}>{$t('indexTitleMore')}</Text>
                </Pressable>
            </View>
            <FlatList
                horizontal = {true}
                data={listData}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                    <Pressable onPress={() =>{goEditor(item)}}>
                        <Item item={item} isLast={index === listData.length - 1} />
                    </Pressable>)}
                keyExtractor={item => item.id}
            />
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

    item: {
        marginVertical: 8,
        marginRight: 8,
    },
    itemLast: {
        marginRight: 0,
    },
    itemText: {
        fontSize: 18,
        marginVertical: 8
    }
})