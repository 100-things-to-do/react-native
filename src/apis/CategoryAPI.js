import axios from 'axios';

let EXPRESS_URL = process.env['API_KEY'];
export default {
    createCategory: (topicId, bodyData, callback) => {
        axios({
            method: 'post',
            url: EXPRESS_URL + `/topics/${topicId}/categories`,
            data: bodyData,
        }).then(response => {
            const topicData = response.data
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    },
    getCategories: (topicId, callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics/${topicId}/categories`,
        }).then(response => {
            const topicData = response.data.categories
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
            const topicData = response.data.category
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    }
}




