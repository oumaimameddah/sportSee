import * as MOCKED_DATA from "../datamock/datamocked";

/**
 * Async functions to call server
 * */

async function getUser(id) {
    const MOCKED_USER = MOCKED_DATA.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
    return MOCKED_USER;
}

async function getActivity(id) {
    const MOCKED_USER_ACTIVITY = MOCKED_DATA.USER_ACTIVITY.find((user) => user.userId === parseInt(id));
    return MOCKED_USER_ACTIVITY;
}

async function getAverageSessions(id) {
    const MOCKED_USER_AVERAGE_SESSIONS = MOCKED_DATA.USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(id));
    return MOCKED_USER_AVERAGE_SESSIONS;
}

async function getPerformance(id) {
    const MOCKED_USER_PERFORMANCE = MOCKED_DATA.USER_PERFORMANCE.find((user) => user.userId === parseInt(id));
    return MOCKED_USER_PERFORMANCE;
}

export { getUser, getActivity, getPerformance, getAverageSessions };