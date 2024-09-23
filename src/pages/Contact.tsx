import '.././App.css';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import ContactAnim from '../components/ContactAnim';

function Contact() {
  return (
    <div className='pt-[70px] lg:pt-[110px] m-3 flex flex-col lg:flex-row'>
      <div className='lg:w-3/4 w-full p-4'>
        <form action="https://formsubmit.co/tarunthegreat2003@gmail.com" method="POST" className='space-y-4'>
          <input type="hidden" name="_captcha" value="false" />
          <h2 className='lg:hidden text-center text-black font-semibold text-[clamp(20px,4vw,36px)]'>Contact Us</h2>
          <div className='flex flex-wrap -mx-2 mb-4'>
            <div className='w-full md:w-1/2 px-2'>
              <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Name *</label>
              <input type='text' name='name' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' required />
            </div>
            <div className='w-full md:w-1/2 px-2'>
              <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Contact no. *</label>
              <input type='number' name='contact' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' required />
            </div>
          </div>
          <div className='flex flex-wrap -mx-2 mb-4'>
            <div className='w-full md:w-1/2 px-2'>
              <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Email ID *</label>
              <input type='email' name='email' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' required />
            </div>
            <div className='w-full md:w-1/2 px-2'>
              <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>City *</label>
              <input type='text' name='city' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' required />
            </div>
          </div>
          <div className='mb-4 space-y-4 sm:space-y-2'>
            <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Subject *</label>
            <input type='text' name='subject' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' required />
          </div>
          <div className='mb-4 space-y-4 sm:space-y-2'>
            <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Message *</label>
            <textarea name='message' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' rows={4} required></textarea>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 text-[clamp(16px, 2vw, 24px)]'>Attach Files</label>
            <input type='file' name='attachment' className='w-full border border-gray-300 p-2 text-[clamp(16px, 2vw, 24px)]' />
          </div>
          <button type='submit' className='bg-red-500 text-[#F7FCFF] p-2 rounded-full px-4 text-[clamp(16px, 2vw, 24px)]'>Submit</button>
        </form>
      </div>
      <div className='lg:w-5/12 w-full p-4 border-t-2 lg:border-t-0 lg:border-l-2 border-black'>
        <div className='text-center lg:text-left'>
          <div className='flex justify-center lg:justify-start'><ContactAnim/></div>
          <h2 className='text-red-600 text-xl font-bold text-[clamp(16px, 2vw, 24px)]'>Roshni Sinks</h2>
          <p className='font-semibold mt-4 text-[clamp(16px, 2vw, 24px)]'>Registered Address:</p>
          <p className='text-[clamp(16px, 2vw, 24px)]'>
            <a href='https://maps.app.goo.gl/7jVpGtd6RZNbkzyP9' target='_blank' rel='noopener noreferrer' className='inline-block cursor-pointer'>
              <FaMapMarkerAlt className='inline-block' /> Khasra No.86, Prahladpur Bangar
            </a>
          </p>
          <p className='text-[clamp(16px, 2vw, 24px)] ml-5'>
            <a href='https://maps.app.goo.gl/7jVpGtd6RZNbkzyP9' target='_blank' rel='noopener noreferrer' className='inline-block cursor-pointer'>
            Near Ndpl Office Prahladpur
            </a>
          </p>
          <p className='text-[clamp(16px, 2vw, 24px)] ml-5'>
            <a href='https://maps.app.goo.gl/7jVpGtd6RZNbkzyP9' target='_blank' rel='noopener noreferrer' className='inline-block cursor-pointer'>
            Delhi - 110042
            </a>
          </p>
          <p className='text-[clamp(16px, 2vw, 24px)] ml-5'>
            <a href='https://maps.app.goo.gl/7jVpGtd6RZNbkzyP9' target='_blank' rel='noopener noreferrer' className='inline-block cursor-pointer'>
            India
            </a>
          </p>
          
          <p className='mt-4 font-semibold text-[clamp(16px, 2vw, 24px)]'>Contact Details:</p>
          <p className='text-[clamp(16px, 2vw, 24px)]'>
            <a href='mailto:shriharienterprises2011@gmail.com' className='inline-block mr-2 cursor-pointer'>
              <FaEnvelope className='inline-block mr-2' /> shriharienterprises2011@gmail.com
            </a>
          </p>
          <p className='text-[clamp(16px, 2vw, 24px)]'>
            <a href='tel:+919999333577' className='inline-block mr-2 cursor-pointer'>
              <FaPhone className='inline-block mr-2' /> +91 99993 33577
            </a>
          </p>
          
          <p className='mt-4 font-semibold text-[clamp(16px, 2vw, 24px)]'>Connect with us:</p>
          <div className='flex justify-center lg:justify-start space-x-4'>
            <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-xl text-[clamp(16px, 2vw, 24px)]' />
            </a>
            <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
              <FaFacebookF className='text-xl text-[clamp(16px, 2vw, 24px)]' />
            </a>
            <a href='https://wa.me/919999333577' target='_blank' rel='noopener noreferrer'>
              <FaWhatsapp className='text-xl text-[clamp(16px, 2vw, 24px)]' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;