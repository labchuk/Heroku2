
import "./AdditionalDate.scss";
import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import {ExportInFile} from "../../../common/ExportInFile/ExportInFile";



const columns: GridColDef[] = [
    { field: 'vendorName', headerName: 'Vendor Name', width: 130 },
    { field: 'promoName', headerName: 'Promo Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'date', headerName: 'Date of Use', width: 170 },
    { field: 'userName', headerName: 'User Name', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'link', headerName: 'Link', width: 200 },


];

const rows = [
    { id: 1, vendorName: 'Faberlic', promoName: 'Chanel #5', category: 'Beauty', date: '12.07.2021', location: 'Kyiv', department: 'HR', userName: 'Jon', link: 'www.faberlic.com' },
    { id: 2, vendorName: 'Addidas', promoName: 'Boll of Hell', category: 'Sport', date: '18.06.2021', location: 'Minsk', department: 'FrontEnd', userName: 'Bill', link: 'www.addidas.com' },
    { id: 3, vendorName: 'Roshen', promoName: 'Cockies for 50', category: 'Food', date: '29.07.2021', location: 'Lviv', department: 'BackEnd', userName: 'Smith', link: 'www.roshen.com' },
    { id: 4, vendorName: 'BMW', promoName: 'Pedals', category: 'Cars', date: '11.07.2021', location: 'Rome', department: 'PM', userName: 'Gretta', link: 'www.bmw.com' },
    { id: 5, vendorName: 'Danone', promoName: 'No way eat our yogurts', category: 'Food', date: '02.07.2021', location: 'Konotop', department: 'QI', userName: 'Paul', link: 'www.dannone.com' },
    { id: 6, vendorName: 'Winchester', promoName: 'Fast bullets ', category: 'Guns', date: '01.07.2021', location: 'London', department: 'FrontEnd', userName: 'Petya', link: 'www.guns.com' },
    { id: 7, vendorName: 'Faberlic', promoName: 'Chanel #5', category: 'Beauty', date: '12.07.2021', location: 'Kyiv', department: 'HR', userName: 'Jon', link: 'www.faberlic.com' },
    { id: 8, vendorName: 'Addidas', promoName: 'Boll of Hell', category: 'Sport', date: '18.06.2021', location: 'Minsk', department: 'FrontEnd', userName: 'Bill', link: 'www.addidas.com' },
    { id: 9, vendorName: 'Roshen', promoName: 'Cockies for 50', category: 'Food', date: '29.07.2021', location: 'Lviv', department: 'BackEnd', userName: 'Smith', link: 'www.roshen.com' },
    { id: 10, vendorName: 'BMW', promoName: 'Pedals', category: 'Cars', date: '11.07.2021', location: 'Rome', department: 'PM', userName: 'Gretta', link: 'www.bmw.com' },
    { id: 11, vendorName: 'Danone', promoName: 'No way eat our yogurts', category: 'Food', date: '02.07.2021', location: 'Konotop', department: 'QI', userName: 'Paul', link: 'www.dannone.com' },
    { id: 12, vendorName: 'Winchester', promoName: 'Fast bullets ', category: 'Guns', date: '01.07.2021', location: 'London', department: 'FrontEnd', userName: 'Petya', link: 'www.guns.com' },

];


const AdditionalDate = () => {
    return (
        <div>
            <ExportInFile csvData={rows} fileName={'statistic'}/>
            <div style={{ height: 420, width: '100%', backgroundColor: 'white', boxShadow: '1px 1px 1px 1px #c5d0d6' }}>
                <DataGrid rows={rows} columns={columns} pageSize={10} rowHeight={30} checkboxSelection />
            </div>
        </div>
    );
};


export default AdditionalDate;


