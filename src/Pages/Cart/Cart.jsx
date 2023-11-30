import { Link } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useCart from "../../Hooks/useCart";
import CartTableRow from "./CartTableRow";

const Cart = () => {
  //   const { user } = useAuth();
  let cart = useCart();
  cart = cart?.[0];
  const products = cart?.products;
  // console.log("Products: ", products);

  //   const [total, setTotal] = useState(0);

  const totalPrice = products?.reduce(
    (sum, product) => sum + product?.price,
    0
  );

  // console.log(products)

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-3">
      <div
        className={`flex-row flex justify-between flex-wrap items-center gap-3`}
      >
        <Title>Cart ({products?.length})</Title>
        <Link
          to={`/checkout/${totalPrice}`}
          className="btn bg-green-500 text-slate-800 disabled:bg-slate-200"
          disabled={!products || products?.length === 0}
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
          <>
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
                </tr>
              </thead>
              <tbody>
                {products?.map((product) => (
                  <CartTableRow
                    key={product}
                    productId={product.productId}
                    // setTotal={setTotal}
                  />
                ))}
              </tbody>
            </table>

            <p className="text-white font-medium text-lg block text-right">
              Total: ${totalPrice}
            </p>
          </>
        ) : null}
      </div>
    </section>
  );
};
export default Cart;
