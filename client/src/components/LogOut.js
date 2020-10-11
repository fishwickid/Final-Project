import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useTokenContext } from "../lib/GlobalState";

export function LogOut() {
  const [_, dispatch] = useTokenContext();
  useEffect(() => {
    dispatch({
      type: "removeToken",
    });
  }, []);

  return <Redirect to="/login" />;
}

export default LogOut;
