import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView,  Image } from 'react-native';
import { useI18n } from '../../i18n';
const $t = useI18n();

import IndexImageList from '../../components/IndexImageList';
import IndexToolbox from '../../components/IndexToolbox';
import { watermarkList } from '../../data/IndexFunctionalList';




export default function App({ navigation }) {
    return (
        // <SafeAreaView style={styles.container}>
        <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>  
            <View style={styles.logo}>
                <View style={styles.logo.mainTitle}>
                    <Text style={{ fontSize: 20 }}>{$t('indexTitle')}</Text>
                </View>
                <Image style={styles.logo.logo} source={require('../../assets/logo.png')} />
            </View>
            <View style={styles.mainContent}>
                {/* 水印 */}
                <IndexImageList title={$t('indexTitleWaterMark')} listData={watermarkList} type={'watermark'}/>
                {/* 画框 */}
                <IndexImageList title={$t('indexTitlePicFrame')} listData={watermarkList} type={'picFrame'}/>
                {/* 工具 */}
                <IndexToolbox />
            </View>
            <StatusBar style="auto" />
        </ScrollView>
        // </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f3f2f8',
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    mainContent: {
        width: '100%',
        flex: 1,
    },
    logo: {
        flexDirection: 'row',
        width: '100%',
        logo: {
            width: 50,
            height: 50,
        },
        mainTitle: {
            flex: 1,
        },
    },
});
