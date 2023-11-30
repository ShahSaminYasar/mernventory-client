import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./AxiosSecure/UseAxiosSecure";

const useShops = () => {
  const axiosSecure = useAxiosSecure();

  const { data } = useQuery({
    queryKey: ["getShops"],
    queryFn: () => axiosSecure.get("/shops"),
  });

  return data?.data;
};
export default useShops;
