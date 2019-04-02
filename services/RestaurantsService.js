import * as Api from './ApiBase';
import {RESTAURANTS} from '../constants/Api';

const headers = new Headers();
headers.append('Accept', 'application/json');
headers.append('Content-Type', 'application/json');

export async function getRestaurantsList(token) {
    headers.append('Authorization', `Bearer ${token}`);
    return await Api.Get(RESTAURANTS, headers);
}