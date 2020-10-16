import React, { createContext, useReducer, useContext } from "react";
import { STORE_RESULTS, ADD_POST, SET_CURRENT_POST } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {

    case STORE_RESULTS:
      return {
        ...state,
        posts: action.postsDb
      };
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.post]
      };
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.currentPst
      };
  // case DELETE_BOOK:
  //   return {
  //     ...state,
  //     books: state.books.filter((elem) => {
  //       return elem._id !== action._id; 
  //     })
  //   };
  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {}
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };

/* 
     posts: action.payload
    posts: [action.payload, ...state.posts]
*/