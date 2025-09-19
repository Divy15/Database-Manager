import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Selection = {
  database: string  | undefined;
  func: string  | undefined;
  table: string  | undefined;
  trigger: string  | undefined;
  type: string  | undefined;
};

type DashboardContextType = {
  selection: Selection;
  setSelection: (selection: Selection) => void;
  resetSelection: () => void;
  viewAfterSelectionDatabase: boolean; 
  setViewAfterSelectionDatabase: (value: boolean) => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const useDashboard = () => {
  const context = useContext(DashboardContext);
  if (!context) throw new Error("useDashboard must be used within DashboardProvider");
  return context;
};

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [selection, setSelectionState] = useState<Selection>({
    database: "",
    func: "",
    table: "",
    trigger: "",
    type: "",
  });

  const [viewAfterSelectionDatabase, setViewAfterSelectionDatabase] = useState(false);

  const setSelection = (newSelection: Selection) => {
    setSelectionState(newSelection);
  };

  const resetSelection = () => {
    setSelectionState({ database: "", func: "", table: undefined, trigger: "", type: "" });
    setViewAfterSelectionDatabase(false);
  };

  return (
    <DashboardContext.Provider value={{ selection, setSelection, resetSelection, viewAfterSelectionDatabase, setViewAfterSelectionDatabase }}>
      {children}
    </DashboardContext.Provider>
  );
};
