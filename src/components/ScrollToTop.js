import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>
};

export default ScrollToTop;
