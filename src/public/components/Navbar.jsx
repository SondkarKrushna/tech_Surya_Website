import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('/'); // Default active to 'Home'

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path) => {
        setActive(path);
        if (isOpen) toggleMenu(); // Close mobile menu when a link is clicked
    };

    return (
        <nav className="bg-[#FAF6F0] text-black fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl px-5 mx-auto"> {/* Centered container */}
                <div className="flex justify-between items-center h-20">
                    <div className="flex items-center">
                        <img className="h-20" src="/photos/Beige Red Gift Box Giveaway Instagram Post (1).png" alt="sitelogo" />
                        <Link to="/" onClick={() => handleLinkClick('/')}>
                            <span className="ml-1 uppercase font-bold text-sx tracking-wide text-[#C59847]">
                                Dr.Priyanka's
                                <br /><span className="text-xl">Varad Skin Care</span>
                            </span>
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-5">
                        {['/', '/about', '/services', '/contact'].map((path) => (
                            <Link key={path} to={path} onClick={() => handleLinkClick(path)}>
                                <p className={`relative group text-lg font-semibold transition duration-300 ease-in-out ${active === path ? 'bg-[#C59847] text-white' : 'text-black'} px-3 py-1 rounded-sm`}>
                                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                                </p>
                            </Link>
                        ))}
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu}>
                            {isOpen ? <MdClose className="h-6 w-6 text-black" /> : <MdMenu className="h-6 w-6 text-black" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#FAF6F0] rounded-b-3xl">
                    {['/', '/about', '/services', '/contact'].map((path) => (
                        <Link key={path} to={path} onClick={() => handleLinkClick(path)}>
                            <p className={`block ${active === path ? 'bg-[#C59847] text-white' : 'text-black'} hover:bg-[#C59847] hover:text-white px-4 py-2`}>
                                {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                            </p>
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
