import { useEffect } from "react";
import { useHistory } from "react-router-dom";
/*
  Checks whether the user is looking at the demo or not
*/
function useRemoveToken(date) {
    const history = useHistory();
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("lastLogin")) + 3600000 < date) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("lastLogin");
      window.localStorage.removeItem("userid");
      window.localStorage.removeItem("username");
      history.push('/');
    }
  }, [date, history]);
}
export default useRemoveToken;
/*
  Usage
  `const isDemo = useIsDemo()`
  returns `true` if demo account is being used
  returns `false` if any other account is being used
*/
