import { ApiConstants } from "@/Constant/ApiConstant"
import axios from "axios"

interface FormData {
    email : string,
    password : string
};

export const LoginAuthenticateUserData = async (formaData: FormData) => {
    try {
        const result = await axios.post(`${ApiConstants.login.authenticateUser}`, formaData);

        alert('Login successfully');

        return result.data;
    } catch (error) {
        alert(error);
    }

}