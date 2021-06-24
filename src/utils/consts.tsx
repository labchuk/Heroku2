export const LOGIN_ROUTE = "/";
export const MAIN_ROUTE = "/main-page";
export const HISTORY_ROUTE = "/history";
export const STATISTIC_ROUTE = "/statistic";
export let FIRST_ROUTE = "";

export const  setFirstLocation = (location: any) => {
    FIRST_ROUTE = location;
}