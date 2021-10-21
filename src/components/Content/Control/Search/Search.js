import React from 'react';
import PropTypes from 'prop-types';

Search.propTypes = {};

function Search(props) {
    return (
        <div className="w-2/3 absolute top-0 left-0">
            <input
                type="text"
                placeholder="Nhập từ khoá tìm kiếm..."
                className=" inline-block py-1.5 bg-gray-100 px-4 w-full outline-none  rounded-lg focus:shadow  left-0"
            />
            <span className="absolute top-1.5 right-3">
                <div className="text-black">
                    <svg className="h-6 w-6"
                         xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 32 32">
                        <path d="M 16 4 C 9.3844239 4 4 9.3844287 4 16 C 4 22.615571 9.3844239 28 16 28 C 22.615576 28 28 22.615571 28 16 C 28 9.3844287 22.615576 4 16 4 z M 16 6 C 21.534697 6 26 10.465307 26 16 C 26 21.534693 21.534697 26 16 26 C 10.465303 26 6 21.534693 6 16 C 6 10.465307 10.465303 6 16 6 z M 12.707031 11.292969 L 11.292969 12.707031 L 14.585938 16 L 11.292969 19.292969 L 12.707031 20.707031 L 16 17.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 17.414062 16 L 20.707031 12.707031 L 19.292969 11.292969 L 16 14.585938 L 12.707031 11.292969 z"/>
                    </svg>
                </div>
            </span>
        </div>
    );
}

export default Search;