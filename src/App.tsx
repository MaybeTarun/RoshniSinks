import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import './App.css';
import With from './assets/With.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img21 from './assets/img21.png';
import img22 from './assets/img22.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  const [rating, setRating] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img2, img21, img22];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <div className="m-3 mt-0 flex flex-col gap-4 pt-[85px]">
      <div className="flex flex-col">
        <h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light tracking-[0.1em] w-full">
          ELEVATING <span className="font-bold">KITCHENS</span>
        </h1>
        <div className="flex items-center gap-4 md:gap-8">
          <h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light">WITH</h1>
          <img src={With} alt="Sink" className="h-[clamp(10px,6vw,60px)] w-auto object-contain" />
        </div>
        <h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light w-full">
          STATE-OF-THE-ART <span className="font-bold">SINKS</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4">
        <div className="lg:flex-shrink-0">
          <div className="relative">
            <img src={img1} alt="Kitchen View" className="w-full h-auto" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:flex-shrink-0">
            <div className="relative">
              <img
                src={images[currentImage]}
                alt="Sinks"
                className="w-full h-auto aspect-[2/1] lg:aspect-auto object-cover rounded-[20px]"
                id="img2"
              />
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {images.map((_, index) => (
                  <span
                    key={index}
                    className={`h-2 w-2 rounded-full cursor-pointer ${
                      currentImage === index ? 'bg-[#EF1923]' : 'bg-gray-400'
                    }`}
                    onClick={() => handleIndicatorClick(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:flex-grow bg-[#173B45] rounded-[20px] p-6 text-[#F7FCFF] flex flex-col">
            <h2 className="text-[clamp(20px,2vw,20px)] text-center mb-4">WE WOULD LOVE TO HAVE YOUR FEEDBACK</h2>
            <form className="flex flex-col justify-between h-full">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(16px,1.5vw,16px)]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(16px,1.5vw,16px)]"
                />
                <textarea
                  placeholder="Feedback"
                  rows={3}
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 resize-none w-full text-[clamp(16px,1.5vw,16px)]"
                ></textarea>
                <div className="mt-2 flex justify-between items-center">
                  <div>
                    <label className="block mb-1 text-[clamp(16px,1.5vw,16px)]">Rating</label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className={`text-[clamp(18px,1.8vw,20px)] focus:outline-none transition-colors duration-200 ${
                            rating >= star ? 'text-yellow-400' : 'text-gray-400'
                          } hover:text-yellow-300`}
                          onClick={() => setRating(star)}
                        >
                          &#9733;
                        </button>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="bg-[#F7FCFF] text-[#173B45] font-bold py-2 px-4 rounded text-[clamp(14px,1.5vw,16px)] hover:translate-y-[-2px] transition-all duration-300"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-[#EF1923] font-bold lg:mt-8" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
          Roshni Sinks
        </h1>
        <h2 className="text-black font-semibold" style={{ fontSize: 'clamp(18px, 3vw, 28px)' }}>
          Kitchen Sink Manufacturer in Delhi since 2012
        </h2>
        <p className="text-gray-800 leading-relaxed text-justify" style={{ fontSize: 'clamp(14px, 2vw, 24px)' }}>
          Roshni Sinks, a distinguished manufacturer, crafts exquisite sinks that seamlessly blend functionality with
          elegance. With a commitment to impeccable design and top-tier materials, Roshni Sinks redefines spaces,
          providing enduring quality and style for your home.
        </p>
        <div className="flex justify-start mt-4 space-x-4 md:space-x-6">
          <a href="https://instagram.com/roshni.sinks" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://wa.me/9350440613" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="mailto:shriharienterprises2011@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      <div className="relative m-[-0.75rem] mt-28 lg:mt-32">
        <img src={img3} alt="Kitchen background" className="w-full object-cover md:h-[600px] h-[300px] crop1" />
        <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 px-4 w-[85%]">
            {[
              { number: '01', text: 'Innovative Team' },
              { number: '02', text: 'Modern Design' },
              { number: '03', text: 'Supreme Quality' },
              { number: '04', text: 'Client Satisfaction' },
            ].map((item) => (
              <div key={item.number} className="bg-[#EF1923] text-[#F7FCFF] p-4 rounded-[20px] flex flex-col items-center justify-center aspect-square relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center font-bold opacity-20 bottom-4 md:bottom-8" style={{ fontSize: 'clamp(4rem, 20vw, 10rem)' }}>{item.number}</span>
                <span className="text-center font-semibold relative z-10 leading-none top-4 md:top-12" style={{ fontSize: 'clamp(1rem, 3vw, 2.5rem)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-black font-semibold lg:-mt-6" style={{ fontSize: 'clamp(20px, 4vw, 36px)' }}>
          What sets us Apart
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <div className="lg:w-1/3 order-2 lg:order-1 hidden lg:block">
          <div className="grid grid-cols-1 gap-4 h-full content-end">
            {['DURABILITY', 'ELEGANT DESIGN', 'STAIN RESISTANCE'].map((text) => (
              <div key={text} className="p-4 rounded-lg">
                <p className="text-left font-medium border-b-2 border-r-2 border-black pb-1" style={{ fontSize: 'clamp(14px, 3vw, 30px)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 order-1 lg:order-2 flex items-end">
          <img src={img4} alt="Sink" className="w-full h-auto object-cover max-w-[270px] mx-auto lg:max-w-none -mt-4" />
        </div>
        <div className="lg:w-1/3 order-3 hidden lg:block">
          <div className="grid grid-cols-1 gap-4 h-full content-end">
            {['EASY MAINTENANCE', 'VARIETY', 'PAISA VASOOL'].map((text) => (
              <div key={text} className="p-4 rounded-lg text-right">
                <p className="font-medium border-b-2 border-l-2 border-black pb-1" style={{ fontSize: 'clamp(14px, 3vw, 30px)' }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 lg:hidden">
        {[
          'DURABILITY', 'EASY MAINTENANCE',
          'ELEGANT DESIGN', 'VARIETY',
          'STAIN RESISTANCE', 'PAISA VASOOL'
        ].map((text, index) => (
          <div key={text} className={`p-2 rounded-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
            <p className={`font-semibold border-b-2 border-black pb-1 ${index % 2 === 0 ? 'border-r-2' : 'border-l-2'}`}
               style={{ fontSize: 'clamp(14px, 2.5vw, 24px)' }}>
              {text}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;