import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import spinnerReducer from "./spinnerReducer";
import discussionGuideReducer from "./discussionGuideReducer";

const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    discussionGuide: discussionGuideReducer,
    spinner: spinnerReducer
});

export default rootReducer;