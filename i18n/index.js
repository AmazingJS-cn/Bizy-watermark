import { getLocales } from 'expo-localization';
import zh from './zh-cn';
import en from './en-us';

const deviceLanguage = getLocales()[0].languageCode;


function getObjVal(obj, key) {
    const keys = key.split('.');
    let value = obj;
    for (const key of keys) {
        value = value[key];
        if (value === undefined) {
            return undefined;
        }
    }
    return value;
}


export function useI18n (lang = deviceLanguage) {
    return function (keyName) {
        if (lang === 'zh') {
            return getObjVal(zh, keyName);
        } else if (lang === 'en') {
            // 默认使用中文
            return getObjVal(en, keyName) || getObjVal(zh, keyName);
        }
    }
}
