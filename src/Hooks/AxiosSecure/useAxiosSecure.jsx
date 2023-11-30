import axios from "axios";
import { signOut } from "firebase/auth";
import { auth } from "../../Config/Firebase.config";

const instance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})

const useAxiosSecure = () => {
    instance.interceptors.response.use(
        function (response) {
            return response;
        },
        function (error) {
            if (error.response.status === 401 || error.response.status === 403) {
                return signOut(auth);
            }
        }
    );

    return instance;
};

export default useAxiosSecure;