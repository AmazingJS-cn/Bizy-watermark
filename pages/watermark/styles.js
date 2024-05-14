import { View, Text, Image, StyleSheet, Pressable, FlatList, ScrollView } from 'react-native';

export default {
    card: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 15,
        margin: 20,
        borderRadius: 8,
        shadowColor: 'rgb(196, 204, 215)',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // 这个属性在iOS上不会产生效果，但在Android上可以用来模拟阴影
        title: {
            display: 'flex',
            color: '#2C3E50',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        switch: {
            width: 15,
            height: 8,
        },
        hr: {
            borderBottomWidth: 1,
            borderColor: '#ECF0F1',
            marginVertical: 12,
        }
    }
};