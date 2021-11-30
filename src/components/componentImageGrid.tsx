import React from "react";


type props = {
    image: string,
    onClick() : void  
};

const ImageGrid: React.FC<props> = (props) => {
    const { image , onClick } = props;
    return (
        <div className="w-full rounded-2xl cursor-pointer" onClick={onClick}>
            <div className="relative py-3 w-full sm:max-w-xl sm:mx-auto" >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-cyan-900 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative h-48 w-full bg-white shadow-lg sm:rounded-3xl">
                    <img
                        style={{ 'height': '100%', 'width': '100%', 'objectFit': 'cover' }}
                        className="rounded-xl bg-gray-100"
                        src={image}
                    />
                </div>
            </div>
            <h3 className="text-gray-900 text-xl pt-5">Brew 1</h3>
        </div>
    );
};

export default ImageGrid;
