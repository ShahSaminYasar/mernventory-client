import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth/UseAuth";
import UseAxiosPublic from "./AxiosPublic/AxiosPublic";

const useCart = () => {
    const {user} = useAuth();
    const email = user?.email;
    const axiosPublic = UseAxiosPublic();

    const {data} = useQuery({
        queryKey: ["getCart"],
        queryFn: () => axiosPublic.get(`/cart?email=${email}`)
    })

    return data?.data;
}
export default useCart;