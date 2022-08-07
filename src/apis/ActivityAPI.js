import axios from 'axios';

let EXPRESS_URL = process.env['API_KEY'];
export default{
    createActivity: (topicId, categoryId, data, callback) => {
        const header = {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }
        axios.post(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities`, data, header)
            .then(response => {
                const activityResponse = response.data.newActivity
                callback(true, activityResponse)
            })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    },

    updateActivity: (topicId, categoryId, activityId, data, callback) => {
        const header = {
            headers: {
                "Content-Type": 'multipart/form-data'
            }
        }
        axios.put(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities/${activityId}`, data, header)
            .then(response => {
                const activityResponse = response.data.newActivity
                callback(true, activityResponse)
            })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    },

    getActivities: (topicId, categoryId, callback) => {
        axios.get(EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}/activities`)
            .then(response => {
                const activityData = response.data.activities
                callback(true, activityData)
            })
            .catch(error => {
                console.log(error)
                callback(false, error && error.response && error.response.data ? error.response.data : error);
            })
    }
}
