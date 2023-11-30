import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Title from "../../Components/Container/Title/Title";
import CheckoutForm from "../Checkout/CheckoutForm";

const ProductCheckout = () => {
  const { price = 0 } = useParams();

  const stripePromise = loadStripe(
    "pk_test_51OI2WvIo8R7LUCg5sLw4SQCjnQwHYdY1p5AKmm1N27r3OHucmwR05p3qyrW5FEXbfiaEemQUWUzkMrPY5rDfZdeg00jt66jgp6"
  );

  return (
    <section className="flex flex-col gap-3 w-full max-w-6xl mx-auto pt-7 pb-10 px-3">
      <Title>Checkout ({price})</Title>

      <Elements stripe={stripePromise}>
        <CheckoutForm price={price}  />
      </Elements>
    </section>
  );
};
export default ProductCheckout;
