import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

TaskItem.propTypes = {
    onDelete: PropTypes.func,
    onEdit: PropTypes.func,
};
TaskItem.defaultProps = {
    onDelete: null,
    onEdit: null
}

function TaskItem(props) {

    const {onDelete, onEdit} = props
    const [data, setData] = useState([])
    const [showSpan, setShowSpan] = useState(false)
    const [id, setId] = useState([])
    useEffect(() => {
        setData(props.paginated.displayItemsPage)
    }, [props.paginated.displayItemsPage])

    const dateTime = data.map(item => {
        const dateString = item.updatedAt
        const formatDate = (dateString) => {
            const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }
            return new Date(dateString).toLocaleDateString(undefined, options, {timeZone: 'Asia/Jakarta'})
        }
        return formatDate(dateString)
    })

    const handleshowSpan = (item) => {
        setShowSpan(!showSpan)
        setId(item)
    }

    return (
        <>{
            data && data.map((item, index) => (
                <tr key={index} className={
                    item.status !== "Đã xong"
                        ? "w-full font-light text-gray-700  whitespace-no-wrap border border-blue-300 z-20 "
                        : "w-full font-light text-gray-700  whitespace-no-wrap border border-blue-300 z-20"
                }>
                    <td><span
                        className={item.status === "Đã xong"
                            ? "text-sm line-through font-semibold text-gray-300"
                            : "py-1 text-sm font-semibold  "}>{index + 1}</span>
                    </td>
                    <td className="relative cursor-pointer"><span

                        className={item.status === "Đã xong"
                            ? "text-sm line-through font-semibold text-gray-300 "
                            : (item.status === "Đang làm"
                                ? "text-sm text-yellow-600 font-semibold"
                                : "text-sm font-semibold text-blue-600")}
                        onClick={() => handleshowSpan(item)}

                    >
                        {item.name}
                    </span>

                        {showSpan && item.id === id.id
                            ? (showSpan && item.description !== "" ? (<span className={"absolute top-0 left-52 w-full overflow-auto max-h-48 break-words bg-green-200 inline-block px-2 py-2 border rounded-lg shadow-lg duration-200 text-sm "}>{item.description}
                        </span>): (<span className={"absolute top-0 left-52 w-44 bg-yellow-200 inline-block px-1 py-1 border rounded-lg shadow-lg duration-200 text-sm "}>Không có nội dung!!!
                        </span>) )
                            :""}
                    </td>
                    <td className="px-4 py-4">
              <span className={
                  item.status === "Đang làm"
                      ? "text-sm bg-yellow-500 text-white rounded-full px-2 py-1"
                      : (item.status === "Cần làm"
                          ? "text-sm bg-blue-400 text-white rounded-full px-2 py-1"
                          : "text-sm bg-gray-300 line-through text-white rounded-full px-2 py-1")
              }>
                {item.status === "Đang làm"
                    ? "Đang làm"
                    : (item.status === "Cần làm"
                        ? "Cần làm"
                        : "Đã xong")}
              </span>
                    </td>
                    <td className="px-4 py-4">
                        <span className={item.status === "Đã xong"
                            ? "text-sm line-through font-semibold text-gray-300"
                            : (item.status === "Đang làm"
                                ? "text-sm text-yellow-600 font-semibold"
                                : "text-sm font-semibold text-blue-600")}
                        >{dateTime[index]}
                        </span>
                    </td>
                    <td className="text-center px-4 py-4 flex gap-5 items-center justify-center">
                        <button>
                            <svg
                                onClick={() => onEdit(item)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </button>
                        <button>
                            <svg
                                onClick={() => onDelete(item)}
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-red-400"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </button>
                    </td>
                </tr>
            ))
        }
        </>
    );
}

export default TaskItem;