import { dashboardActions } from "../action";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const initialState = {
    dashboardCards: {},
    systemDataQuestions: [],
    systemDataQuestionTypes: {},
    mainTabs: [
        {
            id: 1,
            title: "System Data",
            position: "start",
            image: <GroupOutlinedIcon />,
        },
        {
            id: 2,
            title: "Created by Me",
            position: "start",
            image: <PersonOutlineOutlinedIcon />,
        },
    ],
};

const { dashboardActionTypes } = dashboardActions;
const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case dashboardActionTypes.SET_DASHBOARD_STATS:
            return { ...state, dashboardCards: { ...action.payload } };
        case dashboardActionTypes.SET_DASHBOARD_STATS_FAILURE:
            return { ...state, dashboardCards: {} };
        case dashboardActionTypes.SET_SYSTEM_DATA_QUESTIONS:
            return { ...state, systemDataQuestions: [...action.payload.systemDataQuestions] };
        case dashboardActionTypes.SET_SYSTEM_DATA_QUESTIONS_FAILURE:
            return { ...state, systemDataQuestions: [] };
        case dashboardActionTypes.SET_SYSTEM_DATA_QUESTION_TYPES:
            return { ...state, systemDataQuestionTypes: { ...action.payload } };
        case dashboardActionTypes.SET_SYSTEM_DATA_QUESTION_TYPES_FAILURE:
            return { ...state, systemDataQuestionTypes: {} };
        default:
            return state;
    }
};

export default dashboardReducer;
