import { FaTimes } from "react-icons/fa";

export const TypeDetailsSection = ({
  attachedFunctions,
  setAttachedFunctions,
  attachedTriggers,
  setAttachedTriggers,
  functionList,
  triggerList,
}: any) => {
  const handleAttach = (value: string, list: string[], setList: Function) => {
    if (value && !list.includes(value)) {
      setList((prev: string[]) => [...prev, value]);
    }
  };

  const handleRemove = (value: string, list: string[], setList: Function) => {
    setList(list.filter((item: string) => item !== value));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-8">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Type Request Details
      </h2>

      {/* Query */}
      <div>
        <label className="text-sm text-gray-300">Query</label>
        <textarea
          rows={6}
          className="mt-2 w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
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

      {/* Function Attachment */}
      <div>
        <label className="text-sm text-gray-300">Attach Function</label>
        <select
          onChange={(e) =>
            handleAttach(e.target.value, attachedFunctions, setAttachedFunctions)
          }
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
                onClick={() =>
                  handleRemove(fn, attachedFunctions, setAttachedFunctions)
                }
              />
            </li>
          ))}
        </ul>
      </div>

      {/* Trigger Attachment */}
      <div>
        <label className="text-sm text-gray-300">Attach Trigger</label>
        <select
          onChange={(e) =>
            handleAttach(e.target.value, attachedTriggers, setAttachedTriggers)
          }
          className="mt-2 w-64 p-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:ring-2 focus:ring-purple-500 outline-none"
        >
          <option value="">Select Trigger</option>
          {triggerList.map((tr: string, idx: number) => (
            <option key={idx} value={tr}>
              {tr}
            </option>
          ))}
        </select>
        <ul className="mt-3 space-y-2">
          {attachedTriggers.map((tr: string, idx: number) => (
            <li
              key={idx}
              className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
            >
              <span>{tr}</span>
              <FaTimes
                className="cursor-pointer text-gray-400 hover:text-red-400"
                onClick={() =>
                  handleRemove(tr, attachedTriggers, setAttachedTriggers)
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
