import { useHistoryNav } from "../Context/HistoryContext";

export const Contact = () => {

    const { goBack } = useHistoryNav();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-zinc-900 rounded-2xl shadow-xl p-8 border border-zinc-700">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-zinc-300 mb-2">Email</label>
          <input
            type="email"
            className="w-full border border-zinc-700 rounded-lg bg-zinc-800 text-white p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your email"
          />
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-zinc-300 mb-2">Subject</label>
          <input
            type="text"
            className="w-full border border-zinc-700 rounded-lg bg-zinc-800 text-white p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter your subject"
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-zinc-300 mb-2">Message</label>
          <textarea
            className="w-full border border-zinc-700 rounded-lg bg-zinc-800 text-white p-3 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-32"
            placeholder="Enter your message"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-between">
          <button className="px-4 py-2 rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition"
          onClick={goBack}>
            Cancel
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-500 transition">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
