import React from 'react';
import { SaleCard, ExtendedCard} from '../../index';
import "./CardList.scss";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);



const CardList = () => {
    const mass = [1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,2,3,4]
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const paginateCard = () => {
        let from = (page - 1) * 6
        let to = from + 6
        return mass.slice(from, to)
    }
    return (
        <div className="card-list">
            <ul>{
                paginateCard().map((item, index) => {
                    return ( <SaleCard key={index} />)
                })
            }
            </ul>
            <div className={classes.root}>
                <Pagination count={Math.ceil(mass.length/6)} variant="outlined" color="primary" page={page} onChange={handleChange} />
            </div>
        </div>
    );
};

export default CardList;