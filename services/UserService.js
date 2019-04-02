import {ME_ENDPOINT} from '../constants/Api'
import * as Api from './ApiBase';

const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

export async function me(token) {
    headers.append('Authorization', `Bearer ${token}`);
    return await Api.Get(ME_ENDPOINT, headers, {})
}