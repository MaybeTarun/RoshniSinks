import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import img0 from './assets/img0.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img21 from './assets/img21.png';
import img22 from './assets/img22.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import best from './assets/best.png';
import buy from './assets/buy.png';
import eye from './assets/eye.webp';
import smile from './assets/smile.svg';
import quotes from './assets/quotes.png';
import logo2 from './assets/logo2.png';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

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
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index: number) => {
    setCurrentImage(index);
  };

  const TextAni = ({ children, href}: {children: string, href: string}) => {
    return (
      <a href={href} className="text-[clamp(18px,4vw,32px)]">
        {children}
      </a>
    )
  }

  useEffect(() => {
    const handleResize = () => {
      const reviewButton = document.getElementById('reviewButton');
      if (reviewButton) {
        if (window.innerWidth >= 1024) {
          reviewButton.setAttribute('href', '#reviewformL');
        } else {
          reviewButton.setAttribute('href', '#reviewformS');
        }
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="pt-[85px] m-3" id="reviewformL">
      <div className="flex flex-col">
        <h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light tracking-[0.1em] w-full">
          ELEVATING <span className="font-bold">KITCHENS</span>
        </h1>
        <div className="flex items-center gap-4 md:gap-8">
          <h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light">WITH</h1>
          <img src={img0} alt="Sink" className="h-[clamp(10px,6vw,60px)] w-auto object-contain" />
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
        <div className="flex flex-col lg:flex-row gap-4" id="reviewformS">
          <div className="lg:flex-shrink-0">
            <div className="relative">
              <img
                src={images[currentImage]}
                alt="Sinks"
                className="w-full h-auto aspect-[2/1] lg:aspect-auto object-cover lg:rounded-[20px] rounded-[10px]"
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
          <div className="lg:flex-grow bg-[#173B45] lg:rounded-[20px] rounded-[10px] p-6 text-[#F7FCFF] flex flex-col">
            <h2 className="text-[clamp(16px,2vw,20px)] text-center mb-4">WE WOULD LOVE TO HAVE YOUR FEEDBACK</h2>
            <form className="flex flex-col justify-between h-full">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(14px,1.5vw,16px)]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(14px,1.5vw,16px)]"
                />
                <textarea
                  placeholder="Feedback"
                  rows={3}
                  className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 resize-none w-full text-[clamp(14px,1.5vw,16px)]"
                ></textarea>
                <div className="mt-2 flex justify-between items-center">
                  <div>
                    <label className="block mb-1 text-[clamp(14px,1.5vw,16px)]">Rating</label>
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
        <h1 className="text-[#EF1923] font-bold lg:mt-8 mt-4 text-[clamp(22px,5vw,36px)]">
          Roshni Sinks
        </h1>
        <h2 className="text-black font-semibold text-[clamp(18px,3vw,28px)]">
          Kitchen Sink Manufacturer in Delhi since 2012
        </h2>
        <p className="text-gray-800 leading-relaxed text-justify text-[clamp(14px,2vw,24px)]">
          Roshni Sinks, a distinguished manufacturer, crafts exquisite sinks that seamlessly blend functionality with
          elegance. With a commitment to impeccable design and top-tier materials, Roshni Sinks redefines spaces,
          providing enduring quality and style for your home.
        </p>
        <div className="flex justify-start mt-4 space-x-4 md:space-x-6">
          <a href="https://instagram.com/roshni.sinks" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaInstagram className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="https://wa.me/9999333577" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <a href="mailto:shriharienterprises2011@gmail.com" target="_blank" rel="noopener noreferrer" className="text-[#173B45] hover:text-[#EF1923] hover:translate-y-[-2px] transition-all duration-300">
            <FaEnvelope className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      <div className="relative m-[-0.75rem] mt-32">
        <img src={img3} alt="Kitchen background" className="w-full object-cover md:h-[600px] h-[300px] crop1 select-none" />
        <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 px-4 w-[85%]">
            {[
              { number: '01', text: 'Innovative Team' },
              { number: '02', text: 'Modern Design' },
              { number: '03', text: 'Supreme Quality' },
              { number: '04', text: 'Client Satisfaction' },
            ].map((item) => (
              <div key={item.number} className="bg-[#EF1923] text-[#F7FCFF] p-4 lg:rounded-[20px] rounded-[10px] flex flex-col items-center justify-center aspect-square relative overflow-hidden">
                <span className="absolute inset-0 flex items-center justify-center font-bold opacity-30 bottom-4 md:bottom-8 text-[clamp(4rem,20vw,10rem)]">{item.number}</span>
                <span className="text-center font-semibold relative z-10 leading-none top-6 md:top-14 text-[clamp(1rem,3vw,2.5rem)]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-center text-black font-semibold lg:-mt-6 text-[clamp(20px,4vw,36px)]">
          What sets us Apart
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-8">
        <div className="lg:w-1/3 order-2 lg:order-1 hidden lg:block">
          <div className="grid grid-cols-1 gap-4 h-full content-end">
            {['DURABILITY', 'ELEGANT DESIGN', 'STAIN RESISTANCE'].map((text) => (
              <div key={text} className="p-4 rounded-lg">
                <p className="text-left font-medium border-b-2 border-r-2 border-black pb-1 text-[clamp(14px,3vw,30px)]">{text}</p>
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
                <p className="font-medium border-b-2 border-l-2 border-black pb-1 text-[clamp(14px,3vw,30px)]">{text}</p>
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
            <p className={`font-semibold text-[clamp(12px,2.5vw,24px)] border-b-2 border-black pb-1 ${index % 2 === 0 ? 'border-r-2' : 'border-l-2'}`}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <div className="lg:mt-24 mt-8 w-full select-none">
        <div className="w-[80%] h-auto">
          <img 
            src={best}
            alt="Best" 
            className="w-full h-auto object-cover object-left"
          />
        </div>
      </div>

      <div className="lg:mt-8 mt-2 w-full flex justify-end select-none">
        <div className="w-[80%] h-auto">
          <img 
            src={buy}
            alt="Buy" 
            className="w-full h-auto object-cover object-right"
          />
        </div>
      </div>

      <div className="flex justify-center lg:mt-8 mt-6 lg:-mr-3">
        <a
          href="/products"
          className="bg-[#EF1923] text-[#F7FCFF] font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full hover:translate-y-[-2px] transition-all duration-300 ease-in-out flex items-center text-[clamp(12px,2vw,18px)]"
        >
          SHOP NOW
        </a>
      </div>

      <div className="-m-3 w-screen bg-[#EF1923] h-16 md:h-28 lg:h-36 lg:mt-36 mt-16 mb-8 relative">
        <img src={eye} alt="Eye" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto lg:w-1/5 md:w-1/4 w-1/3 object-cover rounded-md" />
        <img src={smile} alt="Smile" className="absolute left-1/2 bottom-2 lg:bottom-3 transform -translate-x-1/2 h-auto lg:w-[6.67%] md:w-[8.33%] w-[11.11%] object-cover" />
      </div>

      <div>
        <h2 className="text-center text-black font-semibold text-[clamp(20px,4vw,36px)]">
          Read what our customers say
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-4 lg:mt-8 px-4">
        <div className="bg-[#F7FCFF] rounded-lg p-4 shadow-md w-full lg:w-1/2 max-w-md border-2 border-black">
          <div className="flex items-start mb-2">
            <img src={quotes} alt="Quotes" className="w-8 h-8 mr-2" />
          </div>
          <p className="italic text-justify mb-4 text-[clamp(12px,2vw,20px)]">
            Loved the sink! It's durable, scratch-resistant, and looks great in my kitchen. Highly recommend it for anyone wanting a stylish and affordable sink.
          </p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">- Tarun Gupta</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-[#F7FCFF] rounded-lg p-4 shadow-md w-full lg:w-1/2 max-w-md border-2 border-black">
          <div className="flex items-start mb-2">
            <img src={quotes} alt="Quotes" className="w-8 h-8 mr-2" />
          </div>
          <p className="italic text-justify mb-4 text-[clamp(12px,2vw,20px)]">
            I was looking for a good sink on a budget for quite some time and Radmi was perfect! It's easy to clean, and looks amazing. Great value for the price!
          </p>
          <div className="flex justify-between items-center">
            <p className="font-semibold">- John Doe</p>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center lg:mt-8 mt-6 mb-6 lg:mb-8">
        <a
          id="reviewButton"
          href="#reviewformS"
          className="bg-[#EF1923] text-[#F7FCFF] font-semibold py-2 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-full hover:translate-y-[-2px] transition-all duration-300 ease-in-out flex items-center text-[clamp(12px,2vw,18px)]"
        >
          GIVE REVIEW
        </a>
      </div>

      <div className="flex justify-center my-1 lg:my-6">
        <div className="w-4/5 border-t-2 border-black"></div>
      </div>

      <div>
        <h2 className="text-center text-black font-semibold text-[clamp(20px,4vw,36px)]">
          FAQs
        </h2>
      </div>

      <div className="w-full max-w-3xl mx-auto mt-2">
        {[
          {
            question: "Why choose Roshni Sinks ?",
            answer: "We offer the perfect blend of quality, style, and affordability. Made from high-quality materials, our sinks are durable, scratch-resistant, and easy to maintain. Whether you need a modern design or a budget-friendly option, Roshni has a wide range of sinks to suit your needs. Plus, our competitive prices ensure you get the best value for your money without compromising on quality."
          },
          {
            question: "Can I find budget-friendly sinks at Roshni ?",
            answer: "Yes, Roshni offers a variety of budget-friendly sinks that maintain high standards of quality. Whether you need a simple design or something more modern, our affordable sinks are built to meet your needs without breaking the bank."
          },
          {
            question: "Do we offer good value for money?",
            answer: "Absolutely. Roshni Sinks combine top-notch quality with great prices. You get a stylish, durable sink that enhances your kitchen's look while lasting for years, giving you excellent value for your investment."
          },
          {
            question: "How to place Order ?",
            answer: [
              "Placing an order with Roshni is simple and convenient. You can choose from the following options:",
              <>◉ <a href="tel:+919999333577" className="underline font-semibold">Call Us</a>: Contact us directly to place your order.</>,
              <>◉ <a href="https://wa.me/9999333577" target="_blank" rel="noopener noreferrer" className="underline font-semibold">WhatsApp Catalog</a>: Use our WhatsApp catalog to browse, add products to your cart, and place your order.</>,
              <>◉ <a href="/products" className="underline font-semibold">Order Online</a>: Visit our website, fill your cart with the sinks you need, and click the Place Order button. Make sure you're logged in before placing the order.</>,
              "Once your order is placed, you will receive a confirmation email at the email address you provided, confirming your order details."
            ]
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="mb-4 border border-black rounded-[10px] overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div className="bg-[#F7FCFF] p-4 cursor-pointer relative group">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[clamp(14px,2vw,20px)]">{item.question}</h3>
                <svg 
                  className="w-5 h-5 text-black transform transition-transform duration-300 group-hover:rotate-90" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0 group-hover:max-h-[1000px]">
                <hr className="border-gray-300 my-2" />
                {Array.isArray(item.answer) ? (
                  item.answer.map((line, i) => (
                    <p key={i} className={`${i > 0 ? 'mt-2' : ''} text-justify text-[clamp(14px,1.5vw,18px)]`}>{line}</p>
                  ))
                ) : (
                  <p className="text-justify text-[clamp(14px,1.5vw,18px)]">{item.answer}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#F7FCFF] p-6 mt-8 w-screen -m-3 flex items-center justify-between h-[200px]">
        <div className="flex items-center">
          <span className="text-[clamp(14px,3vw,18px)] font-semibold mr-2 sm:mr-4 leading-tight">
            Still got<br />doubts?
          </span>
          <svg 
            className="w-6 h-4 sm:w-8 sm:h-6 text-black animate-bounce-horizontal" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
        <div className="text-center">
          <h2 className="text-[clamp(18px,4vw,32px)] font-semibold border-b-2 border-[#EF1923] pb-1">Contact Us</h2>
        </div>
        <div className='px-4'>
          <a 
            href="/contact" 
            className="bg-[#EF1923] rounded-full p-2 inline-flex items-center justify-center transition-all duration-300 rotate-[-45deg] hover:rotate-[0deg] w-[clamp(40px,6vw,48px)] h-[clamp(40px,6vw,48px)]"
          >
            <svg 
              className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7FCFF]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-[#EF1923] p-6 w-screen -m-3 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col text-[#F7FCFF] mb-4 md:mb-0 md:w-1/3">
          <a href="tel:+919999333577" className="mb-2 flex items-center text-[clamp(14px,1.5vw,16px)]">
            <FaPhone className="mr-2" /> +91 99993 33577
          </a>
          <a href="mailto:shriharienterprises2011@gmail.com" className="mb-2 flex items-center text-[clamp(14px,1.5vw,16px)]">
            <FaEnvelope className="mr-2" /> shriharienterprises2011@gmail.com
          </a>
          <a href="https://maps.app.goo.gl/5555555555555555" className="flex items-start text-[clamp(14px,1.5vw,16px)]" target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt className="mr-2 mt-1 ml-0.5" /> Khasra No.86, Prahaladpur Bangar Near Nand Office Prahaladpur Delhi-110042
          </a>
        </div>
        
        <div className="mb-4 md:mb-0 md:w-1/3 flex justify-center p-4">
          <img src={logo2} alt="Roshni Logo" className="h-20 lg:h-28" />
        </div>
        
        <div className="flex flex-col items-start text-[#F7FCFF] md:w-1/3 lg:px-24 lg:py-2">
          <h3 className="font-semibold mb-2 text-[clamp(16px,2vw,24px)]">Want to be the coolest in your group?</h3>
          <p className="mb-2 opacity-80 text-[clamp(14px,1.5vw,16px)]">Subscribe to our newsletter</p>
          <div className="flex flex-col w-full items-end">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 rounded-md w-full text-black mb-2 text-[clamp(14px,1.5vw,16px)]"
            />
            <button className="bg-[#F7FCFF] text-[#EF1923] px-4 py-2 rounded-md font-semibold hover:translate-y-[-2px] transition-all duration-300 text-[clamp(12px,1.5vw,16px)]">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#b21e26] text-[#F7FCFF] py-4 w-screen -m-3">
        <div className="container mx-auto px-4">
          <p className="text-center text-[clamp(12px,1.5vw,14px)]">
            © 2024 Roshni Sinks. All Rights Reserved. Designed and Developed by Tarun Gupta
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;