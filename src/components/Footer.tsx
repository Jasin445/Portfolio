// components/Footer.tsx
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Example social icons

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black bg-opacity-100 text-white py-8 border-t border-gray-700 z-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p>&copy; {currentYear} Jason Dagana. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/Jasin445/Portfolio" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={24} />
          </a>
          {/* Add more social links if you have them */}
          {/* <a
            href="https://twitter.com/your-twitter-handle" // Replace with your Twitter URL
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-200"
            aria-label="Twitter Profile"
          >
            <FaTwitter size={24} />
          </a> */}
        </div>

        {/* Optional: Add quick links or contact info */}
        {/* <div className="text-center md:text-right mt-4 md:mt-0">
          <p>Email: <a href="mailto:your.email@example.com" className="hover:underline">your.email@example.com</a></p>
          <p>Location: Yenagoa, Nigeria</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;