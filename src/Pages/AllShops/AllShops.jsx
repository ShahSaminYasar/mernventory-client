import { Navigate } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useShops from "../../Hooks/useShops";

const AllShops = () => {
  const { user } = useAuth();
  const shops = useShops();

  if (user?.role !== "admin") return <Navigate to="/" replace={true} />;

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-3">
      <Title>All Shops</Title>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Owner</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {shops?.map((shop) => (
            <tr key={shop?._id}>
              <td>
                <img
                  src={shop?.image}
                  alt="Shop Image"
                  className="w-[100px] rounded-md"
                />
              </td>
              <td>{shop?.shopName}</td>
              <td>{shop?.ownerEmail}</td>
              <td>{shop?.shopLocation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default AllShops;
