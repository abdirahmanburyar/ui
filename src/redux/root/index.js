import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import adminReducer from "../admin/reducer";
import eventsReducer from "../events/reducer";
const persistConfig = {
  key: "root",
  whitelist: ["admin", "events"],
  storage,
};

const rootReducer = combineReducers({
  admin: adminReducer,
  events: eventsReducer,
});

export default persistReducer(persistConfig, rootReducer);
