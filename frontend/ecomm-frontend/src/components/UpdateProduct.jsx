import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const UpdateProduct = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({
        prd_name: '',
        prd_description: '',
        prd_price: 0,
        prd_category: '',
        prd_instock_quantity: 0,
        prd_updated_by: "DEFAULT",
        // prd_images: ''
    });

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        axios.get(`http://localhost:8080/product/${id}`)
            .then(response => {
                setProduct(response.data);
                setLoading(false); 
                // console.log(product)
            })
            .catch(error => {
                console.error('Error retriving the product:', error);
            });

    }, [product.prd_id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/updateProduct/${id}`, product)
            .then(response => {
                console.log(response.data);
                navigate("/")
            })
            .catch(error => {
                console.error('Error updating the product:', error);
            });
    };

    // Display loading message while fetching data
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className='h-screen flex justify-center bg-blue-100'>
            <div className=' mt-5 container text-center'>
                <h2>Update Product</h2>
                <div className='border mt-5'>
                    <form onSubmit={handleSubmit}>
                        {/* TO DO: REMOVE ME once login auth stuff works and people can login*/}
                        <input type="hidden" name="prd_updated_by" value={product.prd_updated_by} />
                        <div className=''>
                            <label>Product Name:</label> <br />
                            <input className='border p-1 mb-5' type="text" name="prd_name" value={product.prd_name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Product Price:</label><br />
                            <input className='border p-1 mb-5' type="number" name="prd_price" value={product.prd_price} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Product Description:</label><br />
                            <textarea  rows="4" cols="50" className='border p-1 mb-5' name="prd_description" value={product.prd_description} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Product Category:</label><br />
                            <input className='border p-1 mb-5' type="text" name="prd_category" value={product.prd_category} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Product Quantity:</label><br />
                            <input className='border p-1 mb-5' type="number" value={product.prd_instock_quantity} onChange={handleChange} />
                        </div>
                        {/* <div>
                            <label>Product Images:</label><br />
                            <input
                                className='border p-1 mb-5'
                                type="file"
                               value={product.prd_instock_quantity} 
                               onChange={handleChange}
                                required
                            />
                        </div> */}
                        <button type="submit" className='bg-blue-600 text-white p-2 hover:bg-blue-900'>Update Button</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct