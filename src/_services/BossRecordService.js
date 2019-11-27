import {API_URL} from '../_utils/Config';

export default class BossRecordService {
    static getAll(resumido = false) {
        let myHeaders = new Headers();

        let myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return fetch(`${API_URL}/RegistrosChefe?resumido=${resumido}`, myInit);
    }
}