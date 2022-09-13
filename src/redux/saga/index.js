import { all } from 'redux-saga/effects';
import { fetchSystemDataQuestionTypes, fetchDashboardStats, fetchSystemDataQuestions } from './dashboardSaga';
import { fetchDiscussionGuideData } from './discussionGuideSaga';

function* rootSaga() {
    yield all([
        fetchSystemDataQuestionTypes(),
        fetchDashboardStats(),
        fetchSystemDataQuestions(),
        fetchDiscussionGuideData()
    ]);
}

export default rootSaga;