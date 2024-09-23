import { useState } from 'react';
import logo from '../assets/namelogo.png';
import { Link, useLocation } from 'react-router-dom';
import '../App.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `text-black border-b-2 ${
      isActive(path) ? 'border-[#EF1923]' : 'border-transparent'
    } hover:text-[#EF1923]`;

  return (
    <nav className="bg-[#F7FCFF] rounded-[1rem] ml-3 mr-3 z-50 fixed w-[calc(100%-1.5rem)]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-16 w-auto" />
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={linkClass('/')}>HOME</Link>
            <Link to="/products" className={linkClass('/products')}>PRODUCTS</Link>
            <Link to="/contact" className={linkClass('/contact')}>CONTACT US</Link>
            <Link to="/blogs" className={linkClass('/blogs')}>BLOGS</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-[#EF1923] text-[#F7FCFF] px-4 py-2 rounded-xl w-24 hover:translate-y-[-2px] transition-all duration-300">Sign Up</button>
            <button className="bg-[#F7FCFF] text-[#EF1923] px-[14px] py-[6px] rounded-xl border-[#EF1923] border-2 w-24 hover:translate-y-[-2px] transition-all duration-300">Log In</button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`md:hidden fixed z-50 top-20 right-0 bottom-0 w-64 bg-[#F7FCFF] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="space-y-4">
            <Link to="/" className={`block ${linkClass('/')}`} onClick={closeMenu}>Home</Link>
            <Link to="/products" className={`block ${linkClass('/products')}`} onClick={closeMenu}>Products</Link>
            <Link to="/contact" className={`block ${linkClass('/contact')}`} onClick={closeMenu}>Contact Us</Link>
            <Link to="/blogs" className={`block ${linkClass('/blogs')}`} onClick={closeMenu}>Blogs</Link>
            <button className="w-full bg-[#EF1923] text-[#F7FCFF] px-4 py-2 rounded-xl">Sign Up</button>
            <button className="w-full bg-[#F7FCFF] text-[#EF1923] px-4 py-2 rounded-xl border-[#EF1923] border-2">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;