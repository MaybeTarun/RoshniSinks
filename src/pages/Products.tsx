import '.././App.css';
import { useState, useEffect, useRef } from 'react';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import products from '../assets/products.ts';

function Products() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (category: number) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [...prevSelected, category]
    );
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length
      ? selectedCategories.includes(product.category)
      : true;
    const matchesSearchTerm = searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.keyword.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;
    return matchesCategory && matchesSearchTerm;
  });

  return (
    <div className="pt-[80px] m-3">
      <div className='rounded-[20px] bg-[#EF1923] p-4 w-full h-[calc(100vh-105px)] flex flex-col items-center'>
        <div className="w-full flex items-center justify-between mb-4">
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={toggleDropdown} 
              className="bg-[#F7FCFF] text-black px-4 py-2 rounded-full flex items-center text-[clamp(16px, 2.5vw, 20px)]"
            >
              <span className="hidden sm:block">Categories</span>
              <span>
                {isDropdownOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 10.707a1 1 0 01-1.414 0L10 7.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div className={`absolute mt-2 w-48 bg-[#F7FCFF] shadow-lg rounded-lg transition-all duration-300 ${isDropdownOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className={`${isDropdownOpen ? 'block' : 'hidden'}`}>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[clamp(16px, 2.5vw, 20px)]">
                  <label className="flex items-center cursor-pointer" onClick={() => handleCategoryChange(1)}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(1)}
                      readOnly
                    />
                    Handmade Sinks
                  </label>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-[clamp(16px, 2.5vw, 20px)]">
                  <label className="flex items-center cursor-pointer" onClick={() => handleCategoryChange(2)}>
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={selectedCategories.includes(2)}
                      readOnly
                    />
                    Machine Made Sinks
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-grow mx-4 relative">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-red-300 text-[#F7FCFF] text-[clamp(16px, 2.5vw, 20px)] h-10"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#F7FCFF] text-[clamp(16px, 2.5vw, 20px)]" />
          </div>
          <div>
            <FaShoppingCart className="text-[#F7FCFF] cursor-pointer lg:h-8 lg:w-8 h-6 w-6" />
          </div>
        </div>
        <div className="flex-grow w-full overflow-y-auto">
          <div className="flex flex-wrap justify-center items-center gap-4">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-[#F7FCFF] rounded-[10px] shadow-lg p-4 h-[250px] w-full max-w-[475px] flex">
                <div className="flex flex-col justify-center w-7/12 p-4">
                  <h2 className="text-[clamp(16px,20px)] font-bold mb-2">{product.name}</h2>
                  <p className="text-[clamp(16px,20px)] text-gray-600 mb-2">{product.desc}</p>
                  <div className="flex items-center mb-2">
                    <span className="text-[clamp(16px,20px)] font-bold text-[#EF1923]">₹{product.price}</span>
                    <span className="text-[clamp(16px,20px)] text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center w-5/12 p-4 relative">
                  <div className="w-full h-32 flex items-center justify-center mb-4">
                    <img src={product.image} alt={product.name} className="max-w-full max-h-full scale-125 object-contain" />
                  </div>
                  {product.inStock === 'yes' ? (
                    <button className="bg-[#EF1923] text-[#F7FCFF] px-4 py-2 rounded-full flex items-center absolute bottom-0 transform -translate-y-1/2" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }}>
                      Add To Cart <FaShoppingCart className="ml-2" />
                    </button>
                  ) : (
                    <button className="bg-gray-400 text-[#F7FCFF] px-4 py-2 rounded-full flex items-center absolute bottom-0 transform -translate-y-1/2" style={{ fontSize: 'clamp(10px, 2.5vw, 14px)' }} disabled>
                      Out of Stock
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;