import axios from 'axios';

let EXPRESS_URL = 'http://localhost:3000'
export default {
    tokenExample: (auctionId, token, callback) => {
        axios.get(EXPRESS_URL + `/auctions/${auctionId}`, { headers: { "Authorization": `Bearer ${token}` } })
            .then(response => {
                const auction = response.data
                callback(true, auction)
            })
            .catch(error => {
                callback(false, error.message)
            })
    },

    getTopics: (callback) => {
        axios({
            method: 'get',
            url: EXPRESS_URL + `/topics`,
        }).then(response => {
            const topicData = response.data
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
            const topicData = response.data
            callback(true, topicData)
        })
            .catch(error => {
                callback(false, error && error.response && error.response.data ? error.response.data : error)
            })
    }
}





