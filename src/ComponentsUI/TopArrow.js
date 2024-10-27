import { useEffect, useState } from "react";
import "./TopArrow.css";
const TopArrow = () => {
  const topArrow = document.querySelector(".top-arrow");
  const [isVisisble, setIsVisisble] = useState(false);
  useEffect(() => {
    function hideArrowTop() {
      if (window.scrollY < 10) {
        console.log(window.scrollY);
        setIsVisisble(false);
      } else {
        setIsVisisble(true);
      }
    }
    window.addEventListener("scroll", hideArrowTop);
    return () => {
      window.removeEventListener("scroll", hideArrowTop);
    };
  }, []);

  const top = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };  return (
    <>
      {isVisisble && (
        <div className="top-arrow" onClick={top}>
          <i class="fa-solid fa-angle-up"></i>
        </div>
      )}
    </>
  );
};
export default TopArrow;
