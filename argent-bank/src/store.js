import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

/**
 * store for use Redux in app
 * @type {Store<EmptyObject & S & {}, AnyAction> & Store<S & {}, A> & {dispatch: ThunkDispatch<any, undefined, AnyAction>}}
 */
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;