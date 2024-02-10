import { createContext, useReducer } from "react";

// create a initial state
const INITIAL_STATE = {
  city: undefined,
  dates: [],
  options: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

// create a context
const SearchContext = createContext(INITIAL_STATE);

// create a reducer function to to our action
const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload; // payload a amra ja pathabo ta thakbe and amader INITIAL_STATE ke update kor dibe.
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

// lets use our reducer on our context

const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  // return our provider
  // ⇨ those things we send our children city:state.city,dates: state.dates, options: state.options,dispatch
  return (
    <SearchContext.Provider
      value={{
        city: state.city,
        dates: state.dates,
        options: state.options,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};  

export {SearchContext,SearchContextProvider};
// we can use this context every where when we need to get/set above state.
// ⇨ to use this context we should to wrap our entire application.(from our index/main.js)
