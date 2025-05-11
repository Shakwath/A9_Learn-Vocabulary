

import logoIcon from '../assets/logoIcon.jpg'
export default function Footer() {
  return (
    <div className="bg-base-200 mt-10">
      <footer className="footer container mx-auto text-base-content p-10 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logoIcon} alt="logo" className="w-16 h-16 mb-4" />
            <p className="font-sans font-medium text-center md:text-left">
              Lingo Bingo
              <br />
              Helping you expand your vocabulary, one word at a time!
            </p>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="footer-title">Services</h6>
            <a href="#" className="link link-hover">Interactive Lessons</a>
            <a href="#" className="link link-hover">Pronunciation Guides</a>
            <a href="#" className="link link-hover">Quiz Mode</a>
            <a href="#" className="link link-hover">Personalized Learning</a>
          </div>

          {/* Company */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="footer-title">Company</h6>
            <a href="#" className="link link-hover">About Us</a>
            <a href="#" className="link link-hover">Contact</a>
            <a href="#" className="link link-hover">Careers</a>
            <a href="#" className="link link-hover">Blog</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h6 className="footer-title">Legal</h6>
            <a href="#" className="link link-hover">Terms of Use</a>
            <a href="#" className="link link-hover">Privacy Policy</a>
            <a href="#" className="link link-hover">Cookie Policy</a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h6 className="footer-title">Contact</h6>
            <p>Email: contact@lingobingo.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          {/* Follow Us */}
          <div>
            <h6 className="footer-title">Follow Us</h6>
            <div className="flex space-x-6 justify-center md:justify-start">
              <a href="https://facebook.com" className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-blue-600">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-blue-400">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://instagram.com" className="link link-hover">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current text-pink-600">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-base-300">
        <p>&copy; {new Date().getFullYear()} Lingo Bingo. All rights reserved.</p>
      </div>
    </div>
  );
}
