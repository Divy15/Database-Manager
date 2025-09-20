import { useState } from "react";
import { DatabaseAndRequestType } from "./DatabaseAndRequestType";
import { FunctionSelection } from "./FunctionSelection";
import { DetailsSection as FunctionDetailsSection } from "./DetailsSection";
import { TableSelection } from "./TableSelection";
import { TableDetailsSection } from "./TableDetailsSection";
import { TriggerSelection } from "./TriggerSelection";
import { TriggerDetailsSection } from "./TriggerDetailsSection";
import { TypeSelection } from "./TypeSelection";
import { TypeDetailsSection } from "./TypeDetailsSection";

export const RaiseDBRequestSubNavbar = () => {
  const database_category = [
    { id: 1, databaseName: "GEN_UPDATE_2025" },
    { id: 2, databaseName: "SCI_UPDATE_2025" },
    { id: 3, databaseName: "SCC_UPDATE_2025" },
  ];
  const request_type = ["Function", "Table", "Trigger", "Type"];
  const functionList = ["FUNCTION_ABC_1", "FUNCTION_CDE_2"];
  const tableList = ["TABLE_ABC_1", "TABLE_CDE_2"];
  const triggerList = ["TRIGGER_XYZ_1", "TRIGGER_MNO_2"];
  const typeList = ["TYPE_ALPHA", "TYPE_BETA"];

  const [db, setDb] = useState("");
  const [reqType, setReqType] = useState("");
  const [apiArray, setApiArray] = useState<string[]>([]);
  const [tableArray, setTableArray] = useState<string[]>([]);
  const [attachArray, setAttachArray] = useState<string[]>([]);
  const [attachedFunctions, setAttachedFunctions] = useState<string[]>([]);
  const [attachedTriggers, setAttachedTriggers] = useState<string[]>([]);

  const handleSelectionChange = (field: string, value: string) => {
    if (field === "db") setDb(value);
    if (field === "reqType") setReqType(value);
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 p-6 space-y-8">
      {/* Step 1: Database + Request Type */}
      <DatabaseAndRequestType
        databaseList={database_category}
        requestTypes={request_type}
        onChange={handleSelectionChange}
      />

      {/* Function Request Flow */}
      {db && reqType === "Function" && (
        <>
          <FunctionSelection functionList={functionList} />
          <FunctionDetailsSection
            apiArray={apiArray}
            setApiArray={setApiArray}
            tableArray={tableArray}
            setTableArray={setTableArray}
            tableList={tableList}
          />
        </>
      )}

      {/* Table Request Flow */}
      {db && reqType === "Table" && (
        <>
          <TableSelection tableList={tableList} />
          <TableDetailsSection
            attachArray={attachArray}
            setAttachArray={setAttachArray}
          />
        </>
      )}

      {/* Trigger Request Flow */}
      {db && reqType === "Trigger" && (
        <>
          <TriggerSelection triggerList={triggerList} />
          <TriggerDetailsSection
            attachedFunctions={attachedFunctions}
            setAttachedFunctions={setAttachedFunctions}
            functionList={functionList}
            tableArray={tableArray}
            setTableArray={setTableArray}
            tableList={tableList}
          />
        </>
      )}

      {/* Type Flow */}
      {db && reqType === "Type" && (
        <>
          <TypeSelection typeList={typeList} />
          <TypeDetailsSection
            attachedFunctions={attachedFunctions}
            setAttachedFunctions={setAttachedFunctions}
            attachedTriggers={attachedTriggers}
            setAttachedTriggers={setAttachedTriggers}
            functionList={functionList}
            triggerList={triggerList}
          />
        </>
      )}
    </div>
  );
};
