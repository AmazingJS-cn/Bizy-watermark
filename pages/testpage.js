import WMComp1, {defaultConf} from "../components/WMComp1";
import WaterMarksList from "../data/WaterMarksList";
export default function Test() {
    return <WMComp1
        resource={require('../assets/watermark/1.png')}
        width={750}
        height={500}
        containerHeight={300}
        details={{
            logo: 'sony',
            left1: 'ILCE-7RM4',
            left2: '2019-04-08 13:56:57',
            right1: '85.0mm F/4.0 1/160 ISO320',
            right2: '39.9087° N, 116.3975° E',
        }}
    ></WMComp1>
}