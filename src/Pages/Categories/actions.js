import {get, makeURL} from '../../Utils/fetcher';
import {METHODS} from '../../constants';

export const getCategories = () => {
    const url = makeURL(METHODS.GET_CATEGORIES);
    return get(url);
};

export const getCategoryById = (id) => {
    const url = makeURL(METHODS.GET_CATEGORIES + id);
    return get(url);
}