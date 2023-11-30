import { Link } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useProducts from "../../Hooks/useProducts";

const Shop = () => {
  const products = useProducts();

  if (products?.isLoading)
    return <div className="loading loading-spinner"></div>;
  if (products?.error) return <p>Error: {products?.error}</p>;

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-3">
      <Title>All Products</Title>
      <div className="my-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
        {products?.map((product) => (
          <div
            key={product?._id}
            className="flex flex-col gap-3 rounded-lg border-2 border-slate-700 p-4 text-lg text-slate-100 bg-slate-800 shadow-md"
          >
            <img src={product?.image} alt="" />
            <h3>{product?.name}</h3>
            <span>Available: {product?.quantity}</span>
            <span>Shop: {product?.shopName}</span>
            <span>
              Price: $
              {product?.selling - product?.selling * (product?.discount / 100)}
            </span>
            <Link to={`/product/${product?._id}`} className="mt-auto btn btn-accent w-full">View</Link>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Shop;
