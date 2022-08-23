import { call, put, takeEvery } from "redux-saga/effects";
import { dashboardActions, spinnerActions } from "../action";
import { dashboardStats, systemDataQuestions, systemDataQuestionTypes } from "../service/dashboardService";

const { dashboardActionTypes } = dashboardActions;

function* handleGetDashboardStats() {
    yield put({ type: spinnerActions.SHOW_SPINNER })
    const response = yield call(dashboardStats);
    if (response.data) {
        yield put({ type: spinnerActions.HIDE_SPINNER })
        return yield put({ type: dashboardActionTypes.SET_DASHBOARD_STATS, payload: response.data });
    }
    yield put({ type: spinnerActions.HIDE_SPINNER })
    return yield put({ type: dashboardActionTypes.SET_DASHBOARD_STATS_FAILURE, payload: response });

}

export function* fetchDashboardStats() {
    yield takeEvery(dashboardActionTypes.GET_DASHBOARD_STATS, handleGetDashboardStats);
}

function* handleGetSystemDataQuestionTypes() {
    yield put({ type: spinnerActions.SHOW_SPINNER })
    const response = yield call(systemDataQuestionTypes);
    if (response.data) {
        yield put({ type: spinnerActions.HIDE_SPINNER })
        return yield put({ type: dashboardActionTypes.SET_SYSTEM_DATA_QUESTION_TYPES, payload: response.data });
    }
    yield put({ type: spinnerActions.HIDE_SPINNER })
    return yield put({ type: dashboardActionTypes.GET_SYSTEM_DATA_QUESTION_TYPES_FAILURE, payload: response });

}

export function* fetchSystemDataQuestionTypes() {
    yield takeEvery(dashboardActionTypes.GET_SYSTEM_DATA_QUESTION_TYPES, handleGetSystemDataQuestionTypes);
}

function* handleGetSystemDataQuestions() {
    yield put({ type: spinnerActions.SHOW_SPINNER })
    const response = yield call(systemDataQuestions);
    if (response.data) {
        yield put({ type: spinnerActions.HIDE_SPINNER })
        return yield put({ type: dashboardActionTypes.SET_SYSTEM_DATA_QUESTIONS, payload: response.data });
    }
    yield put({ type: spinnerActions.HIDE_SPINNER })
    return yield put({ type: dashboardActionTypes.SET_SYSTEM_DATA_QUESTIONS_FAILURE, payload: response });

}

export function* fetchSystemDataQuestions() {
    yield takeEvery(dashboardActionTypes.GET_SYSTEM_DATA_QUESTIONS, handleGetSystemDataQuestions);
}