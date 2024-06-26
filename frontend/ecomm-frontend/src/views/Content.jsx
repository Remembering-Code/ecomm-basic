import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios';

import NavTop from '../components/nav-top/NavTop'
import NavBottom from '../components/NavBottom'
import NavSide from '../components/NavSide'

const Content = () => {

    const [products, setProducts] = useState([]);
    const dropdownRef = useRef(null);

    useEffect(() => {
        axios.get('http://localhost:8080/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });

        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

    // Search bar item filter
    const handleSearch = (searchInput) => {
        const filtered = products.filter(item =>
            item.prd_name.toLowerCase().includes(searchInput.toLowerCase()));
        setProducts(filtered);
    };

    // Filtering by Department
    const handleDeptFilter = (activeDept) => {
        const filteredProducts = activeDept ? products.filter(product => product.prd_category === activeDept) : products;
        setProducts(filteredProducts);
    };

    ////// PAGINATION //////
    // Calculating how many items to display per page for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const nextPage = () => {
        if (indexOfLastItem < products.length) {
            setCurrentPage(currentPage + 1);
        }
    };
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // calculating average rating per item
    const avgRating = (ratings) => {
        if (ratings.length === 0) return 0;
        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {
            sum += ratings[i];
        }
        const average = sum / ratings.length;
        return Math.round(average * 10) / 10;
    };

    //  Dropdown FILTER BY menu
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const closeDropdown = () => {
        setIsOpen(false);
    };

    //////// FILTER BY ////////
    // calculating price low to high
    const priceLowtoHigh = () => {
        const sortedData = [...products].sort((a, b) => a.prd_price - b.prd_price);
        setProducts(sortedData);
    };

    // calculating price low to high
    const priceHightoLow = () => {
        const sortedData = [...products].sort((a, b) => b.prd_price - a.prd_price);
        setProducts(sortedData);
    };

    // calculating sort by average rating
    const avgRatingFilter = () => {
        const sortedData = [...products].sort((a, b) => {
            // calculating average ratings for each item
            const avgRatingA = avgRating(a.ratings);
            const avgRatingB = avgRating(b.ratings);
            // comparing average ratings for sorting
            return avgRatingB - avgRatingA;
        });
        setProducts(sortedData);
    };

    return (
        <>
            <NavTop onSearch={handleSearch} />

            <div className='p-2 bg-slate-200 flex justify-between items-center shadow-md mb-1 text-sm'>
                <h1 className=''>{products.length} Search results</h1>
                <div className="relative">
                    <button className="bg-gray-200 p-2 mr-8 hover:bg-blue-400 inline-flex items-center" onClick={toggleDropdown}>
                        Sort by
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div ref={dropdownRef} className="absolute -left-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <li><Link to={""} onClick={() => { closeDropdown(); priceLowtoHigh() }} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Price: Low to High</Link></li>
                                <li><Link to={""} onClick={() => { closeDropdown(); priceHightoLow() }} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Price: High to Low</Link></li>
                                <li><Link to={""} onClick={() => { closeDropdown(); avgRatingFilter() }} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Avg. Customer Rating</Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Newst Arrival</Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100">Best Sellers</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div >

            <div className='flex '>
                <NavSide activeDept={handleDeptFilter} />

                <div className='flex-auto'>
                    <div className='px-5'>
                        <h1 className='text-xl'>Results</h1>
                        <p className='text-sm'>Here they are.</p>
                    </div>

                    <div className='grid grid-cols-4 gap-4 container mx-auto p-4'>

                        {currentItems.map((item, index) => (index < 8 &&
                            <div key={index} className="relative p-2 border-2 place-content-center text-center mx-auto max-w-56 max-h-96">
                                {/* authorization stuff, button only available for employees */}
                                {/* {user.role === "admin" && ( */}
                                <Link to={`/editProduct/${item.prd_id}`}>
                                    <button className="absolute top-1 right-1 w-8 h-8 bg-red-600 items-center hover:bg-green-800 text-sm text-white">
                                        Edit
                                    </button>
                                </Link>
                                {/* )} */}

                                <img
                                    src="https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY="
                                    alt="ducky" className='object-center' />

                                <Link className=" font-bold hover:text-blue-600 hover:underline" to={`/item/${item.prd_id}`}> {item.prd_name}</Link>
                                {/* <p> AvgRating: {avgRating(item.ratings)} </p> */}
                                <p className='text-green-500'> ${item.prd_price} </p>
                                {/* <p className='' title={item.prd_DESCRIPTION}> {truncateText(item.prd_DESCRIPTION)} </p> */}
                                <p className='line-clamp-2' title={item.prd_description}> {item.prd_description} </p>
                                <div className="hidden bg-white border border-gray-300 shadow-lg">
                                    {item.prd_description}
                                </div>
                                <p className='text-purple-500'> {item.prd_category}</p>
                            </div>
                        ))}
                    </div>

                    {/****************** PAGINATION ******************/}
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <button onClick={prevPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={currentPage === 1}>
                                <span className="sr-only">Previous</span>
                                <p> ⬅️ </p>
                            </button>
                            <p className="relative z-10 inline-flex items-center px-4 py-2 text-sm border">
                                {currentPage} of {Math.ceil(products.length / itemsPerPage)}
                            </p>
                            <button onClick={nextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={indexOfLastItem >= products.length}>
                                <span className="sr-only">Next</span>
                                <p> ➡️ </p>
                            </button>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">
                                        {indexOfLastItem <= products.length ? indexOfLastItem : products.length}
                                    </span> of
                                    <span className="font-medium"> {products.length}</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <button onClick={prevPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={currentPage === 1}>
                                        <span className="sr-only">Previous</span>
                                        <p> ⬅️ </p>
                                    </button>
                                    <p className="relative z-10 inline-flex items-center px-4 py-2 text-sm border">
                                        {currentPage} of {Math.ceil(products.length / itemsPerPage)}
                                    </p>
                                    <button onClick={nextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={indexOfLastItem >= products.length}>
                                        <span className="sr-only">Next</span>
                                        <p> ➡️ </p>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <NavBottom />
        </>
    )
}

export default Content