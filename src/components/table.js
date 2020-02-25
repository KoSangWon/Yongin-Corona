import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(num1, num2, num3, num4) {
  return { num1, num2, num3, num4 };
}

const rows = [
  createData('1명', '88명', '76명', '530명')
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">확진자</TableCell>
            <TableCell align="center">검사진행</TableCell>
            <TableCell align="center">감시대상</TableCell>
            <TableCell align="center">감시해제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.num1}>
              <TableCell component="th" scope="row" align="center">
                {row.num1}
              </TableCell>
              <TableCell align="center">{row.num2}</TableCell>
              <TableCell align="center">{row.num3}</TableCell>
              <TableCell align="center">{row.num4}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}