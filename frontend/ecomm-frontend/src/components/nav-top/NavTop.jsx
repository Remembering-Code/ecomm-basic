import React, { useState, useRef, useEffect } from 'react'
import { Link } from "react-router-dom"
import reactImg from "../../assets/react.svg"
import menuIcon from "../../assets/menu.png"

// add recent searches history to the search bar - need DB

const TopNav = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = () => {
        onSearch(searchInput);
    };

    const handleInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleChange();
        }
    };

    //  Toggle Dropdown menu next to search bar
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    // Toggle dropdown menu for Departments (under search bar component)
    const [isOpenSubNav, setIsOpenSubNav] = useState(false);

    const toggleDropdown2 = () => {
        setIsOpenSubNav(!isOpenSubNav);
    };

    const closeDropdown2 = () => {
        setIsOpenSubNav(false);
    };

    // Handling the dropdown menu to close when clicked off of it 
    const dropdownRef = useRef(null);
    // Handling the second drop down menu to close when clicked off of it 
    const dropdownRef2 = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false); // Close the first dropdown menu if clicked outside
            }
            if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
                setIsOpenSubNav(false); // Close the second dropdown menu if clicked outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        // Clean up code: ensure that resources are properly released and avoid potential memory leaks
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);



    return (
        <>
            <div className='bg-gray-700 p-4 flex justify-between'>

                <div className='nav-right flex items-center gap-2 text-white'>
                    <img src={reactImg} alt="logo" className='' />
                    <Link to={"/content"} className='w-full'> Store Name </Link>
                </div>

                <div className='search-bar'>
                    <button className="bg-gray-200 p-2 hover:bg-blue-400 font-medium inline-flex items-center" onClick={toggleDropdown}>
                        All <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg>
                    </button>

                    {isOpen && (
                        <div ref={dropdownRef} className="absolute mt-2 w-44 h-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto z-10" >
                            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                                <li><Link to={""} onClick={closeDropdown} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            </ul>
                        </div>
                    )}
                    <input
                        className='p-2 w-16	lg:w-40 xl:w-96'
                        type="search"
                        placeholder="Search..."
                        value={searchInput}
                        onChange={handleInputChange}
                        onKeyPress={handleKeyPress}
                    />
                    <button type="submit" onClick={handleChange} className='bg-yellow-500 p-2'>🔍</button>
                </div>

                <div className='nav-left flex gap-3 text-white'>
                    <button className=' p-2'> 👤Employee Log in </button>
                    <button className=' p-2'> 🛒 Cart </button>
                </div>
            </div >

            <div className='p-2 bg-blue-600 text-white flex justify-between p-3 text-sm relative'>

                <button className="flex items-center gap-1 hover:outline hover:outline-offset-4 focus:ring " onClick={toggleDropdown2}>
                    <img src={menuIcon} alt="menuIcon" className='h-6' />
                    All
                </button>

                {isOpenSubNav && (
                    <div ref={dropdownRef2} className="absolute top-full left-0 w-44 max-h-80 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-auto" >
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                            <li><Link to={""} onClick={closeDropdown2} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"> Link </Link></li>
                        </ul>
                    </div>
                )}
                <Link to={""}> Department 1</Link>
                <Link to={""}> Department 2</Link>
                <Link to={""}> Department 3</Link>
                <Link to={""}> Department 4</Link>
                <Link to={""}> Department 5</Link>
                <Link to={""}> Department 6</Link>
                <Link to={""}> Department 7</Link>
                <Link to={""}> Department 8</Link>
                <Link to={""}> Department 9</Link>
                <Link to={""}> Department 10</Link>
            </div>
        </>
    )
}

export default TopNav