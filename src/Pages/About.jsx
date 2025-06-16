import React from "react";
import Logo2 from "/logo2.png";

const About = () => {
  return (
    <div className="pt-40 pb-30 min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl text-white text-center font-bold mb-8 bg-gray-800 p-4 rounded-lg shadow-md">
          About Us
        </h2>

        <p className="text-lg text-gray-300 text-center mb-12 bg-gray-800 p-6 rounded-lg shadow-md">
          Welcome to <b>PushtakMandi</b>, your gateway to knowledge,
          imagination, and endless possibilities. Our library is designed to
          inspire, educate, and build a community of book lovers who cherish the
          power of stories.
        </p>

        {/* Library History */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-white text-center">
            Our Story
          </h3>
          <p className="text-gray-300">
            PushtakMandi was founded with a vision to create a hub where
            learning flourishes and the love for books is shared. From humble
            beginnings with a small collection of academic titles, our library
            has grown into a vast resource center housing thousands of books
            across genres—from timeless classics to contemporary bestsellers.
          </p>
          <p className="text-gray-300 mt-4">
            Over the years, we have embraced technology, making digital lending
            easier while preserving the charm of traditional reading spaces.
            Whether you're a student, researcher, or a casual reader,
            PushtakMandi is here to support your journey.
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12">
          <h3 className="text-3xl font-semibold mb-6 text-white text-center">
            Our Mission & Vision
          </h3>
          <p className="text-gray-300">
            <b>Mission:</b> To foster a love for reading, promote lifelong
            learning, and provide an inclusive space where people can explore,
            exchange ideas, and thrive in their knowledge pursuits.
          </p>
          <p className="text-gray-300 mt-4">
            <b>Vision:</b> To be a center of inspiration, connecting readers and
            learners through books, digital resources, and engaging community
            programs.
          </p>
        </section>

        {/* Library Services */}
        <div className="grid md:grid-cols-2 gap-10 items-center p-2">
          <div className="px-0 pt-5">
            <h3 className="text-3xl font-semibold text-white mb-6 bg-gray-800 p-4 rounded-lg shadow-md">
              What We Offer
            </h3>
            <ul className="list-disc pl-6 text-lg text-gray-300 bg-gray-800 p-6 rounded-lg shadow-lg">
              <li>
                Extensive collection of physical books and digital resources
              </li>
              <li>Comfortable reading spaces and quiet study zones</li>
              <li>Book lending services and online catalog access</li>
              <li>
                Exclusive community programs, reading clubs, and author events
              </li>
              <li>
                Dedicated resources for students, researchers, and professionals
              </li>
              <li>Expert librarians to assist and provide recommendations</li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Logo2}
              className="w-1/2 rounded-lg shadow-xl"
              alt="library"
            />
          </div>
        </div>

        {/* Membership Benefits */}
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-white text-center">
            Membership Benefits
          </h3>
          <p className="text-gray-300 text-center mb-4">
            Becoming a member of PushtakMandi comes with incredible perks!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-xl mb-3 text-white">
                Unlimited Book Borrowing
              </h4>
              <p className="text-gray-300">
                Get access to a wide range of books and borrow them hassle-free.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-xl mb-3 text-white">
                Exclusive Member Events
              </h4>
              <p className="text-gray-300">
                Attend VIP author meet-ups, book discussions, and literary
                workshops.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-xl mb-3 text-white">
                Discounted Book Purchases
              </h4>
              <p className="text-gray-300">
                Enjoy discounts on newly released books and merchandise.
              </p>
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold text-xl mb-3 text-white">
                Priority Access to New Arrivals
              </h4>
              <p className="text-gray-300">
                Be the first to explore the latest books added to our
                collection.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gray-700 p-6 rounded-lg shadow-lg mt-12 text-center">
          <h3 className="text-3xl font-semibold mb-6 text-white">
            Join Our Library Today
          </h3>
          <p className="text-gray-300 mb-6">
            Sign up now and become part of a vibrant reading community.
          </p>
          <button className="bg-violet-600 text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-violet-500 transition shadow-md">
            Become a Member
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
