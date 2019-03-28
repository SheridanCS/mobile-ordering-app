import * as Api from './ApiBase';
import {RESTAURANTS} from '../constants/Api';

export async function getRestaurantsList() {
    return await Api.Get(RESTAURANTS);
}