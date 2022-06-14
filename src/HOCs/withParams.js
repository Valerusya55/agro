import React from 'react';
import { useParams } from 'react-router-dom';

export default function withParams(Component) {
    return (props) => {
        const params = useParams();
        console.log(params);
        return <Component {...props} matches={params}/>
    };
}
