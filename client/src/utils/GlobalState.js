import React, { createContext, useReducer, useContext } from "react";
import { ADD_POST } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {

  // STORE SEARCH RESULTS
  // case SHOW_POSTS:
  //   return {
  //     ...state,
  //     posts: action.posts
  //   };

    // case ADD_POST:
    // return [
    //   ...state,
    //   posts: [...action.post]
    // ];

  // case SHOW_SAVED:
  //   return {
  //     ...state,
  //     books: [...action.books]
  //   };

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
    posts: [
      {
        title: "Title",
        body: "Lorem ipsum dolor set amet lorem ipsum dolor set amet lorem ipsum set amet."
      }
  ]
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };