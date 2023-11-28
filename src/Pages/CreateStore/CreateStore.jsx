import React from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import useAuth from '../../Hooks/UseAuth/UseAuth';
import { Helmet } from 'react-helmet-async';
import UseAxiosPublic from '../../Hooks/AxiosPublic/AxiosPublic';
import toast from 'react-hot-toast';

const CreateStore = () => {

    const { user, setUser } = useAuth();
    const axiosPublic = UseAxiosPublic()


    const imgApi = 'ce236a8722302720fe457ff8a0c0107b';

    const imgHoistingApi = `https://api.imgbb.com/1/upload?key=${imgApi}`;

    const handelCreateShop = async (e) => {
        e.preventDefault()
        const form = e.target;

        const shopName = form.shopName.value;
        const ownerEmail = form.ownerEmail.value;
        const ownerName = form.ownerName.value;
        const shopLocation = form.shopLocation.value;
        const description = form.description.value;
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
            shopName,
            ownerEmail,
            ownerName,
            shopLocation,
            description,
            image: res?.data?.data?.display_url
        }
        console.log(data);

        axiosPublic.post('/shop', data)
            .then(res => {
                toast(res?.data?.message);
                if(res?.data?.user) {
                    console.log(res?.data?.user);
                    setUser(res?.data?.user)
                    // window.location.reload();
                }
            })

    }

    return (
        <div>

            <div>
                <Helmet>
                    <title>MERNventory | CreateStore</title>
                </Helmet>
            </div>

            <div className='text-center text-white py-5'>
                <h1 className='text-4xl '>Welcome to MERNventory </h1>
                <p>Create your new Shop and expand your business</p>
            </div>

            <div>
                <div className="my-10">
                    <form onSubmit={handelCreateShop} className="capitalize">
                        <div className="flex items-center justify-center gap-10 mt-10 mb-10 w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Shop Name</span>
                                </label>
                                <label className="">
                                    <input name="shopName" type="text" className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Shop Logo</span>
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
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Shop Location
                                    </span>
                                </label>
                                <label className="">
                                    <input name="shopLocation" type="text" required className="input input-bordered w-full" />
                                </label>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-10 mt-10 mb-10  w-full md:w-2/4 mx-auto ">
                            <div className="form-control w-full ">
                                <label className="label">
                                    <span className="label-text">Shop Email</span>
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
                            <button type="submit" className="btn btn-block btn-accent  text-white">Create Shop</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default CreateStore;