import React,{Fragment} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {useAppDispatch,useAppSelector} from '../../../store/Redux-toolkit-hook'
import {addChipMain,removeChipMain,removeCategoryMain,removeChipStatistic, removeCategoryStatistic} from '../../../store/chipReducer'
import { useLocation } from "react-router-dom";
import { MAIN_ROUTE } from "../../../utils/consts"

interface ChipData {
    key: number;
    label: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            justifyContent: 'left',
            flexWrap: 'wrap',
            listStyle: 'none',
            margin: 0,
            boxShadow: 'none',
            background: "transparent"
        },
        chip: {
            margin: theme.spacing(0.5),
            backgroundColor: "#AAF4C3"
        },
    }),
);

export default function ChipsArray() {

    const classes = useStyles();
    const { pathname } = useLocation();
    const chipDataMain = useAppSelector(state => state.chips.ChipsArray)
    const chipDataStatistic = useAppSelector(state => state.chips.ChipsArrayStatistic)
    const dispatch = useAppDispatch()


    const handleDelete = (name: string) =>{
        if (pathname === MAIN_ROUTE) dispatch(removeChipMain({name}))
        else dispatch(removeChipStatistic({name}))

    };
    const handleDeleteSub = (name: string, id: string) => {
        if (pathname === MAIN_ROUTE) dispatch(removeCategoryMain({name,id}))
        else dispatch(removeCategoryStatistic({name,id}))
    }
    const ListChips = () => {
        if (pathname === MAIN_ROUTE) return chipDataMain
        return chipDataStatistic
    }


    return (
        <Paper component="ul" className={classes.root}>
            {ListChips() ? ListChips().map((item,index) => {
                
                return (
                    <Fragment key={index}>
                        <li key={index}>
                            <Chip
                                label={Object.keys(item)[0]}
                                onDelete={()=>handleDelete(Object.keys(item)[0])}
                                className={classes.chip}
                            />
                        </li>
                        {item[Object.keys(item)[0]]? item[Object.keys(item)[0]].map((itemSub:string,index:any)=> {
                            return(
                                <li key={index}>
                                    <Chip
                                        label={itemSub}
                                        onDelete={()=>handleDeleteSub(itemSub,item.id)}
                                        className={classes.chip}
                                    />
                                </li>
                            )
                        }): null}
                    </Fragment>

                );
            }) : null}
        </Paper>
    );
}