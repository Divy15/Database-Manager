import { DynamicTable } from "../UI/DynamicTableCreation";

export const TriggerDetails = () => {
  const trigger_name = "Trigger ABCC";

  const trigger_updated_history = [
    { code: 1, name: "Shahil", comment: "First commit", timestamp: "22 Sept 2025" },
    { code: 2, name: "Yash", comment: "Updated with user list", timestamp: "25 Sept 2025" },
  ];

  const table_list = [
    { tableId: 111, tableName: "Table_A", comment: "This table is for user data" },
    { tableId: 112, tableName: "Table_B", comment: "This table is for user json data." },
  ];

  const api_list = ["/api/user/data", "/api/user/name"];

  return (
    <div className="mx-8 my-6 p-6  bg-black text-white rounded-3xl shadow-2xl space-y-8">
      {/* Function Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-extrabold text-gray-100 mb-2">
          Trigger Name:
          <span className="text-blue-400 ml-2">{trigger_name}</span>
        </h1>
        <p className="text-gray-400 text-sm">
          Detailed information about the trigger, including history, assigned tables, and APIs.
        </p>
      </div>

      {/* History Table */}
        
        <DynamicTable data={trigger_updated_history} title="Updation History"/>

      {/* Table List */}
        <DynamicTable data={table_list} title="Assigned Tables"/>

      {/* API List */}
      <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
        <h2 className="text-xl font-semibold text-gray-200 mb-3">Assigned API List</h2>
        <div className="flex flex-wrap gap-3">
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
    </div>
  );
};
