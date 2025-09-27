export const DatabaseRegistry = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl h-[65vh] w-[50vw] p-6">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Database Registry
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Database IP:</label>
            <input
              type="text"
              className="p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter the database IP address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Database Username:</label>
            <input
              type="text"
              className="p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter the database username"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-300 mb-2">Database Password:</label>
            <input
              type="password"
              className="p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter the database password"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-300 mb-2">Database Name:</label>
            <input
              type="text"
              className="p-3 border border-gray-700 rounded-lg w-full bg-gray-800 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter the database name"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="px-6 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition"
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
  );
};
