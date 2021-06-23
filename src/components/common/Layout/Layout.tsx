import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Layout.scss";
import SearchBar from "../SearchBar/SearchBar";
import FilterListIcon from "@material-ui/icons/FilterList";
import { CardList } from "../../index";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 1200,
        margin: "0 auto",
        flexGrow: 1,
    },

    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
    },
}));

export default function FullWidthGrid(props) {
    const classes = useStyles();



    const filterClick = () => {
        const myElement: HTMLElement | null = document.querySelector(".filterBar");
        if (myElement === null) {
            console.log("no element");
        } else {
            myElement.classList.toggle("open");
        }
    };

    return (
        <div className={classes.root}>


            {/*main content in page*/}
            <div className="mainContent" style={{ position: "relative" }}>
                <div className="filterButton" onClick={filterClick}>
                    <FilterListIcon fontSize="large" />
                </div>

                <div className="filterBar">
                    <SearchBar />
                </div>

                <CardList isAdmin={props.isAdmin}/>
            </div>

        </div>
    );
}
