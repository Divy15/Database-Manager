import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type HistoryContextType = {
  goBack: () => void;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [, setHistoryStack] = useState<string[]>([location.pathname]);

  useEffect(() => {
  setHistoryStack((prev) => {
    if (prev[prev.length - 1] !== location.pathname) {
      return [...prev, location.pathname];
    }
    return prev;
  });
}, [location.pathname]);

  const goBack = () => {
  setHistoryStack((prev) => {
    if (prev.length > 1) {
      const newStack = prev.slice(0, -1); // pop
      navigate(newStack[newStack.length - 1]);
      return newStack;
    } else {
      navigate("/"); // fallback
      return prev;
    }
  });
};

  return (
    <HistoryContext.Provider value={{ goBack }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistoryNav = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error("useHistoryNav must be used inside HistoryProvider");
  }
  return context;
};
