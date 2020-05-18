import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
/*
  Checks whether the user has entered data
*/
function useEnteredData() {
  const state = useSelector((state) => {
    return {
      userInfo: state.userInfo
    };
  });
  const [enteredData, setEnteredData] = useState(false);
  useEffect(() => {
    if (state.userInfo.details.length > 0) {
      setEnteredData(true);
    }
  }, []);
  return enteredData;
}
export default useEnteredData;
/*
  Usage
  `const enteredData = useEnteredData()`
  returns `true` if user has entered data
  returns `false` if user has not entered data
*/
