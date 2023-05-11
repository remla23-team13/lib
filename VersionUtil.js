import json from './package.json';

export class VersionUtil {
    static getVersion() {
        return json.version
    }
}