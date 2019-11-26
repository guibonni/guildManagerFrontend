import {API_URL} from '../_utils/Config';

export default class MemberService {
    static getAll() {
        let myHeaders = new Headers();

        let myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return fetch(`${API_URL}/Membros`, myInit);
    }
}