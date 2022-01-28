import React from 'react';

interface IUrlNotFound {
    url: string;
};

const UrlNotFound = (props: IUrlNotFound) => {
    
    return (
        <div>
            <h2>404</h2>
            <h3>Lamentamos, não consegumos encontrar a página.</h3>
            <p>Url não encontrada : {props.url}</p>
        </div>
    );
    
} 

export default UrlNotFound;