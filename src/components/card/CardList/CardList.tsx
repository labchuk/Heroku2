import React, {MouseEvent, useState} from 'react';
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



const CardList:React.FC = () => {
    const mass = [1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,5,6,7,8,9,0,1,1,2,3,4,2,3,4]
    const [data,setData] = useState([
        {nameDiscount: 'Macdonald',sizeDiscount: "34%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Adidas Original',sizeDiscount: "25%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Nike',sizeDiscount: "50%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Puma',sizeDiscount: "70%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Mega Sport',sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Sport Master',sizeDiscount: "60%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'StarWood',sizeDiscount: "50%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Pizza',sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Smart',sizeDiscount: "10%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Eldorado',sizeDiscount: "20%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Samsung',sizeDiscount: "45%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
        {nameDiscount: 'Pizza',sizeDiscount: "40%", date: '06 May 2021', place: 'Yakuba Kolasa St,37'},
    ])
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };
    const [card, setCard] = React.useState(0);

    const paginateCard = () => {
        let from = (page - 1) * 4
        let to = from + 4
        return data.slice(from, to)
    }
    return (
        <div className="card-list">
            <ExtendedCard discount={data[card]}/>
            <ul>{
                paginateCard().map((item, index) => {
                    return ( <div className='cardd' onClick={(e:MouseEvent)=>setCard(index)}><SaleCard key={index} discount={item}/></div>)
                })
            }
            </ul>
            <div className={classes.root}>
                <Pagination count={Math.ceil(data.length/4)} variant="outlined" color="primary" page={page} onChange={handleChange} />
            </div>
        </div>
    );
};

export default CardList;