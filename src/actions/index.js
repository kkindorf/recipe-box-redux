import axios from 'axios';

const ALLTIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';

const THIRTYDAY_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export const FETCH_ALLTIME_LEADERS = "FETCH_ALLTIME_LEADERS";

export const FETCH_THIRTYDAY_LEADERS = "FETCH_THIRTYDAY_LEADERS";

export function fetchAllTimeLeaders() {
    const request = axios.get(ALLTIME_URL);
    return {
        type: FETCH_ALLTIME_LEADERS,
        payload: request
    }
}

export function fetchThirtyDayLeaders() {
    const request = axios.get(THIRTYDAY_URL);
    return {
        type: FETCH_THIRTYDAY_LEADERS,
        payload: request
    }
}

