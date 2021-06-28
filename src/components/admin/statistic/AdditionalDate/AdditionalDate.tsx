
import "./AdditionalDate.scss";
import * as React from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';



const columns: GridColDef[] = [
    { field: 'brandName', headerName: 'Brand Name', width: 130 },
    { field: 'promoName', headerName: 'Promo Name', width: 130 },
    { field: 'category', headerName: 'Category', width: 130 },
    { field: 'date', headerName: 'Date of Use', width: 200 },
    { field: 'userName', headerName: 'User Name', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'location', headerName: 'Location', width: 130 },
    { field: 'link', headerName: 'Link', width: 130 },
    /*{
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 130,
    },*/

];

const rows = [
    { id: 1, location: 'Kyiv', department: 'HR', userName: 'Jon', age: 35 },
   /* { id: 2, lastName: 'Lannister', userName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', userName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', userName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', userName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', userName: 'Voland', age: 150 },
    { id: 7, lastName: 'Clifford', userName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', userName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', userName: 'Harvey', age: 65 },*/
];


const AdditionalDate = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
    );
}


export default AdditionalDate;


