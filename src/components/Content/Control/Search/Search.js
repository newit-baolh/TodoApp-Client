import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {
    
};

function Search(props) {
    return (
        <div className="w-2/3  ">
            <input
                type="text"
                placeholder="Nhập từ khoá tìm kiếm..."
                className=" inline-block py-1.5 bg-gray-100 px-4 w-full outline-none  rounded-lg focus:shadow  left-0"
            /></div>
    );
}

export default Search;