import { DynamicTable } from "../UI/DynamicTableCreation";

export const TypeDetails = () => {
  const type_name = "Type ABDC";

  const function_list = ["Function_aaabc", "Function_BBBCV"];

  const trigger_list = ["Trigger_ABC", "Trigger_CDE"];

  const type_query = `
CREATE TYPE public.school_insert_result AS
(
    inserted_count integer,
    duplicate_school jsonb,
    duplicates_entry integer
);
  `;

  const type_updated_history = [
    {
      code: 1,
      name: "Shahil",
      comment: "First commit",
      query: `
CREATE type type_name{
    coloumn_1 type
}`,
      timestamp: "22 Sept 2025",
    },
    {
      code: 2,
      name: "Yash",
      comment: "Updated with user list",
      query: `ALTER TABLE table_name`,
      timestamp: "25 Sept 2025",
    },
  ];

  return (
    <div className="mx-[40px] px-6 py-8 bg-black text-white rounded-2xl shadow-xl space-y-8 text-sm">
      {/* Header */}
      <div className="border-b border-gray-800 pb-4">
        <h1 className="text-3xl font-bold text-gray-100">
          Type: <span className="text-blue-400">{type_name}</span>
        </h1>
      </div>

      {/* History */}
      <section>
        <DynamicTable data={type_updated_history} title="Updation History" />
      </section>

      {/* Function List */}
      <section className="bg-gray-900 rounded-xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-gray-200 border-b border-gray-800 pb-2">
          Assigned Functions
        </h2>
        <div className="flex gap-2 flex-wrap">
          {function_list.map((item, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg border border-gray-700 shadow-sm text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Trigger List */}
      <section className="bg-gray-900 rounded-xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-gray-200 border-b border-gray-800 pb-2">
          Assigned Triggers
        </h2>
        <div className="flex gap-2 flex-wrap">
          {trigger_list.map((item, index) => (
            <span
              key={index}
              className="bg-gray-800 text-gray-300 px-3 py-1 rounded-lg border border-gray-700 shadow-sm text-xs"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* Type Query */}
      <section className="bg-gray-900 rounded-xl p-4 shadow-md">
        <h2 className="text-lg font-semibold mb-3 text-gray-200 border-b border-gray-800 pb-2">
          Type Query
        </h2>
        <pre className="bg-gray-800 text-green-400 text-xs p-4 rounded-lg overflow-x-auto border border-gray-700">
          <code>{type_query}</code>
        </pre>
      </section>
    </div>
  );
};
