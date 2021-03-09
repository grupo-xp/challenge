import axios from 'axios'

export default {
    get: url => axios.get(
        url,
        {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('access_token')}` 
            }
        }
    ).then(d => d.data)
}