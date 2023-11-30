import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./AxiosPublic/AxiosPublic";
import useAuth from "./UseAuth/UseAuth";

const useGetLimit = () => {
  const { user } = useAuth();
  const axios = UseAxiosPublic();
  const { data } = useQuery({
    queryKey: ["getLimit"],
    queryFn: () => axios.get(`/limit?email=${user?.email}`),
  });

  return data?.data?.limit;
};
export default useGetLimit;
