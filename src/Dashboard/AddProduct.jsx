import { Helmet } from "react-helmet-async";
import UseAxiosPublic from "../Hooks/AxiosPublic/AxiosPublic";
import useAuth from "../Hooks/UseAuth/UseAuth";
import toast from "react-hot-toast";
import useShop from "../Hooks/useShop";

const AddProduct = () => {
    const { user, setUser } = useAuth();
    const axiosPublic = UseAxiosPublic();
    const shopDetails = useShop(user?.email);
    // console.log(shopDetails);


    const imgApi = 'ce236a8722302720fe457ff8a0c0107b';

    const imgHoistingApi = `https://api.imgbb.com/1/upload?key=${imgApi}`;

    const handelAddProduct = async (e) => {
        e.preventDefault()
        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const location = form.location.value;
        const cost = Number(form.cost.value);
        const profit = Number(form.profit.value);
        const discount = Number(form.discount.value);
        const description = form.description.value;
        const shopId = shopDetails?._id;
        const shopName = shopDetails?.shopName;
        const email = user?.email;
        const selling = Number(cost + (0.075 * cost) + ((profit / 100) * cost));
        const date = new Date().getTime();
        const image = {
            image: form.image.files[0]
        };
        //console.log(image);

        const res = await axiosPublic.post(imgHoistingApi, image, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        console.log(res.data);

        const data = {
            name,
            quantity,
            location,
            cost,
            profit,
            discount,
            description,
            shopId,
            shopName,
            email,
            selling,
            date,
            image: res?.data?.data?.display_url
        }
        // console.log(data);

        axiosPublic.post('/products', data)
            .then(res => {
                if (res?.data?.message === "success") {
                    toast.success("Product added");
                } else {
                    toast(res?.data?.message)
                }
            })
            .catch(error => {
                toast.error(error?.message)
            })

    }

    return (
        <div>

            <div>
                <Helmet>
                    <title>MERNventory | Add Product</title>
                </Helmet>
            </div>

            <div className='text-center text-white py-5'>
                <h1 className='text-4xl '>Welcome to MERNventory </h1>
                <p>Add a new product</p>
            </div>

            <div>
                <div className="my-10">
                    <form onSubmit={handelAddProduct} className="capitalize">
                        <div className="flex items-center justify-center gap-10 mt-10 mb-10 w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <label className="">
                                    <input name="name" type="text" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Product Image</span>
                                </label>
                                <label className="">
                                    <input
                                        required
                                        type='file'
                                        name='image'
                                        accept='image/*'
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Quantity
                                    </span>
                                </label>
                                <label className="">
                                    <input name="quantity" type="number" required className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Product Location
                                    </span>
                                </label>
                                <label className="">
                                    <input name="location" type="text" required className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Production cost</span>
                                </label>
                                <label className="">
                                    <input name="cost" type="number" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Profit margin %</span>
                                </label>
                                <label className="">
                                    <input name="profit" type="number" className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Discount %</span>
                                </label>
                                <label className="">
                                    <input name="discount" type="number" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Owner Email</span>
                                </label>
                                <label className="">
                                    <input name="ownerEmail" readOnly defaultValue={user?.email} className="input input-bordered w-full" />
                                </label>
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Owner Name</span>
                                </label>
                                <label className="">
                                    <input name="ownerName" readOnly defaultValue={user?.name} className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <label className="">
                                    <input name="description" type="text" required placeholder="Short description about your store" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto">
                            <button type="submit" className="btn btn-block btn-accent  text-white">Add Product</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};
export default AddProduct;