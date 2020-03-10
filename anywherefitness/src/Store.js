import { createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer";





const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;

// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import rootReducer from "./reducer";

// const Store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

/*

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

*/

// export default Store;
