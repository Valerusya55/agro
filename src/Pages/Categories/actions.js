import {get, makeURL} from '../../Utils/fetcher';
import {METHODS} from '../../constants';

export const getCategories = () => {
    const url = makeURL(METHODS.GET_CATEGORIES);
    return get(url);
};

export const getCategoriesById = () => {
    const url = makeURL(METHODS.GET_CATEGORIES_BY_CATEGORY_ID);
    return get(url);
}