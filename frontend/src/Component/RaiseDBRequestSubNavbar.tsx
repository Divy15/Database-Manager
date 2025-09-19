

export const RaiseDBRequestSubNavbar = () => {

    const database_category = [
        {id : 1 , databaseName : "GEN_UPDATE_2025"},
        {id : 2, databaseName : "SCI_UPDATE_2025"},
        {id : 3, databaseName : "SCC_UPDATE_2025"}
    ];

    const request_type = ["Function", "Table", "Type", "Trigger"];

    return(
        <>
        <div>
            <div className="flex">
                {/* Database selection */}
                <div>
                    <div>
                        <label htmlFor="">Database Selection:</label>
                    </div>
                    <div>
                        <select name="" id=""
                        className="p-2 rounded-lg bg-blue-600 text-white shadow hover:bg-blue-700 transition w-full">
                            <option value="">Select Database</option>
                            {database_category.map((item,index) => (
                                <option value="" key={index}>{item.databaseName}</option>
                            ))}
                        </select>
                    </div>
                </div>
                {/* Requeset type */}
                <div>
                    <div>
                        <label htmlFor="">Request Type Selection:</label>
                    </div>
                    <div>
                        <select name="" id=""
                        className="p-2 rounded-lg bg-amber-600 text-white shadow hover:bg-amber-700 transition w-full">
                            <option value="">Select Request Type</option>
                            {database_category.map((item,index) => (
                                <option value="" key={index}>{item.databaseName}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}