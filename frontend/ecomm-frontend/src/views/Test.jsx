import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
    const [dataResponse, setDataResponse] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(response => {
                setDataResponse(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <p>{dataResponse}</p>
        </div>
    );
};

export default Test;