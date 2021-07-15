import React, {Fragment, MouseEvent, useState, useEffect} from 'react';
import { SaleCard, ModalSearchBar } from '../../index';
import "./CardList.scss";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid";
import ExtendedCard from "../../card/ExtendedCard2/ExtendedCard";
import AdminBtn from '../../admin/AdminBtn/AdminBtn';
import Sort from "../../common/Sort/Sort";
import ChipsArray from "../../common/ChipsArray/ChipsArray";
import { useAppSelector, useAppDispatch } from "../../../store/Redux-toolkit-hook";
import purple from '@material-ui/core/colors/purple';
import {MAIN_ROUTE, HISTORY_ROUTE} from "../../../utils/consts"
import {useLocation} from "react-router-dom";
import Skeleton from '@material-ui/lab/Skeleton';
import {Spinner} from "../../index";
import {addDiscounds, setSearchObjectPage} from "../../../store/filtersStore";
import {getDiscounts} from "../../../http/discountApi";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
                display: 'flex',
                justifyContent: 'center',
            },
        },
    }),
);

const CardList: React.FC = (props) => {
    const dispatch = useAppDispatch();
    const {searchObject} = useAppSelector(state=>state.filters);
    const {pathname} = useLocation();
    const NUMBER_CARD = 15

    const [data, setData] = useState([
        { id: 1, nameDiscount: 'Macdonald', sizeDiscount: "34%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 2, nameDiscount: 'Adidas Original', sizeDiscount: "25%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 3, nameDiscount: 'Nike', sizeDiscount: "50%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 4, nameDiscount: 'Puma', sizeDiscount: "70%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 5, nameDiscount: 'Mega Sport', sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 6, nameDiscount: 'Sport Master', sizeDiscount: "60%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 7, nameDiscount: 'StarWood', sizeDiscount: "50%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 8, nameDiscount: 'Pizza', sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 9, nameDiscount: 'Smart', sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 10, nameDiscount: 'Eldorado', sizeDiscount: "20%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 11, nameDiscount: 'Samsung', sizeDiscount: "45%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 12, nameDiscount: 'Pizza', sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 13, nameDiscount: 'Smart', sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 14, nameDiscount: 'Eldorado', sizeDiscount: "20%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 15, nameDiscount: 'Samsung', sizeDiscount: "45%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 16, nameDiscount: 'Pizza', sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 17, nameDiscount: 'Smart', sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 18, nameDiscount: 'Eldorado', sizeDiscount: "20%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 19, nameDiscount: 'Samsung', sizeDiscount: "45%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },
        { id: 20, nameDiscount: 'Pizza', sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37' },

    ]);
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const loadingDiscount = async()=>{
            const {data} = await getDiscounts(searchObject);
            dispatch(addDiscounds(data.content));
        };

    useEffect(()=>{
        loadingDiscount()
        setPage(searchObject.page+1)
    },[searchObject?.page])



    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        dispatch(setSearchObjectPage(value-1));
    };
    const [card, setCard] = React.useState(0);

    const paginateCard = () => {
        let from = (page - 1) * NUMBER_CARD
        let to = from + NUMBER_CARD
        return data.slice(from, to)
    }
    const handleClick = (e: any, index: number) => {
        const cName: any = e.target.className;
        const tName: any = e.target.tagName;

        if ((cName === '')  || (tName === 'circle') || (tName === 'path')) {
            return null
        } else {
            const myElement: HTMLElement | null =
                document.querySelector(".ExtendedCard");
            const mainContent: HTMLElement | null =
                document.querySelector(".main-content");


            if (myElement === null) {
                return null;
            } else {
                myElement.style.zIndex = "1";
                myElement.style.opacity= "1";
                myElement.style.position= "relative";
                if (mainContent === null) {
                    return null;
                } else {
                    mainContent.style.opacity = "0";
                    mainContent.style.zIndex = "-10";
                    mainContent.style.position = "absolute";
                }
                document.getElementById("excard")!.scrollIntoView({ behavior: 'smooth' });
                if (page === 1) {
                    setCard(index)
                } else {
                    setCard(index + (page - 1) * NUMBER_CARD)
                }
            }
        }
    };
    const isAdmin = useAppSelector(state => state.user.admine);

    return (
            <div className="card-list">
                <ExtendedCard discount={data[card]} />
                <div className="main-content">
                    <div className={"sort-admin"}>
                        {pathname===MAIN_ROUTE?<Sort /> : <ModalSearchBar/>}
                        {isAdmin &&
                        <AdminBtn />}
                    </div>
                    <div className={"chips"}>
                        {!(pathname === HISTORY_ROUTE)&& <ChipsArray />}
                    </div>
                    <Grid container spacing={3} justify="center" >
                        {
                            paginateCard().map((item, index) => {
                                return (<Grid key={index} item >
                                    <SaleCard discount={item}
                                              cards={data}
                                              updateData={(item: any) => setData(item)}
                                              handleClick={(event: any) => handleClick(event, index)} />
                                </Grid>)
                            })
                        }
                    </Grid>
                    <Grid xs={12} justify="center">
                         <Grid xs={12} justify="center">
                        <div className={classes.root}>
                            <Pagination count={Math.ceil(data.length / NUMBER_CARD)} variant="outlined"
                                        page={page} onChange={handleChange} />
                        </div>
                    </Grid>
                    </Grid>
                </div>
            </div>
    );
};

export default CardList;
