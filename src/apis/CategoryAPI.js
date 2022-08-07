import axios from 'axios';

let EXPRESS_URL = 'http://localhost:3000'
export default {
    getCategories: (topicId, callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics/${topicId}/categories`,
        }).then(response => {
            const topicData = response.data
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    },
    getCategory: (topicId, categoryId, callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics/${topicId}/categories/${categoryId}`,
        }).then(response => {
            const topicData = response.data
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    }
}




