import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-primary text-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter ✉️</h2>
          <p className="mb-8">Get your daily dose of motivation, gym tips, nutrition advice, and more!</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-gray-900"
              required
            />
            <button type="submit" className="btn bg-white text-primary hover:bg-gray-100">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;