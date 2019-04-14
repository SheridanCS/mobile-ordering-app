const URI_BASE = 'https://grub2go.herokuapp.com';
const API_BASE = URI_BASE + '/api';
const OAUTH_BASE = URI_BASE + '/oauth';
const USERS_BASE = API_BASE + '/users';

export const CLIENT_ID = 'jwtclientid';
export const CLIENT_SECRET = 'jwtpass';

export const CHECK_TOKEN_ENDPOINT = OAUTH_BASE + '/check_token';
export const FILES_ENDPOINT = API_BASE + '/files/';
export const ME_ENDPOINT = USERS_BASE + '/me';
export const RESTAURANTS = API_BASE + '/restaurants';
export const TOKEN_ENDPOINT = OAUTH_BASE + '/token';
