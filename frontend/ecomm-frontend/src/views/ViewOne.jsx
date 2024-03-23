import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavTop from '../components/nav-top/NavTop';
import NavBottom from '../components/NavBottom';
import axios from 'axios';

import reactImg from "../assets/react.svg"

const ViewOne = () => {

    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // This will be substituted with images from the DB
    const [mainImage, setMainImage] = useState("https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY=");
    const [sideImages, setSideImages] = useState([
        "https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY=",
        "https://static.vecteezy.com/system/resources/previews/025/269/858/non_2x/yellow-rubber-ducky-toy-at-the-river-image-art-illustration-generative-ai-art-free-photo.jpg",
        "data:image/jpeg;base64,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",
    ]);

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    console.log('ID from URL:', id); // Check if id is correctly retrieved
    console.log('Product details:', product); // Check if product is correctly retrieved

    // // Find the item in the dummy data array based on the prd_ID
    // const item = dummyData.find(item => item.prd_ID === parseInt(id)); // Convert id to integer

    const handleImageClick = (imageUrl, index) => {
        setMainImage(imageUrl);
        setCurrentImageIndex(index);
    };


    const handleMainImageClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const handleNextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % sideImages.length);
    };

    const handlePreviousImage = () => {
        const previousIndex = (currentImageIndex === 0) ? (sideImages.length - 1) : (currentImageIndex - 1);
        setCurrentImageIndex(previousIndex);
    };


    return (
        <div>
            <NavTop />

            {!product ? (
                <div>Loading...</div>
            ) : (
                <>
                    <div className='p-4 flex justify-evenly items-center'>
                        <div className='product-pics flex p-2'>
                            <div className='left-pics mr-2'>
                                {sideImages.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt={`image-${index}`}
                                        className="object-center w-24 border mb-2 cursor-pointer"
                                        onClick={() => handleImageClick(image, index)}
                                    />
                                ))}
                            </div>

                            <div className='main-pic border w-[700px] h-[400px] flex justify-center items-center'>
                                <img
                                    src={mainImage}
                                    alt="main"
                                    className="object-center h-full cursor-pointer"
                                    onClick={handleMainImageClick}
                                />

                                {isModalOpen && (
                                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-50" onClick={handleModalClick}>
                                        <div className="relative bg-white p-4 flex border rounded-lg w-[1000px] h-[600px]">
                                            <button className="mr-2" onClick={handlePreviousImage}>
                                                Previous
                                            </button>

                                            <button className="absolute top-0 right-0 m-2 border p-2" onClick={closeModal}>
                                                X
                                            </button>
                                            <div className="h-full w-full relative flex justify-center items-center">
                                                <img
                                                    src={sideImages[currentImageIndex]}
                                                    alt="main"
                                                    className="object-center h-full max-w-full"
                                                    style={{ maxWidth: '100%' }}
                                                />
                                            </div>

                                            <button className="ml-2" onClick={handleNextImage}>
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='right-description font-bold border p-2 leading-loose text-center w-80'>
                            <h1 className='text-2xl'>{product.prd_NAME}</h1>
                            <p className='text-lg text-green-500'>${product.prd_PRICE}</p>
                            {/* <p className='text-sm'>{product.prd_DESCRIPTION}</p> */}
                            <p className=''>Size</p>
                            <select className='font-normal border border-black w-20'>
                                <option value="">S</option>
                                <option value="">M</option>
                                <option value="">L</option>
                                <option value="">XL</option>
                            </select>
                            <p>Quantity</p>
                            <select className='font-normal border border-black w-20'>
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                            <div className='flex justify-center mt-5 mb-2 text-white'>
                                <button className='w-52 bg-blue-600 p-2 w-auto rounded'>Add to cart</button>
                                <p className='p-2' title='Add to Wishlist'>❤️</p>
                            </div>
                            <button className='w-20 bg-blue-600 p-2 w-72 text-white rounded'>Buy Now</button>
                        </div>
                    </div>

                    <div className='flex justify-evenly ml-5 p-5 gap-10'>
                        <div className='product-info '>
                            <p className='font-bold text-center'> Product info </p>
                            {/* <p> {product.prd_DESCRIPTION} </p> */}
                            <p className=''>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel velit a quam viverra vehicula vitae a nisl. Proin odio mauris, pellentesque eget mi vel, suscipit scelerisque leo. Nam auctor augue diam, eget consequat dui consequat sed. Praesent ullamcorper in orci in eleifend. Curabitur turpis lacus, dictum ut convallis et, bibendum rhoncus libero. Etiam lacinia augue sollicitudin nisl ornare, quis auctor neque imperdiet. In commodo diam nec nunc pulvinar aliquam. Integer eleifend dapibus arcu dapibus imperdiet. Mauris ac magna condimentum, hendrerit urna sit amet, ullamcorper neque. Praesent nisl neque, dignissim sit amet scelerisque sit amet, mollis quis massa. <br /> <br />

                                Proin at scelerisque odio. Nunc pellentesque tortor lectus, at cursus justo tempus ut. Nam tincidunt leo et mi molestie eleifend. Proin ut mattis velit, ac eleifend augue. Praesent cursus nisl quis lectus consequat maximus. Aliquam erat volutpat. Donec leo arcu, congue vel sapien sit amet, pulvinar scelerisque velit. <br /><br />

                                Nunc imperdiet varius augue ac condimentum. Donec cursus pharetra arcu, ac varius lectus consectetur vestibulum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus rutrum ac justo a pellentesque. Aliquam sed augue eu lectus volutpat ornare. Sed sit amet risus arcu. Vivamus sodales luctus odio sed blandit. Proin felis elit, luctus vel lectus nec, hendrerit tincidunt ligula. Donec mollis justo non mi vehicula, a auctor leo accumsan. Fusce vel egestas ipsum, sit amet gravida nisi. Quisque sit amet fringilla lorem. Morbi elit magna, egestas a turpis quis, commodo sodales sapien. Suspendisse ultricies nulla sem, in tincidunt eros faucibus a. Donec in urna dapibus, porta urna vitae, sodales dui. <br /><br />

                                Vivamus iaculis nibh quis efficitur laoreet. Donec tempor, erat sed maximus ullamcorper, dolor felis placerat dolor, in gravida ex nulla quis odio. Aenean quis maximus nunc, ut elementum libero. Aliquam non odio vel nunc facilisis cursus id ac sem. Mauris orci erat, euismod ut justo vel, tempor auctor nulla. Mauris eget est sodales, condimentum sapien vitae, placerat nunc. Vestibulum ex enim, congue sit amet rutrum et, convallis sed ante. Quisque non odio et tortor tincidunt bibendum. Vestibulum in tempor tellus. Suspendisse mi ligula, commodo dapibus ipsum venenatis, consectetur tempus ligula. <br /><br />

                                Aenean maximus tortor tellus, vel finibus nulla fringilla eu. Curabitur rutrum tortor a mauris iaculis, in vestibulum eros ornare. Suspendisse potenti. Nam a metus ante. Aenean fringilla volutpat orci at porttitor. Proin felis tellus, facilisis vel sollicitudin et, porttitor sit amet magna. Proin eu efficitur enim. Vestibulum id elementum elit. Morbi placerat eu leo eget ornare. Donec dignissim sed mi in posuere.
                            </p>
                        </div>
                        {/* <div className='shipping-info'> */}
                        {/* <p className='font-bold'> shipping info</p>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet arcu eget ante porta gravida non iaculis tortor. Quisque leo mauris, laoreet a ex eleifend, tristique pretium est. Integer vitae erat vitae orci ornare laoreet. Cras ultrices placerat nibh non interdum. Nulla eu purus erat. Aliquam congue id felis quis viverra. Nam nisi arcu, mattis quis vulputate in, viverra ac lorem. Integer eleifend semper finibus. Vivamus aliquet sapien et metus venenatis, id placerat erat placerat. Sed a tortor quis mauris faucibus fringilla accumsan sed lectus. Proin vel ligula placerat, aliquam purus dictum, vulputate nisl. Etiam vel condimentum erat. Pellentesque eget auctor risus.</p>
</div> */}
                    </div>
                    <div className='reviews bg-gray-100 p-2 m-5'>
                        <h1 className='font-bold text-center '> Reviews </h1>
                        <div className='flex justify-center mt-5 gap-2'>
                            <div className='border p-2 bg-gray-200 '>
                                <div className='flex items-center gap-2'>
                                    <img src={reactImg} alt="logo" className='' />
                                    <p className='font-bold '> Name </p>
                                </div>
                                <p className='font-bold '> ⭐⭐⭐⭐⭐ Headline </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet arcu eget ante porta gravida non iaculis tortor. Quisque leo mauris, laoreet a ex eleifend, tristique pretium est. Integer vitae erat vitae orci ornare laoreet. Cras ultrices placerat nibh non interdum. Nulla eu purus erat. Aliquam congue id felis quis viverra. Nam nisi arcu, mattis quis </p>
                            </div>
                            <div className='border p-2 bg-gray-200'>
                                <div className='flex items-center  gap-2'>
                                    <img src={reactImg} alt="logo" className='' />
                                    <p className='font-bold '> Name </p>
                                </div>
                                <p className='font-bold '> ⭐⭐⭐⭐⭐ Headline </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet arcu eget ante porta gravida non iaculis tortor. Quisque leo mauris, laoreet a ex eleifend, tristique pretium est. Integer vitae erat vitae orci ornare laoreet. Cras ultrices placerat nibh non interdum. Nulla eu purus erat. Aliquam congue id felis quis viverra. Nam nisi arcu, mattis quis </p>
                            </div>
                            <div className='border p-2 bg-gray-200'>
                                <div className='flex items-center  gap-2'>
                                    <img src={reactImg} alt="logo" className='' />
                                    <p className='font-bold '> Name </p>
                                </div>
                                <p className='font-bold '> ⭐⭐⭐⭐⭐ Headline </p>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet arcu eget ante porta gravida non iaculis tortor. Quisque leo mauris, laoreet a ex eleifend, tristique pretium est. Integer vitae erat vitae orci ornare laoreet. Cras ultrices placerat nibh non interdum. Nulla eu purus erat. Aliquam congue id felis quis viverra. Nam nisi arcu, mattis quis </p>
                            </div>

                        </div>
                    </div>
                </>
            )}
            <NavBottom />
        </div>
    );
}

export default ViewOne;