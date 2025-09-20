import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export const TableDetailsSection = ({ attachArray, setAttachArray }: any) => {
  const [inputValue, setInputValue] = useState("");

  const handleAdd = () => {
    if (inputValue.trim()) {
      setAttachArray((prev: string[]) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleRemove = (value: string) => {
    setAttachArray(attachArray.filter((item: string) => item !== value));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-8">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Table Request Details
      </h2>

      {/* Query */}
      <div>
        <label className="text-sm text-gray-300">Query</label>
        <textarea
          rows={6}
          className="mt-2 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
        ></textarea>
      </div>

      {/* Comment */}
      <div>
        <label className="text-sm text-gray-300">Comment</label>
        <textarea
          rows={4}
          className="mt-2 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
        ></textarea>
      </div>

      {/* Function/Trigger Attachment */}
      <div>
        <label className="text-sm text-gray-300">Attach Function/Trigger</label>
        <div className="flex gap-3 mt-2">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter Function or Trigger name"
            className="flex-1 p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
          />
          <button
            onClick={handleAdd}
            className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-semibold shadow-md transition"
          >
            Attach
          </button>
        </div>
        <ul className="mt-3 space-y-2">
          {attachArray.map((item: string, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
            >
              <span>{item}</span>
              <FaTimes
                className="cursor-pointer text-gray-400 hover:text-red-400"
                onClick={() => handleRemove(item)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
