import { Link } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useGetLimit from "../../Hooks/useGetLimit";

const Subscription = () => {
  const limit = useGetLimit();

  return (
    <section className="flex flex-col justify-center gap-3 w-full max-w-6xl mx-auto pt-7 pb-10 px-3">
      <Title>Subscription</Title>
      <p>Current product limit: {limit}</p>
      <div className="flex flex-row gap-10 flex-wrap w-full py-7 px-3">
        <div className="border-2 border-slate-300 rounded-lg p-5 flex flex-col gap-4 text-white text-lg">
          <span className="text-xl font-medium">Basic</span>
          <span>$10.00</span>
          <span>Products limit: 200</span>
          <Link
            to="/checkout/subscription/10/200"
            className="btn btn-accent"
            disabled={200 === limit || 450 === limit || 1500 === limit}
          >
            Avail
          </Link>
        </div>

        <div className="border-2 border-slate-300 rounded-lg p-5 flex flex-col gap-4 text-white text-lg">
          <span className="text-xl font-medium">Silver</span>
          <span>$20.00</span>
          <span>Products limit: 450</span>
          <Link
            to="/checkout/subscription/20/450"
            className="btn btn-accent"
            disabled={450 === limit || limit === 1500}
          >
            Avail
          </Link>
        </div>

        <div className="border-2 border-slate-300 rounded-lg p-5 flex flex-col gap-4 text-white text-lg">
          <span className="text-xl font-medium">Gold</span>
          <span>$50.00</span>
          <span>Products limit: 1500</span>
          <Link
            to="/checkout/subscription/50/1500"
            className="btn btn-accent"
            disabled={1500 === limit}
          >
            Avail
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Subscription;
