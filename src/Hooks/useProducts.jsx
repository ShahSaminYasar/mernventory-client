import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/UseAxiosSecure";

const useProducts = (email, id) => {
    const axiosSecure = useAxiosSecure();

    let url = "/products";

    if(email){
        url = `/products?email=${email}`
    } else if (id) {
        url = `products?id=${id}`
    }

    const {data, isLoading, isError, error} = useQuery({
        queryKey: ["getProducts", email, id],
        queryFn: () => axiosSecure.get(url)
    })

    if(isLoading) return {isLoading: true}

    if(isError) return {error}

    return data?.data;
}
export default useProducts;