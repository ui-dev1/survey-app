import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    TableHead,
    TableSortLabel
} from "@mui/material";

const BasicTable = (props) => {
    const {
        headCells,
        data,
        order,
        orderBy,
        onRequestSort,
        formatTable
    } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    // This method is created for cross-browser compatibility, if you don't
    // need to support IE11, you can use Array.prototype.sort() directly
    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) {
                return order;
            }
            return a[1] - b[1];
        });
        const sortedData = stabilizedThis.map((el) => el[0]);
        return formatTable(sortedData);
    }
    return (
        <TableContainer component={Paper}>
            <Table fullWidth aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headCells.map((headCell) => (
                            <TableCell
                                key={headCell.id}
                                align='left'
                                padding='0 15px'
                                style={headCell.numeric ? {} : { width: headCell.width }}
                                sortDirection={orderBy === headCell.id ? order : false}
                            >
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={createSortHandler(headCell.id)}
                                >
                                    {headCell.label}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stableSort(data, getComparator(order, orderBy))
                        ?.map((row, rowIndex) => {
                            const keys = Object.keys(row);
                            return (
                                <TableRow
                                    key={`row-${rowIndex}`}
                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                >
                                    {keys?.map((key, keyIndex) => (
                                        <TableCell key={`row-${rowIndex}-${keyIndex}`}>
                                            {row[key]}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;
