import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import Loading from "./Loading";

export default function ProductList() {
  const { products, loading, error } = useProduct();
  if (loading) return <Loading/>;
  if (error) return <div className="container mx-auto p-4">{error}</div>;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-serif">รายการสินค้า</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((item) => (
          <Link
            to={`/product/${item.id}`}
            key={item.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-none transition-shadow"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-48 object-cover mb-4 rounded-sm"
            />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 mb-2 line-clamp-2">
              {item.description}
            </p>
            <p className="text-lg font-bold text-green-500">{item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
