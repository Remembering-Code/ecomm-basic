import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Test = () => {
    const [dataResponse, setDataResponse] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setDataResponse(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h2>Data Response</h2>
            <ul>
                {dataResponse.map(data => (
                    <li key={data.prd_ID}>
                        {data.prd_NAME} - ${data.prd_PRICE}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Test;