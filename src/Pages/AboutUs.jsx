import React from "react";
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const developerInfo = {
  name: "Mohammad Shakwath",
  email: "shakawathhossain0@gmail.com",
  projects: [
    {
      title: "Lingo Bingo",
      description:
        "A language learning web app with lessons, vocabulary cards, and pronunciation support.",
    },
    {
      title: "MyPortfolio",
      description:
        "A personal portfolio showcasing my UI/UX projects and React apps.",
    },
    {
      title: "TaskMaster",
      description: "A productivity tool for managing daily goals and tasks.",
    },
  ],
  skills: [
    "React.js, Tailwind CSS, JavaScript (ES6+)",
    "Firebase Authentication, Firestore",
    "REST API Integration",
    "Responsive Web Design",
    "Version Control: Git & GitHub",
  ],
  socialLinks: {
    github: "https://github.com/Shakwath",
    instagram: "https://www.instagram.com/shakawath__/",
    facebook: "https://www.facebook.com/shakwathhossain.mohammad/",
  },
};

export default function AboutUs() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        About Us
      </h1>

      <div className="bg-base-200 p-6 rounded-lg shadow-md">
        <p className="mb-4">
          Hello! I'm{" "}
          <span className="font-semibold text-accent">{developerInfo.name}</span>, a passionate
          web developer focused on building interactive, accessible, and language-based
          educational tools. I developed this Lingo Bingo project to help learners engage with
          new languages through fun and structured lessons.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-secondary">💼 Projects</h2>
        <ul className="list-disc list-inside space-y-1">
          {developerInfo.projects.map((project, index) => (
            <li key={index}>
              <strong>{project.title}:</strong> {project.description}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-secondary">🛠️ Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          {developerInfo.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2 text-secondary">📫 Contact</h2>
        <p>
          Feel free to reach out to me via email at:{" "}
          <a
            href={`mailto:${developerInfo.email}`}
            className="text-blue-600 underline"
          >
            {developerInfo.email}
          </a>
        </p>

        <div className="flex mt-4 space-x-6 text-2xl">
          <a
            href={developerInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={developerInfo.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-600"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href={developerInfo.socialLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
}
