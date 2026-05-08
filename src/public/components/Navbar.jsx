import React, { useState } from 'react';
import { MdClose, MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [active, setActive] = useState('HOME');

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = (path, name) => {
        setActive(name);
        if (isOpen) toggleMenu();
    };

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'PORTFOLIO', path: '/portfolio' },
        { name: 'HIRING', path: '/hiring' },
    ];

    return (
        <nav className="bg-transparent  md:px-10  text-white fixed top-0 left-0 w-full z-[100]">
            <div className="max-w-[1400px] px-6 md:px-10 mx-auto">
                <div className="flex justify-between items-center h-24">
                    <div className="flex items-center">
                        <Link to="/" onClick={() => handleLinkClick('/', 'HOME')} className="bg-white rounded-full inline-flex items-center justify-center shadow-md">
                            <img className="h-6 md:h-10 object-contain" src="/ts-logo.png" alt="Tech Surya Logo" />
                        </Link>
                    </div>

                    <div className="hidden lg:flex  h-full py-6  flex-grow justify-center">
                        <div className="flex space-x-12">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.name} 
                                    to={link.path} 
                                    onClick={() => handleLinkClick(link.path, link.name)}
                                    className={`text-base font-medium tracking-wider transition duration-300 hover:text-[#FF7200] font-iceland ${
                                        active === link.name ? 'text-[#FF7200]' : 'text-white'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8 flex-shrink-0">
                        <img src="/twemoji_flag-india.svg" alt="India Flag" className="h-7 w-9 object-contain" />
                        <Link to="/contact">
                            <button className="bg-[#007AFF] hover:bg-[#0066EE] text-white px-6 py-2.5 rounded-xl font-normal text-lg transition-all duration-300 shadow-xl shadow-[#007AFF]/20 tracking-wide font-iceland border-b-2">
                                Contact Us
                            </button>
                        </Link>
                    </div>

                    <div className="lg:hidden flex items-center space-x-4">
                        <img src="/twemoji_flag-india.svg" alt="India Flag" className="h-5 w-7 object-contain" />
                        <button onClick={toggleMenu}>
                            {isOpen ? <MdClose className="h-8 w-8 text-white" /> : <MdMenu className="h-8 w-8 text-white" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-black/95 absolute w-full left-0 py-6 px-5 border-t border-white/10 animate-fadeIn">
                    <div className="flex flex-col space-y-4">
                        {navLinks.map((link) => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                onClick={() => handleLinkClick(link.path, link.name)}
                                className={`text-lg font-bold tracking-widest font-iceland ${
                                    active === link.name ? 'text-[#FF7200]' : 'text-white'
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/contact" onClick={toggleMenu}>
                            <button className="bg-[#0473EF] text-white w-full py-4 rounded-xl font-bold mt-4">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

