import { DynamicTable } from "@/UI/DynamicTableCreation";

export const TableDetails = () => {

    const table_name = "Table ABC";

    const table_updated_history = [
        {
            code: 1, name: "Shahil", comment: "First commit",
            query: `
        CREATE TABLE table_name{
        coloumn_1 type}`,
            timestamp: "22 Sept 2025"
        },
        {
            code: 2, name: "Yash", comment: "Updated with user list",
            query: `ALTER TABLE table_name`,
            timestamp: "25 Sept 2025"
        },
    ];

    const function_list = ["Function_aaabc", "Function_BBBCV"];

    const trigger_list = ["Trigger_ABC", "Trigger_CDE"];

    const table_result = [
        { id: 12, name: "yash", email: "yash@gmail.com", mobileno: "9012345678", city: "Gandhinagar" },
        { id: 13, name: "Akhil", email: "akhil@gmail.com", mobileno: "801345977", city: "Ahmedabad" }
    ]

    return (
        <>
            <div className="mx-[40px] px-4 py-6 bg-black text-white rounded-2xl shadow-lg space-y-6 text-sm">
                {/* Table header */}
                <h1 className="text-2xl font-bold text-gray-100">
                    Table name: <span className="text-blue-400">{table_name}</span>
                </h1>

                {/* History table */}
                <DynamicTable data={table_updated_history} title="Updation History" />

                {/* Function List */}
                <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
                    <h2 className="text-xl font-semibold mb-3 text-gray-200">Assigned Function list:</h2>
                    <div className="flex gap-2 overflow-x-auto">
                        {function_list.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 shadow-sm text-sm hover:bg-gray-600 transition-colors duration-200"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Trigger List */}
                <div className="bg-gray-800 rounded-xl p-4 shadow-inner">
                    <h2 className="text-xl font-semibold mb-3 text-gray-200">Assigned Trigger list:</h2>
                    <div className="flex gap-2 overflow-x-auto">
                        {trigger_list.map((item, index) => (
                            <div
                                key={index}
                                className="bg-gray-700 text-gray-200 px-4 py-2 rounded-lg border border-gray-600 shadow-sm text-sm hover:bg-gray-600 transition-colors duration-200"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                {/* table result */}
                <DynamicTable data={table_result} title="Table result" />
            </div>
        </>
    )
};