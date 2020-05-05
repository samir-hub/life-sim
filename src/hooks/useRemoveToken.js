import { useEffect } from "react";
import { useHistory } from "react-router-dom";
/*
  Checks whether the user's last login was more than three hours ago. If it was, then it will log them out. 
*/
function useRemoveToken(date) {
    const history = useHistory();
  useEffect(() => {
    if (JSON.parse(window.localStorage.getItem("lastLogin")) && JSON.parse(window.localStorage.getItem("lastLogin")) + 3600000 < date) {
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("lastLogin");
      window.localStorage.removeItem("userid");
      window.localStorage.removeItem("username");
      history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
export default useRemoveToken;
/*
  Usage
  const date = Date.now();
  useRemoveToken(date);
*/
