import React from 'react';
import { useParams } from 'react-router-dom';

const Phones = () => {
    const id = useParams()
    console.log(id);
    return (
        <div>
            <h1>Phones</h1>
        </div>
    );
};

export default Phones;