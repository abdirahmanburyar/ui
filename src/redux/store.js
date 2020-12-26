import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(logger);
}
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

store.subscribe(() => console.log(store.getState()));

export const persistor = persistStore(store);
