import {API_URL} from '../_utils/Config';

export default class PowerRecordService {
    static getAll(resumido = false) {
        let myHeaders = new Headers();

        let myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return fetch(`${API_URL}/RegistrosPoder?resumido=${resumido}`, myInit);
    }

    static delete(id = 0) {
        if (id !== 0) {
            let myHeaders = new Headers();

            let myInit = {
                method: 'DELETE',
                headers: myHeaders,
                mode: 'cors',
                cache: 'default'
            };

            return fetch(`${API_URL}/RegistrosPoder/${id}`, myInit);
        } else {
            return Promise.reject('Id inválido');
        }
    }
}