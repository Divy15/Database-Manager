import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type HistoryContextType = {
  prevPath: string | null;
  goBack: () => void;
};

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

export const HistoryProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [prevPath, setPrevPath] = useState<string | null>(null);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    if (location.pathname !== currentPath) {
      setPrevPath(currentPath);
      setCurrentPath(location.pathname);
    }
  }, [location.pathname, currentPath]);

  const goBack = () => {
    if (prevPath) {
      navigate(prevPath);
    } else {
      navigate("/"); // fallback to home
    }
  };

  return (
    <HistoryContext.Provider value={{ prevPath, goBack }}>
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
