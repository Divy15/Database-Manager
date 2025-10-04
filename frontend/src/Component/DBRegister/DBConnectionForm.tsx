import { DBRegisterForm } from "@/Constant/DBRegistarForm"
import { useFormik } from "formik";
import * as Yup from "yup";
import { useFormView } from "./FormViewContext";

export const DBConnectionForm = () => {

    const { closeForm } = useFormView();

    const formik = useFormik({
        initialValues : {
          project_title: "",
          ip: "",
          username: "",
          password: "",
          databasename: ""
        },
        validationSchema: Yup.object({
          project_title: Yup.string().required(),
          ip: Yup.string().required(),
          username: Yup.string().required(),
          password: Yup.string().required(),
          databasename: Yup.string().required()
        }),
        onSubmit : async (values) => {
          console.log(values);
        }
      });

    return(
        <>
        <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl w-[50vw] p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Database Connection Registry
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {DBRegisterForm.map((item,index) => (
            <div className="mb-4" key={index}>
              <label
              className="block text-gray-300 mb-2">{item.label}</label>
              <input type={item.type}
              name={item.name}
              onChange={formik.handleChange}
              value={formik.values[item.name]}
              onBlur={formik.handleBlur}
              className="p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400" 
              placeholder={item.placeholder}/>
              {formik.touched[item.name] && formik.errors[item.name] && (
                <p className="text-red-500 text-sm mt-1">
                  {formik.errors[item.name]}
                </p>
              )}
            </div>
          ))}
          
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
              onClick={() => closeForm("DBConnection", false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
        </>
    )
}