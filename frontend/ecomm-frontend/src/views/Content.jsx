import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import TopNav from '../components/nav-top/TopNav'


const Content = () => {

    // create a for loop to populate an array, in order to map content to be able to see the stuff; DUMMY DATA
    const dummyData = [
        { name: "Rubber Ducky", price: 661, ratings: [3, 5, 2] },
        { name: "Angel Rubber Ducky", price: 662, ratings: [4, 1, 3] },
        { name: "Matt's Rubber Ducky", price: 665, ratings: [3, 1] },
        { name: "Cowboy Rubber Ducky", price: 663, ratings: [2, 4, 5, 3] },
        { name: "Nerd Rubber Ducky", price: 664, ratings: [1, 5, 4] },
        { name: "Matt's Rubber Ducky", price: 665, ratings: [3, 1] },
        { name: "Evil Rubber Ducky", price: 666, ratings: [2, 4] },
        { name: "Rubber Ducky", price: 667, ratings: [5, 2] },
        { name: "Angel Rubber Ducky", price: 668, ratings: [1, 3] },
        { name: "Matt's Rubber Ducky", price: 665, ratings: [3, 1] },
        { name: "Cowboy Rubber Ducky", price: 669, ratings: [4, 2] },
        { name: "Nerd Rubber Ducky", price: 670, ratings: [3, 5] },
        { name: "Matt's Rubber Ducky", price: 671, ratings: [1, 4] },
        { name: "Evil Rubber Ducky", price: 672, ratings: [5, 3] },
        { name: "Rubber Ducky", price: 673, ratings: [2, 1] },
        { name: "Matt's Rubber Ducky", price: 665, ratings: [3, 1] },
    ];

    // Search bar item filter
    const [filteredData, setFilteredData] = useState(dummyData);

    const handleSearch = (searchInput) => {
        const filtered = dummyData.filter(item =>
            item.name.toLowerCase().includes(searchInput.toLowerCase()));
        setFilteredData(filtered);
    };

    ////// PAGINATION //////
    // Calculating how many items to display per page for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Handle page change
    const nextPage = () => {
        if (indexOfLastItem < filteredData.length) {
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

    // Handling the dropdown menu to close when clicked off of it 
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    ///////////////////////// FILTER BY /////////////////////////

    // calculating price low to high
    const priceLowtoHigh = () => {
        const sortedData = [...filteredData].sort((a, b) => a.price - b.price);
        setFilteredData(sortedData);
    };

    // calculating price low to high
    const priceHightoLow = () => {
        const sortedData = [...filteredData].sort((a, b) => b.price - a.price);
        setFilteredData(sortedData);
    };

    // calculating sort by average rating
    const avgRatingFilter = () => {
        const sortedData = [...filteredData].sort((a, b) => {
            // calculating average ratings for each item
            const avgRatingA = avgRating(a.ratings);
            const avgRatingB = avgRating(b.ratings);
            // comparing average ratings for sorting
            return avgRatingB - avgRatingA;
        });
        setFilteredData(sortedData);
    };

    return (
        <>

            {/* <div className='bg-[#dc3545] p-5 text-center text-xl'>
                <h1> Nav placeholder </h1>
            </div> */}

            <TopNav onSearch={handleSearch} />

            <div className='p-2 bg-blue-800 flex justify-between items-center'>
                <h1 className='text-white'>{filteredData.length} Search results</h1>
                <div className="relative">
                    <button className="bg-gray-200 p-2 mr-8 hover:bg-blue-400 font-medium inline-flex items-center" onClick={toggleDropdown}>
                        Sort by
                        <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>
                    {isOpen && (
                        <div ref={dropdownRef} className="absolute -left-10 shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto">
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <li><Link to={""} onClick={() => { closeDropdown(); priceLowtoHigh() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Price: Low to High</Link></li>
                                <li><Link to={""} onClick={() => { closeDropdown(); priceHightoLow() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Price: High to Low</Link></li>
                                <li><Link to={""} onClick={() => { closeDropdown(); avgRatingFilter() }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Avg. Customer Rating</Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Newst Arrival</Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Best Sellers</Link></li>
                            </ul>
                        </div>
                    )}
                </div>
            </div >

            <div className='flex '>
                <div className='bg-red-800 w-64 text-center'>
                    <h1> Side bar placeholder</h1>
                    {/* {dummyData.filter((data, index) => index < 10).map((data, index) =>
                        <div className="p-2">
                            <p key={index}>• {data.name}</p>
                        </div>
                    )} */}
                </div>

                <div className='flex-auto'>
                    <div className='px-5'>
                        <p>Results</p>
                    </div>


                    <div className='grid grid-cols-4 gap-4 container mx-auto p-4'>

                        {currentItems.map((item, index) => (index < 8 &&
                            <div key={index} className="border-2 place-content-center text-center mx-auto max-w-48 max-h-80">
                                <img
                                    src="https://media.istockphoto.com/id/1146670231/vector/rubber-duck-vector-illustration.jpg?s=612x612&w=0&k=20&c=75fuQJhx-j5Q9O1ndmeunLPBKbrQxsTcZ1I6DYbVsnY="
                                    alt="ducky" className=' p-2 object-center' />

                                <Link className="hover:text-blue-600 hover:underline" to={`/item/${index}`}> {item.name}</Link>
                                <p> AvgRating: {avgRating(item.ratings)} </p>
                                <p> ${item.price} </p>
                            </div>
                        ))}

                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 ">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <button onClick={prevPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={currentPage === 1}>
                                <span className="sr-only">Previous</span>
                                <p> ⬅️ </p>
                            </button>
                            <p className="relative z-10 inline-flex items-center px-4 py-2 text-sm border">
                                {currentPage} of {Math.ceil(dummyData.length / itemsPerPage)}
                            </p>
                            <button onClick={nextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={indexOfLastItem >= dummyData.length}>
                                <span className="sr-only">Next</span>
                                <p> ➡️ </p>
                            </button>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to <span className="font-medium">
                                        {indexOfLastItem <= filteredData.length ? indexOfLastItem : filteredData.length}
                                    </span> of
                                    <span className="font-medium"> {filteredData.length}</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <button onClick={prevPage} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={currentPage === 1}>
                                        <span className="sr-only">Previous</span>
                                        <p> ⬅️ </p>
                                    </button>
                                    <p className="relative z-10 inline-flex items-center px-4 py-2 text-sm border">
                                        {currentPage} of {Math.ceil(filteredData.length / itemsPerPage)}
                                    </p>
                                    <button onClick={nextPage} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={indexOfLastItem >= filteredData.length}>
                                        <span className="sr-only">Next</span>
                                        <p> ➡️ </p>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className='bg-green-500 h-24 text-center p-10'>
                <h1> Footer Placeholder</h1>
            </div>
        </>
    )
}

export default Content