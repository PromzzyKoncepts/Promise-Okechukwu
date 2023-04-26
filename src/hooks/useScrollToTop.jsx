/* eslint-disable */

import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';
import "../App.css"

const useScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollToTop);
    return function cleanup() {
      window.removeEventListener('scroll', scrollToTop);
    };
  });

  const scrollToTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', scrollToTop);

  return (
    <>
      <FiChevronUp
        className="scrollToTop"
        onClick={backToTop}
        style={{
          height: 45,
          width: 45,
          borderRadius: 50,
          right: 50,
          transform: 'translate(-50px, -60px)',
          display: showScroll ? 'flex' : 'none',
          float: 'right',
          backgroundColor: '#333',
          cursor: 'pointer',
        }}
      />
    </>
  );
};

export default useScrollToTop;
