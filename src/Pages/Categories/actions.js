import {get, makeURL} from '../../Utils/fetcher';
import {METHODS} from '../../constants';

export const getCategories = () => {
    const url = makeURL(METHODS.GET_CATEGORIES);
    return get(url);

    // return Promise.resolve(mockResponse);
};