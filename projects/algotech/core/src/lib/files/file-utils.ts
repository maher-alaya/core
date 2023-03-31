import { mimetypes } from './mimetypes';

export class FileUtils {
    static extToMimeType(ext: string) {
        const mime = Object.entries(mimetypes).find(([key, value]) => value.includes(ext.replace('.', '')));
        return (mime) ? mime[0] : 'application/octet-stream';
    }
}