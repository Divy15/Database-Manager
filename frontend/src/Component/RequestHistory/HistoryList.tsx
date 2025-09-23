import { useNavigate } from "react-router-dom";

export const HistoryList = () => {

    const navigate = useNavigate();

    const databaseList = [
        { id: 1, databaseName: "GEN_UPDATE_2025" },
        { id: 2, databaseName: "SCI_UPDATE_2025" },
        { id: 3, databaseName: "SCC_UPDATE_2025" },
    ];

    const mergeRequestList = [
        { request_id: 1, comment: 'First request', db_id: 11, db_name: 'GEN_UPDATE_2025', user_by: 'Divy' },
        { request_id: 2, comment: 'Seconf request.', db_id: 11, db_name: 'GEN_UPDATE_2025', user_by: 'Yash' }
    ];

    const handleClickViewCodeDiff = (value:number) => {
        console.log(value);
        navigate(`/revert/code/diff`);
    };

    return (
        <>
            <div>
                {/* Filter section */}
                <div className="flex justify-end">
                    <div className="m-2">
                        <select
                            className="p-3 rounded-lg bg-amber-500 text-white transition w-60"
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

                {/* List of merger request */}
                <div>
                    {mergeRequestList.map((item, index) => (
                        <div className="border rounded p-4 m-3" key={index}
                        onClick={() => handleClickViewCodeDiff(item.request_id)}>
                            <div className="flex">
                                <div>
                                    <label htmlFor="">Database Name:</label>
                                </div>
                                <div>
                                    {item.db_name}
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <label htmlFor="">Comment:</label>
                                </div>
                                <div>
                                    <label htmlFor="">"{item.comment}"</label>
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <label htmlFor="">User by:</label>
                                </div>
                                <div>
                                    <label htmlFor="">{item.user_by}</label>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}