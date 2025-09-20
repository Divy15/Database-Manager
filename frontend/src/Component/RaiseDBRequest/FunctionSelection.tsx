import { useState } from "react";

export const FunctionSelection = ({ functionList }: any) => {
  const [selectedFunction, setSelectedFunction] = useState("");

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-5">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Function Management
      </h2>

      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <label className="text-sm text-gray-300">Select Existing Function</label>
          <select
            value={selectedFunction}
            onChange={(e) => setSelectedFunction(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white shadow-md hover:bg-gray-700 transition w-64"
          >
            <option value="">Select Function</option>
            {functionList.map((fn: string, idx: number) => (
              <option key={idx} value={fn}>
                {fn}
              </option>
            ))}
          </select>
        </div>
        <button className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-black font-semibold shadow-md transition">
          + Add New Function
        </button>
      </div>
    </div>
  );
};
