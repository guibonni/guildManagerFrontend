import {API_URL} from '../_utils/Config';

export default class MemberService {
    static getAll(resumido = false) {
        let myHeaders = new Headers();

        let myInit = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };

        return fetch(`${API_URL}/Membros?resumido=${resumido}`, myInit);
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

            return fetch(`${API_URL}/Membros/${id}`, myInit);
        } else {
            return Promise.reject('Id inválido');
        }
    }

    static create(data) {
        let myHeaders = new Headers();
        
        myHeaders.append('Content-Type', 'application/json');

        let myInit = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(data)
        };

        return fetch(`${API_URL}/Membros`, myInit);
    }
}