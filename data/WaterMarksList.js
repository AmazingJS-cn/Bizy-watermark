import WMComp1, {defaultConf as defaultConf1} from '../components/WMComp1';
export default (() => {
    return [{
        comp: WMComp1,
        ...defaultConf1,
    }];
})()