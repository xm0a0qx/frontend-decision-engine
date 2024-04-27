import axios from 'axios';

const DECISION_API_BASE_URL = 'http://localhost:8080/v1/engine';
const METHOD = 'post';

class DecisionService {

    getLoanDecision(params) {
        let config = {
            method: METHOD,
            maxBodyLength: Infinity,
            url: DECISION_API_BASE_URL + "/decide",
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(params)
        };

        return axios.request(config)
    }
}

export default new DecisionService();