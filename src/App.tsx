import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const Blogs = lazy(() => import('./pages/Blogs'));

import img0 from './assets/img0.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img21 from './assets/img21.png';
import img22 from './assets/img22.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import r1 from './assets/r1.png';
import r2 from './assets/r2.png';
import r3 from './assets/r3.png';
import r4 from './assets/r4.png';
import r5 from './assets/r5.png';
import r6 from './assets/r6.png';
import l1 from './assets/l1.png';
import l2 from './assets/l2.png';
import l3 from './assets/l3.png';
import l4 from './assets/l4.png';
import l5 from './assets/l5.png';
import l6 from './assets/l6.png';
import eye from './assets/eye.webp';
import smile from './assets/smile.svg';
import quotes from './assets/quotes.png';
import logo2 from './assets/logo2.png';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

function Home() {
  const [rating, setRating] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const images = [img2, img21, img22];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [userReview, setUserReview] = useState<null | {
    text: string;
    author: string;
    rating: number;
  }>(null);

  const nameAnimation = useAnimation();
  const emailAnimation = useAnimation();
  const feedbackAnimation = useAnimation();
  const ratingAnimation = useAnimation();

  const shakeAnimation = {
    x: [0, -10, 10, -10, 10, 0],
    transition: { duration: 0.4 }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = useCallback((index: number) => {
    setCurrentImage(index);
  }, []);

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

  const DURATION = 0.25;
  const STAGGER = 0.025;

  interface FlipTextProps {
    children: string;
  }

  const FlipText: React.FC<FlipTextProps> = React.memo(({ children }) => {
    return (
      <motion.h2
        initial="initial"
        whileHover="hovered"
        className="text-[clamp(18px,4vw,32px)] font-semibold border-b-2 border-[#EF1923] pb-1 relative overflow-hidden whitespace-nowrap"
      >
        <div className="relative">
          {children.split("").map((l: string, i: number) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-100%" },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l: string, i: number) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hovered: { y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </div>
      </motion.h2>
    );
  });

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = useCallback((index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  }, [openFAQ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  interface SquareItemProps {
    number: string;
    text: string;
    index: number;
  }

  const SquareItem: React.FC<SquareItemProps> = React.memo(({ number, text, index }) => {
    const x = useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      index < 2 
        ? ["-50%", "0%", "50%"]
        : ["50%", "0%", "-50%"]
    );

    return (
      <motion.div
        style={{ x }}
        className="bg-[#EF1923] text-[#F7FCFF] p-4 lg:rounded-[20px] rounded-[10px] flex flex-col items-center justify-center aspect-square relative"
      >
        <span className="absolute inset-0 flex items-center justify-center font-bold opacity-30 bottom-4 md:bottom-8 text-[clamp(4rem,20vw,10rem)]">{number}</span>
        <span className="text-center font-semibold relative z-10 leading-none top-6 md:top-14 text-[clamp(1rem,3vw,2.5rem)]">{text}</span>
      </motion.div>
    );
  });

  const allReviews = [
    {
      text: "Loved the sink! It's durable, scratch-resistant, and looks great in my kitchen. Highly recommend it for anyone wanting a stylish and affordable sink.",
      author: "Rekha Gupta",
      rating: 5
    },
    {
      text: "I was looking for a good sink on a budget for quite some time and Radmi was perfect! It's easy to clean, and looks amazing. Great value for the price!",
      author: "Priya Mehta",
      rating: 4
    },
    {
      text: "I've been buying sinks from here for a long time now and have never been disappointed. The quality is always top-notch & last for years without any issues.",
      author: "Karan Patel",
      rating: 5
    },
    {
      text: "The owner is so polite and helpful! He really takes the time to understand your needs and recommends the best option. Amazing customer service",
      author: "Nikhil Sharma",
      rating: 5
    },
    {
      text: "I've had their sink for a few months now, and I'm really happy with it. It's resistant to stains and scratches, which is exactly what I needed.",
      author: "Sunita Rao",
      rating: 4
    },
    {
      text: "I bought a handmade sink from them, and it's super durable and beautifully crafted. You can really tell the attention to detail that went into making it.",
      author: "Anjali Desai",
      rating: 5
    }
  ];

  const [selectedReviews, setSelectedReviews] = useState<typeof allReviews>([]);

  useEffect(() => {
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
    setSelectedReviews(shuffled.slice(0, 2));

    const savedReview = localStorage.getItem('userReview');
    if (savedReview) {
      setUserReview(JSON.parse(savedReview));
    }
  }, []);

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    let isValid = true;

    if (!name) {
      nameAnimation.start(shakeAnimation);
      isValid = false;
    }
    if (!email) {
      emailAnimation.start(shakeAnimation);
      isValid = false;
    }
    if (!feedback) {
      feedbackAnimation.start(shakeAnimation);
      isValid = false;
    }
    if (rating === 0) {
      ratingAnimation.start(shakeAnimation);
      isValid = false;
    }

    if (isValid) {
      const newReview = {
        text: feedback,
        author: name,
        rating: rating
      };
      setUserReview(newReview);
      localStorage.setItem('userReview', JSON.stringify(newReview));

      setName('');
      setEmail('');
      setFeedback('');
      setRating(0);

      alert("Thank you for your valuable feedback! 🌟\n\nYour review will be visible in our reviews section shortly. If you wish to modify your feedback, simply submit a new review, and it will replace your previous one. 😊");
    }
  }, [name, email, feedback, rating, nameAnimation, emailAnimation, feedbackAnimation, ratingAnimation]);

  return (
    <div className="pt-[85px] m-3" id="reviewformL">
      <div className="flex flex-col">
        <motion.h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light tracking-[0.1em] w-full"
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 1
        }}>
          ELEVATING <span className="font-bold">KITCHENS</span>
        </motion.h1>
        <div className="flex items-center gap-4 md:gap-8 overflow-hidden">
          <motion.h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light" 
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 1
        }}>
          WITH
        </motion.h1>
          <motion.img 
            src={img0} 
            alt="Sink" 
            className="h-[clamp(10px,6vw,60px)] w-auto object-contain"
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ 
              duration: 1
            }}
          />
        </div>
        <motion.h1 className="text-[clamp(26px,6vw,70px)] leading-tight font-light w-full" 
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{
          duration: 1
        }}>
          STATE-OF-THE-ART <span className="font-bold">SINKS</span>
        </motion.h1>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 mt-3">
        <div className="lg:flex-shrink-0">
          <motion.div className="relative"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            transition={{ 
              duration: 1
            }}>
            <img src={img1} alt="Kitchen View" className="w-full h-auto" />
          </motion.div>
        </div>
        <div className="flex flex-col lg:flex-row gap-4" id="reviewformS">
          <motion.div className="lg:flex-shrink-0"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.1
          }}>
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
          </motion.div>
          <motion.div className="lg:flex-grow bg-[#173B45] lg:rounded-[20px] rounded-[10px] p-6 text-[#F7FCFF] flex flex-col"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 1,
            delay: 0.2
          }}>
            <h2 className="text-[clamp(16px,2vw,20px)] text-center mb-4">WE WOULD LOVE TO HAVE YOUR FEEDBACK</h2>
            <form 
              className="flex flex-col justify-between h-full" 
              onSubmit={handleSubmit}
            >
              <div className="space-y-3">
                <motion.div animate={nameAnimation}>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(14px,1.5vw,16px)]"
                    required
                  />
                </motion.div>
                <motion.div animate={emailAnimation}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 w-full text-[clamp(14px,1.5vw,16px)]"
                    required
                  />
                </motion.div>
                <motion.div animate={feedbackAnimation} className="relative">
                  <textarea
                    name="feedback"
                    placeholder="Feedback *"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value.slice(0, 150))}
                    maxLength={150}
                    rows={3}
                    className="bg-[#f7fcff40] rounded p-2 text-[#F7FCFF] placeholder-gray-300 resize-none w-full text-[clamp(14px,1.5vw,16px)] pr-16 break-words"
                    required
                    style={{ overflowWrap: 'break-word', wordWrap: 'break-word', wordBreak: 'break-word' }}
                  ></textarea>
                  <span className="absolute bottom-2 right-2 text-[clamp(12px,1.2vw,14px)] text-gray-300">
                    {feedback.length}/150
                  </span>
                </motion.div>
                <div className="flex items-center justify-between mt-2">
                  <motion.div animate={ratingAnimation} className="flex-grow">
                    <label className="block mb-1 text-[clamp(14px,1.5vw,16px)]">Rating *</label>
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
                  </motion.div>
                  <button
                    type="submit"
                    className="bg-[#F7FCFF] text-[#173B45] font-bold py-2 px-4 rounded text-[clamp(14px,1.5vw,16px)] hover:translate-y-[-2px] transition-all duration-300 ml-4"
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <div>
        <h1 className="text-[#EF1923] font-bold lg:mt-16 mt-12 text-[clamp(22px,5vw,36px)]">
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

      <div className="relative m-[-0.75rem] lg:mt-48 mt-36" ref={containerRef}>
        <img src={img3} alt="Kitchen background" className="w-full object-cover md:h-[600px] h-[300px] crop1 select-none" />
        <div className="absolute inset-x-0 top-0 transform -translate-y-1/3 flex justify-center overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 px-4 w-[85%]">
            {[
              { number: '01', text: 'Innovative Team' },
              { number: '02', text: 'Modern Design' },
              { number: '03', text: 'Supreme Quality' },
              { number: '04', text: 'Client Satisfaction' },
            ].map((item, index) => (
              <SquareItem key={item.number} number={item.number} text={item.text} index={index} />
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

      <div className='-m-3'>
        <div className="w-full overflow-hidden relative mt-12 lg:mt-20">
          <div className="flex animate-scrollLeft">
            {[l1, l2, l3, l4, l5, l6, l1, l2, l3, l4, l5, l6].map((img, index) => (
              <div key={index} className="flex-shrink-0 lg:w-[250px] lg:h-[250px] w-[150px] h-[150px]">
                <img src={img} alt={`carousel-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden relative mt-4">
          <div className="flex animate-scrollRight">
            {[r1, r2, r3, r4, r5, r6, r1, r2, r3, r4, r5, r6].map((img, index) => (
              <div key={index} className="flex-shrink-0 lg:w-[250px] lg:h-[250px] w-[150px] h-[150px]">
                <img src={img} alt={`carousel-${index}`} className="w-full h-full object-cover" />
              </div>
            ))}
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
      </div>

      <div className="-m-3 w-screen bg-[#EF1923] h-16 md:h-28 lg:h-36 lg:mt-44 mt-24 mb-8 relative">
        <img src={eye} alt="Eye" className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto lg:w-1/5 md:w-1/4 w-1/3 object-cover rounded-md" />
        <img src={smile} alt="Smile" className="absolute left-1/2 bottom-2 lg:bottom-3 transform -translate-x-1/2 h-auto lg:w-[6.67%] md:w-[8.33%] w-[11.11%] object-cover" />
      </div>

      <div>
        <h2 className="text-center text-black font-semibold text-[clamp(20px,4vw,36px)]">
          Read what our customers say
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 mt-4 lg:mt-8 px-4">
        {[...selectedReviews, userReview].filter((review): review is NonNullable<typeof review> => review !== null).map((review, index) => (
          <div key={index} className="bg-[#F7FCFF] rounded-lg p-4 shadow-md w-full lg:w-1/3 max-w-md border-2 border-black">
            <div className="flex items-start mb-2">
              <img src={quotes} alt="Quotes" className="w-8 h-8 mr-2" />
            </div>
            <p className="italic text-justify mb-4 text-[clamp(12px,2vw,20px)]">
              {review.text}
            </p>
            <div className="flex justify-between items-center">
              <p className="font-semibold">- {review.author}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'} fill-current`} viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        ))}
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
              <>◉ <a href="/products" className="underline font-semibold">Visit our Site</a>: Visit our manufacturing site in Delhi to see our sinks in person and place your order.</>,
              "Once your order is placed, you will receive a confirmation email at the email address you provided, confirming your order details."
            ]
          }
        ].map((item, index) => (
          <div 
            key={index} 
            className="mb-4 border border-black rounded-[10px] overflow-hidden transition-all duration-300 hover:shadow-lg"
          >
            <div 
              className="bg-[#F7FCFF] p-4 cursor-pointer relative"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-[clamp(14px,2vw,20px)]">{item.question}</h3>
                <svg 
                  className={`w-5 h-5 text-black transform transition-transform duration-300 ${openFAQ === index ? 'rotate-90' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <div className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${openFAQ === index ? 'max-h-[1000px]' : 'max-h-0'}`}>
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
          </svg>
        </div>

        <div className="text-center relative">
          <FlipText>ContactUs</FlipText>
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
          </a>          <a href="https://maps.app.goo.gl/5555555555555555" className="flex items-start text-[clamp(14px,1.5vw,16px)]" target="_blank" rel="noopener noreferrer">
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

      <div className="bg-[#EF1923] brightness-75 py-4 w-screen -m-3">
        <div className="container mx-auto px-4">
          <p className="text-[#F7FCFF] text-center text-[clamp(12px,1.5vw,14px)]">
            © 2024 Roshni Sinks. All Rights Reserved. Designed and Developed by Tarun Gupta
          </p>
        </div>
      </div>

    </div>
  );
}

export default App;