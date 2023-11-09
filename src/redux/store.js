/* eslint-disable no-undef */
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

const exportAllTogether = {
  store,
  persistor,
};

export default exportAllTogether;
