import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import {useAppDispatch,useAppSelector} from '../../../store/Redux-toolkit-hook'
import {addChip,removeChip} from '../../../store/chipReducer'

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
            boxShadow: 'none'
        },
        chip: {
            margin: theme.spacing(0.5),
            backgroundColor: "#AAF4C3"
        },
    }),
);

export default function ChipsArray() {
    const classes = useStyles();
    const chipData = useAppSelector(state => state.chips.ChipsArray)
    const dispatch = useAppDispatch()

    const handleDelete = (id: string) =>{
        dispatch(removeChip(id))
    };

    return (
        <Paper component="ul" className={classes.root}>
            {chipData.map((item,index) => {
                return (
                    <li key={index}>
                        <Chip
                            label={item.label}
                            onDelete={()=>handleDelete(item.id)}
                            className={classes.chip}
                        />
                    </li>
                );
            })}
        </Paper>
    );
}