import { Navigate } from "react-router-dom";
import Title from "../../Components/Container/Title/Title";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useUsers from "../../Hooks/useUsers";
import useAxiosSecure from "../../Hooks/AxiosSecure/UseAxiosSecure";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

const AllUsers = () => {
  const { user } = useAuth();
  const users = useUsers();
  const axiosSecure = useAxiosSecure();
  const queryClient = useQueryClient();

  if (user?.role !== "admin") return <Navigate to="/" replace={true} />;

  const handleMakeAdmin = (userId) => {
    axiosSecure
      .put("/make-admin", { userId })
      .then((res) => {
        if (res?.data?.message === "success") {
          toast.success("User is now admin");
          queryClient.invalidateQueries({ id: ["getUsers"] });
        } else {
          toast(res?.data?.message);
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error(error?.message);
      });
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-3">
      <Title>All Users</Title>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user?._id}>
              <td>
                <img
                  src={user?.image}
                  alt="User Image"
                  className="w-[100px] rounded-md"
                />
              </td>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
              <td>{user?.role}</td>
              <td>
                <button
                  onClick={() => handleMakeAdmin(user?._id)}
                  className="btn btn-accent"
                  disabled={user?.role === "admin"}
                >
                  Make Admin
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
export default AllUsers;
