import React from "react";


type props = {
    image: string,
};

const ImageGrid: React.FC<props> = (props) => {
    const { image } = props;
    return (
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-100 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div className="relative bg-white shadow-lg sm:rounded-3xl h-48 w-full"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                }}
            
            >
            </div>
        </div>
    );
};

export default ImageGrid;
