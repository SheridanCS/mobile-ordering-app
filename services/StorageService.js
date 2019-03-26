import {SecureStore} from 'expo';
import {} from '../constants/Storage';

export async function readUserData() {
    return await read(USER_DETAILS);
}

export async function writeUserData(userDetail) {
    return await write(USER_DETAILS, userDetail);
}

export async function removeUserData() {
    return await remove(USER_DETAILS);
}

async function read(key) {
    return await SecureStore.getItemAsync(key)
        .then((details) => {
            return JSON.parse(details)
        })
        .catch((error) => {
            console.log('error while reading from secure storage: ' + error);
        });
}

async function write(key, data) {
    return await SecureStore.setItemAsync(key, JSON.stringify(data))
        .then((success) => {
            console.log('successfully wrote to secure storage: ' + key, data, success);
        })
        .catch((error) => {
            console.log('error while writing to secure storage: ' + error);
        });
}

async function remove(key) {
    return await SecureStore.deleteItemAsync(key)
        .then((success) => {
            // console.log('successfully deleted from secure storage: ' + key, success);
        })
        .catch((error) => {
            console.log('error while writing to secure storage: ' + error);
        });
}