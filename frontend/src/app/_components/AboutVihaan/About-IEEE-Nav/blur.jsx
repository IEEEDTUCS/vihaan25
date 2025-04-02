import { useState, useEffect } from "react";

export default function Blur({ className, popin}) {
    let [BlurClass, setBlurClass] = useState("");

    useEffect(() => {
        if (className === "Button-for-Abt-Section") {
            setBlurClass("Blur-Class-Screen");
        } else {
            setBlurClass("");
        }
    }, [className]);

    return (
        <div 
            className={`${BlurClass} fixed top-0 -right-600 duration-200 ease-in-out w-screen h-screen backdrop-blur-xs z-[999]`}
            onClick={popin}
        ></div>
    );
}
