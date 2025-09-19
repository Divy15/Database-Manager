import { useDashboard } from "../Context/DashboardDatabaseInfoContext";
import { FunctionDetails } from "./FunctionDetails";
import { TableDetails } from "./TableDetails";
import { TriggerDetails } from "./TriggerDetails";
import { TypeDetails } from "./TypeDetails";

export const DashboardDatabaseInfoContent = () => {
  const { selection } = useDashboard();

  return (
    <div className="mt-6">
      {selection.func && <FunctionDetails  />}
      {selection.table && <TableDetails/>}
      {selection.trigger && <TriggerDetails />}
      {selection.type && <TypeDetails />}
    </div>
  );
};