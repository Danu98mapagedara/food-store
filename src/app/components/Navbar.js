


export default function Navbar() {
    return (
      <nav className="bg-blue-600 shadow-md p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="text-white text-2xl font-bold hover:text-gray-200 transition duration-300">
            My E-Commerce
          </a>
  
          {/* Navigation Links */}
          <div className="space-x-6">
            <a
              href="/about"
              className="text-white text-lg hover:text-gray-200 transition duration-300"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-white text-lg hover:text-gray-200 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    );
  }
  