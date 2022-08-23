import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
} from "@mui/material";

const BasicTable = (props) => {
    return (
        <TableContainer component={Paper}>
            <Table fullWidth aria-label="simple table">
                <TableBody>
                    {props?.data?.map((row, rowIndex) => {
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
