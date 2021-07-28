import { Auth, HistoryPage, MainPage, StatisticPage } from "./components/pages";
import { HISTORY_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, STATISTIC_ROUTE } from "./utils/consts";
import ExtendedCard  from './components/card/ExtendedCard2/ExtendedCard'


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
    },
    {
        path: "/main-page/:id",
        Component: ExtendedCard,
    }

];

export const publikRoute=[
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
];