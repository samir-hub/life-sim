import { useState, useEffect } from "react";
/*
  Checks whether the user is looking at the demo or not
*/
function useEnteredData() {
  const [isDemo, setIsDemo] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("username") === "demo") {
      setIsDemo(true);
    }
  }, []);
  return isDemo;
}
export default useEnteredData;
/*
  Usage
  `const isDemo = useIsDemo()`
  returns `true` if demo account is being used
  returns `false` if any other account is being used
*/
