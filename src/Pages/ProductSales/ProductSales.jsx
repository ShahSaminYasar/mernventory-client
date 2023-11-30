import { Link } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useProducts from "../../Hooks/useProducts";
import UseAxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import toast from "react-hot-toast";

const ProductSales = () => {
  const { user } = useAuth();
  const products = useProducts(user?.email);
  const axiosPublic = UseAxiosPublic();

  const handleAddToCart = (productId) => {
    axiosPublic
      .post("/cart", { productId: productId, userEmail: user?.email })
      .then((res) => {
        toast(res?.data?.message);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <section>
      <div
        className={`flex-row flex justify-between flex-wrap items-center gap-3`}
      >
        <Title>All Products ({products?.length})</Title>
        <Link
          to="/checkout"
          className="btn bg-green-500 text-slate-800 disabled:bg-slate-200"
          disabled={products?.length === 0}
        >
          Checkout
        </Link>
      </div>
      <div className="overflow-x-auto">
        {products?.isLoading ? (
          <div className="loading loading-spinner"></div>
        ) : products?.error ? (
          <p className="text-red-500 text-base block">
            Error: {products?.error}
          </p>
        ) : products?.length > 0 ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product?._id}>
                  <td>
                    <div className="w-[100px] overflow-x-auto">
                      {product?._id}
                    </div>
                  </td>
                  <td>
                    <img
                      src={product?.image}
                      alt="Product image"
                      className="w-full max-w-[120px] rounded-sm"
                    />
                  </td>
                  <td>{product?.name}</td>
                  <td>{product?.quantity}</td>
                  <td>{product?.discount}</td>
                  <td>
                    $
                    {product?.selling -
                      product?.selling * (product?.discount / 100)}
                  </td>
                  <td>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => handleAddToCart(product?._id)}
                        className="btn bg-amber-500 text-white"
                      >
                        Add to cart
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </section>
  );
};
export default ProductSales;
