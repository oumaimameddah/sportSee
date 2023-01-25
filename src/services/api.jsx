import * as MOCKED_DATA from "../datamock/datamocked";
import axios from "axios";

/**
 * Async functions to call server
 * */

async function getUser(id, switcher) {
    return await getURL(id, switcher, "");
}

async function getActivity(id, switcher) {
    return await getURL(id, switcher, "activity");
}

async function getAverageSessions(id, switcher) {
    return await getURL(id, switcher, "average-sessions");
}

async function getPerformance(id, switcher) {
    return await getURL(id, switcher, "performance");
}

async function getURL(id, switcher, uri) {
    if (switcher === "user") {
        try {
            const response = await axios.get(`http://localhost:3000/${switcher}/${id}/${uri}`);
            return response.data.data;
        } catch (error) {
            console.error(error);
        }
    } else if (switcher === "mock") {
        switch (uri) {
            case "":
                return MOCKED_DATA.USER_MAIN_DATA.find((user) => user.id === parseInt(id));
            case "activity":
                return MOCKED_DATA.USER_ACTIVITY.find((user) => user.userId === parseInt(id));
            case "average-sessions":
                return MOCKED_DATA.USER_AVERAGE_SESSIONS.find((user) => user.userId === parseInt(id));
            case "performance":
                return MOCKED_DATA.USER_PERFORMANCE.find((user) => user.userId === parseInt(id));
            default:
                break;
        }
    }
}


export {getUser, getActivity, getPerformance, getAverageSessions};