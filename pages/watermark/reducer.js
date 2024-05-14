export const initialWatermarkEditorConf = {
    // 是否展示拍摄设备的logo
    // true: 自动从exif中获取， false：不展示，其他：请展示该logo
    logo: true,
};

export const watermarkEditorReducer = (confs, action) => {
    switch (action.type) {
    case 'toggleLogo': {
        return {
            ...confs,
            logo: action.logo
        };
    }
    case 'changed': {
        return {
            ...confs
        };
    }
    default: {
        throw Error('未知 action: ' + action.type);
    }
    }
};


// const [editorConfs, dispatch] = useReducer(watermarkEditorReducer, initialWatermarkEditorConf);
// export { editorConfs, dispatch };