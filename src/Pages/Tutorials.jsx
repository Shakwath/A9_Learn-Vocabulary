import React from 'react';
import { Link } from "react-router-dom";
import "./Tutorials.css"; // Import the CSS file

const Tutorials = () => {
    return (
        <div className="container mx-auto p-2">
      <h1 className="text-3xl font-bold text-center mb-4">
        Learn Vocabularies
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="card card-border video-responsive">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/N9Yo-htlGU4?si=TFnOl7gUMJ87h7tM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uxmYgJEtA-A?si=RWlg-GYsTqfEiq7x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
        <div className="card card-border video-responsive">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/NQZYL39JEFo?si=bCGDZ0CAO46eneM-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fD6a-b--cu8?si=NaCYNzNw8O817Mdx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
        <div className="card card-border video-responsive">
         <iframe width="560" height="315" src="https://www.youtube.com/embed/VB0aIzMd-6k?si=Lb20FYogvxe1UX3i" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
         </iframe>
        </div>
        <div className="card card-border video-responsive">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/AfBOIEROBI8?si=ZwDGQzg5FVKnwF6S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </div>
      </div>
      <div className="flex justify-center">
        <Link to="/startlearning" className="btn btn-primary mt-4">
          Start Lesson
        </Link>
      </div>
    </div>
    );
};

export default Tutorials;