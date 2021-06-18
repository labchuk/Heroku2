import { Auth, HistoryPage, MainPage, StatisticPage } from "./components/pages";
import { HISTORY_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, STATISTIC_ROUTE } from "./utils/consts";

export const publikRoute=[
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
]

export const authRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage,
    },
    {
        path: STATISTIC_ROUTE,
        Component: StatisticPage,
    },
    {
        path: HISTORY_ROUTE,
        Component: HistoryPage,
    }
];