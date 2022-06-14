import {get, makeURL} from '../../Utils/fetcher';
import {METHODS} from '../../constants';

export const getSubCategories = (id) => {
    const url = makeURL(`${METHODS.GET_CATEGORIES}${id}/${METHODS.SUBCATEGORIES}`);
    return get(url);
};
