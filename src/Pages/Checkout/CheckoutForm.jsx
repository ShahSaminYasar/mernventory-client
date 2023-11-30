import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
import Container from "../../Components/Container/Container";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";

const CheckoutForm = ({ price = 0, type = "payment", limit = 0 }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price })
      .then((res) => {
        // console.log(res?.clientSecret);
        setClientSecret(res?.data?.clientSecret);
      })
      .catch((error) => {
        console.error(error?.message);
      });
  }, [axiosSecure, price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      toast.error(error?.message);
      // console.error("Payment error: ", error);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.error("Confirm error: ", confirmError);
    } else {
      // console.log("Payment intent: ", paymentIntent);
      // console.log(paymentIntent);
      if (paymentIntent?.status === "succeeded") {
        if (type === "subscription") {
          axiosSecure
            .post("/update-limit", { limit: limit, email: user?.email })
            .then((res) => {
              toast.success(res?.data?.message);
            })
            .catch((error) => {
              toast.error(error?.message || "Error");
            });
        } else {
          axiosSecure
            .post("/purchase", { email: user?.email })
            .then((res) => {
              toast.success(res?.data?.message);
            })
            .catch((error) => {
              toast.error(error?.message || "Error");
            });
        }
      } else {
        toast(paymentIntent?.status);
      }
    }
  };

  return (
    <section>
      <Container>
        <form
          onSubmit={handleSubmit}
          className="my-10 flex flex-col gap-5 w-full mx-auto max-w-2xl p-6 shadow-lg"
        >
          {clientSecret && (
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          )}

          <div className="flex flex-row justify-between flex-wrap gap-3">
            <p className="text-lg font-semibold text-slate-100">
              <span className="font-normal">Total payment: </span>
              {price ? `$${price}.00` : "Loading..."}
            </p>
            <button
              className="btn w-fit ml-auto btn-sm bg-green-600 px-7 text-lg font-normal text-white disabled:bg-slate-600 disabled:text-slate-200"
              disabled={!clientSecret}
            >
              Pay
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
export default CheckoutForm;
