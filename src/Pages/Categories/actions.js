import { get, makeURL } from '../../Utils/fetcher';
import { METHODS } from '../../constants';

export const getCategories = () => {
    const url = makeURL(METHODS.GET_CATEGORIES);
    return get(url);
};

export const getCategoryById = (idCategory) => {
    const url = makeURL(METHODS.GET_CATEGORIES) + idCategory;
    return get(url);
};

export const getSubcategoryById = (idCategory, idSubcategory) => {
    const url = makeURL(METHODS.GET_CATEGORIES + idCategory + METHODS.GET_SUBCATEGORY_BY_ID) + idSubcategory;
    return get(url);
};

export const getProductById = (idCategory, idSubcategory, idProduct) => {
    const url = makeURL(METHODS.GET_CATEGORIES + idCategory + METHODS.GET_SUBCATEGORY_BY_ID) +
        idSubcategory + METHODS.GET_PRODUCT_BY_ID + idProduct;
    return get(url);
};