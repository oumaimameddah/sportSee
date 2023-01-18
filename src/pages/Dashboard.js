import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUser, getActivity, getPerformance, getAverageSessions } from "../services/api";
import User from "../models/User";
import '../styles/dashboard.scss';
import Activity from "../components/dashboard/Activity";
import AverageSession from "../components/dashboard/AverageSession";
import Performance from "../components/dashboard/Performance";
import Score from "../components/dashboard/Score";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import cheeseburger from "../assets/cheeseburger.svg";
import apple from "../assets/apple.svg";
import Kpi from "../components/dashboard/Kpi";

function Dashboard() {
    let { id } = useParams();
    const token = localStorage.getItem("accessToken");
    const [getUserById, setgetUserById] = useState({});
    const [getUserActivityById, setgetUserActivityById] = useState({});
    const [getUserAverageSessionById, setgetUserAverageSessionById] = useState({});
    const [getUserPerformanceById, setgetUserPerformanceById] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetch = async (id) => {
            const USER = await getUser(id);
            const ACTIVITY = await getActivity(id);
            const AVERAGE_SESSIONS = await getAverageSessions(id);
            const PERFORMANCE = await getPerformance(id);

            setgetUserById(USER);
            setgetUserActivityById(ACTIVITY);
            setgetUserAverageSessionById(AVERAGE_SESSIONS);
            setgetUserPerformanceById(PERFORMANCE);
            setIsLoading(false);
        };
        fetch(id);
    }, [id]);

    const USER_CLASS = !isLoading ?
        new User(getUserById?.userInfos.firstName,
            getUserById?.userInfos.lastName,
            getUserById?.userInfos.age,
            getUserById?.score ? getUserById.score : getUserById.todayScore,
            getUserById?.keyData.calorieCount,
            getUserById?.keyData.proteinCount,
            getUserById?.keyData.carbohydrateCount,
            getUserById?.keyData.lipidCount)
        : "";

    return (
        <div className="dashboard-section dashboard">
            { isLoading && token === id ?
                (
                    <p>Loading data... Tik Tak Tok...</p>
                ) : (
                    <section>
                        <div className="dashboardHeader">
                            <h1 className="dashboardHeader__title">Bonjour<span
                                className="dashboardHeader__name">{" " + USER_CLASS.firstName}</span></h1>
                            <p className="dashboardHeader__text">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                        </div>
                        <div className="dashboard__charts">
                            <div className="dashboard__charts-left">
                                {/*<Activity userActivityData={getUserActivityById} />*/}
                                {/*<AverageSession averageSessionsData={getUserAverageSessionById} />*/}
                                {/*<Performance performanceData={getUserPerformanceById} />*/}
                                {/*<Score scoreData={USER_CLASS.arrayOfPercentScore} />*/}
                            </div>
                            <div className="dashboard__charts-right">
                                <Kpi
                                    image={energy}
                                    value={USER_CLASS.calorie}
                                    title="Calories"
                                    unity="kCal"
                                    color="red"
                                />
                                <Kpi
                                    image={chicken}
                                    value={USER_CLASS.protein}
                                    title="Proteines"
                                    unity="g"
                                    color="blue"
                                />
                                <Kpi
                                    image={apple}
                                    value={USER_CLASS.carbohydrate}
                                    title="Glucides"
                                    unity="g"
                                    color="yellow"
                                />
                                <Kpi
                                    image={cheeseburger}
                                    value={USER_CLASS.lipid}
                                    title="Lipides"
                                    unity="g"
                                    color="pink"
                                />
                            </div>
                        </div>
                    </section>
                )
            }
        </div>
    )
}

export default Dashboard;