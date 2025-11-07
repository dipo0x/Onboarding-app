import { File, Paths } from 'expo-file-system';
import { Buffer } from 'buffer';

export const getFileName = (fileUri: string) => {
    return fileUri.split('/').pop();
}

export const getFileType = (fileUri: string) => {
    const fileName = getFileName(fileUri);
    if (fileName) {
        const fileExtension = fileName.split('.').pop();
        if (fileExtension) {
            return `image/${fileExtension}`;
        }
    }
    return 'image/png';
}


export const fileToBuffer = async (fileUri: string) => {
    try {
        const file = new File(fileUri);
        const b64 = await file.base64();
        const buffer = Buffer.from(b64, 'base64');
    return buffer;
    } catch (error) {
        console.error('Error reading file as buffer:', error);
        throw error;
    }
};