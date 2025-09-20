

export const RequestList = () => {

    const databaseList = [
        { id: 1, databaseName: "GEN_UPDATE_2025" },
        { id: 2, databaseName: "SCI_UPDATE_2025" },
        { id: 3, databaseName: "SCC_UPDATE_2025" },
    ];

    return (
        <>
            <div>
                {/* Filter section */}
                <div className="flex justify-end">
                    <div className="m-2">
                        <select
                            className="p-3 rounded-lg bg-amber-500 text-white shadow-md hover:bg-gray-700 transition w-60"
                        >
                            <option value="">Filter by Database</option>
                            {databaseList.map((item: any, idx: number) => (
                                <option key={idx} value={item.databaseName}>
                                    {item.databaseName}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}