import React from "react";

type props = {
    text: string;
    onClick(e: any): void;
    white?: boolean;
    header?: boolean;
    modal?: boolean;
    padding?: boolean;
    alert?: boolean;
    green?: boolean;
};

const Button: React.FC<props> = (props) => {
    const {
        text,
        white = false,
        modal = false,
        onClick,
        padding = false,
        alert = false,
        green= false
    } = props;
    const colours = white
        ? "text-gray-900 bg-white"
        : alert
        ? "text-white bg-red-600"
        : green
        ? "text-white bg-green-600"
        : "text-white bg-gray-900";

    return (
        <button
            className={`font-medium py-1 text-sm lg:text-base rounded-button shadow-button ${colours} ${
                modal ? "w-full lg:text-base" : "px-1 lg:px-3"
            } ${padding ? "mb-5" : ""}`}
            {...{ onClick }}
        >
            {text}
        </button>
    );
};

export default Button;
