import React from 'react';
import { FC, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import { FetchData } from '../interfaces/interfaceFetch';
import { ChartContext } from '../chart/ChartContext';


interface Props {
    currencies: FetchData[]
}


interface Column {
    id: 'Name' | 'FullName' | 'Logo' | 'Price';
    label: string;
    minWidth?: number;
    align?: 'right' | 'center';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'Name', label: 'Name', minWidth: 170 },
    { id: 'FullName', label: 'FullName', minWidth: 100 },
    {
        id: 'Logo',
        label: 'Logo',
        minWidth: 140,
        align: 'center'
        // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'Price',
        label: 'Price',
        minWidth: 140,
        align: 'center',
        format: (value: number) => value.toLocaleString('en-US'),
    }
];

interface Data {
    Name: string;
    FullName: string;
    Logo: string;
    Price: number;

}

function createData(Name: string, FullName: string, Logo: string, Price: number): Data {

    return { Name, FullName, Logo, Price };
}



const useStyles = makeStyles({
    root: {
        width: '100%',
        textAlign: 'center'
    },
    container: {
        maxHeight: 440,
    },
    image: {
        width: '5vh'
        // transform: 'translate(50px)'
    }
});




const HandleData: FC<Props> = ({ currencies }) => {

    const currencyContext = useContext(ChartContext); 
    const {GetData} = currencyContext



    const rows: Array<any> = []
    currencies.forEach((elem) => {
        
        rows.push(createData(elem.Name, elem.FullName, elem.Image, elem.Price))
    
    })

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleApiCall = (sth:any) => {
        GetData(sth.Name)


    }

    return (
        <div>
            <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align='center'
                                        style={{ minWidth: 170 }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={() => handleApiCall(row)}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            if (column.id === 'Logo') {
                                                return (
                                                    <TableCell key={column.id} align='center'>
                                                        <img className={classes.image} src={`https://www.cryptocompare.com${value}`} alt="" />
                                                    </TableCell>
                                                )
                                            }
                                            return (
                                                <TableCell
                                                    key={column.id}
                                                    align='center'
                                                >
                                                    {column.format && typeof value === 'number' ? column.format(value) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    )
};

export default HandleData;
