export function getImageSizeForWeb(resource) {
    return new Promise((resolve, reject) => {
        const img = new window.Image();
        img.src = resource;
        img.onload = () => resolve({ width: img.width, height: img.height, url: resource });
        img.onerror = (error) => reject(error);   
    });
}

