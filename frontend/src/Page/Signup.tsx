import { CountryListResult } from "../Action/CountryListResult";
import { useHistoryNav } from "../Context/HistoryContext";
import { useNavigate } from "react-router-dom";
import { SearchBox } from "@/UI/SearchBox";
import { signupFormConstant } from "@/Constant/SignupForm";
import { useFormik } from "formik";
import * as Yup from "yup";
import { SignupStoreUserData } from "@/Action/SignupStoreUserData";

export const Signup = () => {
  const navigate = useNavigate();
  const { goBack } = useHistoryNav();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      phone: "",
      organization: "",
      country_code: "", 
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).required("User name is required."),
      email: Yup.string().email().required("Email is required."),
      password: Yup.string().min(8).required("Password is required"),
      phone: Yup.string()
        .min(10, "Must be 10 digits")
        .max(10, "Must be 10 digits")
        .required("Phone number is required."),
      organization: Yup.string().min(1).required("Organization name is required."),
      country_code: Yup.string().required("Country is required"), 
    }),
    onSubmit: async (values) => {
      const result = await SignupStoreUserData(values);

      if(result.success) navigate('/login');
    },
  });

  const handleLoginPageClick = () => {
    navigate("/login");
  };

  return (
    <div className="h-screen-auto flex items-center justify-center m-3">
      {/* Card */}
      <div className="bg-gray-900/90 backdrop-blur-xl w-[420px] rounded-2xl shadow-2xl p-8 border border-gray-800">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account 🚀
        </h2>

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Dynamic Inputs */}
          {signupFormConstant.map((item, index) => (
            <div key={index}>
              <label className="block text-gray-300 mb-1 font-medium">
                {item.label}
              </label>
              <input
                type={item.type}
                placeholder={item.placeholder}
                name={item.name}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              />
              {formik.touched[item.name] && formik.errors[item.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[item.name]}
                </p>
              )}
            </div>
          ))}

          {/* Country */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">Country</label>
            <SearchBox
              actionName={CountryListResult}
              listValueName="country_name"
              listIdName="country_code"
              outputValue={(value) => formik.setFieldValue("country_code", value)}
            />
            {formik.touched.country_code && formik.errors.country_code && (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.country_code}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-5 py-2 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
              onClick={goBack}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-md hover:opacity-90 transition"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Extra */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Already have an account?{" "}
          <a
            href="#"
            className="text-pink-400 font-semibold hover:underline"
            onClick={handleLoginPageClick}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
