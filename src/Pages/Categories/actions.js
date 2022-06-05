import {get, makeURL} from '../../Utils/fetcher';
import {METHODS} from '../../constants';

const mockResponse = [
    {
        id: 1,
        name: 'Гидравлика',
        imageURL: 'gydro.svg',
    },
    {
        id: 2,
        name: 'Сельхозмашины',
        imageURL: 'agro_mach.svg',
    },
];

export const getCategories = () => {
    // const url = makeURL(METHODS.GET_CATEGORIES);
    // return get(url);

    return Promise.resolve(mockResponse);
};
