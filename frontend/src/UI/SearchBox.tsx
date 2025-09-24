import { useEffect, useState } from "react";

interface SearchBoxProps {
  actionName: (value: string) => Promise<any[]>; 
  listValueName: string; 
  outputValue: (value: string) => void;
  listIdName: string;
}

export const SearchBox = ({ actionName, listValueName, outputValue, listIdName }: SearchBoxProps) => {
  const [countryList, setCountryList] = useState<any[]>([]);
  const [filterInput, setFilterInput] = useState<string>("");
  const [searchBoxView, setSearchBoxView] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const handleSearchBoxView = (viewValue: boolean) => setSearchBoxView(viewValue);

  useEffect(() => {
    const fetchCountryList = async () => {
      try {
        const data = await actionName(filterInput || "");
        if (data) setCountryList(data);
        setHighlightedIndex(-1); // reset highlight when list changes
      } catch (error) {
        console.error("Error fetching country list:", error);
      }
    };

    const handler = setTimeout(fetchCountryList, 300); 
    return () => clearTimeout(handler);
  }, [filterInput, actionName]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!countryList.length) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev + 1) % countryList.length);
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex(prev => (prev - 1 + countryList.length) % countryList.length);
    }
    if (e.key === "Enter" && highlightedIndex >= 0) {
      const item = countryList[highlightedIndex];
      setInputValue(item[listValueName]);
      outputValue(item[listIdName]);
      handleSearchBoxView(false);
    }
  };

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Country"
        value={inputValue}
        className="w-full p-3 bg-gray-800 text-gray-200 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
        onChange={(e) => {
          setFilterInput(e.target.value);
          setInputValue(e.target.value);
        }}
        onFocus={() => handleSearchBoxView(true)}
        onKeyDown={handleKeyDown}
      />

      {searchBoxView && countryList.length > 0 && (
        <div className="absolute top-full mt-1 w-full max-h-60 overflow-auto bg-black border border-gray-700 rounded-md shadow-lg z-50">
          <ul>
            {countryList.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  setInputValue(item[listValueName]);
                  outputValue(item[listIdName]);
                  handleSearchBoxView(false);
                }}
                className={`px-4 py-2 cursor-pointer transition-colors duration-200 ${
                  highlightedIndex === index
                    ? "bg-amber-600 text-black"
                    : "hover:bg-amber-600 hover:text-black"
                }`}
              >
                {item[listValueName]}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
