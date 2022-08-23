import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import spinnerReducer from "./spinnerReducer";

const rootReducer = combineReducers({ dashboard: dashboardReducer, spinner: spinnerReducer });

export default rootReducer;