import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import appReducer from "./Slices/app";

//Slices

const rootPersistConfig = {
  key: "root",
  storage,
  //   whitelist: ["auth"],
  //   blacklist: ["counter"],
  keyPrefix: "redux-",
};

const rootReducer = combineReducers({
  app: appReducer,
});

export { rootPersistConfig, rootReducer };
