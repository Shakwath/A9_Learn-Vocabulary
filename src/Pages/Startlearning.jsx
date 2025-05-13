import React from 'react';
import Marquee from "react-fast-marquee";
import lessons from '../data/lessons.Json';

const LetsLearnPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Let's Learn</h1>

      {/* Marquee */}
      <Marquee speed={50} gradient={false} className="text-lg font-semibold text-blue-800 my-4">
        🌍 Dive into language learning with Lingo Bingo — Master essential vocabulary, boost pronunciation, and speak like a native! 🚀 Join thousands on the path to fluency today!
      </Marquee>

      {/* Animated Heading */}
      <div className="text-center mt-10">
        <h1 className="animate__animated animate__fadeIn animate__delay-1s text-4xl font-bold text-gray-900">
          Ready to Learn a New Language?
        </h1>
        <p className="animate__animated animate__fadeIn animate__delay-2s text-lg text-gray-600 mt-4 mb-4">
          Explore lessons, build vocabulary, and master a new language with ease. Let's get started today!
        </p>
      </div>

      {/* Lesson Cards from JSON */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
       {lessons.map((lesson) => (
  <div key={lesson.id} className="p-4 bg-blue-500 text-white rounded-lg shadow">
    <h2 className="text-xl font-semibold">Lesson {lesson.id}: {lesson.title}</h2>
  </div>
))}

      </div>

      {/* Tutorial Section */}
      <div className="tutorial-section bg-gray-100 p-4 rounded-lg mb-8">
        <h2 className="text-3xl font-semibold text-center mb-4">Learn the Alphabet</h2>
        <div className="flex justify-center mb-4">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* View More Button */}
      <div className="text-center">
        <button
          onClick={() => window.location.href = "/tutorials"}
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          View More Tutorials
        </button>
      </div>
    </div>
  );
};

export default LetsLearnPage;