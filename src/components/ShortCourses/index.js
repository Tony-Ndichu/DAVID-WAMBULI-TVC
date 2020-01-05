import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    color: 'white',
    backgroundColor: '#0c2340'
  },
  body: {
    fontSize: 14
  }
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: '#f1f1f1'
    }
  }
}))(TableRow);

function createData(
  courseLevel,
  diplomaMQ,
  certificateMQ,
  artisanMQ,
  diplomaDuration,
  certificateDuration,
  artisanDuration,
  examBody
) {
  return {
    courseLevel,
    diplomaMQ,
    certificateMQ,
    artisanMQ,
    diplomaDuration,
    certificateDuration,
    artisanDuration,
    examBody
  };
}

const rows = [
  createData('Electrical Wireman', '-', '-', '-', '-', '3 Months', '-', 'NITA'),
  createData(
    'Computer System Application Proficiency',
    '-',
    '-',
    '-',
    '-',
    '2 Months',
    '-',
    'DWTVC'
  )
];

const useStyles = makeStyles({
  table: {
    width: '100%'
  },
  tableCell: {},
  wrapper: {}
});

export const ShortCourses = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.tableCell} align="center">
              Course Title
            </StyledTableCell>
            <StyledTableCell
              className={classes.tableCell}
              align="center"
              colSpan={3}
            >
              Minimum Qualification
            </StyledTableCell>
            <StyledTableCell
              className={classes.tableCell}
              align="center"
              colSpan={3}
            >
              Duration
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Exam body
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell className={classes.tableCell} align="center">
              Course Level
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Diploma
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Certificate
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Artisan
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Diploma
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Certificate
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Artisan
            </StyledTableCell>
            <StyledTableCell className={classes.tableCell} align="center">
              Exam Body
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.courseLevel}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.courseLevel}
              </StyledTableCell>
              <StyledTableCell align="center">{row.diplomaMQ}</StyledTableCell>
              <StyledTableCell align="center">
                {row.certificateMQ}
              </StyledTableCell>
              <StyledTableCell align="center">{row.artisanMQ}</StyledTableCell>
              <StyledTableCell align="center">
                {row.diplomaDuration}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.certificateDuration}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.artisanDuration}
              </StyledTableCell>
              <StyledTableCell align="center">{row.examBody}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShortCourses;
