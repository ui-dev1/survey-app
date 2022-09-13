import { call, put, takeEvery } from "redux-saga/effects";
import { guideActions, spinnerActions } from "../action";
import { discussionGuideData } from "../service/discussionGuideService";

const { discussionGuideActionTypes } = guideActions;

function* handleGetDiscussionGuideData() {
    yield put({ type: spinnerActions.SHOW_SPINNER })
    const response = yield call(discussionGuideData);
    if (response.data) {
        yield put({ type: spinnerActions.HIDE_SPINNER })
        return yield put({ type: discussionGuideActionTypes.SET_DISCUSSION_GUIDE_DATA, payload: response.data });
    }
    yield put({ type: spinnerActions.HIDE_SPINNER })
    return yield put({ type: discussionGuideActionTypes.SET_DISCUSSION_GUIDE_DATA_FAILURE, payload: response });
}

export function* fetchDiscussionGuideData() {
    yield takeEvery(discussionGuideActionTypes.GET_DISCUSSION_GUIDE_DATA, handleGetDiscussionGuideData);
}