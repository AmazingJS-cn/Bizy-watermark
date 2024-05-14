export function useCqh(containerHeight) {
    return cqh => Math.floor(cqh / 100 * containerHeight);
}

// 获取图片的exif信息
export function getExif(img) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const exif = EXIF.readFromBinaryFile(e.target.result);
            resolve(exif);
            reader.onerror = reject;
            reader.onabort = reject;
            reader.onprogress = reject;
            reader.readAsArrayBuffer(img);
            return;
            // console.log(exif);
            // console.log(EXIF.pretty(exif));
            // console.log(EXIF.getTag(exif, 'Orientation'));
        }
    });
}

export function setupStrFromExif(type, exif, exifConfig) {
    switch (type) {
    case 'console':
        return exif.make;
    case 'lensName':
        return exif.lens;
    case 'shotDetail':
        return exif.lens;
    case 'location':
        return exif.location;
    case 'date':
        return exif.date;
    }
}