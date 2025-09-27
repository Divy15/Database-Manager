import { LoginForm } from "@/Constant/LoginForm";
import { useHistoryNav } from "../Context/HistoryContext";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { LoginAuthenticateUserData } from "@/Action/LoginAuthenticateUserData";

export const Login = () => {

  const navigate = useNavigate();

   const { goBack } = useHistoryNav();

   const handlSignupPageClick = () => {
    navigate('/signup');
   }

  const formik = useFormik({

    initialValues : {
      email : "",
      password : ""
    },

    validationSchema : Yup.object({
      email: Yup.string().email().required("Email is required."),
      password: Yup.string().min(8).required("Password is required"),
    }),

    onSubmit : async (values) => {
      console.log(values);
      const result = await LoginAuthenticateUserData(values);

      if(result.success) navigate('/dashboard');
    }
  })

  return (
    <div className="h-screen flex justify-center items-center bg-black">
      {/* Card */}
      <div className="bg-gray-900/80 backdrop-blur-xl w-[400px] rounded-2xl shadow-2xl p-8 border border-gray-800">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-5" 
        onSubmit={formik.handleSubmit}>
            {
              LoginForm.map((item,index) => (
                <div key={index}>
                  <label className="block text-gray-300 mb-1 font-medium">
                    {item.label}
                  </label>
                  <input type={item.type}
                  placeholder={item.placeholder}
                  name={item.name}
                  value={formik.values[item.name]}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition" />
                  {formik.touched[item.name] && formik.errors[item.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[item.name]}
                </p>
              )}
                </div>
              ))
            }

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
              Login
            </button>
          </div>
        </form>

        {/* Extra */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Don’t have an account?{" "}
          <a
            href="#"
            className="text-pink-400 font-semibold hover:underline"
            onClick={() => handlSignupPageClick()}
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};
