import { useI18n } from '../i18n';
const $t = useI18n();


export const watermarkList = [{
    bg: require('../assets/watermark/1.png'), 
    id: 1
}, {
    bg: require('../assets/watermark/2.png'), 
    id: 2
}, {
    bg: require('../assets/watermark/3.png'), 
    id: 3
}, {
    bg: require('../assets/watermark/4.png'), 
    id: 4
}, {
    bg: require('../assets/watermark/5.png'), 
    id: 5
}];

export const picFrameList = [{
    bg: require('../assets/watermark/1.png'), 
    id: 1
}, {
    bg: require('../assets/watermark/2.png'), 
    id: 2
}, {
    bg: require('../assets/watermark/3.png'), 
    id: 3
}, {
    bg: require('../assets/watermark/4.png'), 
    id: 4
}, {
    bg: require('../assets/watermark/5.png'), 
    id: 5
}]

export const toolList = [{
    bg: require('../assets/watermark/1.png'), 
    title: $t('indexToolbox.exifRemove'),
    id: 'exifRemove'
}, {
    bg: require('../assets/watermark/2.png'), 
    title: $t('indexToolbox.filters'),
    id: 'filters'
}, {
    bg: require('../assets/watermark/3.png'), 
    title: $t('indexToolbox.curve'),
    id: 'curve'
}, {
    bg: require('../assets/watermark/4.png'), 
    title: $t('indexToolbox.poses'),
    id: 'poses'
}, {
    bg: require('../assets/watermark/5.png'), 
    title: $t('indexToolbox.composition'),
    id: 'composition'
}]