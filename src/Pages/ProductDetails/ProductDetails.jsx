import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import useFormatDate from "../../Hooks/useFormatDate";
import UseAxiosPublic from "../../Hooks/AxiosPublic/AxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const ProductDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosPublic = UseAxiosPublic();

  let product = useProducts(null, id);
  product = product?.[0];

  const formatDate = useFormatDate;

  const handleAddToCart = () => {
    axiosPublic
      .post("/cart", {
        productId: product?._id,
        userEmail: user?.email,
        price:
          product?.cost +
          product?.cost * (product?.profit / 100) -
          product?.cost * (product?.discount / 100),
      })
      .then((res) => {
        toast(res?.data?.message);
      })
      .catch((error) => {
        toast.error(error?.message);
      });
  };

  return (
    <section className="py-10 px-3 max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-7 md:gap-10">
      <img
        src={product?.image}
        alt="Product Image"
        className="rounded-lg w-full max-w-md block mx-auto"
      />

      <div className="flex flex-col gap-2 text-slate-200">
        <h1 className="text-3xl font-medium">{product?.name}</h1>
        <p className="text-base text-slate-300">{product?.description}</p>
        <p>Quantity: {product?.quantity}</p>
        <p>Shop: {product?.shopName}</p>
        <p>Shop Location: {product?.location}</p>
        <p>Date posted: {formatDate(product?.date)}</p>
        <p>Shop: {product?.shopName}</p>
        <p>Price: {product?.cost + product?.cost * (product?.profit / 100)}</p>
        <p>Discount: {product?.discount}%</p>
        <p className="font-medium text-slate-50">
          Total price:{" "}
          {product?.cost +
            product?.cost * (product?.profit / 100) -
            product?.cost * (product?.discount / 100)}
        </p>
        <button onClick={handleAddToCart} className="btn btn-accent">
          Add to cart
        </button>
      </div>
    </section>
  );
};
export default ProductDetails;
