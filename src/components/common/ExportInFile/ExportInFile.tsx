import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import './ExportInFile.scss'
import {authHost} from "../../../http";
import { t } from 'ttag';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),

        },
    }),
);

interface IExportCSV {
    csvData: any;
    fileName: string;
}


const getInfo = async function(){
    const result = await authHost.get(`/statistic/used_discount/history/file`);
    /*console.log("result is = ", result.data);*/
    return result;
}

const downloadEmployeeData = () => {
    console.log('Hello')
    getInfo().then(result => {
            console.log('response = ', result)
            const link = document.createElement('a')
            link.href = window.URL.srcObject = result
            link.download = 'stat'
            link.click()
            });
};


export const ExportInFile: React.FunctionComponent<IExportCSV> = ({csvData, fileName}) => {
    const classes = useStyles();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToCSV = (csvData: any, fileName: string) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);


      /*  }*/
    };
    return (

        <Button
            variant="contained"
            color="secondary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            /*onClick={(e) => exportToCSV(csvData,fileName)}*/
            onClick={(e) => downloadEmployeeData()}

        >
            {t`Export In File`}
        </Button>

    );
};