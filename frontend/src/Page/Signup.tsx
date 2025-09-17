export const Signup = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-black pt-20">
      {/* Card */}
      <div className="bg-gray-900/90 backdrop-blur-xl w-[420px] rounded-2xl shadow-2xl p-8 border border-gray-800">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-white mb-6">
          Create an Account 🚀
        </h2>

        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Phone
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block text-gray-300 mb-1 font-medium">
              Country
            </label>
            <select className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              className="px-5 py-2 rounded-xl border border-gray-700 text-gray-300 hover:bg-gray-800 transition"
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
          <a href="#" className="text-pink-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
