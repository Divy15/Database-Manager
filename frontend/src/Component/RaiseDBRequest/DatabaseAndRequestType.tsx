export const DatabaseAndRequestType = ({ databaseList, requestTypes, onChange }: any) => {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-lg space-y-5">
      <h2 className="text-xl font-bold text-white border-b border-gray-700 pb-2">
        Database & Request Type
      </h2>

      <div className="flex gap-6">
        {/* Database selection */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Database Selection</label>
          <select
            onChange={(e) => onChange("db", e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white shadow-md hover:bg-gray-700 transition w-60"
          >
            <option value="">Select Database</option>
            {databaseList.map((item: any, idx: number) => (
              <option key={idx} value={item.databaseName}>
                {item.databaseName}
              </option>
            ))}
          </select>
        </div>

        {/* Request Type selection */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Request Type</label>
          <select
            onChange={(e) => onChange("reqType", e.target.value)}
            className="p-3 rounded-lg bg-gray-800 text-white shadow-md hover:bg-gray-700 transition w-60"
          >
            <option value="">Select Request Type</option>
            {requestTypes.map((item: any, idx: number) => (
              <option key={idx} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
