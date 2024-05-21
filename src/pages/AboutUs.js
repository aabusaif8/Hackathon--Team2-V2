import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AboutUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormSubmitted(true);
    // Reset form data after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-dark-green font-semibold tracking-wide uppercase">
            About Us
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Company Mission
          </p>
        </div>

        <div className="mt-10">
          <p className="text-xl text-gray-500">
            At Monarch, we are committed to revolutionizing the world of finance by harnessing the power of artificial intelligence. Our mission is to democratize investing, making it accessible and intuitive for individuals from all walks of life.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            We believe that financial freedom should not be a privilege reserved for a select few, but a right that everyone can exercise. Through our cutting-edge AI-driven platform, we aim to demystify the complexities of investing, providing personalized guidance and insights that empower our clients to make informed decisions.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Our team of experts, backed by advanced machine learning algorithms, continuously analyzes vast amounts of data, identifying patterns and opportunities that would be impossible for the human eye to discern. By leveraging this invaluable intelligence, we equip our clients with the tools and knowledge they need to navigate the ever-changing financial landscape with confidence.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            At Monarch, we understand that trust is the cornerstone of any successful financial relationship. That's why we prioritize transparency, ethical practices, and unwavering integrity in everything we do. Our clients can rest assured that their investments are in capable hands, guided by a team that puts their best interests first.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            We are passionate about fostering a culture of continuous learning and innovation, constantly seeking new ways to enhance our offerings and stay ahead of the curve. By embracing emerging technologies and collaborating with industry leaders, we strive to redefine the boundaries of what's possible in the realm of finance.
          </p>
          <p className="mt-4 text-xl text-gray-500">
            Join us on this transformative journey, where the fusion of human expertise and artificial intelligence paves the way for a future of intelligent investing, financial empowerment, and lasting prosperity.
          </p>
        </div>

        <div className="mt-20">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Contact Us
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-8 lg:w-2/3 transition-all duration-500 ease-in-out">
              <h3 className="text-lg font-medium text-gray-900">Get in Touch</h3>
              {formSubmitted ? (
                <div className="mt-6 text-center">
                  <p className="text-lg font-semibold text-dark-green">
                    Thank you for reaching out!
                  </p>
                  <p className="mt-2 text-gray-500">
                    Our team will contact you via the email you provided within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1 focus:ring-dark-green focus:border-dark-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 focus:ring-dark-green focus:border-dark-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="mt-1 focus:ring-dark-green focus:border-dark-green block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-dark-green hover:bg-dark-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;