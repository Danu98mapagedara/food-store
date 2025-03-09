export default function Footer() {
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-black text-white py-8 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between mb-8">
            {/* Logo Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h2 className="text-3xl font-bold text-white">FoodieNest</h2>
              <p className="text-gray-400 mt-2">
                Your one-stop shop for everything! We strive to bring you the best products and services.
              </p>
            </div>
  
            {/* Links Section */}
            <div className="w-full md:w-1/3 mb-4 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>
                  <a href="/" className="hover:text-blue-500 transition duration-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-blue-500 transition duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/shop" className="hover:text-blue-500 transition duration-300">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-blue-500 transition duration-300">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <a
                  href="https://facebook.com"
                  className="text-xl font-semibold mb-4 hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com"
                  className=" hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://instagram.com"
                  className=" hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  className=" hover:text-blue-500 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom Section */}
          <div className="border-t border-gray-600 pt-6">
            <p className="text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} MyEcommerce. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }
  