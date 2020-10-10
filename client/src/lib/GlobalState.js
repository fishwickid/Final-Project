import React, { createContext, useReducer, useContext } from "react";

const TokenContext = createContext({
  token: "",
});
const { Provider } = TokenContext;

function reducer(state, action) {
  switch (action.type) {
  case "setToken":
    return [
      {
        token: action.token
      }
    ];
  case "removeToken":
    return [
        {
          token: ""
        }
      ];
  default:
    return state;
  }
}

function TokenProvider({ value = [], ...props }) {
  const [state, dispatch] = useReducer(reducer, []);
  return <Provider value={[state, dispatch]} {...props} />;
}

function useTokenContext() {
  return useContext(TokenContext);
}

export { TokenProvider, useTokenContext };
