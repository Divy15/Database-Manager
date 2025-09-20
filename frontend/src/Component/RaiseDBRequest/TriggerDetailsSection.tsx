import { FaTimes } from "react-icons/fa";

export const TriggerDetailsSection = ({ attachedFunctions, setAttachedFunctions, functionList, tableArray, setTableArray, tableList }: any) => {
  const handleAttach = (value: string) => {
    if (value && !attachedFunctions.includes(value)) {
      setAttachedFunctions((prev: string[]) => [...prev, value]);
    }
  };

  const handleRemove = (value: string) => {
    setAttachedFunctions(attachedFunctions.filter((fn: string) => fn !== value));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-8">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Trigger Request Details
      </h2>

      {/* Query */}
      <div>
        <label className="text-sm text-gray-300">Query</label>
        <textarea
          rows={6}
          className="mt-2 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
        ></textarea>
      </div>

      {/* Comment */}
      <div>
        <label className="text-sm text-gray-300">Comment</label>
        <textarea
          rows={4}
          className="mt-2 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-amber-500 outline-none"
        ></textarea>
      </div>

      {/* Table Attachment */}
      <div>
        <label className="text-sm text-gray-300">Table Attachment</label>
        <select
          onChange={(e) => {
            if (e.target.value) setTableArray((prev: string[]) => [...prev, e.target.value]);
          }}
          className="mt-2 w-64 p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select Table</option>
          {tableList.map((tbl: string, idx: number) => (
            <option key={idx} value={tbl}>
              {tbl}
            </option>
          ))}
        </select>
        <ul className="mt-3 space-y-2">
          {tableArray.map((tbl: string, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
            >
              <span>{tbl}</span>
              <FaTimes
                className="cursor-pointer text-gray-400 hover:text-red-400"
                onClick={() =>
                  setTableArray(tableArray.filter((item: string) => item !== tbl))
                }
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Function Attachment */}
      <div>
        <label className="text-sm text-gray-300">Attach Function</label>
        <select
          onChange={(e) => handleAttach(e.target.value)}
          className="mt-2 w-64 p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-green-500 outline-none"
        >
          <option value="">Select Function</option>
          {functionList.map((fn: string, idx: number) => (
            <option key={idx} value={fn}>
              {fn}
            </option>
          ))}
        </select>
        <ul className="mt-3 space-y-2">
          {attachedFunctions.map((fn: string, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
            >
              <span>{fn}</span>
              <FaTimes
                className="cursor-pointer text-gray-400 hover:text-red-400"
                onClick={() => handleRemove(fn)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
