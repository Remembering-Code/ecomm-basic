import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const NewProduct = () => {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [productUpdatedBy, setProductUpdatedBy] = useState('DEFAULT');
    const [productImages, setProductImages] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const productData = {
            prd_name: productName,
            prd_price: productPrice,
            prd_description: productDescription,
            prd_category: productCategory,
            prd_instock_quantity: productQuantity,
            prd_updated_by: productUpdatedBy,
            // prd_images: productImages
        };

        axios.post('http://localhost:8080/newProduct', productData)
            .then(response => {
                console.log('Product created successfully:', response.data);
                // navigate(`/item/${productData.prd_id}`);
                navigate(`/`);
            })
            .catch(error => {
                console.error('Error creating product:', error);
            });
    };

    return (
        <div className=' h-screen flex justify-center bg-blue-100 '>
            <div className=' mt-5 container text-center'>
                <h2>New Product</h2>
                <div className='border mt-5'>
                    <form onSubmit={handleSubmit}>
                        {/* TO DO: REMOVE ME once login auth stuff works and users can login so this gets updated automatically */}
                        <input type="hidden" value={productUpdatedBy} />
                        <div className=''>
                            <label>Product Name:</label> <br />
                            <input
                                className='border p-1 mb-5'
                                type="text"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Product Price:</label><br />
                            <input
                                className='border p-1 mb-5'
                                type="number"
                                value={productPrice}
                                onChange={(e) => setProductPrice(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Product Description:</label><br />
                            <textarea rows="4" cols="50"
                                className='border p-1 mb-5'
                                value={productDescription}
                                onChange={(e) => setProductDescription(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Product Category:</label><br />
                            <input
                                className='border p-1 mb-5'
                                type="text"
                                value={productCategory}
                                onChange={(e) => setProductCategory(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label>Product Quantity:</label><br />
                            <input
                                className='border p-1 mb-5'
                                type="number"
                                value={productQuantity}
                                onChange={(e) => setProductQuantity(e.target.value)}
                                required
                            />
                        </div>
                        {/* TO DO: UNCOMMENT WHEN IMAGES FIELD IS ADDED TO THE PRODUCT
                         <div>
                            <label>Product Images:</label><br />
                            <input
                                className='border p-1 mb-5'
                                type="file"
                                value={productImages}
                                onChange={(e) => setProductImages(e.target.value)}
                                required
                            />
                        </div> */}
                        <button type="submit" className='bg-blue-600 text-white p-2 hover:bg-blue-900'>Create Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewProduct