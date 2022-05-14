import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const useHeader = () => {
  const location = useLocation();
  const [heading, setHeading] = useState();

  useEffect(() => {
    let headingName;
    const path = location.pathname.slice(1);
    const textAfterSlash = path.split("/")[1];

    // Not Hyphen and Not slash
    if (path.indexOf("-") === -1 && !textAfterSlash) {
      headingName = path.charAt(0).toUpperCase() + path.slice(1);

      // Hyphen but not slash
    } else if (path.indexOf("-") && !textAfterSlash) {
      headingName = path.split("-");

      headingName = headingName
        ?.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(" ");

      // Hyphen and Slash
    } else if (path.indexOf("-") && textAfterSlash) {
      headingName = path.slice(path.indexOf("/") + 1);

      headingName = headingName.split("-");
      headingName = headingName
        ?.map((text) => text.charAt(0).toUpperCase() + text.slice(1))
        .join(" ");
    }

    setHeading(headingName === "" ? "SPARK INDIA" : headingName);
  }, [location.pathname]);

  return {
    heading,
    setHeading,
  };
};

export default useHeader;
