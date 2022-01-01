import React, {useState} from "react";
import {useEffect} from "react";

/**
 *
 * @constructor
 */
function ResizePng({width, imgPrefix, alt, style}){
    const [img, setImg] = useState(imgPrefix + "large");

    useEffect(() => {
        console.log("window resized")
        if(width <= 376){
            setImg(imgPrefix + "small");
        } else if (width > 376 && width <= 500){
            setImg(imgPrefix + "medium");
        } else if (width > 500 && width <= 800){
            setImg(imgPrefix + "large");
        } else {
            setImg(imgPrefix + "extra_large")
        }
    }, [width, imgPrefix])

    return <img
        src={img + ".png"}
        alt={alt}
        style={style}
    />
}

export default ResizePng;
