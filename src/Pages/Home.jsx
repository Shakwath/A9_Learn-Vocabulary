import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Components/Banner';
import { Link } from "react-router-dom";
import CountUp from "react-countup";

// Testimonials array
const testimonials = [
  {
    name: "John Doe",
    role: "Student",
    quote: "This is the best vocabulary app I have ever used. It made learning fun and easy!",
  },
  {
    name: "Jane Smith",
    role: "Teacher",
    quote: "I recommend this app to all my students. It’s very effective for expanding vocabulary.",
  },
  {
    name: "Carlos Garcia",
    role: "Parent",
    quote: "My child has improved their Spanish vocabulary significantly after using this app!",
  },
];

const Home = () => {
  const categories = useLoaderData();

  // Example: dynamic tutorial count
  const tutorialCount = categories?.length || 0;

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Banner */}
      <Banner />

      {/* Our Mission */}
      <section className="bg-sky-50 py-12 md:py-24 mt-6 rounded-xl shadow-md border border-blue-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-10">
            We’re on a mission to make language learning simple, enjoyable, and truly interactive. Through our intuitive platform, learners of all levels can build vocabulary confidently—anytime, anywhere.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">How It Works</h3>
              <p className="text-gray-700">
                Explore a rich collection of vocabulary words enhanced with:<br></br>
                🎧 Accurate pronunciation<br></br>
                📚 Clear meanings & grammar roles<br></br>
                ✍️ Real-life example sentences<br></br>
                Learn at your own pace and reinforce your knowledge through fun, interactive quizzes designed to boost retention.

              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-3">Why Learn with Us?</h3>
              <p className="text-gray-700">
                Because we make language learning:<br></br>

                ✅ Easy to follow <br></br>
                ✅ Tailored to real-life use<br></br>
                ✅ Consistently rewarding<br></br>
                With hand-picked vocabulary and engaging tools, you'll grow not just in words—but in confidence and communication.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link to="/start-learning">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">
                Start Learning Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Achievements */}
      <section className="bg-white py-12 md:py-24 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
          <p className="text-xl text-gray-600 mb-10">
            We're proud of the progress we've made in helping users learn and grow.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={1000} duration={3} separator="," />
              </h3>
              <p className="text-gray-700 mt-2">Users Registered</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={50} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Lessons Available</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={2000} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Vocabulary Words</p>
            </div>
            <div className="bg-sky-100 p-6 rounded-xl shadow">
              <h3 className="text-3xl font-bold text-blue-800">
                <CountUp end={tutorialCount} duration={3} />
              </h3>
              <p className="text-gray-700 mt-2">Tutorials Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">What Our Users Say</h2>
          <p className="text-xl text-gray-600 mb-12">
            Don’t just take our word for it. Here’s what our users think!
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-white shadow-lg rounded-xl">
                <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold text-blue-800">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
