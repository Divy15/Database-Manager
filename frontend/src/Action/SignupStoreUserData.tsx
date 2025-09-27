import { ApiConstants } from '../Constant/ApiConstant';
import axios from 'axios';

interface formData {
    name : string,
    email: string,
    phone: string,
    password: string,
    organization : string,
    country_code: string
}

export const SignupStoreUserData = async (formData: formData) => {
    try {
        const result = await axios.post(`${ApiConstants.signup.store_data}`, formData);

        alert('Data store successfully.');

        return result.data;
    } catch (error) {
        alert(error);
    }
}