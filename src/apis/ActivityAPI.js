import axios from 'axios';

let EXPRESS_URL = 'http://localhost:3000'
export default{
    getActivities: (deviceId, topicId, categoryId, callback) => {
        axios.get(EXPRESS_URL + `/users/${deviceId}/topics/${topicId}/categories/${categoryId}/activities`)
            .then(response => {
                const activityData = response.data
                callback(true, activityData)
            })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    },
    revealActivity: async (deviceId, topicId, categoryId, activityId) => {
        const data = {'isRevealed': true}
        return axios.patch(EXPRESS_URL + `/users/${deviceId}/topics/${topicId}/categories/${categoryId}/activities/${activityId}`, data);
    },
}
