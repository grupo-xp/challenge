import axios from 'axios'

axios.defaults.headers.common = { 
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
}

export default {
    get: url => axios.get(url).then(d => d.data).catch(e => {
        if (e.response.status === 401) {
            window.location.href = process.env.REACT_APP_LOGIN_URL
        }
    }),
}
