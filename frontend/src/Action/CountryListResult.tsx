import { ApiConstants } from '../Constant/ApiConstant';
import axios from 'axios';

export const CountryListResult = async (country_name: string | null | undefined) => {
    try {
        let result = null;
        if (country_name) {
            result = await axios.post(`${ApiConstants.signup.country_list}`, { country_name: country_name });
        } else {
            result = await axios.post(`${ApiConstants.signup.country_list}`, {});
        }

        if (result.data.total_count <= 0) {
            alert('No country list found.');
        };

        return result.data.data;
    } catch (error) {
        alert(error);
    }
}