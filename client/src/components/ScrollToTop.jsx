import { faAngleUp, faScroll } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useState, useEffect } from 'react';
import './ScrollToTop.css';

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="top-to-btm">
           {showTopBtn && (  <FontAwesomeIcon onClick={goToTop}  className="icon-position icon-style"  icon={faAngleUp}/>)}
        </div>
    );
};
export default ScrollToTop;
