import PropTypes from 'prop-types';

Sort.propTypes = {};

function Sort(props) {
    return (
        <div className="absolute top-0 right-64 bg-blue-500 ml-20 rounded-2xl ">
            <select
                className="block w-full px-7 py-1.5 outline-none  border border-blue-200 bg-blue-400 rounded rounded-md text-white"
            >
                <option defaultValue={true} disabled="disabled">Sắp xếp</option>
                <option value="1">Tên A - Z</option>
                <option value="2">Tên Z - A</option>
                <option value="3">Cần làm</option>
                <option value="4">Đang làm</option>
                <option value="5">Đã xong</option>
            </select>
        </div>
    )
}

export default Sort;