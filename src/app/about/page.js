import { aboutData } from "./data";

export default function AboutPage() {
  return (
    <div className="container mx-auto mt-3 p-9 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      <p className="text-lg text-gray-300 mb-6 text-center">
        Welcome to our e-commerce store! We are committed to providing you with top-quality products at the best prices.
        Our goal is to make shopping easy, fast, and secure for everyone.
      </p>

      {/* Features Section */}
      <div className="space-y-10">
        {aboutData.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 bg-gray-800 p-6 rounded-lg">
            <img src={item.image} alt={item.title} className="w-1/3 rounded-lg shadow-lg" />
            <div className="w-2/3">
              <h2 className="text-2xl font-semibold text-blue-400">{item.title}</h2>
              <p className="text-gray-300 mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="text-center mt-8">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full text-xl transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
}
