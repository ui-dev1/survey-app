import axios from '../../utils/axios';

export const dashboardStats = async () => await axios.get('api/v1/dashboard');

export const systemDataQuestionTypes = async () => await axios.get('api/v1/dashboard/systemDataQuestions/types');

export const systemDataQuestions = async () => await axios.get('api/v1/dashboard/systemDataQuestions/questions');