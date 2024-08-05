/* eslint-disable no-unused-vars */
import { useParams, Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import Loading from "./Loading";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, loading, error } = useProduct();
  const { addToCart } = useCart();
  const product = products.find((item) => item.id === parseInt(id));

  if (loading) return <Loading />;
  if (error) return <div className="container mx-auto p-4">{error}</div>;
  if (!product) return <div className="container mx-auto p-4">ไม่พบสินค้า</div>;
  
  return (
    <div className="container mx-auto p-3 bg-transparent">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
        กลับสู่หน้าหลัก
      </Link>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-72 h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-2xl font-bold text-green-600 mb-4">
            {product.price}
          </p>
          <button className="btn btn-primary text-white px-6 py-2 mb-4" onClick={() => addToCart(product)}> เพิ่มในตะกร้า</button>
          <div className="bg-gray-200 p-4 rounded">
            <h2 className="text-xl font-semibold mb-2">รายละเอียดเพิ่มเติม</h2>
            <p><strong>แบรนด์ :</strong> {product.brand}</p>
            <p><strong>หมวดหมู่ :</strong> {product.category}</p>
            <p><strong>คะแนน :</strong> {product.rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
