import { guideActions } from "../action";

const initialState = {
    discussionGuideSearchData: []
};

const { discussionGuideActionTypes } = guideActions;
const discussionGuideReducer = (state = initialState, action) => {
    switch (action.type) {
        case discussionGuideActionTypes.SET_DISCUSSION_GUIDE_DATA:
            return { ...state, discussionGuideSearchData: [...action.payload.bussinessObjectives] };
        case discussionGuideActionTypes.SET_DISCUSSION_GUIDE_DATA_FAILURE:
            return { ...state, discussionGuideSearchData: [] };
        default:
            return state;
    }
};

export default discussionGuideReducer;
