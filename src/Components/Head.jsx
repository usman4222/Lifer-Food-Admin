import React from "react";

const Head = ({ heading, para }) => {
    return (
        <>
            <h1 className="text-primary text-3xl font-bold pl-6 pt-3 lg:ml-0">
                {heading}
            </h1>
            <span className="text-gray-500 mt-1 pl-6 lg:ml-0">{para}</span>
        </>
    );
};

export default Head;
