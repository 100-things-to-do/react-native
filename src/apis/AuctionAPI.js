import axios from 'axios';

let EXPRESS_URL = process.env['API_KEY'];
export const postAuction = (data, token, callback) => {
    const header = {
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": 'multipart/form-data'
        }
    }
    axios.post(EXPRESS_URL + '/auctions/', data, header)
        .then(response => {
            const auctionData = response.data
            callback(true, auctionData)
        })
        .catch(error => {
            callback(false, error.response.data)
        })
}


export const updateAuction = (data, token, callback) => {
    axios.put(EXPRESS_URL + '/users/signup', data, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            const auctionData = response.data
            callback(true, auctionData)
        })
        .catch(error => {

        })
}

export const getAllAuctions = (token, callback) => {
    axios.get(EXPRESS_URL + '/auctions/', { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            const auctionList = response.data
            callback(true, auctionList)
        })
        .catch(error => {
            callback(false, error.message)
        })
}

export const getAuction = (auctionId, token, callback) => {
    axios.get(EXPRESS_URL + `/auctions/${auctionId}`, { headers: { "Authorization": `Bearer ${token}` } })
        .then(response => {
            const auction = response.data
            callback(true, auction)
        })
        .catch(error => {
            callback(false, error.message)
        })
}