import { StyleSheet, Text, View, SafeAreaView, ScrollView,  Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useI18n } from './i18n';
const $t = useI18n();

import HomeScreen from './pages/home';
import WatermarkScreen from './pages/watermark';
import Test from './pages/testpage';
const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Test" component={Test} options={{ headerShown: false }}/> */}
                <Stack.Screen name="Watermark" component={WatermarkScreen} options={{title: $t('watermarkPageTitle')}}/>
                <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
});
