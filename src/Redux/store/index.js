import { createStore, applyMiddleware } from "redux";
import rootReducer from "../rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();
 

/// compose midlewares with dev tools
const middlewares = [loggerMiddleware, thunkMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;
