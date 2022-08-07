import axios from 'axios';

let EXPRESS_URL = process.env['API_KEY'];
export default {
    createTopic: (bodyData, callback) => {
        axios({
            method: 'post',
            url: EXPRESS_URL + `/topics`,
            data: bodyData,
        }).then(response => {
            const topicData = response.data
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    },

    getTopics: (callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics`,
        }).then(response => {
            const topicData = response.data.topics
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    },

    getTopic: (topicId, callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics/${topicId}`,
        }).then(response => {
            console.log(response)
            const topicData = response.data.topic
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    }
}





