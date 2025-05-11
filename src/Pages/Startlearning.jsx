import React from 'react';

const LetsLearnPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center mb-8">Let's Learn</h1>

      {/* Lesson Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mb-8">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12,13,14,15].map((lessonNumber) => (
          <div
            key={lessonNumber}
            className="bg-blue-500 p-6 rounded-lg shadow-lg text-white text-center cursor-pointer hover:bg-blue-600"
            onClick={() => window.location.href = `/lesson/${lessonNumber}`}
          >
            <h2 className="text-xl font-semibold">Lesson {lessonNumber}</h2>
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // You can change the URL to the actual learning video URL
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
}

export default LetsLearnPage;
