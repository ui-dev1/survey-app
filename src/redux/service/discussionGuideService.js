import axios from '../../utils/axios';

export const discussionGuideData = async () => await axios.get('api/v1/createDiscussionGuides');