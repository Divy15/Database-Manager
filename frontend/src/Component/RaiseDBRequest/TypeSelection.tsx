import { useState } from "react";

export const TypeSelection = ({ typeList }: any) => {
  const [selectedType, setSelectedType] = useState("");

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-5">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Type Management
      </h2>

      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <label className="text-sm text-gray-300">Select Existing Type</label>
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white shadow-md hover:bg-gray-700 transition w-64"
          >
            <option value="">Select Type</option>
            {typeList.map((t: string, idx: number) => (
              <option key={idx} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
        <button className="px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-black font-semibold shadow-md transition">
          + Add New Type
        </button>
      </div>
    </div>
  );
};
