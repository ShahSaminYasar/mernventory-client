import { Link } from "react-router-dom";
import Title from "../Components/Container/Title/Title";
import useAuth from "../Hooks/UseAuth/UseAuth";
import useProducts from "../Hooks/useProducts";

const AllProducts = () => {
    const { user } = useAuth();
    const products = useProducts(user?.email);
    // console.log(products);

    return (
        <section>
            <Title>All Products</Title>
            <div className="overflow-x-auto">
                {products?.isLoading ? <div className="loading loading-spinner"></div> :
                    products?.error ? <p className="text-red-500 text-base block">Error: {error}</p> : <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Sales</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(product => <tr key={product?._id}>
                                <td>
                                    <img src={product?.image} alt="Product image" className="w-full max-w-[120px] rounded-sm" />
                                </td>
                                <td>{product?.name}</td>
                                <td>{product?.quantity}</td>
                                <td>{product?.sales}</td>
                                <td>
                                    <div className="flex flex-col gap-2">
                                        <Link to={`/dashboard/edit-product/${product?._id}`} className="btn bg-blue-500 text-white">Update</Link>
                                        <button className="btn bg-red-500 text-white">Delete</button>
                                    </div>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>}
            </div>
        </section>
    );
}
export default AllProducts;