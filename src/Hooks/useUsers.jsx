import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/UseAxiosSecure";

const useUsers = () => {
    const axiosSecure = useAxiosSecure();

    const {data} = useQuery({
        queryKey: ["getUsers"],
        queryFn: () => axiosSecure.get("/users")
    })

    return data?.data;
}
export default useUsers;