import { createContext, useEffect, useReducer } from "react";

// create a initial state
const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem("user")) || null, // get our user data from localStorage
  loading: false, 
  error:null,
};

// create a context
const AuthContext = createContext(INITIAL_STATE);

// create a reducer function to to our action
const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true, 
        error:null,
      }; 
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,// payload a amra ja pathabo ta thakbe and amader INITIAL_STATE ke update kor dibe.
        loading: false, 
        error:null,
      }; 
    case "LOGIN_START":
      return {
        user: null,
        loading: false, 
        error:null,
      }; 
    case "LOGIN_FAILURE":
      return {
        user:null,
        loading:false,
        error:action.payload,
      };
    case "LOGOUT":
      return {
        user:null,
        loading:false,
        error:null,
      };
    default:
      return state;
  }
};

// lets use our reducer on our context

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  // set our user data in localStorage
  useEffect(()=>{
    localStorage.setItem("user", JSON.stringify(state.user));
  },[state.user]);

  // return our provider
  // ⇨ those things we send our children city:state.city,dates: state.dates, options: state.options,dispatch
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};  

export {AuthContext,AuthContextProvider};
// we can use this context every where when we need to get/set above state.
// ⇨ to use this context we should to wrap our entire application.(from our index/main.js)
