import { useDashboard } from "../Context/DashboardDatabaseInfoContext";

export const DashboardSubNavbar = () => {
  const { selection, setSelection, resetSelection, viewAfterSelectionDatabase, setViewAfterSelectionDatabase } = useDashboard();

  const databaseList = ["SCI_UPDATE_2025", "SCC_UPDATE_2025", "GEN_UPDATE_2025"];
  const functionList = ["FUNCTION_ABC_1", "FUNCTION_CDE_2"];
  const tableList = ["Table_ABC_1", "TABLE_CDE_2"];
  const triggerList = ["Trigger_UPDATE_ABC_2", "Trigger_UPDATE_CDE_3"];
  const typeList = ["Type_UPDATE_2025", "Type_Update_2026"];

  const handleDatabaseChange = (e: any) => {
    const value = e.target.value;
    if (value) {
      setSelection({ database: value, func: "", table: "", trigger: "", type: "" });
      setViewAfterSelectionDatabase(true);
    } else {
      resetSelection();
      setViewAfterSelectionDatabase(false);
    }
  };

  const handleSubMenuValue = (value: string, subMenuType: string) => {
    setSelection({
      database: selection.database,
      func: subMenuType === "Function" ? value : "",
      table: subMenuType === "Table" ? value : "",
      trigger: subMenuType === "Trigger" ? value : "",
      type: subMenuType === "Type" ? value : "",
    });
  };

  return (
    <div className="w-full grid grid-cols-6 gap-4 items-center px-[45px]">
      {/* Database */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-blue-600 mb-1">Database</label>
        <select
          value={selection.database}
          className="p-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition w-full"
          onChange={handleDatabaseChange}
        >
          <option value="">Select Database</option>
          {databaseList.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* Function */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-purple-600 mb-1">Function</label>
        <select
          value={selection.func}
          disabled={!viewAfterSelectionDatabase}
          className="p-2 rounded-lg bg-purple-600 text-white shadow hover:bg-purple-700 transition w-full disabled:opacity-50"
          onChange={(e) => handleSubMenuValue(e.target.value, "Function")}
        >
          <option value="">Select Function</option>
          {functionList.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-green-600 mb-1">Table</label>
        <select
          value={selection.table}
          disabled={!viewAfterSelectionDatabase}
          className="p-2 rounded-lg bg-green-600 text-white shadow hover:bg-green-700 transition w-full disabled:opacity-50"
          onChange={(e) => handleSubMenuValue(e.target.value, "Table")}
        >
          <option value="">Select Table</option>
          {tableList.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* Trigger */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-orange-600 mb-1">Trigger</label>
        <select
          value={selection.trigger}
          disabled={!viewAfterSelectionDatabase}
          className="p-2 rounded-lg bg-orange-600 text-white shadow hover:bg-orange-700 transition w-full disabled:opacity-50"
          onChange={(e) => handleSubMenuValue(e.target.value, "Trigger")}
        >
          <option value="">Select Trigger</option>
          {triggerList.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* Type */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold text-pink-600 mb-1">Type</label>
        <select
          value={selection.type}
          disabled={!viewAfterSelectionDatabase}
          className="p-2 rounded-lg bg-pink-600 text-white shadow hover:bg-pink-700 transition w-full disabled:opacity-50"
          onChange={(e) => handleSubMenuValue(e.target.value, "Type")}
        >
          <option value="">Select Type</option>
          {typeList.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </div>

      {/* Reset */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold invisible text-pink-600 mb-1">Type</label>
      <button
        className="px-6 py-2 rounded-xl bg-red-700 text-lg font-semibold text-gray-200 hover:text-white transition"
        onClick={resetSelection}
      >
        Reset All
      </button>
      </div>
    </div>
  );
};
