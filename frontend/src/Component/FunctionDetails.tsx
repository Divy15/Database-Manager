import { DynamicTable } from "../UI/DynamicTableCreation";


export const FunctionDetails = () => {
  const function_name = "Example1";

  const function_updated_history = [
    { code: 1, name: "Shahil", comment: "First commit", timestamp: "22 Sept 2025" },
    { code: 2, name: "Yash", comment: "Updated with user list", timestamp: "25 Sept 2025" },
  ];

  const table_list = [
    { tableId: 111, tableName: "Table_A", comment: "This table is for user data" },
    { tableId: 112, tableName: "Table_B", comment: "This table is for user json data." },
  ];

  const api_list = ["/api/user/data", "/api/user/name"];

  const function_result = [
    { userId: 11, userName: "Divy", city: "Surendranagar" },
    { userId: 12, userName: "Akhil", city: "Ahmedabad" },
    { userId: 13, userName: "Yash", city: "Kadi (Gandhinagar)" },
  ];

  return (
    <div className="mx-[40px] px-4 py-6 bg-black text-white rounded-2xl shadow-lg space-y-6 text-sm">
      {/* Function Header */}
      <h1 className="text-2xl font-bold text-gray-100">
        Function name: <span className="text-blue-400">{function_name}</span>
      </h1>

      {/* History Table */}
      <DynamicTable data={function_updated_history} title="Updation history" />

      {/* Table List */}
      <DynamicTable data={table_list} title="Assigned Tables" />

      {/* API List */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
        <h2 className="text-xl font-semibold mb-3 text-gray-200">Assigned API list:</h2>
        <div className="flex gap-2 overflow-x-auto">
          {api_list.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 shadow-sm text-sm hover:bg-gray-600 transition-colors duration-200"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Function Result */}
      <DynamicTable data={function_result} title="Function result" />
    </div>
  );
};
