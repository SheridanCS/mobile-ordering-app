import {Base64} from 'js-base64';

import * as Api from './ApiBase';
import {CLIENT_ID, CLIENT_SECRET, TOKEN_ENDPOINT} from '../constants/Api';
import {PASSWORD, REFRESH_TOKEN} from '../constants/GrantTypes';

const AUTH_BASIC = Base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`);

export async function login(payload) {
    let headers = new Headers();
    headers.append('Authorization', `Basic ${AUTH_BASIC}`);

    let body = new FormData();
    body.append('grant_type', PASSWORD);
    body.append('username', payload.username);
    body.append('password', payload.password);

    return await Api.Post(TOKEN_ENDPOINT, headers, body);
}

export async function refreshToken(payload) {
    let headers = new Headers();
    headers.append('Authorization', `Basic ${AUTH_BASIC}`);

    let body = new FormData();
    body.append('grant_type', REFRESH_TOKEN);
    body.append('refresh_token', payload.refresh_token);

    return await Api.Post(TOKEN_ENDPOINT, headers, body);
}

