import React, {useState} from "react";

export default ({src, className}) => {

    const [imageError, setImageError] = useState(false);

    const handleImageError = () => {
        setImageError(true);
    };


    return (
        <>
            {!imageError ? (
                <img
                    src={src}
                    alt="avatar"
                    className={`${className} avatar`}
                    onError={handleImageError}
                />
            ) : (
                <img
                    src='https://yt3.ggpht.com/a/default-user=s600-k-no-rp-mo'
                    alt="avatar"
                    className={`${className} avatar`}
                    onError={handleImageError}
                />
            )}
        </>
    )
};