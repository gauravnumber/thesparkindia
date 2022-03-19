import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useHeader = () => {
  const location = useLocation();
  const [heading, setHeading] = useState();

  useEffect(() => {
    const path = location.pathname.slice(1);
    let headingName = path.split("-");
    headingName = headingName
      .map((text) => text.charAt(0).toUpperCase() + text.slice(1))
      .join(" ");

    setHeading(headingName === "" ? "SPARK INDIA" : headingName);
  }, [location.pathname]);

  return {
    heading,
  };
};

export default useHeader;
