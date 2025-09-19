import React from "react";

type DynamicTableProps = {
  data: Record<string, any>[];
  title: string;
};

export const DynamicTable: React.FC<DynamicTableProps> = ({ data, title }) => {
  if (!data || data.length === 0) return null;

  const allKeys = Array.from(
    new Set(data.flatMap((obj) => Object.keys(obj)))
  );

  return (
    <div>
      <h2 className="text-xl font-semibold mb-3 text-gray-200">{title}</h2>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 rounded-lg text-sm">
          <thead className="bg-gray-900 text-gray-300">
            <tr>
              {allKeys.map((key) => (
                <th key={key} className="px-3 py-1 text-left capitalize">
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i} className="hover:bg-gray-800 transition">
                {allKeys.map((key) => (
                  <td
                    key={key}
                    className="px-3 py-1 border-t border-gray-700 text-gray-100"
                  >
                    {row[key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};