import { Link } from "react-router-dom";
import Title from "../Components/Container/Title/Title";
import useAuth from "../Hooks/UseAuth/UseAuth";
import useProducts from "../Hooks/useProducts";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import UseAxiosPublic from "../Hooks/AxiosPublic/AxiosPublic";

const AllProducts = () => {
  const { user } = useAuth();
  const axios = UseAxiosPublic();
  const products = useProducts(user?.email);
  const queryClient = useQueryClient();
  // console.log(products);

  const handleDelete = (id) => {
    axios
      .delete(`/products?id=${id}`)
      .then((res) => {
        toast.success(res?.data?.message);
        queryClient.invalidateQueries(["getProducts"]);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

//   console.log(products)

  return (
    <section>
      <div
        className={`${
          products?.length === 0 ? "flex-col" : "flex-row"
        } flex justify-between flex-wrap items-center gap-3`}
      >
        <Title>Manage Products ({products?.length})</Title>
        {products?.length === 0 && (
          <p className="mt-12 block text-center">No products added</p>
        )}
        <Link to="/dashboard/add-products" className="btn btn-accent">
          Add product
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
                <th>Image</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th>Sales</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product) => (
                <tr key={product?._id}>
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
                  <td>{product?.sales}</td>
                  <td>
                    <div className="flex flex-col gap-2">
                      <Link
                        to={`/dashboard/edit-product/${product?._id}`}
                        className="btn bg-blue-500 text-white"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(product?._id)}
                        className="btn bg-red-500 text-white"
                      >
                        Delete
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
export default AllProducts;
