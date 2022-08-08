import axios from 'axios';

let EXPRESS_URL = 'http://localhost:3000'
export default{
    updateActivity: (topicId, categoryId, activityId, data, callback) => {
        const header = {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }
        axios.put(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities/${activityId}`, data, header)
            .then(response => {
                const activityResponse = response.data
                callback(true, activityResponse)
            })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    },

    getActivities: (topicId, categoryId, callback) => {
        axios.get(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities`)
            .then(response => {
                const activityData = response.data
                callback(true, activityData)
            })
            .catch(error => {
                console.log(error)
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    },
    revealActivity: async (topicId, categoryId, activityId) => {
        console.log(topicId, categoryId, activityId);
        const data = {'isRevealed': true}
        return axios.put(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities/${activityId}`, data);
    }
}
