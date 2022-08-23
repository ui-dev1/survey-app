import { all } from 'redux-saga/effects';
import { fetchSystemDataQuestionTypes, fetchDashboardStats, fetchSystemDataQuestions } from './dashboardSaga';

function* rootSaga() {
    yield all([
        fetchSystemDataQuestionTypes(),
        fetchDashboardStats(),
        fetchSystemDataQuestions()
    ]);
}

export default rootSaga;