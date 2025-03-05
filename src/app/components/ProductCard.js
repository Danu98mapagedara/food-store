

export default function ProductCard({ product, addToCart }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600 line-through">${product.price}</p>
      <p className="text-green-600 font-bold">${product.discountPrice}</p>
      <button 
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
