import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/UseAxiosSecure";

const useShop = (email) => {
    const axiosSecure = useAxiosSecure();

    const {data} = useQuery({
        queryKey: ["getShop", email],
        queryFn: () => axiosSecure.get(`/shop?email=${email}`)
    })

    return data?.data;
}
export default useShop;